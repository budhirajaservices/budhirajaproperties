import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most websites are completed within 7-14 days, depending on complexity. Simple landing pages can be done in 3-5 days, while e-commerce sites may take 2-3 weeks.",
  },
  {
    question: "Do you provide mobile development?",
    answer:
      "Yes! All our websites include mobile development as standard. We use a mobile-first approach to ensure your site looks perfect on all devices - phones, tablets, and desktops.",
  },
  {
    question: "What's included in your SEO services?",
    answer:
      "Our SEO services include keyword research, on-page optimization, technical SEO, meta tags, site speed optimization, and Google Analytics setup. We ensure your website is search engine friendly from day one.",
  },
  {
    question: "Do you offer website maintenance?",
    answer:
      "Yes, we provide ongoing maintenance and support services including security updates, content updates, backup management, and technical support to keep your website running smoothly.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "We can redesign your existing website to make it more modern, mobile-friendly, and SEO-optimized while preserving your existing content and improving user experience.",
  },
  {
    question: "What platforms do you work with?",
    answer:
      "We work with various platforms including custom HTML/CSS, WordPress, React, Next.js, and popular e-commerce platforms. We choose the best technology based on your specific needs.",
  },
  {
    question: "Do you provide hosting and domain services?",
    answer:
      "Yes, we can help you with domain registration and provide reliable hosting solutions. All our packages include hosting setup and SSL certificates for security.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Our pricing starts from ₹7,000 for basic websites. The final cost depends on your requirements, features needed, and complexity. Contact us for a detailed quote based on your specific needs.",
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
