import { FolderOpen, Plus, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

import PageHeader from "@/components/shared/PageHeader";

export default function TransactionListPage() {
  const navigate = useNavigate();

  type TransactionStatus = "Berjalan" | "Selesai" | "Batal";

  type Transaction = {
    id: number;
    transactionNumber: string;
    transactionDate: string;
    partnerName: string;
    quantity: number;
    totalCapital: number;
    netProfit: number;
    status: TransactionStatus;
  };

  const transactions: Transaction[] = [
    {
      id: 1,
      transactionNumber: "TRX-202606-001",
      transactionDate: "30 Jun 2026",
      partnerName: "CV Sumber Rezeki",
      quantity: 120,
      totalCapital: 18600000,
      netProfit: 2450000,
      status: "Berjalan",
    },
    {
      id: 2,
      transactionNumber: "TRX-202606-002",
      transactionDate: "28 Jun 2026",
      partnerName: "Toko Berkah Jaya",
      quantity: 85,
      totalCapital: 13250000,
      netProfit: 1850000,
      status: "Selesai",
    },
    {
      id: 3,
      transactionNumber: "TRX-202606-003",
      transactionDate: "25 Jun 2026",
      partnerName: "UD Makmur Sentosa",
      quantity: 60,
      totalCapital: 9450000,
      netProfit: 980000,
      status: "Berjalan",
    },
    {
      id: 4,
      transactionNumber: "TRX-202606-004",
      transactionDate: "22 Jun 2026",
      partnerName: "PT Sinar Nusantara",
      quantity: 150,
      totalCapital: 23250000,
      netProfit: 3150000,
      status: "Selesai",
    },
    {
      id: 5,
      transactionNumber: "TRX-202606-005",
      transactionDate: "20 Jun 2026",
      partnerName: "CV Karya Abadi",
      quantity: 40,
      totalCapital: 6200000,
      netProfit: 0,
      status: "Batal",
    },
  ];

  return (
    <>
      <PageHeader
        title="Transaksi"
        description="Kelola seluruh transaksi investasi minyak."
      />

      <section className="space-y-6 mt-10">
        {/* Filter */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto">
            {/* Search */}
            <div className="relative min-w-45 flex-1 sm:w-60">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />

              <input
                type="text"
                placeholder="Cari No. TRX / Mitra..."
                className="h-9 w-full rounded-md border border-slate-200 bg-primary-foreground shadow-xs pl-9 pr-3 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>

            {/* Filter Status */}
            <select className="h-9 rounded-md border border-slate-200 bg-surface px-2 py-1 text-sm shadow-xs focus:outline-none">
              <option value="semua">Semua Status</option>
              <option value="Berjalan">Sedang Berjalan</option>
              <option value="Selesai">Selesai</option>
              <option value="Batal">Dibatalkan</option>
            </select>

            {/* Filter Periode */}
            <select className="h-9 rounded-md border border-slate-200 bg-surface px-2 py-1 text-sm shadow-xs focus:outline-none">
              <option value="semua">Semua Periode</option>
              <option value="bulan">Bulan Ini</option>
              <option value="tahun">Tahun Ini</option>
            </select>
          </div>

          {/* Add Button */}
          <button
            onClick={() => navigate("/transactions/create")}
            className="inline-flex h-9 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:opacity-90 sm:w-auto"
          >
            <Plus className="h-4 w-4" />
            Tambah Transaksi
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-border bg-surface shadow-xs">
          <table className="min-w-175 w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50 font-medium text-slate-500">
                <th className="p-4 text-xs tracking-wider">No. Transaksi</th>
                <th className="p-4 text-xs tracking-wider">Tanggal</th>
                <th className="p-4 text-xs tracking-wider">Mitra</th>
                <th className="p-4 text-xs tracking-wider">Dus</th>
                <th className="p-4 text-xs tracking-wider">Modal</th>
                <th className="p-4 text-xs tracking-wider">Profit Bersih</th>
                <th className="p-4 text-xs tracking-wider">Status</th>
                <th className="p-4 text-xs tracking-wider">Aksi</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {transactions.length === 0 ? (
                <tr>
                  <td colSpan={8}>
                    <div className="space-y-2 p-12 text-center text-slate-500">
                      <FolderOpen className="mx-auto h-12 w-12 text-slate-300" />

                      <p className="text-sm font-medium">
                        Tidak Ada Transaksi Ditemukan
                      </p>

                      <p className="text-xs">
                        Silakan tambah transaksi baru atau ubah kata kunci
                        pencarian Anda.
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                transactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="p-4 font-medium">
                      {transaction.transactionNumber}
                    </td>

                    <td className="p-4 text-slate-400">
                      {transaction.transactionDate}
                    </td>

                    <td className="p-4">{transaction.partnerName}</td>

                    <td className="p-4 font-semibold">
                      {transaction.quantity}
                    </td>

                    <td className="p-4">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        maximumFractionDigits: 0,
                      }).format(transaction.totalCapital)}
                    </td>

                    <td className="p-4 text-emerald-600 font-semibold">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        maximumFractionDigits: 0,
                      }).format(transaction.netProfit)}
                    </td>

                    <td className="p-4">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                          transaction.status === "Berjalan"
                            ? "bg-amber-100 text-amber-800"
                            : transaction.status === "Selesai"
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-rose-100 text-rose-800"
                        }`}
                      >
                        {transaction.status}
                      </span>
                    </td>

                    <td className="p-4">
                      <button
                        onClick={() =>
                          navigate(`/transactions/${transaction.id}`)
                        }
                        className="rounded-md border border-slate-200 px-3 py-1 text-xs font-medium hover:bg-slate-100"
                      >
                        Detail
                      </button>
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
