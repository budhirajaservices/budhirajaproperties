type SendArgs = {
  to: string
  subject: string
  text: string
  html?: string
  replyTo?: string
}

/**
 * Send email using Resend (https://resend.com).
 * Requires RESEND_API_KEY in env. FROM_EMAIL is optional (defaults to onboarding@resend.dev).
 * Returns ok: false with reason "missing_config" if no API key found.
 */
export async function sendEmailViaResend({
  to,
  subject,
  text,
  html,
  replyTo,
}: SendArgs): Promise<{ ok: boolean; error?: string; reason?: string }> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return { ok: false, reason: "missing_config" }

  try {
    const { Resend } = await import("resend")
    const resend = new Resend(apiKey)
    const from = process.env.FROM_EMAIL || "onboarding@resend.dev"

    const result = await resend.emails.send({
      from,
      to,
      subject,
      text,
      html,
      reply_to: replyTo ? [replyTo] : undefined,
    })

    if (result.error) {
      return { ok: false, error: String(result.error) }
    }
    return { ok: true }
  } catch (err: any) {
    return { ok: false, error: err?.message || "Unknown email error" }
  }
}
