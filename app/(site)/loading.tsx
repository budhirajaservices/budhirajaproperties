export default function Loading() {
  // Accessible skeleton fallback while routes in (site) segment are loading
  return (
    <div role="status" aria-label="Loading" className="container mx-auto px-4 py-16 animate-pulse">
      {/* Hero skeleton */}
      <div className="h-8 w-2/3 max-w-xl rounded bg-slate-200" />
      <div className="mt-4 h-4 w-1/2 max-w-md rounded bg-slate-200" />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="h-40 rounded-xl border bg-slate-100" />
        <div className="h-40 rounded-xl border bg-slate-100" />
        <div className="h-40 rounded-xl border bg-slate-100" />
      </div>

      {/* Secondary content skeleton */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="h-24 rounded-xl border bg-slate-100" />
        <div className="h-24 rounded-xl border bg-slate-100" />
        <div className="h-24 rounded-xl border bg-slate-100" />
      </div>
    </div>
  )
}
