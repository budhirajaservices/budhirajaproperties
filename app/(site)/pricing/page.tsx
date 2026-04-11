import type { Metadata } from "next"
import Link from "next/link"
import { Check } from "lucide-react"
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


    </div>
  )
}
