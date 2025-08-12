export default function LoadingAbout() {
  return (
    <div className="container mx-auto px-4 py-16 animate-pulse" role="status" aria-label="Loading About page">
      <div className="h-8 w-1/3 max-w-xs rounded bg-slate-200" />
      <div className="mt-4 h-4 w-2/3 max-w-md rounded bg-slate-200" />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="h-64 rounded-xl border bg-slate-100" />
        <div className="h-64 rounded-xl border bg-slate-100" />
      </div>
    </div>
  )
}
