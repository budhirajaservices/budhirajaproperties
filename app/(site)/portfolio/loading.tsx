export default function LoadingPortfolio() {
  return (
    <div className="container mx-auto px-4 py-16 animate-pulse" role="status" aria-label="Loading Portfolio page">
      <div className="h-8 w-1/3 max-w-xs rounded bg-slate-200" />
      <div className="mt-2 h-4 w-2/3 max-w-md rounded bg-slate-200" />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-56 rounded-xl border bg-slate-100" />
        ))}
      </div>
    </div>
  )
}
