import { ChartColumn, HandCoins, Users, FileText } from "lucide-react";

import { NavLink } from "react-router-dom";

const menus = [
  {
    title: "Dashboard",
    path: "/",
    icon: ChartColumn,
  },
  {
    title: "Transaksi",
    path: "/transactions",
    icon: HandCoins,
  },
  {
    title: "Mitra",
    path: "/partners",
    icon: Users,
  },
  {
    title: "Laporan",
    path: "/reports",
    icon: FileText,
  },
];

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-white">
      {/* Logo */}

      <div className="border-b px-6 py-6">
        <h1 className="text-xl font-bold text-emerald-600">Oil Investment</h1>

        <p className="text-sm text-slate-500">Management</p>
      </div>

      {/* Navigation */}

      <nav className="flex-1 p-4">
        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <NavLink
              key={menu.path}
              to={menu.path}
              end={menu.path === "/"}
              className={({ isActive }) =>
                [
                  "mb-2 flex items-center gap-3 rounded-xl px-4 py-3 transition-all",
                  isActive
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100",
                ].join(" ")
              }
            >
              <Icon size={20} />

              <span className="font-medium">{menu.title}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
