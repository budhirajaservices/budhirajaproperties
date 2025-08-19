import type { Metadata } from "next"
import PaymentPageClient from "./PaymentPageClient"

export const metadata: Metadata = {
  title: "Payment Information | Budhiraja Services",
  description: "Secure payment options and bank details for Budhiraja Services website development projects.",
}

export default function PaymentPage() {
  return <PaymentPageClient />
}
