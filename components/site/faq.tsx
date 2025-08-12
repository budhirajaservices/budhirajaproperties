import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most websites are completed within 7-14 days, depending on complexity. Simple landing pages can be done in 3-5 days, while e-commerce sites may take 2-3 weeks.",
  },
  {
    question: "Do you provide hosting and domain services?",
    answer:
      "Yes! All our packages include domain registration and hosting for the first year. We handle all the technical setup so you don't have to worry about it.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "All our websites are built with mobile-first design principles. Your site will look great and function perfectly on phones, tablets, and desktops.",
  },
  {
    question: "Can I update the website content myself?",
    answer:
      "Yes, we can build your site with a user-friendly content management system (CMS) that allows you to easily update text, images, and other content without technical knowledge.",
  },
  {
    question: "What's included in the SEO optimization?",
    answer:
      "Our SEO package includes keyword research, on-page optimization, meta tags, site speed optimization, mobile optimization, and Google Analytics setup.",
  },
  {
    question: "Do you offer ongoing support after the website is live?",
    answer:
      "Yes! We provide ongoing support and maintenance services. Our Business Pro package includes ongoing support, and we offer maintenance plans for other packages.",
  },
]

export default function FAQ() {
  return (
    <div className="mx-auto max-w-3xl">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-slate-600">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
