"use client"

import { useEffect, useState } from "react"
import { useActionState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { submitPaymentConfirmation } from "@/lib/server-actions"
import { useFormStatus } from "react-dom"
import { MessageCircle } from "lucide-react"

type PaymentState = {
  ok: boolean
  message: string
  deliveredToWhatsApp?: boolean
  whatsappHref?: string
}

const paymentMethods = ["USD Bank Transfer (ACH)", "EUR Bank Transfer (SEPA)", "Other"]

export default function PaymentForm() {
  const [state, formAction] = useActionState<PaymentState, FormData>(submitPaymentConfirmation, {
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
          <label htmlFor="projectReference" className="text-sm font-medium">
            Project Reference
          </label>
          <Input id="projectReference" name="projectReference" placeholder="Project ID or Invoice Number" required />
        </div>
      </div>

      <div className="grid gap-1 md:grid-cols-2 md:gap-4">
        <div className="grid gap-1">
          <label htmlFor="paymentMethod" className="text-sm font-medium">
            Payment Method Used
          </label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm"
            required
          >
            <option value="">Select payment method</option>
            {paymentMethods.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-1">
          <label htmlFor="amount" className="text-sm font-medium">
            Amount Paid
          </label>
          <Input id="amount" name="amount" placeholder="e.g., $500 or €450" required />
        </div>
      </div>

      <div className="grid gap-1">
        <label htmlFor="transactionId" className="text-sm font-medium">
          Transaction ID / Reference
        </label>
        <Input id="transactionId" name="transactionId" placeholder="Bank transaction ID or reference number" required />
      </div>

      <div className="grid gap-1">
        <label htmlFor="paymentDate" className="text-sm font-medium">
          Payment Date
        </label>
        <Input id="paymentDate" name="paymentDate" type="date" required />
      </div>

      {/* Honeypot (do not rename) */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      {/* Source attribution */}
      <input type="hidden" name="source" value={source || "Payment page"} />
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
          <Button
            asChild
            className="bg-[#004274] hover:bg-[#00385f] text-white"
            title="Send payment details to our WhatsApp"
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

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" className="bg-orange-600 hover:bg-orange-700" disabled={pending}>
      {pending ? "Submitting..." : "Confirm Payment"}
    </Button>
  )
}
