import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Rocket,
  ShieldCheck,
  Zap,
  Search,
  Smartphone,
  Headphones,
  Award,
  Sparkles,
  Code,
  Globe,
  Play,
  TrendingUp,
  ThumbsUp,
  MessageCircle,
} from "lucide-react"
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

      {/* Core Services Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-bold">Our Core Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We specialize in three key areas to help your business succeed online
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Website Development */}
          <Card className="border-blue-100 hover:shadow-xl transition-all duration-300 group">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 group-hover:scale-110 transition-transform">
                <Code className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Website Development</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-slate-600">
                Custom websites built with modern technologies for optimal performance and user experience.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                  <span>Responsive Design</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                  <span>Fast Loading Speed</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                  <span>Cross-Browser Compatible</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                  <span>Content Management System</span>
                </div>
              </div>
              <Button asChild variant="outline" className="mt-4 bg-transparent">
                <Link href="/services#website-development">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Mobile Development */}
          <Card className="border-blue-100 hover:shadow-xl transition-all duration-300 group">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 group-hover:scale-110 transition-transform">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Mobile Development</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-slate-600">
                Mobile-first approach ensuring your website looks perfect on all devices and screen sizes.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span>Mobile-First Design</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span>Touch-Friendly Interface</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span>Progressive Web Apps</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span>App-Like Experience</span>
                </div>
              </div>
              <Button asChild variant="outline" className="mt-4 bg-transparent">
                <Link href="/services#mobile-development">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          {/* SEO Services */}
          <Card className="border-blue-100 hover:shadow-xl transition-all duration-300 group">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 group-hover:scale-110 transition-transform">
                <Search className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">SEO Optimization</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-slate-600">
                Get found on Google with our comprehensive SEO strategies and technical optimization.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Keyword Research</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>On-Page Optimization</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Technical SEO</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Performance Optimization</span>
                </div>
              </div>
              <Button asChild variant="outline" className="mt-4 bg-transparent">
                <Link href="/services#seo-optimization">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services overview */}
      <section className="container mx-auto px-4 py-16 bg-slate-50">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold">Complete Website Solutions</h2>
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
              icon: Globe,
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
              title: "Maintenance & Support",
              icon: ShieldCheck,
              desc: "Ongoing support, updates, and security monitoring.",
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

      {/* Social growth & monetization */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold">Social growth & monetization</h2>
          <p className="text-slate-600">
            Ethical, white‑hat strategies to grow your audience and unlock monetization across key platforms.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border-blue-100 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-3">
              <Play className="h-6 w-6 text-orange-500" />
              <CardTitle className="text-lg">YouTube Monetization</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
                  Eligibility audit (1k subs + 4k watch hours)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
                  Policy compliance & AdSense linking
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
                  SEO for titles, tags & thumbnails
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
                  Content plan & analytics
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-100 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-3">
              <TrendingUp className="h-6 w-6 text-orange-500" />
              <CardTitle className="text-lg">Instagram Followers</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
                  Organic campaigns & hashtag strategy
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
                  Reels optimization & content calendar
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
                  Giveaways & influencer collabs
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
                  Monthly analytics & insights
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-100 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-3">
              <ThumbsUp className="h-6 w-6 text-orange-500" />
              <CardTitle className="text-lg">Facebook Followers</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
                  Page optimization & branding
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
                  High‑engagement content plan
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
                  Boosted posts setup (optional)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
                  Community & groups growth
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-100 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-3">
              <MessageCircle className="h-6 w-6 text-orange-500" />
              <CardTitle className="text-lg">WhatsApp Channel Boost</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
                  Channel setup & branding
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
                  Deep link & QR code assets
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
                  Cross‑promotion funnels & automations
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
                  Compliance & anti‑spam best practices
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Button asChild className="bg-orange-600 hover:bg-orange-700">
            <a href="/proposal">Request a growth plan</a>
          </Button>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="border-t bg-white">
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
