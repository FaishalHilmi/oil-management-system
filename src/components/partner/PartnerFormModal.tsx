import { X } from "lucide-react";
import type { Partner, PartnerPayload, PartnerStatus } from "@/types";
import { useEffect, useState } from "react";

type Props = {
  open: boolean;
  partner: Partner | null;
  onClose: () => void;
  onSave: (data: PartnerPayload) => Promise<void>;
};

export default function PartnerFormModal({
  open,
  partner,
  onClose,
  onSave,
}: Props) {
  const [form, setForm] = useState<PartnerPayload>({
    partner_name: "",
    phone_number: "",
    address: "",
    status: "Aktif",
  });

  useEffect(() => {
    if (partner) {
      setForm({
        partner_name: partner.partner_name,
        phone_number: partner.phone_number,
        address: partner.address,
        status: partner.status,
      });
    } else {
      setForm({
        partner_name: "",
        phone_number: "",
        address: "",
        status: "Aktif",
      });
    }
  }, [partner, open]);

  const handleSubmit = async () => {
    await onSave(form);
  };

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
              value={form.partner_name}
              onChange={(e) =>
                setForm({
                  ...form,
                  partner_name: e.target.value,
                })
              }
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
              value={form.phone_number}
              onChange={(e) =>
                setForm({
                  ...form,
                  phone_number: e.target.value,
                })
              }
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
              value={form.address}
              onChange={(e) =>
                setForm({
                  ...form,
                  address: e.target.value,
                })
              }
              placeholder="Opsional"
              className="h-9 w-full rounded-md border border-slate-200 px-3 text-sm focus:outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-600">
              Status Keanggotaan
            </label>

            <select
              value={form.status}
              onChange={(e) =>
                setForm({
                  ...form,
                  status: e.target.value as PartnerStatus,
                })
              }
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
            onClick={handleSubmit}
            className="inline-flex h-9 items-center justify-center rounded-md bg-slate-900 px-4 text-sm font-medium text-white hover:bg-slate-800"
          >
            {partner ? "Simpan Perubahan" : "Simpan Mitra"}
          </button>
        </div>
      </div>
    </div>
  );
}
