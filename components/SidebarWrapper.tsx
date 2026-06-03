"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";

export default function SidebarWrapper({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close sidebar on navigation (mobile)
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="flex h-full">
      {/* Backdrop — mobile only */}
      {open && (
        <div
          className="fixed inset-0 z-20 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar — always visible on md+, drawer on mobile */}
      <div
        className={`
          fixed inset-y-0 left-0 z-30 transition-transform duration-300 ease-in-out
          md:static md:translate-x-0 md:z-auto
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <Sidebar onClose={() => setOpen(false)} />
      </div>

      {/* Main content */}
      <main className="flex-1 flex flex-col h-full overflow-y-auto min-w-0">
        {/* Mobile top bar */}
        <div className="md:hidden flex items-center gap-3 px-4 py-3 bg-[#0a0f1e] border-b border-[#1e2d4a] flex-shrink-0 sticky top-0 z-10">
          <button
            onClick={() => setOpen(true)}
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

        {children}
      </main>
    </div>
  );
}
