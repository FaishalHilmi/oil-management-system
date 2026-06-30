// src/stores/layout.store.ts

import { create } from "zustand";

interface LayoutStore {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  openSidebar: () => void;
  closeSidebar: () => void;
}

export const useLayoutStore = create<LayoutStore>((set) => ({
  isSidebarOpen: false,

  toggleSidebar: () =>
    set((state) => ({
      isSidebarOpen: !state.isSidebarOpen,
    })),

  openSidebar: () =>
    set({
      isSidebarOpen: true,
    }),

  closeSidebar: () =>
    set({
      isSidebarOpen: false,
    }),
}));
