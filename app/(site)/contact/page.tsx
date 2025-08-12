import type { Metadata } from "next"
import ContactForm from "@/components/site/contact-form"
import { Phone, Mail, MapPin } from "lucide-react"
import LocationMap from "@/components/site/location-map"

export const metadata: Metadata = {
  title: "Contact Us | Budhiraja Services",
  description: "Get a free quote or ask us anything about your website project.",
}

const ADDRESS = "512/1, Salar Ganj Gate, Nr. Devi Mandir Road, Panipat -132103 (Haryana)"
const MAPS_QUERY = encodeURIComponent(ADDRESS)

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold">Let’s build something great</h1>
          <p className="mt-2 text-slate-600">Tell us about your goals and we’ll reply within one business day.</p>

          {/* Contact details with address */}
          <div className="mt-6 space-y-3 text-sm text-slate-700">
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-orange-700" />
              <a
                href="tel:+919518126610"
                className="underline decoration-transparent transition-colors hover:text-orange-700 hover:decoration-inherit"
              >
                +919518126610
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-orange-700" />
              <a
                href="mailto:budhirajaservices@gmail.com"
                className="underline decoration-transparent transition-colors hover:text-orange-700 hover:decoration-inherit"
              >
                budhirajaservices@gmail.com
              </a>
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-orange-700" />
              <span>{ADDRESS}</span>
            </p>
          </div>

          <div className="mt-8 space-y-3">
            <h2 className="text-xl font-semibold">Our location</h2>
            <p className="text-sm text-slate-600">Use the map below to see our location.</p>

            <LocationMap
              lat={29.39005}
              lng={76.96949}
              zoom={15}
              placeLabel={ADDRESS}
              googleQuery={ADDRESS}
              showGoogleLink={false} // hide the "Open in Google Maps" link
              className="mt-3"
            />
          </div>
        </div>

        <div className="rounded-xl border p-6 shadow-sm">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
