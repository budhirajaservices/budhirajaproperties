import type { Metadata } from "next"
import GrowthProposalForm from "@/components/site/growth-proposal-form"

export const metadata: Metadata = {
  title: "Book a Growth Plan | Budhiraja Services",
  description:
    "Secure your social growth & monetization campaign. Tell us about your brand, current metrics, and goals.",
  alternates: { canonical: "/proposal/growth" },
  openGraph: {
    title: "Book a Growth Plan | Budhiraja Services",
    description:
      "Secure your social growth & monetization campaign. Tell us about your brand, current metrics, and goals.",
    url: "https://budhirajaservices.com/proposal/growth",
    type: "website",
    images: [{ url: "/logo-budhiraja-services-wide.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Growth Plan | Budhiraja Services",
    description:
      "Secure your social growth & monetization campaign. Tell us about your brand, current metrics, and goals.",
    images: ["/logo-budhiraja-services-wide.png"],
  },
}

const growthPlanPricing: Record<string, string> = {
  "YouTube Monetization Sprint": "$282 + $30 tax",
  "Instagram Followers Boost": "$68 + $30 tax",
  "Facebook Community Growth": "$68 + $30 tax",
  "WhatsApp Channel Expansion": "$144 + $30 tax",
  "Website Traffic Accelerator": "$12 + $30 tax",
  "Twitter Profile Boost": "$125 + $30 tax",
  "Telegram Profile Boost": "$57 + $30 tax",
  "Threads Profile Boost": "$57 + $30 tax",
  "Spotify Profile Boost": "$57 + $30 tax",
}

type GrowthProposalPageProps = {
  searchParams?: {
    plan?: string
  }
}

export default function GrowthProposalPage({ searchParams }: GrowthProposalPageProps) {
  const selectedPlan = searchParams?.plan ? decodeURIComponent(searchParams.plan) : ""
  const selectedPlanPrice = selectedPlan ? (growthPlanPricing[selectedPlan] ?? "") : ""

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
              {selectedPlanPrice ? <p className="mt-1 text-orange-600">Price: {selectedPlanPrice}</p> : null}
              <p className="mt-2">
                Give us campaign context so we can tailor strategy, creatives, and reporting to your brand.
              </p>
            </div>
          ) : null}
        </header>

        <div className="mt-8 rounded-xl border p-6 shadow-sm">
          <GrowthProposalForm selectedPlan={selectedPlan} selectedPlanPrice={selectedPlanPrice} />
        </div>
      </div>
    </div>
  )
}
