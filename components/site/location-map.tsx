"use client"

import { useEffect, useState } from "react"

type LocationMapProps = {
  lat?: number
  lng?: number
  zoom?: number
  placeLabel?: string
  googleQuery?: string
  className?: string
  heightClass?: string
  showGoogleLink?: boolean
}

/**
 * OpenStreetMap embed with automatic static-image fallback.
 * - Tries to render OSM iframe first (no API key).
 * - If iframe is blocked or slow, falls back to a static OSM image.
 * - Footer shows an OpenStreetMap link. Google link is optional and can be hidden.
 */
export default function LocationMap({
  lat = 28.6139,
  lng = 77.209,
  zoom = 14,
  placeLabel = "Budhiraja Services, India",
  googleQuery = "Budhiraja Services India",
  className = "",
  heightClass = "h-64 md:h-80",
  showGoogleLink = true,
}: LocationMapProps) {
  // Build OSM iframe URL
  const delta = Math.max(0.002, 0.5 / zoom)
  const minLat = lat - delta
  const maxLat = lat + delta
  const minLng = lng - delta
  const maxLng = lng + delta

  const osmEmbed = `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(
    `${minLng},${minLat},${maxLng},${maxLat}`,
  )}&layer=mapnik&marker=${encodeURIComponent(`${lat},${lng}`)}`
  const osmLink = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=${zoom}/${lat}/${lng}`
  const googleLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(googleQuery)}`

  // Static map fallback (no iframe)
  // Using OSM's public static map service
  const staticMap = `https://staticmap.openstreetmap.de/staticmap.php?center=${lat},${lng}&zoom=${zoom}&size=800x360&maptype=mapnik&markers=${lat},${lng},lightblue1`

  const [loaded, setLoaded] = useState(false)
  const [fallback, setFallback] = useState(false)

  useEffect(() => {
    // If iframe hasn't loaded after 1.5s, show fallback image
    const timer = setTimeout(() => {
      if (!loaded) setFallback(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [loaded])

  return (
    <div className={["w-full overflow-hidden rounded-xl border bg-white", className].join(" ")}>
      {!fallback ? (
        <iframe
          src={osmEmbed}
          title={placeLabel}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={["w-full", heightClass].join(" ")}
          style={{ border: 0 }}
          aria-label={placeLabel}
          onLoad={() => setLoaded(true)}
          // Note: iframe onError isn't supported in all browsers, timeout above covers most cases
        />
      ) : (
        <div className={["w-full", heightClass].join(" ")}>
          <img
            src={staticMap || "/placeholder.svg"}
            alt={placeLabel}
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      )}

      <div className="flex items-center justify-between gap-2 border-t bg-slate-50 px-3 py-2 text-xs text-slate-600">
        <a href={osmLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
          View on OpenStreetMap
        </a>
        {showGoogleLink ? (
          <a href={googleLink} target="_blank" rel="noopener noreferrer" className="text-[#004274] hover:underline">
            Open in Google Maps
          </a>
        ) : null}
      </div>
    </div>
  )
}
