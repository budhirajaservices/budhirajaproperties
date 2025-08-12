import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function ContactCTASection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center space-y-3 mb-12">
        <h2 className="text-3xl font-bold">Ready to get started?</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Let's discuss your project and create a website that helps your business grow. Get in touch with us today for
          a free consultation.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-3 mb-8">
        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <Phone className="h-8 w-8 text-orange-500 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Call Us</h3>
            <p className="text-sm text-slate-600 mb-3">Speak directly with our team</p>
            <Button asChild variant="outline" size="sm">
              <a href="tel:+919518126610">+91 9518126610</a>
            </Button>
          </CardContent>
        </Card>
        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <Mail className="h-8 w-8 text-orange-500 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="text-sm text-slate-600 mb-3">Send us your requirements</p>
            <Button asChild variant="outline" size="sm">
              <a href="mailto:budhirajaservices@gmail.com">Send Email</a>
            </Button>
          </CardContent>
        </Card>
        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <MessageCircle className="h-8 w-8 text-orange-500 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">WhatsApp</h3>
            <p className="text-sm text-slate-600 mb-3">Quick chat for instant help</p>
            <Button asChild variant="outline" size="sm">
              <a
                href="https://api.whatsapp.com/send?phone=919518126610&text=Hi%20Budhiraja%20Services%2C%20I%E2%80%99d%20like%20to%20get%20a%20website%20quote."
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat Now
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="text-center">
        <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
          <Link href="/contact">Get Your Free Quote</Link>
        </Button>
      </div>
    </section>
  )
}
