"use client"

import { useState } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors z-50 relative"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X className="h-5 w-5 text-slate-600" /> : <Menu className="h-5 w-5 text-slate-600" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop - Full screen overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={closeMenu}
            style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
          />

          {/* Menu Panel - Slide from right */}
          <div
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-[101]"
            style={{ position: "fixed", backgroundColor: "#ffffff" }}
          >
            <div className="flex flex-col h-full bg-white">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b bg-white">
                <img src="/logo-budhiraja-services-wide.png" alt="Budhiraja Services" className="h-8 w-auto" />
                <button
                  onClick={closeMenu}
                  className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-slate-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 text-slate-600" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-6 py-6 bg-white overflow-y-auto">
                <ul className="space-y-2">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        onClick={closeMenu}
                        className="flex items-center px-4 py-4 text-slate-800 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors font-medium text-base border-b border-slate-100 last:border-b-0"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-8">
                  <Button
                    asChild
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-base font-semibold"
                    onClick={closeMenu}
                  >
                    <a href="/contact">Get Free Quote</a>
                  </Button>
                </div>
              </nav>

              {/* Contact Info */}
              <div className="px-6 py-6 border-t bg-white">
                <h3 className="text-sm font-semibold text-slate-900 mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+919518126610"
                    className="flex items-center gap-3 text-sm text-slate-600 hover:text-orange-600 transition-colors py-2"
                  >
                    <Phone className="h-4 w-4" />
                    +91 9518126610
                  </a>
                  <a
                    href="mailto:budhirajaservices@gmail.com"
                    className="flex items-center gap-3 text-sm text-slate-600 hover:text-orange-600 transition-colors py-2"
                  >
                    <Mail className="h-4 w-4" />
                    budhirajaservices@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
