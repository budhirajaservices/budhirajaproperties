import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Restaurant Owner",
    image: "/images/testimonials/sarah-thompson.png",
    content:
      "Budhiraja Services transformed our online presence completely. Our new website is beautiful, fast, and has increased our online orders by 40%. The team was professional and delivered exactly what we needed.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "E-commerce Entrepreneur",
    image: "/images/testimonials/michael-chen.png",
    content:
      "I needed an e-commerce site quickly and Budhiraja Services delivered beyond expectations. The site is mobile-friendly, loads fast, and the payment integration works flawlessly. Highly recommended!",
    rating: 5,
  },
  {
    name: "Aisha Rahman",
    role: "Consultant",
    image: "/images/testimonials/aisha-rahman.png",
    content:
      "Working with Budhiraja Services was a pleasure. They understood my vision and created a professional website that perfectly represents my consulting business. The SEO optimization has really helped my visibility.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="border-t bg-slate-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-bold">What our clients say</h2>
          <p className="text-slate-600">Don't just take our word for it - hear from some of our satisfied clients.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-medium text-sm">{testimonial.name}</p>
                    <p className="text-xs text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
