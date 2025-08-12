import Image from "next/image"
import { Star } from "lucide-react"

export default function Testimonials() {
  const items = [
    {
      name: "Sarah Thompson",
      role: "Founder, Bloom Beauty",
      quote: "They delivered beyond expectations—our site looks stunning and our sales increased within weeks.",
      image: "/images/testimonials/sarah-thompson.png",
    },
    {
      name: "Michael Chen",
      role: "COO, FinPeak",
      quote: "Fast, reliable, and highly communicative. The team made complex features feel effortless.",
      image: "/images/testimonials/michael-chen.png",
    },
    {
      name: "Aisha Rahman",
      role: "Marketing Lead, Cafe Aurora",
      quote: "Our new website is beautiful and easy to manage. Customers love the online ordering experience.",
      image: "/images/testimonials/aisha-rahman.png",
    },
  ]

  return (
    <section className="bg-slate-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold">What clients say</h2>
          <p className="text-slate-600">Real feedback from happy customers.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="rounded-xl border bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Image
                  src={t.image || "/placeholder.svg"}
                  alt={t.name}
                  width={56}
                  height={56}
                  className="rounded-full object-cover ring-1 ring-slate-200"
                />
                <div>
                  <figcaption className="font-medium">{t.name}</figcaption>
                  <p className="text-xs text-slate-600">{t.role}</p>
                </div>
              </div>
              <blockquote className="mt-4 text-slate-700">“{t.quote}”</blockquote>
              <div className="mt-4 flex items-center gap-1 text-orange-500" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-orange-500" />
                ))}
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
