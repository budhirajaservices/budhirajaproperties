"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Budhiraja Services, I'd like to get a website quote.")
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919518126610&text=${message}`
    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#004274] text-white shadow-lg transition-all hover:bg-[#00385f] hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  )
}
