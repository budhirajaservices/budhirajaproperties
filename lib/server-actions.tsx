"use server"

import { sendWhatsAppViaCloudAPI } from "./whatsapp"
import { sendEmailViaResend } from "./email"

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function submitGrowthProposal(_: any, formData: FormData) {
  const name = String(formData.get("name") || "").trim()
  const email = String(formData.get("email") || "").trim()
  const phone = String(formData.get("phone") || "").trim()
  const brand = String(formData.get("brand") || "").trim()
  const handles = String(formData.get("handles") || "").trim()
  const selectedChannels = formData.getAll("channels").map((c) => String(c))
  const currentMetrics = String(formData.get("currentMetrics") || "").trim()
  const growthTargets = String(formData.get("growthTargets") || "").trim()
  const contentStyle = String(formData.get("contentStyle") || "").trim()
  const goals = String(formData.get("goals") || "").trim()
  const growthPlan = String(formData.get("growthPlan") || "").trim()
  const planPrice = String(formData.get("planPrice") || "").trim()
  const honey = String(formData.get("website") || "")
  const source = String(formData.get("source") || "").trim()
  const referrer = String(formData.get("referrer") || "").trim()

  if (honey) return { ok: false, message: "Submission blocked." }
  // Budget removed from form; do not require it.
  if (!name || !isEmail(email) || !phone || !currentMetrics || !growthTargets || !goals) {
    return { ok: false, message: "Please fill all required fields with valid details." }
  }

  const lines = [
    "New social growth & monetization request",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    brand ? `Brand: ${brand}` : "",
    growthPlan ? `Selected plan: ${growthPlan}` : "",
    planPrice ? `Plan price: ${planPrice}` : "",
    handles ? `Handles / links: ${handles}` : "",
    selectedChannels.length ? `Platforms to grow: ${selectedChannels.join(", ")}` : "",
    `Current metrics: ${currentMetrics}`,
    `Target milestones: ${growthTargets}`,
    contentStyle ? `Content style: ${contentStyle}` : "",
    `Goals & notes: ${goals}`,
    source ? `Source: ${source}` : "",
    referrer ? `Referrer: ${referrer}` : "",
  ].filter(Boolean)

  const body = lines.join("\n")

  const adminNumber = (process.env.ADMIN_WHATSAPP || "919518126610").replace(/[^\d]/g, "")
  const adminEmail = process.env.ADMIN_EMAIL || "budhirajaservices@gmail.com"

  let deliveredToWhatsApp = false
  const waAttempt = await sendWhatsAppViaCloudAPI({ to: adminNumber, body })
  if (waAttempt.ok) deliveredToWhatsApp = true

  const whatsappHref = `https://api.whatsapp.com/send?phone=${adminNumber}&text=${encodeURIComponent(body)}`

  const emailAttempt = await sendEmailViaResend({
    to: adminEmail,
    subject: `Growth plan request from ${name}`,
    text: body,
    html: lines.map((l) => `<div>${l.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>`).join(""),
    replyTo: email,
  })
  const deliveredToEmail = emailAttempt.ok

  await new Promise((r) => setTimeout(r, 200))
  console.log("Growth proposal submission:", {
    name,
    email,
    phone,
    brand,
    handles,
    selectedChannels,
    currentMetrics,
    growthTargets,
    contentStyle,
    growthPlan,
    planPrice,
    source,
    referrer,
    deliveredToWhatsApp,
    deliveredToEmail,
  })

  return {
    ok: true,
    message: deliveredToWhatsApp
      ? "Thanks! Your growth brief was sent to our WhatsApp."
      : "Thanks! Click 'Send to WhatsApp' to notify us instantly.",
    deliveredToWhatsApp,
    whatsappHref,
  }
}
