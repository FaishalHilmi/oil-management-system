import { useLayoutStore } from "@/store/layout.store";
import {
  ArrowLeftRight,
  Droplet,
  FilePieChart,
  LayoutDashboard,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menus = [
  {
    title: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Transaksi",
    path: "/transactions",
    icon: ArrowLeftRight,
  },
  {
    title: "Mitra Saya",
    path: "/partners",
    icon: Users,
  },
  {
    title: "Laporan Final",
    path: "/reports",
    icon: FilePieChart,
  },
];

export default function Sidebar() {
  const isSidebarOpen = useLayoutStore((state) => state.isSidebarOpen);
  return (
    <aside
      className={`
        fixed left-0 top-16 z-30 h-[calc(100vh-4rem)] w-64 flex-col
        border-r border-slate-200 bg-white
        md:sticky md:top-0 md:flex md:h-screen
        ${isSidebarOpen ? "flex" : "hidden"}
      `}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          {/* Logo */}

          <div className="hidden h-16 items-center gap-2 border-b border-slate-100 px-6 md:flex">
            <div className="flex items-center justify-center rounded bg-slate-900 p-1.5">
              <Droplet className="h-5 w-5 fill-amber-500 text-amber-500" />
            </div>

            <div>
              <h1 className="text-sm font-bold tracking-tight">
                JuraganMinyak
              </h1>

              <p className="text-[10px] font-medium text-slate-500">
                Sistem Pemantauan Modal
              </p>
            </div>
          </div>

          {/* Menu */}

          <nav className="space-y-1 p-4">
            {menus.map((menu) => {
              const Icon = menu.icon;

              return (
                <NavLink
                  key={menu.path}
                  to={menu.path}
                  end={menu.path === "/"}
                  className={({ isActive }) =>
                    `flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-slate-100 text-slate-900"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`
                  }
                >
                  <Icon className="h-4 w-4 text-slate-500" />

                  <span>{menu.title}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Footer */}

        <div className="border-slate-150 bg-slate-50/50 p-4">
          <div className="flex items-center gap-3 rounded-lg border border-slate-100 bg-white p-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-sm font-bold text-slate-700">
              I
            </div>

            <div className="overflow-hidden">
              <p className="truncate text-xs font-semibold text-slate-900">
                Investor Utama
              </p>

              <span className="flex items-center gap-1 text-[10px] font-medium text-emerald-600">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                Apps Script Mode
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
