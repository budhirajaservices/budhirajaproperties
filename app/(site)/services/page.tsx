import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Sparkles,
  Smartphone,
  ShoppingCart,
  Wrench,
  Search,
  ShieldCheck,
  Play,
  TrendingUp,
  ThumbsUp,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Services | Budhiraja Services",
  description:
    "Static and dynamic websites, e‑commerce, WordPress, custom web apps, SEO optimization, and social channel growth services.",
}

const services = [
  {
    title: "Static Websites",
    icon: Sparkles,
    points: ["Lightning-fast performance", "Clean, modern design", "Ideal for landing pages & portfolios"],
  },
  {
    title: "Dynamic Websites",
    icon: Smartphone,
    points: ["CMS-driven content", "User accounts & dashboards", "Integrations & automations"],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    points: [
      "Mobile-first responsive design",
      "Progressive Web Apps (PWA)",
      "Touch-friendly interfaces",
      "Cross-device compatibility",
    ],
  },
  {
    title: "E‑commerce",
    icon: ShoppingCart,
    points: ["Conversion-focused product pages", "Secure checkout & payments", "Analytics & marketing tools"],
  },
  {
    title: "WordPress",
    icon: Wrench,
    points: ["Custom themes & blocks", "Speed & security optimization", "Content training & support"],
  },
  {
    title: "Custom Web Apps",
    icon: ShieldCheck,
    points: ["Tailored to your workflows", "Scalable architecture", "APIs & integrations"],
  },
  {
    title: "SEO Optimization",
    icon: Search,
    points: ["On‑page SEO & metadata", "Technical health checks", "Performance & Core Web Vitals"],
  },

  // New Social Growth Services
  {
    title: "YouTube Channel Monetization",
    icon: Play,
    points: [
      "Eligibility audit (1k subs + 4k watch hours)",
      "AdSense linking & policy compliance",
      "SEO for titles, tags & thumbnails",
      "Content strategy & posting schedule",
    ],
  },
  {
    title: "Instagram Followers Growth",
    icon: TrendingUp,
    points: [
      "Organic campaigns & content calendar",
      "Reels optimization & hashtag strategy",
      "Influencer collabs & giveaways",
      "Monthly analytics & insights",
    ],
  },
  {
    title: "Facebook Followers Growth",
    icon: ThumbsUp,
    points: [
      "Page optimization & branding",
      "High‑engagement content & Reels plan",
      "Boosted posts setup (optional)",
      "Community & groups growth",
    ],
  },
  {
    title: "WhatsApp Channel Member Boost",
    icon: MessageCircle,
    points: [
      "Channel setup & branding",
      "Deep link & QR promotion assets",
      "Cross‑promotion funnels & automations",
      "Compliance & anti‑spam best practices",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Website development services</h1>
        <p className="mt-2 text-slate-600">Choose the solutions that match your goals and budget.</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Card key={s.title} className="border-blue-100 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-3">
              <s.icon className="h-6 w-6 text-orange-500" />
              <CardTitle className="text-lg">{s.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="mt-6 text-xs text-slate-500 text-center">
        We focus on ethical, white‑hat growth strategies aligned with platform policies. No fake or bot followers.
      </p>

      <div className="mt-10 text-center">
        <Button asChild className="bg-orange-600 hover:bg-orange-700">
          <Link href="/proposal">Request a proposal</Link>
        </Button>
      </div>
    </div>
  )
}
