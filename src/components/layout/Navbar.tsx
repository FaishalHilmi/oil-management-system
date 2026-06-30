import { Droplet, Menu } from "lucide-react";
import { useLayoutStore } from "@/store/layout.store";

export default function Navbar() {
  const toggleSidebar = useLayoutStore((state) => state.toggleSidebar);

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 md:hidden">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center rounded bg-slate-900 p-1.5">
          <Droplet className="h-4 w-4 fill-amber-500 text-amber-500" />
        </div>

        <span className="text-sm font-bold tracking-tight">JuraganMinyak</span>
      </div>

      <button
        type="button"
        onClick={toggleSidebar}
        className="rounded-md p-2 text-slate-700 transition-colors hover:bg-slate-100"
      >
        <Menu className="h-6 w-6" />
      </button>
    </header>
  );
}
