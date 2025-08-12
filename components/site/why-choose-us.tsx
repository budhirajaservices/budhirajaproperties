import { ShieldCheck, Zap, ThumbsUp, Users2, Wrench, Search } from "lucide-react"

export default function WhyChooseUs() {
  const items = [
    { icon: Zap, title: "Speed matters", desc: "Optimized builds and best practices for fast load times." },
    { icon: Search, title: "SEO-first", desc: "Technical SEO & metadata implemented from the start." },
    { icon: ShieldCheck, title: "Secure by default", desc: "SSL, headers, and dependable dependencies." },
    { icon: Wrench, title: "Built to grow", desc: "Modular, scalable code you can extend with ease." },
    { icon: Users2, title: "Human support", desc: "Friendly, responsive communication throughout." },
    { icon: ThumbsUp, title: "Conversion‑focused", desc: "Clear UX, strong CTAs, and analytics‑ready." },
  ]

  return (
    <section className="border-t bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold">Why choose us</h2>
          <p className="text-slate-600">A partner invested in your results—not just your website.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="rounded-xl border p-6 hover:shadow-md transition-shadow">
              <i.icon className="h-6 w-6 text-orange-500" />
              <h3 className="mt-3 font-semibold">{i.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
