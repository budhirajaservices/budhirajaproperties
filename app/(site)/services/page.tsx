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
  BarChart3,
  X,
  Send,
  AtSign,
  Music,
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Services | Budhiraja Services",
  description:
    "Static and dynamic websites, e‑commerce, WordPress, custom web apps, SEO optimization, social channel growth, and monetization services.",
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
  {
    title: "YouTube Monetization Sprint",
    icon: Play,
    points: [
      "1000 Subscribers + 4000 Watch Hours support",
      "Organic & Safe Growth Strategy",
      "SEO Optimized Titles & Tags Guidance",
      "Video CTR & Audience Retention Tips",
      "Monetization Approval Support",
    ],
  },
  {
    title: "Instagram Followers Boost",
    icon: TrendingUp,
    points: [
      "Real & Active Followers Growth",
      "Targeted Audience (India/Global)",
      "Engagement Boost (Likes + Comments)",
      "Consistent Growth Guarantee",
      "Profile Optimization Support",
    ],
  },
  {
    title: "Facebook Community Growth",
    icon: ThumbsUp,
    points: [
      "Page Likes & Followers Increase",
      "Targeted Group Members Growth",
      "Post Engagement Boost",
      "Ad Campaign Setup Guidance",
      "Brand Awareness Strategy",
    ],
  },
  {
    title: "WhatsApp Channel Expansion",
    icon: MessageCircle,
    points: [
      "1000+ Genuine Subscribers Growth",
      "Direct Engagement with Audience",
      "Automated Broadcast Setup Guidance",
      "Increased CTR on Links/Posts",
      "Retention & Re-engagement Strategy",
    ],
  },
  {
    title: "Website Traffic Accelerator",
    icon: BarChart3,
    points: [
      "Real Human Traffic (Google + Social Media)",
      "Targeted Geo Traffic (India/Global)",
      "SEO Boost + Backlinking",
      "CTR & Bounce Rate Optimization",
      "Detailed Analytics Report",
    ],
  },
  {
    title: "Twitter Profile Boost",
    icon: X,
    points: [
      "Real Followers Growth",
      "Increased Tweet Engagement (Likes + Retweets)",
      "Trending Hashtag Strategy",
      "Profile Branding & Optimization",
      "Organic Audience Reach",
    ],
  },
  {
    title: "Telegram Profile Boost",
    icon: Send,
    points: [
      "Channel Members / Group Members Growth",
      "Active & Engaged Audience",
      "Content Sharing Strategy",
      "CTR Improvement",
      "Automation & Bot Setup Guidance",
    ],
  },
  {
    title: "Threads Profile Boost",
    icon: AtSign,
    points: [
      "Real Followers Growth",
      "Content Engagement (Likes + Comments)",
      "Hashtag & Trend Optimization",
      "Profile Branding Strategy",
      "Organic Growth",
    ],
  },
  {
    title: "Spotify Profile Boost",
    icon: Music,
    points: [
      "Song Streams Growth (Real Listeners)",
      "Playlist Placement Support",
      "Artist Profile Optimization",
      "Global Reach Expansion",
      "Monthly Analytics Reports",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Our Services</h1>
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
