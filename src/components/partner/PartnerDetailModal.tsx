import { Edit, History, User, X } from "lucide-react";
import type { Partner } from "@/types";
import { formatCurrency, formatDate, formatNumber } from "@/utils/format";

type Props = {
  open: boolean;
  partner: Partner | null;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

export default function PartnerDetailModal({
  open,
  partner,
  onClose,
  onEdit,
  onDelete,
}: Props) {
  if (!open || !partner) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-xs">
      <div className="flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
        {/* Header */}

        <div className="flex shrink-0 items-center justify-between border-b border-slate-100 p-5">
          <div>
            <h3 className="flex items-center gap-2 font-semibold text-slate-950">
              <User className="h-5 w-5 text-slate-500" />
              Profil Detail Mitra
            </h3>

            <p className="text-xs text-slate-500">
              Statistik performa penjualan & rekam kerja.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-md p-1 text-slate-500 hover:bg-slate-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 space-y-6 overflow-y-auto bg-slate-50/50 p-5">
          <div className="grid grid-cols-1 gap-4 rounded-lg border border-slate-200 bg-white p-4 sm:grid-cols-3">
            <div>
              <span className="block text-[10px] font-bold uppercase text-slate-400">
                Nama Mitra
              </span>

              <span className="text-sm font-bold text-slate-800">
                {partner.partner_name}
              </span>
            </div>

            <div>
              <span className="block text-[10px] font-bold uppercase text-slate-400">
                Nomor HP
              </span>

              <span className="text-sm font-semibold text-slate-600">
                {partner.phone_number}
              </span>
            </div>

            <div>
              <span className="block text-[10px] font-bold uppercase text-slate-400">
                Status Mitra
              </span>

              <span
                className={`mt-1 inline-block rounded-full px-2 py-0.5 text-xs font-bold ${
                  partner.status === "Aktif"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-rose-100 text-rose-700"
                }`}
              >
                {partner.status}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            <StatCard title="Total TRX" value={partner.total_transaction} />

            <StatCard
              title="Total Dus"
              value={formatNumber(partner.total_quantity)}
            />

            <StatCard
              title="Total Modal"
              value={formatCurrency(partner.total_capital)}
            />

            <StatCard
              title="Total Profit"
              value={formatCurrency(partner.total_profit)}
              valueClassName="text-emerald-600"
            />

            <StatCard
              title="Rerata Profit"
              value={formatCurrency(partner.average_profit)}
            />
          </div>

          <div className="space-y-3">
            <h4 className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-500">
              <History className="h-4 w-4 text-slate-400" />
              Riwayat Penjualan Mitra
            </h4>

            <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-xs">
              <table className="min-w-125 w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-150 bg-slate-50 font-semibold text-slate-500">
                    <th className="p-3">Tanggal</th>
                    <th className="p-3">No. Transaksi</th>
                    <th className="p-3 text-center">Jumlah Dus</th>
                    <th className="p-3">Profit Bersih</th>
                    <th className="p-3 text-right">Status</th>
                  </tr>
                </thead>

                {/* <tbody className="divide-y divide-slate-100">
                  {partner.histories.map((history) => (
                    <tr key={history.id}>
                      <td className="p-3">{formatDate(history.date)}</td>

                      <td className="p-3 font-medium">
                        {history.transaction_number}
                      </td>

                      <td className="p-3 text-center">{history.quantity}</td>

                      <td className="p-3 font-semibold text-emerald-600">
                        Rp
                        {formatCurrency(history.profit)}
                      </td>

                      <td className="p-3 text-right">
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-[10px] font-bold ${
                            history.status === "Selesai"
                              ? "bg-emerald-100 text-emerald-700"
                              : history.status === "Berjalan"
                                ? "bg-amber-100 text-amber-700"
                                : "bg-rose-100 text-rose-700"
                          }`}
                        >
                          {history.status}
                        </span>
                      </td>
                    </tr>
                  ))}

                  {partner.histories.length === 0 && (
                    <tr>
                      <td
                        colSpan={5}
                        className="p-8 text-center text-xs text-slate-400"
                      >
                        Belum ada riwayat transaksi.
                      </td>
                    </tr>
                  )}
                </tbody> */}
                <tbody>
                  <tr>
                    <td
                      colSpan={5}
                      className="p-8 text-center text-xs text-slate-400"
                    >
                      Riwayat transaksi akan tersedia setelah Module Transaction
                      selesai.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer */}

        <div className="flex shrink-0 justify-end gap-2 border-t border-slate-100 bg-slate-50 p-5">
          {partner.total_transaction === 0 && (
            <button
              onClick={onDelete}
              className="inline-flex h-9 items-center justify-center rounded-md bg-red-600 px-4 text-sm font-medium text-white hover:bg-red-700"
            >
              Hapus Mitra
            </button>
          )}

          <button
            onClick={onEdit}
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-md border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            <Edit className="h-4 w-4" />
            Edit Profil
          </button>

          <button
            onClick={onClose}
            className="inline-flex h-9 items-center justify-center rounded-md bg-slate-900 px-4 text-sm font-medium text-white hover:bg-slate-800"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}

type StatCardProps = {
  title: string;
  value: string | number;
  valueClassName?: string;
};

function StatCard({
  title,
  value,
  valueClassName = "text-slate-900",
}: StatCardProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3 text-center">
      <span className="block text-[10px] font-semibold uppercase text-slate-400">
        {title}
      </span>

      <span
        className={`mt-1 block truncate text-sm font-extrabold ${valueClassName}`}
      >
        {value}
      </span>
    </div>
  );
}
