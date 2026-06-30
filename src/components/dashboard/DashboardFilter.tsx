export default function DashboardFilter() {
  return (
    <div className="flex flex-col justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-xs sm:flex-row sm:items-center">
      <div>
        <h3 className="text-sm font-semibold text-slate-700">
          Filter Analisis Dashboard
        </h3>

        <p className="text-xs text-slate-500">
          Data KPI dan grafik otomatis menyesuaikan filter terpilih.
        </p>
      </div>

      <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto">
        <select className="h-9 w-full rounded-md border border-slate-200 bg-white px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-slate-400 sm:w-40">
          <option value="semua">Semua Data</option>
          <option value="bulan">Bulan Ini</option>
          <option value="tahun">Tahun Ini</option>
          <option value="custom">Kustom Tanggal</option>
        </select>
      </div>
    </div>
  );
}
