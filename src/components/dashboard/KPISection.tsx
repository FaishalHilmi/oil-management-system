import { Activity, Package, TrendingUp, Wallet } from "lucide-react";

const kpis = [
  {
    title: "Total Modal",
    value: "Rp0",
    description: "Akumulasi modal berjalan & selesai",
    icon: Wallet,
    iconClass: "bg-slate-100 text-slate-700",
    valueClass: "text-slate-900",
  },
  {
    title: "Total Profit Bersih",
    value: "Rp0",
    description: "Keuntungan setelah potongan biaya",
    icon: TrendingUp,
    iconClass: "bg-emerald-50 text-emerald-700",
    valueClass: "text-emerald-600",
  },
  {
    title: "Total Dus Terjual",
    value: "0 Dus",
    description: "Volume total penjualan minyak",
    icon: Package,
    iconClass: "bg-amber-50 text-amber-700",
    valueClass: "text-slate-900",
  },
  {
    title: "Total Transaksi",
    value: "0",
    description: "Jumlah nota transaksi terdata",
    icon: Activity,
    iconClass: "bg-blue-50 text-blue-700",
    valueClass: "text-slate-900",
  },
];

export default function KPISection() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {kpis.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs"
          >
            <div className="flex items-center justify-between pb-2">
              <span className="text-sm font-medium text-slate-500">
                {item.title}
              </span>

              <span className={`rounded p-1.5 ${item.iconClass}`}>
                <Icon className="h-4 w-4" />
              </span>
            </div>

            <div className="mt-2">
              <div
                className={`text-2xl font-bold tracking-tight ${item.valueClass}`}
              >
                {item.value}
              </div>

              <p className="mt-1 text-[10px] text-slate-500">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
