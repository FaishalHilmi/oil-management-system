import { Info } from "lucide-react";

const statuses = [
  {
    label: "Sedang Berjalan",
    value: 0,
    bg: "bg-amber-50/50",
    border: "border-amber-100",
    text: "text-amber-800",
    valueText: "text-amber-900",
    dot: "bg-amber-500",
  },
  {
    label: "Selesai",
    value: 0,
    bg: "bg-emerald-50/50",
    border: "border-emerald-100",
    text: "text-emerald-800",
    valueText: "text-emerald-900",
    dot: "bg-emerald-500",
  },
  {
    label: "Dibatalkan",
    value: 0,
    bg: "bg-rose-50/50",
    border: "border-rose-100",
    text: "text-rose-800",
    valueText: "text-rose-900",
    dot: "bg-rose-500",
  },
];

export default function TransactionStatus() {
  return (
    <div className="lg:col-span-1 flex flex-col gap-4">
      <div className="flex flex-1 flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
        <div>
          <h4 className="mb-4 text-sm font-semibold text-slate-900">
            Status Transaksi Saat Ini
          </h4>

          <div className="space-y-3">
            {statuses.map((status) => (
              <div
                key={status.label}
                className={`flex items-center justify-between rounded-lg border p-3 ${status.bg} ${status.border}`}
              >
                <span
                  className={`flex items-center gap-2 text-xs font-semibold ${status.text}`}
                >
                  <span className={`h-2 w-2 rounded-full ${status.dot}`} />

                  {status.label}
                </span>

                <span className={`text-sm font-bold ${status.valueText}`}>
                  {status.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center gap-1.5 border-t border-slate-100 pt-4 text-[11px] text-slate-500">
          <Info className="h-3.5 w-3.5 text-slate-400" />
          Data di atas diperbarui secara otomatis.
        </div>
      </div>
    </div>
  );
}
