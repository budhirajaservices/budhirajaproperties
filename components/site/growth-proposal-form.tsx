"use client"

import { useEffect, useState, useTransition, type FormEvent, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { submitGrowthProposal } from "@/lib/server-actions"
import { MessageCircle } from "lucide-react"

type GrowthProposalState = {
  ok: boolean
  message: string
  deliveredToWhatsApp?: boolean
  whatsappHref?: string
}

const channels = [
  "YouTube Monetization Sprint",
  "Instagram Followers Boost",
  "Facebook Community Growth",
  "WhatsApp Channel Expansion",
  "Website Traffic Accelerator",
  "Twitter Profile Boost",
  "Telegram Profile Boost",
  "Threads Profile Boost",
  "Spotify Profile Boost",
]

const ALL_PLAN_PRICES = [
  "$282 + $30 tax",
  "$68 + $30 tax",
  "$68 + $30 tax",
  "$144 + $30 tax",
  "$12 + $30 tax",
  "$125 + $30 tax",
  "$57 + $30 tax",
  "$57 + $30 tax",
  "$57 + $30 tax",
]

const contentStyles = [
  "Educational",
  "Promotional",
  "Behind the scenes",
  "Influencer-led",
  "User generated",
  "Mixed",
  "Tutorials", // Added
  "Reviews", // Added
  "Vlogs", // Added
  "Short-form video", // Added
  "Live streams", // Added
  "Interviews", // Added
]

type GrowthProposalFormProps = {
  selectedPlan?: string
  selectedPlanPrice?: string
}

export default function GrowthProposalForm({ selectedPlan = "", selectedPlanPrice = "" }: GrowthProposalFormProps) {
  const realPrice = useMemo(() => {
    if (!selectedPlanPrice) return ""
    const match = selectedPlanPrice.match(/^\s*([^+]+)/)
    return (match ? match[1] : selectedPlanPrice).trim()
  }, [selectedPlanPrice])

  const budgetOptions = useMemo(() => {
    const base = ["₹10k–₹25k", "₹25k–₹50k", "₹50k–₹1L", "₹1L+", "Not set yet"]
    const list: string[] = [...ALL_PLAN_PRICES]

    // Ensure the selected plan price appears (in case it’s not in the list)
    if (selectedPlanPrice && !list.includes(selectedPlanPrice)) list.unshift(selectedPlanPrice)

    // Optionally include the real price (without "+ $30 tax") for clarity
    if (realPrice && !list.includes(realPrice)) list.unshift(realPrice)

    // Append base ranges if not already present
    for (const b of base) if (!list.includes(b)) list.push(b)

    return list
  }, [selectedPlanPrice, realPrice])

  const [state, setState] = useState<GrowthProposalState>({
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
      const result = await submitGrowthProposal(undefined, data)
      setState(result)
    })
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      {(selectedPlan || selectedPlanPrice) && (
        <div className="rounded-lg border border-dashed border-orange-200 bg-orange-50 px-4 py-3 text-sm text-orange-700">
          {selectedPlan ? <p className="font-medium">Plan: {selectedPlan}</p> : null}
          {selectedPlanPrice ? <p className="mt-1">Price: {selectedPlanPrice}</p> : null}
        </div>
      )}

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
            Phone / WhatsApp
          </label>
          <Input id="phone" name="phone" placeholder="+91 95181 26610" required />
        </div>
        <div className="grid gap-1">
          <label htmlFor="brand" className="text-sm font-medium">
            Brand or company name
          </label>
          <Input id="brand" name="brand" placeholder="Your brand" />
        </div>
      </div>

      {/* Removed Primary platform input */}
      <div className="grid gap-1">
        <label htmlFor="handles" className="text-sm font-medium">
          Channel handles / links
        </label>
        <Input id="handles" name="handles" placeholder="@brandname or https://channel URL" />
      </div>

      <fieldset className="grid gap-2">
        <legend className="text-sm font-medium">Platforms to grow</legend>
        <div className="grid gap-2 sm:grid-cols-3">
          {channels.map((channel) => (
            <label key={channel} className="flex items-center gap-2 text-sm text-slate-700">
              <input type="checkbox" name="channels" value={channel} className="h-4 w-4 rounded border-slate-300" />
              <span>{channel}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-1 md:grid-cols-2 md:gap-4">
        <div className="grid gap-1">
          <label htmlFor="currentMetrics" className="text-sm font-medium">
            Current metrics
          </label>
          <Input
            id="currentMetrics"
            name="currentMetrics"
            placeholder="Followers, subs, watch hours, traffic etc."
            required
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor="growthTargets" className="text-sm font-medium">
            Target milestones
          </label>
          <Input id="growthTargets" name="growthTargets" placeholder="e.g., 10k followers in 3 months" required />
        </div>
      </div>

      <div className="grid gap-1">
        <label htmlFor="contentStyle" className="text-sm font-medium">
          Content style
        </label>
        <select
          id="contentStyle"
          name="contentStyle"
          className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm"
        >
          <option value="">Select content style</option>
          {contentStyles.map((style) => (
            <option key={style} value={style}>
              {style}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-1">
        <label htmlFor="budget" className="text-sm font-medium">
          Budget
        </label>
        <select
          id="budget"
          name="budget"
          className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm"
          required
          defaultValue={selectedPlanPrice || realPrice || ""}
        >
          <option value="">Select budget</option>
          {budgetOptions.map((budget, idx) => {
            let label = budget
            if (selectedPlanPrice && budget === selectedPlanPrice) label = `${budget} (selected plan)`
            else if (realPrice && budget === realPrice) label = `${budget} (plan price)`
            return (
              <option key={`${budget}-${idx}`} value={budget}>
                {label}
              </option>
            )
          })}
        </select>
      </div>

      {/* Removed Preferred timeline input */}

      <div className="grid gap-1">
        <label htmlFor="goals" className="text-sm font-medium">
          Campaign goals & notes
        </label>
        <Textarea
          id="goals"
          name="goals"
          placeholder="Tell us about your audience, offer, past results, and what success looks like."
          rows={5}
          required
        />
      </div>

      {/* Honeypot */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      {/* Tracking */}
      <input type="hidden" name="source" value={source || "Growth proposal page"} readOnly />
      <input type="hidden" name="referrer" value={referrer} readOnly />
      <input type="hidden" name="growthPlan" value={selectedPlan} readOnly />
      <input type="hidden" name="planPrice" value={selectedPlanPrice} readOnly />

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" className="bg-orange-600 hover:bg-orange-700" disabled={isPending}>
          {isPending ? "Submitting..." : "Submit growth request"}
        </Button>
        {state.message && (
          <span className={`text-sm ${state.ok ? "text-green-600" : "text-red-600"}`}>{state.message}</span>
        )}
      </div>

      {state.ok && !state.deliveredToWhatsApp && state.whatsappHref ? (
        <div className="mt-2">
          <Button
            asChild
            className="bg-[#004274] hover:bg-[#00385f] text-white"
            title="Send the growth brief to WhatsApp"
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
