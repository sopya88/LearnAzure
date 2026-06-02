"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { videos } from "@/lib/data";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 min-h-screen bg-[#0a0f1e] border-r border-[#1e2d4a] flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-[#1e2d4a]">
        <Link href="/" className="block">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0078d4] to-[#50e6ff] flex items-center justify-center text-white font-bold text-sm">
              Az
            </div>
            <div>
              <div className="text-white font-semibold text-sm leading-tight">Azure + AI</div>
              <div className="text-[#50e6ff] text-xs opacity-70">Content Studio</div>
            </div>
          </div>
        </Link>
      </div>

      {/* Series label */}
      <div className="px-6 pt-5 pb-2">
        <span className="text-xs font-semibold tracking-widest text-[#50e6ff] uppercase opacity-60">
          Azure Fundamentals
        </span>
      </div>

      {/* Video list */}
      <nav className="flex-1 px-3 pb-6 overflow-y-auto">
        {videos.map((video) => {
          const isActive = pathname === `/video/${video.id}`;
          return (
            <Link
              key={video.id}
              href={`/video/${video.id}`}
              className={`block rounded-xl px-4 py-3 mb-1 transition-all group ${
                isActive
                  ? "bg-gradient-to-r from-[#0078d4]/30 to-[#50e6ff]/10 border border-[#0078d4]/40"
                  : "hover:bg-white/5 border border-transparent"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`mt-0.5 w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center text-xs font-bold ${
                    isActive
                      ? "bg-[#0078d4] text-white"
                      : "bg-[#1e2d4a] text-[#50e6ff] group-hover:bg-[#0078d4]/30"
                  }`}
                >
                  {video.episode}
                </div>
                <div>
                  <div
                    className={`text-sm font-medium leading-snug ${
                      isActive ? "text-white" : "text-[#8fa8c8] group-hover:text-white"
                    }`}
                  >
                    {video.title}
                  </div>
                  <div className="text-xs text-[#50e6ff] opacity-40 mt-0.5">
                    {video.slides.length} slides
                  </div>
                </div>
              </div>
            </Link>
          );
        })}

        {/* Coming soon placeholder */}
        <div className="mt-4 px-4 py-3 rounded-xl border border-dashed border-[#1e2d4a]">
          <div className="text-xs text-[#8fa8c8] opacity-40 text-center">More videos coming soon...</div>
        </div>
      </nav>
    </aside>
  );
}
