"use client"

import { useEffect, useState, useTransition, type FormEvent } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { submitProposal } from "@/lib/server-actions"
import { MessageCircle } from "lucide-react"

type ProposalState = {
  ok: boolean
  message: string
  deliveredToWhatsApp?: boolean
  whatsappHref?: string
}

const projectTypes = [
  "Static Website",
  "Dynamic Website / CMS",
  "E‑commerce",
  "Custom Web App",
  "WordPress",
  "SEO Optimization",
]

const budgets = ["₹5k–₹10k", "₹10k–₹20k", "₹20k–₹40k", "₹40k+", "Undecided"]
const timelines = ["1–2 weeks", "2–4 weeks", "1–2 months", "Flexible"]

const features = [
  "Blog / Articles",
  "Contact Forms",
  "User Accounts",
  "Payments / Checkout",
  "Analytics / Tracking",
  "Admin Dashboard",
  "Integrations (CRM, Zapier, etc.)",
]

export default function ProposalForm() {
  const [state, setState] = useState<ProposalState>({
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
      const result = await submitProposal(undefined, data)
      setState(result)
    })
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-1 md:grid-cols-2 md:gap-4">
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
      </div>

      <div className="grid gap-1 md:grid-cols-2 md:gap-4">
        <div className="grid gap-1">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone (optional)
          </label>
          <Input id="phone" name="phone" placeholder="+91 95181 26610" />
        </div>
        <div className="grid gap-1">
          <label htmlFor="company" className="text-sm font-medium">
            Company (optional)
          </label>
          <Input id="company" name="company" placeholder="Your company or brand" />
        </div>
      </div>

      <div className="grid gap-1">
        <label htmlFor="website" className="text-sm font-medium">
          Current website (optional)
        </label>
        <Input id="website" name="websiteUrl" type="url" placeholder="https://yourdomain.com" />
      </div>

      <div className="grid gap-1 md:grid-cols-3 md:gap-4">
        <div className="grid gap-1">
          <label htmlFor="projectType" className="text-sm font-medium">
            Project type
          </label>
          <select
            id="projectType"
            name="projectType"
            className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm"
            defaultValue={projectTypes[0]}
          >
            {projectTypes.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-1">
          <label htmlFor="budget" className="text-sm font-medium">
            Budget
          </label>
          <select id="budget" name="budget" className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm">
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-1">
          <label htmlFor="timeline" className="text-sm font-medium">
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm"
          >
            {timelines.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <fieldset className="grid gap-2">
        <legend className="text-sm font-medium">Features</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {features.map((f) => (
            <label key={f} className="flex items-center gap-2 text-sm text-slate-700">
              <input type="checkbox" name="features" value={f} className="h-4 w-4 rounded border-slate-300" />
              <span>{f}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-1">
        <label htmlFor="goals" className="text-sm font-medium">
          Project goals / details
        </label>
        <Textarea
          id="goals"
          name="goals"
          placeholder="What are you trying to achieve? Any specific pages, examples, or must‑have features?"
          rows={5}
          required
        />
      </div>

      {/* Honeypot (do not rename) */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      {/* Source attribution */}
      <input type="hidden" name="source" value={source || "Proposal page"} readOnly />
      <input type="hidden" name="referrer" value={referrer} readOnly />

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" className="bg-orange-600 hover:bg-orange-700" disabled={isPending}>
          {isPending ? "Submitting..." : "Request proposal"}
        </Button>
        {state.message && (
          <span className={`text-sm ${state.ok ? "text-green-600" : "text-red-600"}`}>{state.message}</span>
        )}
      </div>

      {/* WhatsApp follow-up action only (no email button) */}
      {state.ok && !state.deliveredToWhatsApp && state.whatsappHref ? (
        <div className="mt-2">
          <Button
            asChild
            className="bg-[#004274] hover:bg-[#00385f] text-white"
            title="Send the form details to our WhatsApp"
          >
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
