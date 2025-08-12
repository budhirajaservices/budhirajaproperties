import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Restaurant Owner",
    image: "/images/testimonials/sarah-thompson.png",
    rating: 5,
    content:
      "Budhiraja Services created a beautiful website for my restaurant. The mobile version works perfectly and we've seen a 40% increase in online orders!",
  },
  {
    name: "Michael Chen",
    role: "E-commerce Business",
    image: "/images/testimonials/michael-chen.png",
    rating: 5,
    content:
      "Their SEO work helped us rank #1 on Google for our main keywords. The website is fast, secure, and converts visitors into customers.",
  },
  {
    name: "Aisha Rahman",
    role: "Consultant",
    image: "/images/testimonials/aisha-rahman.png",
    rating: 5,
    content:
      "Professional service from start to finish. They delivered exactly what they promised - a modern, mobile-friendly website that represents my brand perfectly.",
  },
]

export default function Testimonials() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center space-y-3 mb-12">
        <h2 className="text-3xl font-bold">What our clients say</h2>
        <p className="text-slate-600">Don't just take our word for it - hear from our satisfied clients</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border-blue-100">
            <CardContent className="p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-4">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
