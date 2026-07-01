import { ChevronRight, MapPin, Phone } from "lucide-react";
import { formatCompactCurrency } from "@/utils/format";
import type { Partner } from "@/types";

type Props = {
  partner: Partner;
  onClick: () => void;
};

export default function PartnerCard({ partner, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-xl border border-slate-200 bg-white p-5 shadow-xs transition-all hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-lg font-bold text-slate-800 uppercase">
            {partner.partner_name.charAt(0)}
          </div>

          <div>
            <h3 className="text-sm font-bold capitalize text-slate-900">
              {partner.partner_name}
            </h3>

            <div className="mt-1 flex items-center gap-1 text-xs text-slate-500">
              <Phone className="h-3.5 w-3.5" />

              {partner.phone_number}
            </div>
          </div>
        </div>

        <span
          className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${
            partner.status === "Aktif"
              ? "bg-emerald-100 text-emerald-700"
              : "bg-rose-100 text-rose-700"
          }`}
        >
          {partner.status}
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
        <MapPin className="h-3.5 w-3.5" />

        <span>{partner.address}</span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        <div className="rounded-lg bg-slate-50 p-3 text-center">
          <p className="text-[10px] uppercase text-slate-400">TRX</p>

          <p className="mt-1 text-base font-bold text-slate-900">
            {partner.total_transaction}
          </p>
        </div>

        <div className="rounded-lg bg-slate-50 p-3 text-center">
          <p className="text-[10px] uppercase text-slate-400">Dus</p>

          <p className="mt-1 text-base font-bold text-slate-900">
            {partner.total_quantity}
          </p>
        </div>

        <div className="rounded-lg bg-slate-50 p-3 text-center">
          <p className="text-[10px] uppercase text-slate-400">Profit</p>

          <p className="mt-1 font-bold text-emerald-600">
            {formatCompactCurrency(partner.total_profit)}
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="text-xs font-semibold text-slate-500">
          Lihat Detail
        </span>

        <ChevronRight className="h-4 w-4 text-slate-400" />
      </div>
    </div>
  );
}
