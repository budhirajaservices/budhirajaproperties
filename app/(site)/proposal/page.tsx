import type { Metadata } from "next"
import ProposalForm from "@/components/site/proposal-form"

export const metadata: Metadata = {
  title: "Request a Proposal | Budhiraja Services",
  description:
    "Tell us about your project scope, budget, and timeline. We’ll prepare a proposal tailored to your goals.",
}

export default function ProposalPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Request a proposal</h1>
          <p className="text-slate-600">
            Share a few details and we’ll reply within one business day with next steps and pricing.
          </p>
        </header>

        <div className="mt-8 rounded-xl border p-6 shadow-sm">
          <ProposalForm />
        </div>
      </div>
    </div>
  )
}
