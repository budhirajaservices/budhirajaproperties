"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle } from "lucide-react"

export default function ContactCTASection() {
  const waPhone = "919518126610"
  const waMessage = "Hi Budhiraja Services, I’d like to get a website quote."
  const waHref = `https://api.whatsapp.com/send?phone=${waPhone}&text=${encodeURIComponent(waMessage)}`
  return (
    <section className="border-t bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold">Have a project in mind?</h2>
          <p className="mt-2 text-slate-600">
            We’ll help you plan, design, and launch a website that grows your business.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button className="bg-orange-600 hover:bg-orange-700" asChild>
              <a href="/contact">Get a Free Quote</a>
            </Button>
            <Button className="bg-[#004274] hover:bg-[#00385f] text-white" asChild>
              <a href={waHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href="tel:+919518126610"
              className="group flex items-center justify-center gap-3 rounded-lg border p-4 text-sm text-slate-700 hover:bg-orange-50"
            >
              <Phone className="h-4 w-4 text-orange-500" />
              <span className="underline decoration-transparent transition-colors group-hover:decoration-inherit group-hover:text-orange-700">
                +919518126610
              </span>
            </a>
            <a
              href="mailto:budhirajaservices@gmail.com"
              className="group flex items-center justify-center gap-3 rounded-lg border p-4 text-sm text-slate-700 hover:bg-orange-50"
            >
              <Mail className="h-4 w-4 text-orange-500" />
              <span className="underline decoration-transparent transition-colors group-hover:decoration-inherit group-hover:text-orange-700">
                budhirajaservices@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
