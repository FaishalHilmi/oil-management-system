import { X } from "lucide-react";

import type { Partner } from "@/pages/partner/PartnerPage";

type Props = {
  open: boolean;
  partner: Partner | null;
  onClose: () => void;
};

export default function PartnerFormModal({ open, partner, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-xs">
      <div className="flex w-full max-w-md flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
        <div className="flex items-center justify-between border-b border-slate-100 p-5">
          <div>
            <h3 className="font-semibold text-slate-950">
              {partner ? "Edit Profil Mitra" : "Tambah Mitra Baru"}
            </h3>

            <p className="text-xs text-slate-500">
              {partner
                ? "Perbarui informasi profil mitra operasional."
                : "Mencatat profil agen / reseller operasional."}
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-md p-1 text-slate-500 hover:bg-slate-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4 p-5">
          <input type="hidden" defaultValue={partner?.id ?? ""} />

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-600">
              Nama Lengkap
            </label>

            <input
              type="text"
              defaultValue={partner?.name ?? ""}
              placeholder="Misal: Andi Wijaya"
              className="h-9 w-full rounded-md border border-slate-200 px-3 text-sm focus:outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-600">
              Nomor HP / WhatsApp
            </label>

            <input
              type="text"
              defaultValue={partner?.phone ?? ""}
              placeholder="Misal: 081234567890"
              className="h-9 w-full rounded-md border border-slate-200 px-3 text-sm focus:outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-600">
              Alamat Tempat Tinggal / Gudang
            </label>

            <input
              type="text"
              defaultValue={partner?.address ?? ""}
              placeholder="Opsional"
              className="h-9 w-full rounded-md border border-slate-200 px-3 text-sm focus:outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-600">
              Status Keanggotaan
            </label>

            <select
              defaultValue={partner?.status ?? "Aktif"}
              className="h-9 w-full rounded-md border border-slate-200 bg-white px-3 text-sm focus:outline-none"
            >
              <option value="Aktif">Aktif</option>
              <option value="Nonaktif">Nonaktif</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end gap-2 border-t border-slate-100 bg-slate-50/50 p-5">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 items-center justify-center rounded-md border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Batal
          </button>

          <button
            type="button"
            className="inline-flex h-9 items-center justify-center rounded-md bg-slate-900 px-4 text-sm font-medium text-white hover:bg-slate-800"
          >
            {partner ? "Simpan Perubahan" : "Simpan Mitra"}
          </button>
        </div>
      </div>
    </div>
  );
}
