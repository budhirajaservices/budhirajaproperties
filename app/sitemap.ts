import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://budhirajaservices.com"
  const now = new Date()
  const urls = [
    "/",
    "/services",
    "/portfolio",
    "/pricing",
    "/payment",
    "/about",
    "/contact",
    "/faq",
    "/terms",
    "/privacy",
    "/proposal",
    "/proposal/growth",
  ]
  return urls.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }))
}
