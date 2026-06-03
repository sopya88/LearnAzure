import Link from "next/link";
import { videos, getVideoByCourse } from "@/lib/data";
import CourseProgressBar from "@/components/CourseProgressBar";

const cloudVideos = getVideoByCourse("Azure Cloud");
const aiVideos = getVideoByCourse("Azure AI");

const COURSES = [
  {
    id: "Azure Cloud",
    title: "Azure Cloud Engineering",
    subtitle: "Infrastructure · DevOps · Security · Architecture",
    cert: "AZ-900 → AZ-104 → AZ-204",
    color: "#0078d4",
    glow: "from-[#0078d4]/30 to-[#50e6ff]/10",
    border: "border-[#0078d4]/30 hover:border-[#0078d4]/60",
    badge: "bg-[#0078d4]/20 text-[#50e6ff]",
    episodes: cloudVideos,
    icon: "☁",
    description:
      "Master Azure infrastructure from VMs, networking, and identity to AKS, DevOps pipelines, IaC with Bicep, and enterprise Landing Zones.",
  },
  {
    id: "Azure AI",
    title: "Azure AI Engineering",
    subtitle: "AI Foundry · OpenAI · ML · RAG · Copilot",
    cert: "AI-900 → AI-102",
    color: "#7c3aed",
    glow: "from-[#7c3aed]/30 to-[#a78bfa]/10",
    border: "border-[#7c3aed]/30 hover:border-[#7c3aed]/60",
    badge: "bg-[#7c3aed]/20 text-[#a78bfa]",
    episodes: aiVideos,
    icon: "🤖",
    description:
      "Build production AI applications with Azure AI Foundry, OpenAI, RAG, Copilot Studio, fine-tuning, and responsible AI — all on Azure.",
  },
];

export default function Home() {
  const totalSlides = videos.reduce((a, v) => a + v.slides.length, 0);

  return (
    <div className="flex-1 bg-[#060c18] px-4 md:px-10 py-8 md:py-12">
      {/* Hero */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0078d4]/20 border border-[#0078d4]/30 mb-5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#50e6ff] animate-pulse" />
          <span className="text-[#50e6ff] text-xs font-semibold tracking-wider uppercase">
            Azure + AI Series
          </span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-3 leading-tight">
          Your Channel <span className="text-[#0078d4]">Content Studio</span>
        </h1>
        <p className="text-[#8fa8c8] text-lg max-w-xl">
          Two complete courses — slides, speaker scripts, demo steps, and YouTube assets for every episode.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 md:mb-12 max-w-xl">
        {[
          { value: "2", label: "Courses" },
          { value: videos.length, label: "Episodes" },
          { value: totalSlides, label: "Slides" },
          { value: "58", label: "Completed" },
        ].map((stat) => (
          <div key={stat.label} className="bg-[#0a1628] border border-[#1e2d4a] rounded-xl px-4 py-4">
            <div className="text-2xl font-bold text-[#0078d4]">{stat.value}</div>
            <div className="text-xs text-[#8fa8c8] mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Course cards */}
      <div className="grid grid-cols-1 gap-5 md:gap-6 max-w-3xl mb-10 md:mb-12">
        {COURSES.map((course) => (
          <div
            key={course.id}
            className={`relative bg-gradient-to-br ${course.glow} bg-[#0a1628] border ${course.border} rounded-2xl p-5 md:p-7 transition-all`}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-2xl">{course.icon}</span>
                  <h2 className="text-xl font-bold text-white">{course.title}</h2>
                </div>
                <p className="text-sm text-[#8fa8c8]">{course.subtitle}</p>
              </div>
              <div className={`text-xs font-semibold px-3 py-1.5 rounded-full ${course.badge} flex-shrink-0`}>
                {course.episodes.length} episodes
              </div>
            </div>

            <p className="text-[#8fa8c8] text-sm mb-5 leading-relaxed">{course.description}</p>

            {/* Cert badge */}
            <div className="flex items-center gap-2 mb-5">
              <span className="text-[10px] text-[#8fa8c8] opacity-50 uppercase tracking-widest">Certifications</span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white/5 text-white border border-white/10">
                {course.cert}
              </span>
            </div>

            {/* First 5 episodes preview */}
            <div className="space-y-1.5 mb-5">
              {course.episodes.slice(0, 5).map((video, i) => (
                <Link
                  key={video.id}
                  href={`/video/${video.id}`}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition-all group"
                >
                  <span
                    className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                    style={{ background: course.color + "33", color: course.color }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-sm text-[#8fa8c8] group-hover:text-white transition-colors truncate">
                    {video.title}
                  </span>
                </Link>
              ))}
              {course.episodes.length > 5 && (
                <p className="text-xs text-[#8fa8c8] opacity-40 px-3 py-1">
                  + {course.episodes.length - 5} more episodes in sidebar →
                </p>
              )}
            </div>

            {/* Progress bar */}
            <CourseProgressBar
              course={course.id as "Azure Cloud" | "Azure AI"}
              episodeIds={course.episodes.map((e) => e.id)}
            />

            {/* CTA */}
            <div className="mt-4">
              <Link
                href={`/video/${course.episodes[0]?.id}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all"
                style={{ background: course.color }}
              >
                Start {course.id} Course
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
