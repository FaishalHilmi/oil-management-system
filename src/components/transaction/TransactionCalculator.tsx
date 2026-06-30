export default function TransactionCalculator() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
          Live Kalkulasi
        </h4>

        <div className="mt-4 space-y-2.5 text-xs font-medium text-slate-600">
          <div className="flex justify-between">
            <span>Volume Order:</span>

            <span className="font-bold text-slate-950">0 Dus</span>
          </div>

          <div className="flex justify-between">
            <span>Dana Modal Keluar:</span>

            <span className="font-bold text-slate-950">Rp0</span>
          </div>

          <div className="flex justify-between border-t border-slate-200/50 pt-2">
            <span>Total Penjualan:</span>

            <span className="font-bold text-slate-900">Rp0</span>
          </div>

          <div className="flex justify-between">
            <span>Laba Kotor ($):</span>

            <span className="font-bold text-slate-900">Rp0</span>
          </div>

          <div className="flex justify-between border-t border-slate-200/50 pt-3 text-sm font-bold">
            <span className="text-emerald-800">Profit Bersih Anda:</span>

            <span className="text-base font-black text-emerald-600">Rp0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
