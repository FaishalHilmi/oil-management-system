export default function ProfitRevenueChart() {
  return (
    <div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h4 className="text-sm font-semibold text-slate-900">
            Grafik Omzet & Profit Bersih
          </h4>

          <p className="text-xs text-slate-500">
            Fluktuasi keuntungan vs total perputaran penjualan.
          </p>
        </div>

        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
          Barchart
        </span>
      </div>

      <div className="relative h-64 w-full">
        <div className="flex h-full items-center justify-center rounded-lg border border-dashed border-slate-300">
          <span className="text-sm text-slate-400">
            Chart.js akan ditampilkan di sini
          </span>
        </div>

        {/* Nanti diganti menjadi:
            <canvas ref={chartRef} />
        */}
      </div>
    </div>
  );
}
