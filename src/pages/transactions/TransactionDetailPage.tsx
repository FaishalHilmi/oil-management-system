import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CheckCheck,
  CheckCircle,
  Loader,
  StickyNote,
  Wallet,
  AlertTriangle,
  Pencil,
} from "lucide-react";

import PageHeader from "@/components/shared/PageHeader";

export default function TransactionDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Dummy Data
  const transaction = {
    id,
    transactionNumber: "TRX-202606-001",
    transactionDate: "30 Juni 2026",

    partner: {
      name: "CV Sumber Rezeki",
      phone: "0812-3456-7890",
      avatar: "S",
    },

    quantity: 120,
    purchasePrice: 155000,
    totalCapital: 18600000,

    sellingPrice: 180000,
    partnerFee: 850000,
    otherCost: 350000,
    totalSales: 21600000,
    grossProfit: 3000000,
    netProfit: 1800000,

    notes: "Penjualan berjalan lancar.\nPengiriman selesai dalam 2 hari.",

    status: "Berjalan", // Berjalan | Selesai | Batal
  };

  return (
    <>
      <PageHeader
        title="Detail Transaksi"
        description="Informasi lengkap transaksi investasi."
      />

      <section className="mt-10 space-y-6">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-xs sm:flex-row sm:items-center">
          <button
            onClick={() => navigate("/transactions")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-slate-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Daftar Transaksi
          </button>

          <div className="flex w-full items-center justify-end gap-2 sm:w-auto">
            {transaction.status === "Berjalan" && (
              <>
                <button className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-emerald-700">
                  <CheckCheck className="h-4 w-4" />
                  Selesaikan Transaksi
                </button>

                <button
                  onClick={() =>
                    navigate(`/transactions/${transaction.id}/edit`)
                  }
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 shadow-xs transition-colors hover:bg-slate-50"
                >
                  <Pencil className="h-4 w-4" />
                  Edit Modal
                </button>
              </>
            )}

            {transaction.status === "Selesai" && (
              <button
                onClick={() => navigate(`/transactions/${transaction.id}/edit`)}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 shadow-xs transition-colors hover:bg-slate-50"
              >
                <Pencil className="h-4 w-4" />
                Edit Transaksi
              </button>
            )}

            {transaction.status === "Batal" && (
              <button
                onClick={() => navigate(`/transactions/${transaction.id}/edit`)}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 shadow-xs transition-colors hover:bg-slate-50"
              >
                <Pencil className="h-4 w-4" />
                Edit Data
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* LEFT */}

          <div className="space-y-6 lg:col-span-2">
            <div className="space-y-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="rounded-md bg-slate-900 px-2 py-1 font-mono text-xs font-bold text-white">
                    {transaction.transactionNumber}
                  </span>

                  <p className="mt-2 text-xs text-slate-500">
                    Dibuat pada : {transaction.transactionDate}
                  </p>
                </div>

                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                  {transaction.status}
                </span>
              </div>

              {/* Partner */}

              <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-base font-bold text-slate-800">
                  {transaction.partner.avatar}
                </div>

                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Mitra Operasional
                  </span>

                  <span className="text-base font-bold text-slate-900">
                    {transaction.partner.name}
                  </span>

                  <span className="block text-xs text-slate-500">
                    {transaction.partner.phone}
                  </span>
                </div>
              </div>

              {/* Modal */}

              <div className="space-y-4 pt-2">
                <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                  <Wallet className="h-4 w-4" />
                  Seksi Modal (Fase 1)
                </h4>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/50 p-4">
                    <span className="text-xs font-medium text-slate-500">
                      Volume Minyak
                    </span>

                    <span className="text-sm font-bold">
                      {transaction.quantity} Dus
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/50 p-4">
                    <span className="text-xs font-medium text-slate-500">
                      Harga Modal / Dus
                    </span>

                    <span className="text-sm font-bold">
                      Rp {transaction.purchasePrice.toLocaleString("id-ID")}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-900 p-4 text-white">
                  <span>Total Dana Modal Disalurkan</span>

                  <span className="text-lg font-bold">
                    Rp {transaction.totalCapital.toLocaleString("id-ID")}
                  </span>
                </div>
              </div>
            </div>

            {/* Catatan */}

            <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                <StickyNote className="h-4 w-4" />
                Catatan Tambahan
              </h4>

              <p className="whitespace-pre-line rounded-xl border border-slate-100 bg-slate-50 p-4 text-sm leading-relaxed text-slate-600">
                {transaction.notes}
              </p>
            </div>
          </div>

          {/* RIGHT */}

          <div className="space-y-6">
            <div className="space-y-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                <CheckCircle className="h-4 w-4 text-slate-400" />
                Hasil Penjualan (Fase 2)
              </h4>

              {/* ===========================
        STATUS : SELESAI
    ============================ */}

              <div
                className={
                  transaction.status === "Selesai" ? "space-y-4" : "hidden"
                }
              >
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between rounded border border-slate-100 bg-slate-50 p-2.5">
                    <span className="text-slate-500">Harga Jual per Dus</span>

                    <span className="font-bold text-slate-800">
                      Rp {transaction.sellingPrice.toLocaleString("id-ID")}
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded border border-slate-100 bg-slate-50 p-2.5">
                    <span className="text-slate-500">Fee / Komisi Mitra</span>

                    <span className="font-bold text-slate-800">
                      Rp {transaction.partnerFee.toLocaleString("id-ID")}
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded border border-slate-100 bg-slate-50 p-2.5">
                    <span className="text-slate-500">Biaya Lain</span>

                    <span className="font-bold text-slate-800">
                      Rp {transaction.otherCost.toLocaleString("id-ID")}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 rounded-xl border border-emerald-100 bg-emerald-50 p-4">
                  <div className="flex justify-between text-xs text-emerald-800">
                    <span>Omzet Kotor Penjualan</span>

                    <span className="font-bold">
                      Rp {transaction.totalSales.toLocaleString("id-ID")}
                    </span>
                  </div>

                  <div className="flex justify-between border-b border-emerald-200/50 pb-2 text-xs text-emerald-800">
                    <span>Laba Kotor ($)</span>

                    <span className="font-bold">
                      Rp {transaction.grossProfit.toLocaleString("id-ID")}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-1 text-emerald-950">
                    <span className="text-xs font-semibold">
                      Profit Bersih Anda
                    </span>

                    <span className="text-lg font-black text-emerald-700">
                      Rp {transaction.netProfit.toLocaleString("id-ID")}
                    </span>
                  </div>
                </div>
              </div>

              {/* ===========================
        STATUS : BERJALAN
    ============================ */}

              <div
                className={
                  transaction.status === "Berjalan" ? "space-y-4" : "hidden"
                }
              >
                <div className="space-y-3 rounded-xl border border-dashed border-slate-200 bg-slate-50/50 p-6 text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                    <Loader className="h-5 w-5 animate-spin" />
                  </div>

                  <div>
                    <h5 className="text-xs font-bold text-slate-800">
                      Menunggu Hasil Penjualan
                    </h5>

                    <p className="mt-1 text-[11px] text-slate-400">
                      Modal sedang dikelola oleh Mitra untuk penjualan minyak di
                      lapangan.
                    </p>
                  </div>
                </div>

                <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700">
                  <CheckCheck className="h-4 w-4" />
                  Selesaikan Transaksi Sekarang
                </button>
              </div>

              {/* ===========================
        STATUS : BATAL
    ============================ */}

              <div
                className={
                  transaction.status === "Batal"
                    ? "space-y-2 rounded-xl border border-rose-100 bg-rose-50/30 p-6 text-center text-rose-950"
                    : "hidden"
                }
              >
                <AlertTriangle className="mx-auto h-8 w-8 text-rose-500" />

                <h5 className="text-xs font-bold">Transaksi Dibatalkan</h5>

                <p className="text-[11px] text-rose-600">
                  Modal tidak disalurkan atau dikembalikan karena alasan
                  tertentu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
