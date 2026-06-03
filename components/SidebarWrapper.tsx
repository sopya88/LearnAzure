"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";

export default function SidebarWrapper({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(true);
  const pathname = usePathname();

  // Close mobile drawer on navigation
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Escape closes mobile drawer
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="flex h-full">

      {/* ── Mobile backdrop ──────────────────────────────────── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ── Sidebar ──────────────────────────────────────────── */}
      {/* Mobile: slide-in drawer */}
      <div
        className={`
          fixed inset-y-0 left-0 z-30 transition-transform duration-300 ease-in-out
          md:hidden
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <Sidebar onClose={() => setMobileOpen(false)} />
      </div>

      {/* Desktop: collapsible panel */}
      <div
        className={`
          hidden md:block flex-shrink-0 transition-all duration-300 ease-in-out overflow-hidden
          ${desktopOpen ? "w-72" : "w-0"}
        `}
      >
        <Sidebar />
      </div>

      {/* ── Main content ─────────────────────────────────────── */}
      <main className="flex-1 flex flex-col h-full overflow-y-auto min-w-0">

        {/* Mobile top bar */}
        <div className="md:hidden flex items-center gap-3 px-4 py-3 bg-[#0a0f1e] border-b border-[#1e2d4a] flex-shrink-0 sticky top-0 z-10">
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 rounded-lg bg-[#1e2d4a] text-[#8fa8c8] hover:text-white hover:bg-[#0078d4]/30 transition-all"
            aria-label="Open menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <img src="/avatar.jpg" alt="Swapnil" className="w-7 h-7 rounded-full object-cover ring-1 ring-[#0078d4]/60" />
            <span className="text-white font-semibold text-sm">Swapnil's Studio</span>
          </div>
        </div>

        {/* Desktop toggle button — fixed to left edge when sidebar is hidden */}
        <button
          onClick={() => setDesktopOpen((o) => !o)}
          className="hidden md:flex items-center justify-center fixed left-0 top-1/2 -translate-y-1/2 z-40 w-5 h-12 rounded-r-lg bg-[#1e2d4a] hover:bg-[#0078d4] text-[#8fa8c8] hover:text-white transition-all border-y border-r border-[#1e3a5f] hover:border-[#0078d4] shadow-lg"
          aria-label={desktopOpen ? "Collapse sidebar" : "Expand sidebar"}
          style={{ left: desktopOpen ? "288px" : "0px" }}
        >
          <svg
            className={`w-3 h-3 transition-transform duration-300 ${desktopOpen ? "" : "rotate-180"}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {children}
      </main>
    </div>
  );
}
