import { useLocation } from "react-router-dom";

const titles: Record<string, string> = {
  "/": "Dashboard",
  "/transactions": "Transaksi",
  "/partners": "Mitra",
  "/reports": "Laporan",
};

export default function Header() {
  const location = useLocation();

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-8">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          {titles[location.pathname] ?? "Dashboard"}
        </h1>
      </div>

      <div className="text-sm text-slate-500">Administrator</div>
    </header>
  );
}
