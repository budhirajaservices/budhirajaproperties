"use client"

import { useEffect, useState, useTransition, type FormEvent } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { submitContact } from "@/lib/server-actions"
import { MessageCircle } from "lucide-react"

type ContactState = {
  ok: boolean
  message: string
  deliveredToWhatsApp?: boolean
  whatsappHref?: string
}

export default function ContactForm() {
  const [state, setState] = useState<ContactState>({
    ok: false,
    message: "",
    deliveredToWhatsApp: false,
    whatsappHref: "",
  })
  const [isPending, startTransition] = useTransition()

  const [source, setSource] = useState("")
  const [referrer, setReferrer] = useState("")

  useEffect(() => {
    try {
      setSource(window.location.href || "")
    } catch {}
    try {
      setReferrer(document.referrer || "")
    } catch {}
  }, [])

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    startTransition(async () => {
      const result = await submitContact(undefined, data)
      setState(result)
    })
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-1">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <Input id="name" name="name" placeholder="Your full name" required />
      </div>
      <div className="grid gap-1">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <Input id="email" name="email" type="email" placeholder="you@example.com" required />
      </div>
      <div className="grid gap-1">
        <label htmlFor="phone" className="text-sm font-medium">
          Phone (optional)
        </label>
        <Input id="phone" name="phone" placeholder="+91 95181 26610" />
      </div>
      <div className="grid gap-1">
        <label htmlFor="message" className="text-sm font-medium">
          Tell us about your project
        </label>
        <Textarea id="message" name="message" placeholder="Goals, pages, examples..." rows={5} required />
      </div>

      {/* Honeypot */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      {/* Source attribution for admin */}
      <input type="hidden" name="source" value={source || "Contact page"} readOnly />
      <input type="hidden" name="referrer" value={referrer} readOnly />

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" className="bg-orange-600 hover:bg-orange-700" disabled={isPending}>
          {isPending ? "Sending..." : "Send message"}
        </Button>
        {state.message ? (
          <span className={`text-sm ${state.ok ? "text-green-600" : "text-red-600"}`}>{state.message}</span>
        ) : null}
      </div>

      {/* WhatsApp follow-up action only */}
      {state.ok && !state.deliveredToWhatsApp && state.whatsappHref ? (
        <div className="mt-2">
          <Button asChild className="bg-[#004274] hover:bg-[#00385f] text-white" title="Send to WhatsApp">
            <a href={state.whatsappHref} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              Send to WhatsApp
            </a>
          </Button>
        </div>
      ) : null}
    </form>
  )
}
