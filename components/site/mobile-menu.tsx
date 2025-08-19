"use client"

import { useState } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Pricing", href: "/pricing" },
  { name: "Payment", href: "/payment" },
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
        className="flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X className="h-5 w-5 text-slate-600" /> : <Menu className="h-5 w-5 text-slate-600" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] md:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={closeMenu} />

          {/* Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-end p-4 border-b border-slate-200 bg-white">
                <button
                  onClick={closeMenu}
                  className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-slate-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 text-slate-600" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 bg-white">
                <nav className="p-4">
                  <div className="space-y-2">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={closeMenu}
                        className="block w-full px-4 py-3 text-left text-slate-800 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors font-medium text-base border border-slate-100 bg-white"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6">
                    <Button
                      asChild
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-base font-semibold"
                    >
                      <a href="/contact" onClick={closeMenu}>
                        Get Free Quote
                      </a>
                    </Button>
                  </div>
                </nav>
              </div>

              {/* Contact Info */}
              <div className="p-4 border-t border-slate-200 bg-white">
                <h3 className="text-sm font-semibold text-slate-900 mb-3">Quick Contact</h3>
                <div className="space-y-3">
                  <a
                    href="tel:+919518126610"
                    className="flex items-center gap-3 text-sm text-slate-600 hover:text-orange-600 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    +91 9518126610
                  </a>
                  <a
                    href="mailto:budhirajaservices@gmail.com"
                    className="flex items-center gap-3 text-sm text-slate-600 hover:text-orange-600 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    budhirajaservices@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
