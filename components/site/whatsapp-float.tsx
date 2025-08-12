"use client"

import { MessageCircle } from "lucide-react"

type WhatsAppFloatProps = {
  phone?: string
  message?: string
}

export default function WhatsAppFloat({
  phone = "919518126610",
  message = "Hi Budhiraja Services, I’d like to get a website quote.",
}: WhatsAppFloatProps) {
  const waNumber = String(phone).replace(/[^\d]/g, "")
  const href = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(message)}`
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-50 group"
    >
      <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#004274] text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#004274] focus:ring-offset-2">
        <MessageCircle className="h-7 w-7" />
        <span className="sr-only">WhatsApp Live Chat</span>
        <span
          aria-hidden="true"
          className="absolute -z-10 inline-flex h-full w-full animate-ping rounded-full bg-[#004274]/30"
        />
      </span>
      <span className="pointer-events-none absolute right-16 bottom-1/2 translate-y-1/2 rounded-md bg-slate-900 px-2 py-1 text-xs text-white opacity-0 shadow group-hover:opacity-100">
        Chat with us
      </span>
    </a>
  )
}
