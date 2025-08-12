"use client"

import { useEffect, useState } from "react"
import { useActionState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { submitContact } from "@/lib/server-actions"
import { useFormStatus } from "react-dom"
import { MessageCircle } from "lucide-react"

type ContactState = {
  ok: boolean
  message: string
  deliveredToWhatsApp?: boolean
  whatsappHref?: string
}

export default function ContactForm() {
  const [state, formAction] = useActionState<ContactState, FormData>(submitContact, {
    ok: false,
    message: "",
    deliveredToWhatsApp: false,
    whatsappHref: "",
  })
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

  return (
    <form action={formAction} className="grid gap-4">
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
      <input type="hidden" name="source" value={source || "Contact page"} />
      <input type="hidden" name="referrer" value={referrer} />

      <div className="flex flex-wrap items-center gap-3">
        <SubmitButton />
        {state.message && (
          <span className={`text-sm ${state.ok ? "text-green-600" : "text-red-600"}`}>{state.message}</span>
        )}
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

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" className="bg-orange-600 hover:bg-orange-700" disabled={pending}>
      {pending ? "Sending..." : "Send message"}
    </Button>
  )
}
