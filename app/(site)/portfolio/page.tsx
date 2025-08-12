import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Portfolio | Budhiraja Services",
  description: "A selection of projects delivered for startups, SMBs, and agencies.",
}

const projects = [
  {
    title: "Fintech Dashboard",
    desc: "Responsive SaaS marketing site with gated content and product tours.",
    img: "/fintech-dashboard.png",
  },
  {
    title: "Organic Foods Store",
    desc: "High‑conversion e‑commerce with streamlined checkout and reviews.",
    img: "/organic-food-ecommerce.png",
  },
  {
    title: "Law Firm Website",
    desc: "Professional services website optimized for local SEO.",
    img: "/law-firm-website.png",
  },
  {
    title: "Restaurant & Reservations",
    desc: "Menu, online bookings, and mobile‑first design.",
    img: "/restaurant-reservations-website.png",
  },
  {
    title: "B2B Agency Site",
    desc: "Case studies, blog, and lead capture with CRM integration.",
    img: "/b2b-agency-website-clean.png",
  },
  {
    title: "Education Platform",
    desc: "Course catalog, search, and student sign‑in.",
    img: "/education-platform.png",
  },
]

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold">Portfolio</h1>
      <p className="mt-2 text-slate-600">Projects we’ve crafted with care and conversion in mind.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="overflow-hidden rounded-xl border bg-white shadow-sm">
            <Image
              src={p.img || "/placeholder.svg"}
              alt={p.title}
              width={640}
              height={420}
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
