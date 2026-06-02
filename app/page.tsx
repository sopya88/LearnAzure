import Link from "next/link";
import { videos } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex-1 bg-[#060c18] px-10 py-12">
      {/* Hero */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0078d4]/20 border border-[#0078d4]/30 mb-5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#50e6ff] animate-pulse" />
          <span className="text-[#50e6ff] text-xs font-semibold tracking-wider uppercase">Azure + AI Series</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-3 leading-tight">
          Your Channel <span className="text-[#0078d4]">Content Studio</span>
        </h1>
        <p className="text-[#8fa8c8] text-lg max-w-xl">
          Every video has presentation slides, speaker scripts, Azure demo steps, and YouTube assets — all in one place.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-12 max-w-lg">
        {[
          { value: videos.length, label: "Videos ready" },
          { value: videos.reduce((a, v) => a + v.slides.length, 0), label: "Total slides" },
          { value: "50", label: "Planned episodes" },
        ].map((stat) => (
          <div key={stat.label} className="bg-[#0a1628] border border-[#1e2d4a] rounded-xl px-5 py-4">
            <div className="text-2xl font-bold text-[#0078d4]">{stat.value}</div>
            <div className="text-xs text-[#8fa8c8] mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Video grid */}
      <div>
        <h2 className="text-sm font-semibold text-[#50e6ff] uppercase tracking-widest mb-5 opacity-60">
          Azure Fundamentals Series
        </h2>
        <div className="grid gap-4 max-w-3xl">
          {videos.map((video) => (
            <Link
              key={video.id}
              href={`/video/${video.id}`}
              className="group flex items-center gap-5 bg-[#0a1628] hover:bg-[#0d1f3c] border border-[#1e2d4a] hover:border-[#0078d4]/40 rounded-2xl px-6 py-5 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0078d4] to-[#50e6ff]/50 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                {video.episode}
              </div>
              <div className="flex-1">
                <div className="text-white font-semibold group-hover:text-[#50e6ff] transition-colors">
                  {video.title}
                </div>
                <div className="text-[#8fa8c8] text-sm mt-0.5">{video.description}</div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-sm font-semibold text-[#0078d4]">{video.slides.length}</div>
                <div className="text-xs text-[#8fa8c8]">slides</div>
              </div>
              <svg className="w-5 h-5 text-[#8fa8c8] group-hover:text-[#50e6ff] transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
