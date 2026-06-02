"use client";
import { useState } from "react";
import { Video, Slide } from "@/lib/data";

function SlideCard({ slide, total }: { slide: Slide; total: number }) {
  return (
    <div className="relative bg-gradient-to-br from-[#0a1628] to-[#0d1f3c] rounded-2xl border border-[#1e3a5f] overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#1e3a5f] bg-[#0078d4]/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#0078d4] flex items-center justify-center text-white text-xs font-bold">
            {slide.id}
          </div>
          <span className="text-xs text-[#50e6ff] uppercase tracking-widest opacity-60">
            Slide {slide.id} / {total}
          </span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
      </div>

      <div className="aspect-video flex flex-col justify-center px-12 py-8 relative">
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#0078d4]/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#50e6ff]/5 to-transparent rounded-full translate-y-1/2 -translate-x-1/2" />
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight relative z-10">
          {slide.title}
        </h2>
        <ul className="space-y-2.5 relative z-10">
          {slide.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#50e6ff] flex-shrink-0" />
              <span className="text-[#a8c8e8] text-sm md:text-base leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ScriptPanel({ slides }: { slides: Slide[] }) {
  return (
    <div className="flex flex-col gap-4">
      {slides.map((slide) => (
        <div key={slide.id} className="bg-[#050d1a] border border-[#1e3a5f] rounded-xl overflow-hidden">
          <div className="px-4 py-2.5 border-b border-[#1e3a5f]/50 flex items-center gap-2 bg-[#0078d4]/5">
            <div className="w-5 h-5 rounded-md bg-[#0078d4] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              {slide.id}
            </div>
            <span className="text-xs text-[#50e6ff] font-semibold truncate">{slide.title}</span>
          </div>
          <div className="px-4 py-3">
            <p className="text-[#8fa8c8] text-xs leading-relaxed italic">&ldquo;{slide.script}&rdquo;</p>
          </div>
        </div>
      ))}
    </div>
  );
}

type Tab = "slides" | "youtube";

export default function VideoPage({ video }: { video: Video }) {
  const [activeTab, setActiveTab] = useState<Tab>("slides");
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [presentMode, setPresentMode] = useState(false);

  const copy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const popOutScript = () => {
    const win = window.open("", "speaker-script", "width=480,height=900,left=1440,top=0");
    if (!win) return;
    const html = `<!DOCTYPE html><html><head><title>Speaker Script — ${video.title}</title>
<style>
  body{margin:0;background:#050d1a;color:#8fa8c8;font-family:system-ui,sans-serif;padding:16px;}
  h1{color:#50e6ff;font-size:14px;margin:0 0 16px;border-bottom:1px solid #1e3a5f;padding-bottom:10px;}
  .card{background:#0a1628;border:1px solid #1e3a5f;border-radius:10px;margin-bottom:12px;overflow:hidden;}
  .card-header{padding:8px 12px;background:#0078d420;border-bottom:1px solid #1e3a5f;display:flex;align-items:center;gap:8px;}
  .num{background:#0078d4;color:#fff;font-size:11px;font-weight:700;width:20px;height:20px;border-radius:5px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .title{color:#50e6ff;font-size:12px;font-weight:600;}
  .script{padding:10px 12px;font-size:13px;line-height:1.7;font-style:italic;}
</style></head><body>
<h1>🎙 Speaker Script — ${video.title}</h1>
${video.slides.map((s) => `<div class="card"><div class="card-header"><div class="num">${s.id}</div><div class="title">${s.title}</div></div><div class="script">"${s.script}"</div></div>`).join("")}
</body></html>`;
    win.document.write(html);
    win.document.close();
  };

  return (
    <div className="flex-1 overflow-y-auto bg-[#060c18]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0a1628] to-[#0d1f3c] border-b border-[#1e2d4a] px-8 py-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#0078d4]/20 text-[#50e6ff] text-xs font-semibold border border-[#0078d4]/30">
                Episode {video.episode}
              </span>
              <span className="text-[#8fa8c8] text-xs">{video.series}</span>
            </div>
            <h1 className="text-2xl font-bold text-white leading-tight">{video.title}</h1>
            <p className="text-[#8fa8c8] text-sm mt-1.5">{video.description}</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Pop-out script button */}
            <button
              onClick={popOutScript}
              title="Open script in separate window"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-[#1e2d4a] text-[#50e6ff] hover:bg-[#0078d4]/20 border border-[#1e3a5f] transition-all"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Script
            </button>
            {/* Present mode toggle */}
            <button
              onClick={() => setPresentMode((p) => !p)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border transition-all ${
                presentMode
                  ? "bg-[#0078d4] text-white border-[#0078d4]"
                  : "bg-[#1e2d4a] text-[#8fa8c8] hover:text-white border-[#1e3a5f] hover:border-[#0078d4]/40"
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
              </svg>
              {presentMode ? "Exit Present" : "Present Mode"}
            </button>
            <div className="text-right ml-2">
              <div className="text-3xl font-bold text-[#0078d4]">{video.slides.length}</div>
              <div className="text-xs text-[#8fa8c8]">slides</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mt-5">
          {(["slides", "youtube"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
                activeTab === tab
                  ? "bg-[#0078d4] text-white"
                  : "text-[#8fa8c8] hover:text-white hover:bg-white/5"
              }`}
            >
              {tab === "slides" ? "📊 Slides & Script" : "🎬 YouTube Assets"}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-8 py-8">
        {activeTab === "slides" && (
          <div className="space-y-6">
            {video.slides.map((slide) => (
              <div key={slide.id} className="flex gap-4 items-stretch">
                {/* Slide */}
                <div className={`transition-all duration-300 ${presentMode ? "w-full" : "flex-[2]"}`}>
                  <SlideCard slide={slide} total={video.slides.length} />
                </div>
                {/* Script — hidden in present mode */}
                {!presentMode && (
                  <div className="flex-[1] min-w-[240px] bg-[#050d1a] border border-[#1e3a5f] rounded-2xl overflow-hidden flex flex-col">
                    <div className="px-4 py-3 border-b border-[#1e3a5f]/50 flex items-center gap-2 bg-[#0078d4]/5">
                      <svg className="w-3.5 h-3.5 text-[#50e6ff] opacity-60 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                      <span className="text-xs text-[#50e6ff] uppercase tracking-widest opacity-60 font-semibold">Speaker Script</span>
                    </div>
                    <div className="px-5 py-4 flex-1 flex items-center">
                      <p className="text-[#8fa8c8] text-sm leading-relaxed italic">&ldquo;{slide.script}&rdquo;</p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {video.demoSteps && (
              <div className="bg-gradient-to-br from-[#0a1628] to-[#0d1f3c] rounded-2xl border border-[#1e3a5f] overflow-hidden">
                <div className="px-6 py-4 border-b border-[#1e3a5f] flex items-center gap-3">
                  <span className="text-lg">🖥️</span>
                  <span className="text-white font-semibold">Azure Demo Steps</span>
                </div>
                <div className="px-6 py-5">
                  <ol className="space-y-3">
                    {video.demoSteps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0078d4]/20 border border-[#0078d4]/40 text-[#50e6ff] text-xs font-bold flex items-center justify-center mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-[#8fa8c8] text-sm">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "youtube" && (
          <div className="space-y-5 max-w-3xl">
            <AssetCard label="SEO Title" icon="🎯" content={video.youtubeAssets.seoTitle} onCopy={() => copy(video.youtubeAssets.seoTitle, "title")} copied={copiedField === "title"} />
            <AssetCard label="Thumbnail Text" icon="🖼️" content={video.youtubeAssets.thumbnailText} onCopy={() => copy(video.youtubeAssets.thumbnailText, "thumb")} copied={copiedField === "thumb"} />
            <AssetCard label="YouTube Description" icon="📝" content={video.youtubeAssets.description} onCopy={() => copy(video.youtubeAssets.description, "desc")} copied={copiedField === "desc"} multiline />
            <AssetCard label="Chapters / Timestamps" icon="⏱️" content={video.youtubeAssets.chapters.join("\n")} onCopy={() => copy(video.youtubeAssets.chapters.join("\n"), "chapters")} copied={copiedField === "chapters"} multiline />

            <div className="bg-gradient-to-br from-[#0a1628] to-[#0d1f3c] rounded-2xl border border-[#1e3a5f] overflow-hidden">
              <div className="px-6 py-4 border-b border-[#1e3a5f] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span>#️⃣</span>
                  <span className="text-white font-semibold text-sm">Hashtags</span>
                </div>
                <button onClick={() => copy(video.youtubeAssets.hashtags.join(" "), "tags")} className="text-xs px-3 py-1 rounded-lg bg-[#0078d4]/20 text-[#50e6ff] hover:bg-[#0078d4]/40 transition-colors">
                  {copiedField === "tags" ? "Copied!" : "Copy all"}
                </button>
              </div>
              <div className="px-6 py-4 flex flex-wrap gap-2">
                {video.youtubeAssets.hashtags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-[#0078d4]/10 border border-[#0078d4]/20 text-[#50e6ff] text-xs font-medium">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function AssetCard({ label, icon, content, onCopy, copied, multiline = false }: {
  label: string; icon: string; content: string; onCopy: () => void; copied: boolean; multiline?: boolean;
}) {
  return (
    <div className="bg-gradient-to-br from-[#0a1628] to-[#0d1f3c] rounded-2xl border border-[#1e3a5f] overflow-hidden">
      <div className="px-6 py-4 border-b border-[#1e3a5f] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span>{icon}</span>
          <span className="text-white font-semibold text-sm">{label}</span>
        </div>
        <button onClick={onCopy} className="text-xs px-3 py-1 rounded-lg bg-[#0078d4]/20 text-[#50e6ff] hover:bg-[#0078d4]/40 transition-colors">
          {copied ? "✓ Copied!" : "Copy"}
        </button>
      </div>
      <div className="px-6 py-4">
        {multiline
          ? <pre className="text-[#8fa8c8] text-sm whitespace-pre-wrap font-sans leading-relaxed">{content}</pre>
          : <p className="text-[#8fa8c8] text-sm">{content}</p>}
      </div>
    </div>
  );
}
