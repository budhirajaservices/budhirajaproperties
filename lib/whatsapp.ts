type SendArgs = {
  to: string // digits only, e.g. "919518126610"
  body: string
}

/**
 * Attempts to send a WhatsApp message using Meta's WhatsApp Cloud API.
 * Requires environment variables:
 * - WHATSAPP_TOKEN
 * - WHATSAPP_PHONE_NUMBER_ID
 *
 * Returns ok: false with reason "missing_config" if env vars are not set.
 */
export async function sendWhatsAppViaCloudAPI({
  to,
  body,
}: SendArgs): Promise<{ ok: boolean; error?: string; reason?: string }> {
  const token = process.env.WHATSAPP_TOKEN
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID

  if (!token || !phoneNumberId) {
    return { ok: false, reason: "missing_config" }
  }

  try {
    const res = await fetch(`https://graph.facebook.com/v20.0/${phoneNumberId}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to,
        type: "text",
        text: { body },
      }),
    })

    if (!res.ok) {
      const text = await res.text().catch(() => "")
      return { ok: false, error: `WhatsApp API error: ${res.status} ${res.statusText} ${text}` }
    }

    return { ok: true }
  } catch (err: any) {
    return { ok: false, error: err?.message || "Unknown WhatsApp API error" }
  }
}
