import { CheckCircle, Save, XCircle } from "lucide-react";

type Props = {
  showCancelButton?: boolean;
};

export default function TransactionAction({ showCancelButton = false }: Props) {
  return (
    <div className="space-y-2">
      <button
        type="button"
        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-[8px] bg-emerald-600 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-emerald-700"
      >
        <CheckCircle className="h-4 w-4" />
        Simpan & Selesaikan
      </button>

      <button
        type="button"
        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-[8px] border border-slate-200 bg-white text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
      >
        <Save className="h-4 w-4" />
        Simpan sebagai Berjalan
      </button>

      {showCancelButton && (
        <button
          type="button"
          className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-rose-200 bg-rose-50 text-sm font-semibold text-rose-700 hover:bg-rose-100"
        >
          <XCircle className="h-4 w-4" />
          Batalkan Transaksi Ini
        </button>
      )}
    </div>
  );
}
