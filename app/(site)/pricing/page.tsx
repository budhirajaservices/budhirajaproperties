import type { Metadata } from "next"
import Link from "next/link"
import { Check, Play, TrendingUp, ThumbsUp, MessageCircle, BarChart3, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Pricing | Budhiraja Services",
  description: "Transparent website design & development packages with clear deliverables.",
}

const websiteTiers = [
  {
    name: "Starter",
    price: "$119 + $30 tax",
    highlight: "Best for landing pages",
    features: [
      "Logo",
      "Icon",
      "Website Development",
      "Domain",
      "Hosting",
      "Tools",
      "Theme",
      "Payment Gateway (PhonePe)",
      "Mobile Development",
      "Banner",
      "Up to 5 pages",
      "Responsive design",
      "Basic SEO setup",
      "SSL & analytics",
    ],
    cta: "Start Starter",
  },
  {
    name: "Business",
    price: "$209 + $30 tax",
    highlight: "Most popular",
    features: [
      "Logo",
      "Icon",
      "Website Development",
      "Domain",
      "Hosting",
      "Tools",
      "Theme",
      "Payment Gateway (PhonePe)",
      "Mobile Development",
      "Banner",
      "Up to 10 pages",
      "Blog or CMS",
      "SEO optimization",
      "Performance tuning",
    ],
    cta: "Start Business",
    featured: true,
  },
  {
    name: "Business Pro",
    price: "$319 + $30 tax",
    highlight: "Complex & custom",
    features: [
      "Logo",
      "Icon",
      "Website Development",
      "Domain",
      "Hosting",
      "Tools",
      "Theme",
      "Payment Gateway (PhonePe)",
      "Mobile Development",
      "Banner",
      "Unlimited pages",
      "E‑commerce or web app",
      "Integrations & automations",
      "Ongoing support",
    ],
    cta: "Start Business Pro",
  },
]

const growthPlans = [
  {
    name: "YouTube Monetization Sprint",
    price: "$249 + $30 tax",
    highlight: "Unlock AdSense fast",
    icon: Play,
  },
  {
    name: "Instagram Followers Boost",
    price: "$199 + $30 tax",
    highlight: "Organic growth",
    icon: TrendingUp,
  },
  {
    name: "Facebook Community Growth",
    price: "$179 + $30 tax",
    highlight: "Build loyal fans",
    icon: ThumbsUp,
  },
  {
    name: "WhatsApp Channel Expansion",
    price: "$149 + $30 tax",
    highlight: "Instant reach",
    icon: MessageCircle,
  },
  {
    name: "Website Traffic Accelerator",
    price: "$289 + $30 tax",
    highlight: "More visitors",
    icon: BarChart3,
  },
  {
    name: "Google Business Profile Boost",
    price: "$129 + $30 tax",
    highlight: "Dominate local search",
    icon: MapPin,
  },
]

const growthPlanFeatures: Record<string, string[]> = {
  "YouTube Monetization Sprint": [
    "Eligibility audit (1k subs + 4k watch-hours)",
    "Channel policy & monetization compliance",
    "AdSense linking & payout setup",
    "SEO for titles, tags & thumbnails",
    "30-day content plan & analytics dashboard",
  ],
  "Instagram Followers Boost": [
    "Reels & stories content calendar",
    "Hashtag clusters & SEO captions",
    "Influencer collab/giveaway playbook",
    "Daily engagement & community scripts",
    "Weekly analytics & growth report",
  ],
  "Facebook Community Growth": [
    "Page optimization & branding overhaul",
    "High-engagement post templates",
    "Meta Ads boost setup (optional)",
    "Groups & community activation plan",
    "Comment/DM response guidelines",
  ],
  "WhatsApp Channel Expansion": [
    "Channel setup & custom branding",
    "Deep link, QR & landing page assets",
    "Broadcast calendar & automation ideas",
    "Cross-promotion funnels & scripts",
    "Compliance & anti-spam checklist",
  ],
  "Website Traffic Accelerator": [
    "Technical SEO fixes & Core Web Vitals",
    "Blog & landing page content roadmap",
    "White-hat backlinks & citations",
    "Analytics/GA4 goals & conversion funnels",
    "Monthly performance + growth report",
  ],
  "Google Business Profile Boost": [
    "Profile audit & optimization checklist",
    "Service, product & Q&A enhancements",
    "Review generation templates & flows",
    "Weekly posts & UTM tracking plan",
    "Local citations & map-pack strategy",
  ],
}

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      <section>
        <div className="text-center">
          <h1 className="text-3xl font-bold">Simple, transparent pricing</h1>
          <p className="mt-2 text-slate-600">Choose a website package that fits your goals. No surprises.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {websiteTiers.map((tier) => (
            <Card
              key={tier.name}
              className={[
                "h-full rounded-2xl border p-6 shadow-sm transition-shadow",
                tier.featured ? "border-blue-300 shadow-lg" : "border-slate-200 hover:shadow-md",
              ].join(" ")}
            >
              <CardHeader className="space-y-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold">{tier.name}</CardTitle>
                  {tier.highlight && (
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
                      {tier.highlight}
                    </span>
                  )}
                </div>
                <p className="text-2xl font-bold text-slate-900">{tier.price}</p>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <ul className="space-y-2 text-sm text-slate-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-orange-600 hover:bg-orange-700">
                  <Link href="/contact">{tier.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          All website packages include SSL setup, performance best practices, and basic on‑page SEO.
        </p>
      </section>

      <section>
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold">Social growth & monetization pricing</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Pair your new website with ethical growth campaigns across YouTube, Instagram, Facebook, WhatsApp, Google
            Business Profile, and organic traffic.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {growthPlans.map((plan) => (
            <Card key={plan.name} className="h-full border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    <plan.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <CardTitle className="text-lg">{plan.name}</CardTitle>
                    {plan.highlight ? (
                      <span className="mt-1 inline-block text-xs font-semibold uppercase tracking-wide text-orange-600">
                        {plan.highlight}
                      </span>
                    ) : null}
                  </div>
                </div>
                <p className="text-xl font-semibold text-slate-900">{plan.price}</p>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <ul className="space-y-2 text-sm text-slate-600">
                  {(growthPlanFeatures[plan.name] ?? []).map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  <Link href={`/proposal/growth?plan=${encodeURIComponent(plan.name)}`}>Book this plan</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          All growth plans use white‑hat strategies aligned with platform policies. Custom bundles available on request.
        </p>
      </section>
    </div>
  )
}
