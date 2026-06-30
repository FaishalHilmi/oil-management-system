import { useState } from "react";

import TransactionAction from "./TransactionAction";
import TransactionCalculator from "./TransactionCalculator";

import { AlertTriangle, CheckCircle } from "lucide-react";

export default function TransactionForm() {
  const [status, setStatus] = useState<"Berjalan" | "Selesai">("Berjalan");
  const [showPhaseTwo, setShowPhaseTwo] = useState(false);

  return (
    <div className="space-y-6">
      {/* Warning */}

      {status === "Selesai" && (
        <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-950">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />

          <div>
            <h5 className="text-xs font-bold">
              Peringatan: Mengedit Transaksi Selesai
            </h5>

            <p className="mt-1 text-xs leading-relaxed text-amber-800">
              Anda sedang membuka transaksi yang sudah selesai.
            </p>
          </div>
        </div>
      )}

      <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-xs">
        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-100 p-6">
          <div>
            <h3 className="text-base font-bold">
              Buat Transaksi Baru (Fase 1)
            </h3>

            <p className="text-xs text-slate-500">
              Isi data modal dan mitra untuk memulai alur pre-order berjalan.
            </p>
          </div>

          <button className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-500 hover:bg-slate-50">
            Batal
          </button>
        </div>

        {/* Grid */}

        <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-3">
          {/* LEFT */}

          <div className="space-y-6 lg:col-span-2">
            {/* Informasi Umum */}

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                1. Informasi Umum
              </h4>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-600">
                    Nomor Transaksi
                  </label>

                  <input
                    disabled
                    value="TRX-202606-006"
                    className="h-10 w-full rounded-md border border-slate-200 bg-slate-50 px-3 text-sm font-semibold text-slate-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-600">
                    Tanggal Transaksi
                  </label>

                  <input
                    type="date"
                    className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-600">
                    Mitra Operasional
                  </label>

                  <select className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm focus:outline-none focus:ring-1 focus:ring-ring">
                    <option>CV Sumber Rezeki</option>
                    <option>PT Sinar Nusantara</option>
                    <option>UD Makmur Sentosa</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-600">
                    Status
                  </label>

                  <input
                    disabled
                    value="Berjalan"
                    className="h-10 w-full rounded-md border border-amber-200 bg-amber-50 px-3 text-sm font-bold text-amber-700"
                  />
                </div>
              </div>
            </div>

            {/* Modal */}

            <div className="space-y-4 border-t border-slate-100 pt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                2. Seksi Modal (Fase 1)
              </h4>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-600">
                    Jumlah Dus
                  </label>

                  <input
                    type="number"
                    placeholder="10"
                    className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-600">
                    Harga Modal per Dus
                  </label>

                  <input
                    type="number"
                    placeholder="175000"
                    className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Penjualan nanti */}

            {showPhaseTwo && (
              <div className="space-y-4 border-t border-slate-100 pt-4">
                <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  3. Seksi Penjualan & Biaya (Fase 2)
                </h4>

                {/* input penjualan */}
              </div>
            )}

            {/* Catatan */}

            <div className="space-y-1.5 border-t border-slate-100 pt-4">
              <label className="text-xs font-semibold text-slate-600">
                Catatan Tambahan (Opsional)
              </label>

              <textarea className="min-h-25 w-full rounded-md border border-slate-200 p-3 text-xs" />
            </div>
          </div>

          {/* RIGHT */}

          <div className="space-y-6">
            <TransactionCalculator />

            <TransactionAction showCancelButton={status === "Berjalan"} />
          </div>
        </div>
      </div>
    </div>
  );
}
