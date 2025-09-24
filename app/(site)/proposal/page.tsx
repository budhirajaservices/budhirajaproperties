import type { Metadata } from "next"
import ProposalForm from "@/components/site/proposal-form"

export const metadata: Metadata = {
  title: "Request a Proposal | Budhiraja Services",
  description:
    "Tell us about your project scope, budget, and timeline. We’ll prepare a proposal tailored to your goals.",
}

type ProposalPageProps = {
  searchParams?: {
    service?: string
    plan?: string
  }
}

export default function ProposalPage({ searchParams }: ProposalPageProps) {
  const serviceParam = searchParams?.service?.toLowerCase() ?? ""
  const selectedPlan = searchParams?.plan ? decodeURIComponent(searchParams.plan) : ""
  const isGrowthPlan = serviceParam === "growth"

  const heading = isGrowthPlan ? "Book your growth plan" : "Request a proposal"
  const description = isGrowthPlan
    ? "Share a few details so we can activate your chosen social growth or monetization campaign."
    : "Share a few details and we’ll reply within one business day with next steps and pricing."

  const serviceTypeValue = isGrowthPlan ? "Social growth & monetization" : "Website development"

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="text-center space-y-2">
          <h1 className="text-3xl font-bold">{heading}</h1>
          <p className="text-slate-600">{description}</p>
          {selectedPlan ? (
            <div className="mx-auto mt-4 max-w-xl rounded-lg border border-orange-200 bg-orange-50 px-4 py-3 text-sm text-orange-700">
              <p className="font-medium">Selected plan: {selectedPlan}</p>
              <p className="mt-1">
                Confirm your details and we’ll send a confirmation on WhatsApp and email within one business day.
              </p>
            </div>
          ) : null}
        </header>

        <div className="mt-8 rounded-xl border p-6 shadow-sm">
          <ProposalForm initialServiceType={serviceTypeValue} selectedGrowthPlan={selectedPlan} />
        </div>
      </div>
    </div>
  )
}
