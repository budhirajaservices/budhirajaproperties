import type { Metadata } from "next"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Pricing | Budhiraja Services",
  description: "Transparent website design & development packages with clear deliverables.",
}

const tiers = [
  {
    name: "Starter",
    price: "₹7,000",
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
    price: "₹15,000",
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
    price: "₹25,000",
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
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Simple, transparent pricing</h1>
        <p className="mt-2 text-slate-600">Choose a package that fits your goals. No surprises.</p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={[
              "rounded-2xl border p-6 shadow-sm",
              t.featured ? "border-blue-300 shadow-lg" : "border-slate-200",
            ].join(" ")}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{t.name}</h3>
              {t.highlight && (
                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
                  {t.highlight}
                </span>
              )}
            </div>
            <p className="mt-4 text-4xl font-bold text-slate-900">{t.price}</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-orange-600" /> {f}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button asChild className="bg-orange-600 hover:bg-orange-700">
                <a href="/contact">{t.cta}</a>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-slate-500">
        All packages include SSL setup, performance best practices, and basic on‑page SEO.
      </p>
    </div>
  )
}
