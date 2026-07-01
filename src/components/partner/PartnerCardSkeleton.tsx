export default function PartnerCardSkeleton() {
  return (
    <div className="animate-pulse rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-slate-200" />

          <div className="space-y-2">
            <div className="h-4 w-32 rounded bg-slate-200" />
            <div className="h-3 w-24 rounded bg-slate-200" />
          </div>
        </div>

        <div className="h-6 w-16 rounded-full bg-slate-200" />
      </div>

      <div className="mt-5 h-3 w-40 rounded bg-slate-200" />

      <div className="mt-5 grid grid-cols-3 gap-3">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="rounded-lg bg-slate-50 p-3">
            <div className="mx-auto h-3 w-10 rounded bg-slate-200" />
            <div className="mx-auto mt-2 h-5 w-12 rounded bg-slate-200" />
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <div className="h-3 w-20 rounded bg-slate-200" />
        <div className="h-4 w-4 rounded bg-slate-200" />
      </div>
    </div>
  );
}
