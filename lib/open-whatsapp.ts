export function openWhatsApp(phone: string, message: string) {
  const waNumber = String(phone).replace(/[^\d]/g, "")
  const appUrl = `whatsapp://send?phone=${waNumber}&text=${encodeURIComponent(message)}`
  const webUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`
  try {
    const start = Date.now()
    const fallbackTimer = setTimeout(() => {
      // If the app didn't open quickly, fall back to the web URL.
      if (Date.now() - start < 1500) {
        window.location.href = webUrl
      }
    }, 600)
    // Try to open the native app
    window.location.href = appUrl
    // Clear timer later if the app took over (best-effort)
    setTimeout(() => clearTimeout(fallbackTimer), 2000)
  } catch {
    window.location.href = webUrl
  }
}

export function openWhatsAppFromHref(href: string) {
  try {
    const u = new URL(href)
    const waNumber = u.pathname.replace("/", "") // "/919518126610" -> "919518126610"
    const text = u.searchParams.get("text") ?? ""
    openWhatsApp(waNumber, decodeURIComponent(text))
  } catch {
    // Fallback to just navigating
    window.location.href = href
  }
}
