"use client";
import { useState } from "react";
import { Video, Slide } from "@/lib/data";

interface SlideViewProps {
  slide: Slide;
  total: number;
}

function SlideCard({ slide, total }: SlideViewProps) {
  return (
    <div className="relative bg-gradient-to-br from-[#0a1628] to-[#0d1f3c] rounded-2xl border border-[#1e3a5f] overflow-hidden">
      {/* Slide header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#1e3a5f] bg-[#0078d4]/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#0078d4] flex items-center justify-center text-white text-xs font-bold">
            {slide.id}
          </div>
          <span className="text-xs text-[#50e6ff] uppercase tracking-widest opacity-60">Slide {slide.id} / {total}</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
      </div>

      {/* Slide content - simulates a presentation slide */}
      <div className="aspect-video flex flex-col justify-center px-12 py-8 relative">
        {/* Background decorative element */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#0078d4]/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#50e6ff]/5 to-transparent rounded-full translate-y-1/2 -translate-x-1/2" />

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight relative z-10">
          {slide.title}
        </h2>

        {/* Bullets */}
        <ul className="space-y-2.5 relative z-10">
          {slide.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#50e6ff] flex-shrink-0" />
              <span className="text-[#a8c8e8] text-sm md:text-base leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Script section */}
      <div className="border-t border-[#1e3a5f] bg-[#050d1a]/60">
        <div className="px-6 py-3 flex items-center gap-2 border-b border-[#1e3a5f]/50">
          <svg className="w-4 h-4 text-[#50e6ff] opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 18.364l-4.243-4.243a8 8 0 010-11.314L12 6.05" />
          </svg>
          <span className="text-xs text-[#50e6ff] uppercase tracking-widest opacity-60 font-semibold">Speaker Script</span>
        </div>
        <div className="px-6 py-5">
          <p className="text-[#8fa8c8] text-sm leading-relaxed italic">
            &ldquo;{slide.script}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}

type Tab = "slides" | "youtube";

export default function VideoPage({ video }: { video: Video }) {
  const [activeTab, setActiveTab] = useState<Tab>("slides");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="flex-1 overflow-y-auto bg-[#060c18]">
      {/* Video header */}
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
          <div className="flex-shrink-0 text-right">
            <div className="text-3xl font-bold text-[#0078d4]">{video.slides.length}</div>
            <div className="text-xs text-[#8fa8c8]">slides</div>
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
              <SlideCard key={slide.id} slide={slide} total={video.slides.length} />
            ))}

            {/* Demo steps if available */}
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
            {/* SEO Title */}
            <AssetCard
              label="SEO Title"
              icon="🎯"
              content={video.youtubeAssets.seoTitle}
              onCopy={() => copy(video.youtubeAssets.seoTitle, "title")}
              copied={copiedField === "title"}
            />

            {/* Thumbnail Text */}
            <AssetCard
              label="Thumbnail Text"
              icon="🖼️"
              content={video.youtubeAssets.thumbnailText}
              onCopy={() => copy(video.youtubeAssets.thumbnailText, "thumb")}
              copied={copiedField === "thumb"}
            />

            {/* Description */}
            <AssetCard
              label="YouTube Description"
              icon="📝"
              content={video.youtubeAssets.description}
              onCopy={() => copy(video.youtubeAssets.description, "desc")}
              copied={copiedField === "desc"}
              multiline
            />

            {/* Chapters */}
            <AssetCard
              label="Chapters / Timestamps"
              icon="⏱️"
              content={video.youtubeAssets.chapters.join("\n")}
              onCopy={() => copy(video.youtubeAssets.chapters.join("\n"), "chapters")}
              copied={copiedField === "chapters"}
              multiline
            />

            {/* Hashtags */}
            <div className="bg-gradient-to-br from-[#0a1628] to-[#0d1f3c] rounded-2xl border border-[#1e3a5f] overflow-hidden">
              <div className="px-6 py-4 border-b border-[#1e3a5f] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span>#️⃣</span>
                  <span className="text-white font-semibold text-sm">Hashtags</span>
                </div>
                <button
                  onClick={() => copy(video.youtubeAssets.hashtags.join(" "), "tags")}
                  className="text-xs px-3 py-1 rounded-lg bg-[#0078d4]/20 text-[#50e6ff] hover:bg-[#0078d4]/40 transition-colors"
                >
                  {copiedField === "tags" ? "Copied!" : "Copy all"}
                </button>
              </div>
              <div className="px-6 py-4 flex flex-wrap gap-2">
                {video.youtubeAssets.hashtags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-[#0078d4]/10 border border-[#0078d4]/20 text-[#50e6ff] text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function AssetCard({
  label,
  icon,
  content,
  onCopy,
  copied,
  multiline = false,
}: {
  label: string;
  icon: string;
  content: string;
  onCopy: () => void;
  copied: boolean;
  multiline?: boolean;
}) {
  return (
    <div className="bg-gradient-to-br from-[#0a1628] to-[#0d1f3c] rounded-2xl border border-[#1e3a5f] overflow-hidden">
      <div className="px-6 py-4 border-b border-[#1e3a5f] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span>{icon}</span>
          <span className="text-white font-semibold text-sm">{label}</span>
        </div>
        <button
          onClick={onCopy}
          className="text-xs px-3 py-1 rounded-lg bg-[#0078d4]/20 text-[#50e6ff] hover:bg-[#0078d4]/40 transition-colors"
        >
          {copied ? "✓ Copied!" : "Copy"}
        </button>
      </div>
      <div className="px-6 py-4">
        {multiline ? (
          <pre className="text-[#8fa8c8] text-sm whitespace-pre-wrap font-sans leading-relaxed">{content}</pre>
        ) : (
          <p className="text-[#8fa8c8] text-sm">{content}</p>
        )}
      </div>
    </div>
  );
}
