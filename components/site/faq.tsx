"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    q: "How long does a website project take?",
    a: "Most projects take 2–6 weeks depending on scope, content readiness, and feedback speed.",
  },
  {
    q: "Do you provide hosting and domain?",
    a: "We can advise and set up best-in-class hosting and SSL. You’ll own your domain and infrastructure.",
  },
  {
    q: "Can you work with my existing brand?",
    a: "Yes. We’ll extend your brand system across the web for a consistent, on-brand experience.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Absolutely. We offer maintenance, updates, and optimization plans tailored to your needs.",
  },
]

export default function FAQ() {
  return (
    <Accordion type="single" collapsible className="mx-auto w-full max-w-3xl">
      {faqs.map((f, idx) => (
        <AccordionItem key={idx} value={`item-${idx}`}>
          <AccordionTrigger>{f.q}</AccordionTrigger>
          <AccordionContent className="text-slate-600">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
