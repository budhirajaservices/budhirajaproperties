"use server"

import { sendWhatsAppViaCloudAPI } from "./whatsapp"
import { sendEmailViaResend } from "./email"

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function submitContact(_: any, formData: FormData) {
  const name = String(formData.get("name") || "").trim()
  const email = String(formData.get("email") || "").trim()
  const phone = String(formData.get("phone") || "").trim()
  const message = String(formData.get("message") || "").trim()
  const honey = String(formData.get("website") || "")
  const source = String(formData.get("source") || "").trim()
  const referrer = String(formData.get("referrer") || "").trim()

  if (honey) {
    return { ok: false, message: "Submission blocked." }
  }
  if (!name || !isEmail(email) || !message) {
    return { ok: false, message: "Please complete required fields with valid info." }
  }

  const lines = [
    "New website inquiry",
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : "",
    `Message: ${message}`,
    source ? `Source: ${source}` : "",
    referrer ? `Referrer: ${referrer}` : "",
  ].filter(Boolean)
  const body = lines.join("\n")

  const adminNumber = (process.env.ADMIN_WHATSAPP || "919518126610").replace(/[^\d]/g, "")
  const adminEmail = process.env.ADMIN_EMAIL || "budhirajaservices@gmail.com"

  // Try WhatsApp Cloud API (optional)
  let deliveredToWhatsApp = false
  const waAttempt = await sendWhatsAppViaCloudAPI({ to: adminNumber, body })
  if (waAttempt.ok) deliveredToWhatsApp = true

  // Build mobile-friendly WhatsApp link (api.whatsapp.com)
  const whatsappHref = `https://api.whatsapp.com/send?phone=${adminNumber}&text=${encodeURIComponent(body)}`

  // Optional automatic email (no fallback button in UI)
  let deliveredToEmail = false
  const emailAttempt = await sendEmailViaResend({
    to: adminEmail,
    subject: `New inquiry from ${name}`,
    text: body,
    html: lines.map((l) => `<div>${l.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>`).join(""),
    replyTo: email,
  })
  if (emailAttempt.ok) deliveredToEmail = true

  await new Promise((r) => setTimeout(r, 200))
  console.log("Contact submission:", {
    name,
    email,
    phone,
    message,
    source,
    referrer,
    deliveredToWhatsApp,
    deliveredToEmail,
  })

  return {
    ok: true,
    message: deliveredToWhatsApp ? "Thanks! Your inquiry was sent to our WhatsApp." : "Thanks! Send it to WhatsApp.",
    deliveredToWhatsApp,
    whatsappHref,
  }
}

export async function submitProposal(_: any, formData: FormData) {
  const name = String(formData.get("name") || "").trim()
  const email = String(formData.get("email") || "").trim()
  const phone = String(formData.get("phone") || "").trim()
  const company = String(formData.get("company") || "").trim()
  const websiteUrl = String(formData.get("websiteUrl") || "").trim()
  const projectType = String(formData.get("projectType") || "").trim()
  const budget = String(formData.get("budget") || "").trim()
  const timeline = String(formData.get("timeline") || "").trim()
  const goals = String(formData.get("goals") || "").trim()
  const featureValues = formData.getAll("features").map((f) => String(f))
  const honey = String(formData.get("website") || "")
  const source = String(formData.get("source") || "").trim()
  const referrer = String(formData.get("referrer") || "").trim()

  if (honey) return { ok: false, message: "Submission blocked." }
  if (!name || !isEmail(email) || !goals) {
    return { ok: false, message: "Please complete required fields with valid info." }
  }

  const lines = [
    "New proposal request",
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : "",
    company ? `Company: ${company}` : "",
    websiteUrl ? `Current site: ${websiteUrl}` : "",
    projectType ? `Project type: ${projectType}` : "",
    budget ? `Budget: ${budget}` : "",
    timeline ? `Timeline: ${timeline}` : "",
    featureValues.length ? `Features: ${featureValues.join(", ")}` : "",
    `Goals: ${goals}`,
    source ? `Source: ${source}` : "",
    referrer ? `Referrer: ${referrer}` : "",
  ].filter(Boolean)

  const body = lines.join("\n")

  const adminNumber = (process.env.ADMIN_WHATSAPP || "919518126610").replace(/[^\d]/g, "")
  const adminEmail = process.env.ADMIN_EMAIL || "budhirajaservices@gmail.com"

  let deliveredToWhatsApp = false
  const waAttempt = await sendWhatsAppViaCloudAPI({ to: adminNumber, body })
  if (waAttempt.ok) deliveredToWhatsApp = true

  // Build mobile-friendly WhatsApp link (api.whatsapp.com)
  const whatsappHref = `https://api.whatsapp.com/send?phone=${adminNumber}&text=${encodeURIComponent(body)}`

  // Optional automatic email (no fallback button in UI)
  const emailAttempt = await sendEmailViaResend({
    to: adminEmail,
    subject: `Proposal request from ${name}`,
    text: body,
    html: lines.map((l) => `<div>${l.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>`).join(""),
    replyTo: email,
  })
  const deliveredToEmail = emailAttempt.ok

  await new Promise((r) => setTimeout(r, 200))
  console.log("Proposal submission:", {
    name,
    email,
    phone,
    company,
    websiteUrl,
    projectType,
    budget,
    timeline,
    featureValues,
    source,
    referrer,
    deliveredToWhatsApp,
    deliveredToEmail,
  })

  return {
    ok: true,
    message: deliveredToWhatsApp
      ? "Thanks! Your request was sent to our WhatsApp."
      : "Thanks! Click 'Send to WhatsApp' to notify us instantly.",
    deliveredToWhatsApp,
    whatsappHref,
  }
}

export async function submitPaymentConfirmation(_: any, formData: FormData) {
  const name = String(formData.get("name") || "").trim()
  const email = String(formData.get("email") || "").trim()
  const phone = String(formData.get("phone") || "").trim()
  const projectReference = String(formData.get("projectReference") || "").trim()
  const paymentMethod = String(formData.get("paymentMethod") || "").trim()
  const amount = String(formData.get("amount") || "").trim()
  const transactionId = String(formData.get("transactionId") || "").trim()
  const paymentDate = String(formData.get("paymentDate") || "").trim()
  const notes = String(formData.get("notes") || "").trim()
  const honey = String(formData.get("website") || "")
  const source = String(formData.get("source") || "").trim()
  const referrer = String(formData.get("referrer") || "").trim()

  if (honey) {
    return { ok: false, message: "Submission blocked." }
  }
  if (!name || !isEmail(email) || !projectReference || !paymentMethod || !amount || !transactionId || !paymentDate) {
    return { ok: false, message: "Please complete all required fields." }
  }

  const lines = [
    "🔔 PAYMENT CONFIRMATION",
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : "",
    `Project Reference: ${projectReference}`,
    `Payment Method: ${paymentMethod}`,
    `Amount Paid: ${amount}`,
    `Transaction ID: ${transactionId}`,
    `Payment Date: ${paymentDate}`,
    notes ? `Notes: ${notes}` : "",
    source ? `Source: ${source}` : "",
    referrer ? `Referrer: ${referrer}` : "",
  ].filter(Boolean)

  const body = lines.join("\n")

  const adminNumber = (process.env.ADMIN_WHATSAPP || "919518126610").replace(/[^\d]/g, "")
  const adminEmail = process.env.ADMIN_EMAIL || "budhirajaservices@gmail.com"

  let deliveredToWhatsApp = false
  const waAttempt = await sendWhatsAppViaCloudAPI({ to: adminNumber, body })
  if (waAttempt.ok) deliveredToWhatsApp = true

  // Build mobile-friendly WhatsApp link (api.whatsapp.com)
  const whatsappHref = `https://api.whatsapp.com/send?phone=${adminNumber}&text=${encodeURIComponent(body)}`

  // Optional automatic email (no fallback button in UI)
  const emailAttempt = await sendEmailViaResend({
    to: adminEmail,
    subject: `Payment Confirmation - ${projectReference}`,
    text: body,
    html: lines.map((l) => `<div>${l.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>`).join(""),
    replyTo: email,
  })
  const deliveredToEmail = emailAttempt.ok

  await new Promise((r) => setTimeout(r, 200))
  console.log("Payment confirmation:", {
    name,
    email,
    phone,
    projectReference,
    paymentMethod,
    amount,
    transactionId,
    paymentDate,
    notes,
    source,
    referrer,
    deliveredToWhatsApp,
    deliveredToEmail,
  })

  return {
    ok: true,
    message: deliveredToWhatsApp
      ? "Thanks! Payment confirmation sent to our WhatsApp."
      : "Thanks! Click 'Send to WhatsApp' to notify us instantly.",
    deliveredToWhatsApp,
    whatsappHref,
  }
}
