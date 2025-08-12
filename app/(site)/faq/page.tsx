import type { Metadata } from "next"
import FAQ from "@/components/site/faq"

export const metadata: Metadata = {
  title: "FAQ | Budhiraja Services",
  description: "Answers to the most common questions about our website development services.",
}

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
        <p className="mt-2 text-slate-600">Get quick answers. Can’t find what you need? Contact us and we’ll help.</p>
      </header>

      <div className="mt-10">
        <FAQ />
      </div>
    </div>
  )
}
