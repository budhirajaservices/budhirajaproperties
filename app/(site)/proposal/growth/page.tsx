import type { Metadata } from "next"
import GrowthProposalForm from "@/components/site/growth-proposal-form"

export const metadata: Metadata = {
  title: "Book a Growth Plan | Budhiraja Services",
  description:
    "Secure your social growth & monetization campaign. Tell us about your brand, current metrics, and goals.",
}

type GrowthProposalPageProps = {
  searchParams?: {
    plan?: string
  }
}

export default function GrowthProposalPage({ searchParams }: GrowthProposalPageProps) {
  const selectedPlan = searchParams?.plan ? decodeURIComponent(searchParams.plan) : ""

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Book your growth plan</h1>
          <p className="text-slate-600">
            Share a few details about your channels, current baseline, and growth goals. We’ll confirm on WhatsApp
            within one business day.
          </p>

          {selectedPlan ? (
            <div className="mx-auto mt-4 max-w-xl rounded-lg border border-orange-200 bg-orange-50 px-4 py-3 text-sm text-orange-700">
              <p className="font-medium">Selected plan: {selectedPlan}</p>
              <p className="mt-1">
                Give us campaign context so we can tailor strategy, creatives, and reporting to your brand.
              </p>
            </div>
          ) : null}
        </header>

        <div className="mt-8 rounded-xl border p-6 shadow-sm">
          <GrowthProposalForm selectedPlan={selectedPlan} />
        </div>
      </div>
    </div>
  )
}
