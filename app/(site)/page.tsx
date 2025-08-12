import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, ShieldCheck, Zap, Search, Smartphone, Headphones, Award, Sparkles } from "lucide-react"
import Testimonials from "@/components/site/testimonials"
import WhyChooseUs from "@/components/site/why-choose-us"
import FAQ from "@/components/site/faq"
import ContactCTASection from "@/components/site/contact-cta-section"

export const metadata: Metadata = {
  title: "Professional Website Development | Budhiraja Services",
  description:
    "Affordable & creative website development solutions. We build fast, SEO-friendly, and secure websites that convert.",
}

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-white" />
        <div className="container mx-auto grid items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
              Affordable & Creative Website Development Solutions
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Grow online with a modern, high‑converting website
            </h1>
            <p className="max-w-prose text-slate-600">
              From landing pages to e‑commerce and custom web apps, we design and develop websites that are fast,
              secure, and SEO‑ready—so you can focus on your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button asChild size="lg" className="bg-[#004274] hover:bg-[#00385f] text-white">
                <Link href="/portfolio">See Our Work</Link>
              </Button>
            </div>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-orange-500" /> Fast loading
              </li>
              <li className="flex items-center gap-2">
                <Search className="h-4 w-4 text-orange-500" /> SEO friendly
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-orange-500" /> SSL security
              </li>
            </ul>
          </div>
          <div className="relative">
            <Image
              src="/modern-web-design-collaboration.png"
              alt="Modern website designs on multiple devices"
              width={720}
              height={480}
              className="rounded-xl border shadow-lg"
              priority
            />
            <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-lg border bg-white p-4 shadow-md">
              <div className="flex items-center gap-3">
                <Rocket className="h-6 w-6 text-orange-500" />
                <div>
                  <p className="text-sm font-medium text-slate-900">Launch in days</p>
                  <p className="text-xs text-slate-600">Not months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold">Services tailored to your goals</h2>
          <p className="text-slate-600">Everything you need to build, launch, and grow your online presence.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Static Websites",
              icon: Sparkles,
              desc: "Lightweight, blazing-fast sites perfect for portfolios and landers.",
            },
            {
              title: "Dynamic Websites",
              icon: Smartphone,
              desc: "Content-driven sites with CMS integration and custom logic.",
            },
            { title: "E‑commerce", icon: Award, desc: "High-converting stores with modern checkout and analytics." },
            {
              title: "WordPress",
              icon: Headphones,
              desc: "Flexible themes, custom blocks, and performance optimization.",
            },
            { title: "Custom Web Apps", icon: Zap, desc: "Tailored apps that scale with your business." },
            {
              title: "SEO Optimization",
              icon: Search,
              desc: "On‑page SEO, technical audits, and best practices baked in.",
            },
          ].map((s) => (
            <Card key={s.title} className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-3">
                <s.icon className="h-6 w-6 text-orange-500" />
                <CardTitle className="text-lg">{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="link" className="text-orange-700">
            <Link href="/services">Explore all services →</Link>
          </Button>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="border-t bg-slate-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold">Featured portfolio</h2>
            <p className="text-slate-600">A few recent projects that our clients love.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "E‑commerce Fashion", img: "/clean-fashion-ecommerce-homepage.png" },
              { title: "SaaS Landing", img: "/saas-landing-page-dashboard.png" },
              { title: "Restaurant Website", img: "/modern-restaurant-hero.png" },
            ].map((p) => (
              <Card key={p.title} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Image
                    src={p.img || "/placeholder.svg"}
                    alt={p.title}
                    width={540}
                    height={360}
                    className="h-56 w-full object-cover"
                  />
                </CardContent>
                <div className="p-4">
                  <p className="font-medium">{p.title}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild size="lg" className="bg-[#004274] hover:bg-[#00385f] text-white">
              <Link href="/portfolio">View full portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <ContactCTASection />
      <Testimonials />

      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-3 mb-8">
          <h2 className="text-3xl font-bold">Frequently asked questions</h2>
        </div>
        <FAQ />
      </section>
    </>
  )
}
