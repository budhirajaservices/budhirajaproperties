import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, Phone, Mail, MapPin } from "lucide-react"
import "./globals-site.css"
import WhatsAppFloat from "@/components/site/whatsapp-float"

// Site-wide metadata for SEO
export const metadata: Metadata = {
  title: "Budhiraja Services — Affordable & Creative Website Development",
  description:
    "Budhiraja Services delivers affordable, modern, and SEO-friendly websites. From landing pages to e‑commerce and custom web apps, we help you grow online.",
  icons: {
    icon: "/icon.png",
  },
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-slate-900 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="container mx-auto flex h-24 items-center justify-between px-4">
        <Link
          href="/"
          aria-label="Budhiraja Services home"
          className="flex items-center gap-2 font-semibold tracking-tight text-orange-700 hover:text-orange-800 transition-colors"
        >
          <Image
            src="/logo-budhiraja-services-wide.png"
            alt="Budhiraja Services"
            width={360}
            height={90}
            sizes="(max-width: 768px) 220px, 360px"
            className="h-16 w-auto"
            priority
          />
          <span className="sr-only">Budhiraja Services</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/portfolio">Portfolio</NavLink>
          <NavLink href="/pricing">Pricing</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Button asChild className="bg-orange-600 hover:bg-orange-700">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <details className="relative">
            <summary className="list-none cursor-pointer rounded-md p-2 hover:bg-orange-50">
              <Menu className="h-6 w-6 text-orange-700" />
            </summary>
            <div className="absolute right-0 mt-2 w-56 rounded-md border bg-white p-2 shadow-lg">
              <div className="grid gap-1">
                <MobileNavLink href="/">Home</MobileNavLink>
                <MobileNavLink href="/about">About</MobileNavLink>
                <MobileNavLink href="/services">Services</MobileNavLink>
                <MobileNavLink href="/portfolio">Portfolio</MobileNavLink>
                <MobileNavLink href="/pricing">Pricing</MobileNavLink>
                <MobileNavLink href="/contact">Contact</MobileNavLink>
              </div>
              <div className="mt-3 flex items-center justify-end">
                <Button asChild size="sm" className="bg-orange-600 hover:bg-orange-700">
                  <Link href="/contact">Quote</Link>
                </Button>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className={cn("text-slate-700 hover:text-orange-700 transition-colors")}>
      {children}
    </Link>
  )
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="rounded-md px-2 py-2 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-700">
      {children}
    </Link>
  )
}

function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Section 1: Brand */}
        <div>
          <div className="flex items-center">
            <Image
              src="/logo-budhiraja-services-wide.png"
              alt="Budhiraja Services"
              width={340}
              height={84}
              sizes="340px"
              className="h-14 w-auto"
            />
          </div>
          <p className="mt-3 text-sm text-slate-600">Affordable &amp; Creative Website Development Solutions.</p>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h3 className="font-semibold text-slate-900">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <a className="hover:text-orange-700" href="/services">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-orange-700" href="/portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="hover:text-orange-700" href="/pricing">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3: Main Menu */}
        <div>
          <h3 className="font-semibold text-slate-900">Main Menu</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <a className="hover:text-orange-700" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-orange-700" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-orange-700" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Section 4: Contact Details */}
        <div>
          <h3 className="font-semibold text-slate-900">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-orange-700" />
              <a
                href="tel:+919518126610"
                className="hover:text-orange-700 underline decoration-transparent hover:decoration-inherit transition-colors"
              >
                +919518126610
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-orange-700" />
              <a
                href="mailto:budhirajaservices@gmail.com"
                className="hover:text-orange-700 underline decoration-transparent hover:decoration-inherit transition-colors"
              >
                budhirajaservices@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-orange-700" />
              <span>{"512/1, Salar Ganj Gate, Nr. Devi Mandir Road, Panipat -132103 (Haryana)"}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="container mx-auto px-4 py-4 text-xs text-slate-600 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Budhiraja Services. All rights reserved.</p>
          <nav aria-label="Footer menu" className="flex flex-wrap gap-x-4 gap-y-2">
            <a href="/faq" className="hover:text-orange-700">
              FAQ
            </a>
            <a href="/terms" className="hover:text-orange-700">
              Terms &amp; Conditions
            </a>
            <a href="/privacy" className="hover:text-orange-700">
              Privacy Policy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
