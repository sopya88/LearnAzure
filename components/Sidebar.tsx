"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { videos, courseMap, CourseType } from "@/lib/data";

const COURSES: { id: CourseType; label: string; shortLabel: string; color: string; cert: string }[] = [
  {
    id: "Azure Cloud",
    label: "Azure Cloud",
    shortLabel: "Cloud",
    color: "#0078d4",
    cert: "AZ-900 · AZ-104 · AZ-204",
  },
  {
    id: "Azure AI",
    label: "Azure AI",
    shortLabel: "AI",
    color: "#7c3aed",
    cert: "AI-900 · AI-102",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [activeCourse, setActiveCourse] = useState<CourseType>("Azure Cloud");

  // Auto-switch course tab when navigating to a video
  useEffect(() => {
    const activeVideo = videos.find((v) => pathname === `/video/${v.id}`);
    if (activeVideo && courseMap[activeVideo.id]) {
      setActiveCourse(courseMap[activeVideo.id]);
    }
  }, [pathname]);

  const courseVideos = videos.filter((v) => courseMap[v.id] === activeCourse);
  const course = COURSES.find((c) => c.id === activeCourse)!;

  return (
    <aside className="w-72 h-screen sticky top-0 bg-[#0a0f1e] border-r border-[#1e2d4a] flex flex-col overflow-hidden">
      {/* Logo */}
      <div className="p-5 border-b border-[#1e2d4a]">
        <Link href="/" className="block">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0078d4] to-[#50e6ff] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              Az
            </div>
            <div>
              <div className="text-white font-semibold text-sm leading-tight">Azure + AI</div>
              <div className="text-[#50e6ff] text-xs opacity-60">Content Studio</div>
            </div>
          </div>
        </Link>
      </div>

      {/* Course switcher */}
      <div className="px-3 pt-4 pb-3">
        <p className="text-[#8fa8c8] text-[10px] font-semibold uppercase tracking-widest opacity-50 mb-2 px-1">
          Select Course
        </p>
        <div className="flex gap-2">
          {COURSES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCourse(c.id)}
              className={`flex-1 py-2.5 px-2 rounded-xl text-xs font-semibold transition-all border ${
                activeCourse === c.id
                  ? c.id === "Azure Cloud"
                    ? "bg-[#0078d4] text-white border-[#0078d4]"
                    : "bg-[#7c3aed] text-white border-[#7c3aed]"
                  : "bg-[#111827] text-[#8fa8c8] border-[#1e2d4a] hover:border-[#0078d4]/40 hover:text-white"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
        {/* Course meta */}
        <div className="mt-2 px-1 flex items-center justify-between">
          <span className="text-[10px] text-[#8fa8c8] opacity-50">{course.cert}</span>
          <span
            className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
            style={{ background: course.color + "22", color: course.color }}
          >
            {courseVideos.length} episodes
          </span>
        </div>
      </div>

      <div className="h-px bg-[#1e2d4a] mx-4 mb-1" />

      {/* Video list */}
      <nav className="flex-1 px-3 pb-6 overflow-y-auto">
        {courseVideos.map((video, index) => {
          const isActive = pathname === `/video/${video.id}`;
          const epNum = index + 1;
          const accentColor = activeCourse === "Azure Cloud" ? "#0078d4" : "#7c3aed";
          return (
            <Link
              key={video.id}
              href={`/video/${video.id}`}
              className={`block rounded-xl px-3 py-2.5 mb-0.5 transition-all group border ${
                isActive
                  ? activeCourse === "Azure Cloud"
                    ? "bg-[#0078d4]/20 border-[#0078d4]/40"
                    : "bg-[#7c3aed]/20 border-[#7c3aed]/40"
                  : "hover:bg-white/5 border-transparent"
              }`}
            >
              <div className="flex items-start gap-2.5">
                <div
                  className="mt-0.5 w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center text-[10px] font-bold transition-colors"
                  style={
                    isActive
                      ? { background: accentColor, color: "#fff" }
                      : { background: "#1e2d4a", color: accentColor }
                  }
                >
                  {epNum}
                </div>
                <div className="min-w-0">
                  <div
                    className={`text-xs font-medium leading-snug truncate ${
                      isActive ? "text-white" : "text-[#8fa8c8] group-hover:text-white"
                    }`}
                  >
                    {video.title}
                  </div>
                  <div className="text-[10px] opacity-40 mt-0.5" style={{ color: accentColor }}>
                    {video.slides.length} slides
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
