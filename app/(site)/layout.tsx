import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals-site.css"
import { WhatsAppFloat } from "@/components/site/whatsapp-float"
import MobileMenu from "@/components/site/mobile-menu"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Budhiraja Services — Website Development",
    template: "%s | Budhiraja Services",
  },
  description:
    "Affordable & creative website development. Fast, secure, and SEO‑ready websites that help your business grow.",
  keywords: ["website development", "web design", "SEO", "mobile development", "e-commerce"],
  authors: [{ name: "Budhiraja Services" }],
  creator: "Budhiraja Services",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://budhirajaservices.com",
    title: "Budhiraja Services — Website Development",
    description:
      "Affordable & creative website development. Fast, secure, and SEO‑ready websites that help your business grow.",
    siteName: "Budhiraja Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Budhiraja Services — Website Development",
    description:
      "Affordable & creative website development. Fast, secure, and SEO‑ready websites that help your business grow.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container flex h-24 items-center justify-between">
              <div className="flex items-center space-x-4">
                <a href="/" className="flex items-center space-x-2">
                  <img src="/logo-budhiraja-services-wide.png" alt="Budhiraja Services" className="h-16 w-auto" />
                </a>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                <a href="/" className="transition-colors hover:text-orange-600">
                  Home
                </a>
                <a href="/services" className="transition-colors hover:text-orange-600">
                  Services
                </a>
                <a href="/portfolio" className="transition-colors hover:text-orange-600">
                  Portfolio
                </a>
                <a href="/pricing" className="transition-colors hover:text-orange-600">
                  Pricing
                </a>
                <a href="/payment" className="transition-colors hover:text-orange-600">
                  Payment
                </a>
                <a href="/about" className="transition-colors hover:text-orange-600">
                  About
                </a>
                <a href="/contact" className="transition-colors hover:text-orange-600">
                  Contact
                </a>
              </nav>

              <div className="flex items-center space-x-4">
                <a
                  href="/contact"
                  className="hidden sm:inline-block bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Get Quote
                </a>

                {/* Mobile Menu Component */}
                <div className="md:hidden">
                  <MobileMenu />
                </div>
              </div>
            </div>
          </header>

          <main>{children}</main>

          <footer className="border-t bg-slate-50">
            <div className="container py-12">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                <div className="space-y-4">
                  <img src="/logo-budhiraja-services-wide.png" alt="Budhiraja Services" className="h-16 w-auto" />
                  <p className="text-sm text-slate-600">Affordable & Creative Website Development Solutions.</p>
                </div>
                <div>
                  <h3 className="font-semibold">Quick Links</h3>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li>
                      <a href="/services" className="text-slate-600 hover:text-orange-600">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="/portfolio" className="text-slate-600 hover:text-orange-600">
                        Portfolio
                      </a>
                    </li>
                    <li>
                      <a href="/pricing" className="text-slate-600 hover:text-orange-600">
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a href="/payment" className="text-slate-600 hover:text-orange-600">
                        Payment
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Main Menu</h3>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li>
                      <a href="/" className="text-slate-600 hover:text-orange-600">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/about" className="text-slate-600 hover:text-orange-600">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="/contact" className="text-slate-600 hover:text-orange-600">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Contact</h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    <li>
                      <a href="tel:+919518126610" className="hover:text-orange-600">
                        +919518126610
                      </a>
                    </li>
                    <li>
                      <a href="mailto:budhirajaservices@gmail.com" className="hover:text-orange-600">
                        budhirajaservices@gmail.com
                      </a>
                    </li>
                    <li>512/1, Salar Ganj Gate, Nr. Devi Mandir Road, Panipat -132103 (Haryana)</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 border-t pt-8 text-center text-sm text-slate-600">
                © {new Date().getFullYear()} Budhiraja Services. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
        <WhatsAppFloat />
      </body>
    </html>
  )
}
