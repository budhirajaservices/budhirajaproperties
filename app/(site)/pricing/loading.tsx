export default function LoadingPricing() {
  return (
    <div className="container mx-auto px-4 py-16 animate-pulse" role="status" aria-label="Loading Pricing page">
      <div className="text-center">
        <div className="mx-auto h-8 w-64 rounded bg-slate-200" />
        <div className="mx-auto mt-3 h-4 w-80 rounded bg-slate-200" />
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="h-80 rounded-2xl border bg-slate-100" />
        <div className="h-80 rounded-2xl border bg-slate-100" />
        <div className="h-80 rounded-2xl border bg-slate-100" />
      </div>
    </div>
  )
}
