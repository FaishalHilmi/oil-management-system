import {
  FileSpreadsheet,
  FileText,
  Filter,
  Info,
  SlidersHorizontal,
} from "lucide-react";

import PageHeader from "@/components/shared/PageHeader";

type Report = {
  id: number;
  date: string;
  transactionNumber: string;
  partner: string;
  quantity: number;
  totalCapital: number;
  netProfit: number;
  status: "Berjalan" | "Selesai" | "Batal";
};

export default function ReportPage() {
  const reports: Report[] = [
    {
      id: 1,
      date: "30 Jun 2026",
      transactionNumber: "TRX-202606-001",
      partner: "CV Sumber Rezeki",
      quantity: 120,
      totalCapital: 18600000,
      netProfit: 2450000,
      status: "Selesai",
    },
    {
      id: 2,
      date: "28 Jun 2026",
      transactionNumber: "TRX-202606-002",
      partner: "Budi Santoso",
      quantity: 90,
      totalCapital: 14500000,
      netProfit: 1650000,
      status: "Berjalan",
    },
    {
      id: 3,
      date: "24 Jun 2026",
      transactionNumber: "TRX-202606-003",
      partner: "Rizky Pratama",
      quantity: 75,
      totalCapital: 11500000,
      netProfit: 0,
      status: "Batal",
    },
  ];

  return (
    <>
      <PageHeader
        title="Laporan Akuntansi Final"
        description="Filter dan ekspor seluruh laporan transaksi."
      />

      <section className="mt-10 space-y-6">
        {/* Filter */}

        <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <Filter className="h-4 w-4 text-slate-500" />
            Filter Ekspor Laporan
          </h4>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-500">
                Periode
              </label>

              <select className="h-9 w-full rounded-md border border-slate-200 bg-white px-3 text-sm">
                <option>Semua Data</option>
                <option>Bulan Ini</option>
                <option>Tahun Ini</option>
                <option>Kustom Tanggal</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-500">
                Mitra Kerja
              </label>

              <select className="h-9 w-full rounded-md border border-slate-200 bg-white px-3 text-sm">
                <option>Semua Mitra</option>
                <option>CV Sumber Rezeki</option>
                <option>Budi Santoso</option>
                <option>Rizky Pratama</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-500">
                Status
              </label>

              <select className="h-9 w-full rounded-md border border-slate-200 bg-white px-3 text-sm">
                <option>Semua Status</option>
                <option>Berjalan</option>
                <option>Selesai</option>
                <option>Batal</option>
              </select>
            </div>
          </div>

          <div className="hidden grid-cols-1 gap-4 border-t border-slate-100 pt-2 sm:grid-cols-2">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-500">
                Mulai Tanggal
              </label>

              <input
                type="date"
                className="h-9 w-full rounded-md border border-slate-200 px-3 text-sm"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-500">
                Hingga Tanggal
              </label>

              <input
                type="date"
                className="h-9 w-full rounded-md border border-slate-200 px-3 text-sm"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-2 pt-2 sm:flex-row">
            <div className="flex w-full gap-2 sm:w-auto">
              <button className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground">
                <SlidersHorizontal className="h-4 w-4" />
                Terapkan Filter
              </button>

              <button className="inline-flex h-9 items-center justify-center rounded-md border border-slate-200 bg-white px-4 text-sm">
                Reset
              </button>
            </div>

            <div className="flex w-full gap-2 sm:w-auto">
              <button className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-4 text-sm font-medium text-emerald-700">
                <FileSpreadsheet className="h-4 w-4" />
                Export Excel
              </button>

              <button className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-rose-200 bg-rose-50 px-4 text-sm font-medium text-rose-700">
                <FileText className="h-4 w-4" />
                Export PDF
              </button>
            </div>
          </div>
        </div>
        {/* Summary */}

        <div className="grid grid-cols-2 gap-4 rounded-xl border border-slate-200 bg-slate-100 p-4 md:grid-cols-4">
          <div className="rounded-lg bg-white p-3 shadow-xs">
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Total Modal
            </span>

            <span className="text-sm font-bold text-slate-800 md:text-base">
              Rp44.600.000
            </span>
          </div>

          <div className="rounded-lg bg-white p-3 shadow-xs">
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Total Profit
            </span>

            <span className="text-sm font-bold text-emerald-600 md:text-base">
              Rp4.100.000
            </span>
          </div>

          <div className="rounded-lg bg-white p-3 shadow-xs">
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Total Volume
            </span>

            <span className="text-sm font-bold text-slate-800 md:text-base">
              285 Dus
            </span>
          </div>

          <div className="rounded-lg bg-white p-3 shadow-xs">
            <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Total Transaksi
            </span>

            <span className="text-sm font-bold text-slate-800 md:text-base">
              {reports.length}
            </span>
          </div>
        </div>

        {/* Table */}

        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-175 w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50 font-medium text-slate-500">
                <th className="p-4 text-xs tracking-wider">Tanggal</th>

                <th className="p-4 text-xs tracking-wider">No. Transaksi</th>

                <th className="p-4 text-xs tracking-wider">Mitra</th>

                <th className="p-4 text-center text-xs tracking-wider">Dus</th>

                <th className="p-4 text-xs tracking-wider">Total Modal</th>

                <th className="p-4 text-xs tracking-wider">Profit Bersih</th>

                <th className="p-4 text-xs tracking-wider">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {reports.length === 0 ? (
                <tr>
                  <td colSpan={7}>
                    <div className="space-y-2 p-12 text-center text-slate-500">
                      <Info className="mx-auto h-12 w-12 text-slate-300" />

                      <p className="text-sm font-medium">
                        Tidak Ada Data Yang Memenuhi Syarat
                      </p>

                      <p className="text-xs">Ubah parameter filter Anda.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                reports.map((report) => (
                  <tr
                    key={report.id}
                    className="transition-colors hover:bg-slate-50"
                  >
                    <td className="p-4">{report.date}</td>

                    <td className="p-4 font-medium">
                      {report.transactionNumber}
                    </td>

                    <td className="p-4">{report.partner}</td>

                    <td className="p-4 text-center font-semibold">
                      {report.quantity}
                    </td>

                    <td className="p-4">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        maximumFractionDigits: 0,
                      }).format(report.totalCapital)}
                    </td>

                    <td className="p-4 font-semibold text-emerald-600">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        maximumFractionDigits: 0,
                      }).format(report.netProfit)}
                    </td>

                    <td className="p-4">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${
                          report.status === "Selesai"
                            ? "bg-emerald-100 text-emerald-700"
                            : report.status === "Berjalan"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-rose-100 text-rose-700"
                        }`}
                      >
                        {report.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
