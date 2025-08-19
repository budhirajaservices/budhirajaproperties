"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, CreditCard, Building, DollarSign, Hash, User, Landmark } from "lucide-react"
import Link from "next/link"
import PaymentForm from "@/components/site/payment-form"

const paymentDetails = {
  usd: {
    accountHolder: "Budhiraja Services",
    paymentMethod: "ACH",
    routingNumber: "026073150",
    accountNumber: "8333873912",
    bankName: "Community Federal Savings Bank",
    currency: "USD",
  },
  eur: {
    accountHolder: "Budhiraja Services",
    paymentMethod: "SEPA / SEPA Instant",
    iban: "DE02202208000058059678",
    bicSwift: "SXPYDEHH",
    bankName: "Banking Circle",
    currency: "EUR",
  },
}

function CopyButton({ text, label }: { text: string; label: string }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    // You could add a toast notification here
  }

  return (
    <button
      onClick={handleCopy}
      className="ml-2 p-1 rounded hover:bg-slate-100 transition-colors"
      title={`Copy ${label}`}
    >
      <Copy className="h-4 w-4 text-slate-500" />
    </button>
  )
}

export default function PaymentPageClient() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Payment Information</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Secure payment options for your website development project. Choose the method that works best for you.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* USD Bank Transfer Details */}
          <Card className="border-blue-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5 text-orange-500" />
                USD Bank Transfer (ACH)
              </CardTitle>
              <p className="text-sm text-slate-600">Direct bank transfer for US clients</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-slate-500" />
                    <span className="text-sm font-medium">Account Holder</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-mono text-sm">{paymentDetails.usd.accountHolder}</span>
                    <CopyButton text={paymentDetails.usd.accountHolder} label="Account Holder" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Landmark className="h-4 w-4 text-slate-500" />
                    <span className="text-sm font-medium">Bank Name</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-mono text-sm">{paymentDetails.usd.bankName}</span>
                    <CopyButton text={paymentDetails.usd.bankName} label="Bank Name" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Hash className="h-4 w-4 text-slate-500" />
                    <span className="text-sm font-medium">Routing Number</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-mono text-sm">{paymentDetails.usd.routingNumber}</span>
                    <CopyButton text={paymentDetails.usd.routingNumber} label="Routing Number" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-slate-500" />
                    <span className="text-sm font-medium">Account Number</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-mono text-sm">{paymentDetails.usd.accountNumber}</span>
                    <CopyButton text={paymentDetails.usd.accountNumber} label="Account Number" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-slate-500" />
                    <span className="text-sm font-medium">Currency</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-mono text-sm">{paymentDetails.usd.currency}</span>
                    <CopyButton text={paymentDetails.usd.currency} label="Currency" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* EUR Bank Transfer Details */}
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5 text-green-500" />
                EUR Bank Transfer (SEPA)
              </CardTitle>
              <p className="text-sm text-slate-600">SEPA transfers for European clients</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-slate-500" />
                    <span className="text-sm font-medium">Account Holder</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-mono text-sm">{paymentDetails.eur.accountHolder}</span>
                    <CopyButton text={paymentDetails.eur.accountHolder} label="Account Holder" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Landmark className="h-4 w-4 text-slate-500" />
                    <span className="text-sm font-medium">Bank Name</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-mono text-sm">{paymentDetails.eur.bankName}</span>
                    <CopyButton text={paymentDetails.eur.bankName} label="Bank Name" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-slate-500" />
                    <span className="text-sm font-medium">IBAN</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-mono text-sm">{paymentDetails.eur.iban}</span>
                    <CopyButton text={paymentDetails.eur.iban} label="IBAN" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Hash className="h-4 w-4 text-slate-500" />
                    <span className="text-sm font-medium">BIC/SWIFT Code</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-mono text-sm">{paymentDetails.eur.bicSwift}</span>
                    <CopyButton text={paymentDetails.eur.bicSwift} label="BIC/SWIFT Code" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-slate-500" />
                    <span className="text-sm font-medium">Currency</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-mono text-sm">{paymentDetails.eur.currency}</span>
                    <CopyButton text={paymentDetails.eur.currency} label="Currency" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Confirmation Form */}
          <Card className="border-orange-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-orange-500" />
                Payment Confirmation
              </CardTitle>
              <p className="text-sm text-slate-600">Notify us after making payment</p>
            </CardHeader>
            <CardContent>
              <PaymentForm />
            </CardContent>
          </Card>
        </div>

        {/* Payment Instructions */}
        <Card className="mt-8 border-orange-100 bg-orange-50">
          <CardHeader>
            <CardTitle className="text-orange-800">Payment Instructions</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-orange-700 space-y-3">
            <div className="grid gap-3 md:grid-cols-2">
              <div>
                <h4 className="font-medium mb-2">Before Making Payment:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Confirm project details and pricing</li>
                  <li>• Receive invoice with payment reference</li>
                  <li>• Note the project reference number</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">After Payment:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Fill out the payment confirmation form</li>
                  <li>• Include transaction ID and reference</li>
                  <li>• We'll confirm receipt within 24 hours</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <Card className="mt-6 border-slate-200">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Building className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-slate-900 mb-2">Secure & Verified</h3>
                <p className="text-sm text-slate-600">
                  All payment information is verified and secure. We use industry-standard encryption and never store
                  sensitive payment data. For questions about payments, contact us at{" "}
                  <a href="mailto:budhirajaservices@gmail.com" className="text-orange-600 hover:underline">
                    budhirajaservices@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <div className="text-center mt-8">
          <p className="text-slate-600 mb-4">Need help with payment or have questions?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="bg-orange-600 hover:bg-orange-700">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline">
              <a href="tel:+919518126610">Call +91 9518126610</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
