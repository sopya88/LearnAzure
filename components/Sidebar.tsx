"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { videos, courseMap, CourseType } from "@/lib/data";
import { useProgress } from "@/lib/useProgress";

const COURSES: {
  id: CourseType; label: string; accent: string; light: string; cert: string;
}[] = [
  { id: "Azure Cloud", label: "Azure Cloud", accent: "#0078d4", light: "#50e6ff", cert: "AZ-900 · AZ-104 · AZ-204" },
  { id: "Azure AI",    label: "Azure AI",    accent: "#7c3aed", light: "#a78bfa", cert: "AI-900 · AI-102" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [activeCourse, setActiveCourse] = useState<CourseType>("Azure Cloud");
  const { completed, mounted } = useProgress();

  // Auto-switch course when navigating to a video
  useEffect(() => {
    const activeVideo = videos.find((v) => pathname === `/video/${v.id}`);
    if (activeVideo && courseMap[activeVideo.id]) {
      setActiveCourse(courseMap[activeVideo.id]);
    }
  }, [pathname]);

  const course      = COURSES.find((c) => c.id === activeCourse)!;
  const courseVids  = videos.filter((v) => courseMap[v.id] === activeCourse);
  const doneCount   = mounted ? courseVids.filter((v) => completed.has(v.id)).length : 0;
  const pct         = courseVids.length > 0 ? Math.round((doneCount / courseVids.length) * 100) : 0;

  return (
    <aside className="w-72 h-screen sticky top-0 bg-[#0a0f1e] border-r border-[#1e2d4a] flex flex-col overflow-hidden" data-no-print>
      {/* Logo */}
      <div className="p-5 border-b border-[#1e2d4a] flex-shrink-0">
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
      <div className="px-3 pt-4 pb-1 flex-shrink-0">
        <p className="text-[#8fa8c8] text-[10px] font-semibold uppercase tracking-widest opacity-50 mb-2 px-1">
          Course
        </p>
        <div className="flex gap-2">
          {COURSES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCourse(c.id)}
              className="flex-1 py-2.5 px-2 rounded-xl text-xs font-semibold transition-all border"
              style={
                activeCourse === c.id
                  ? { background: c.accent, color: "#fff", borderColor: c.accent }
                  : { background: "#111827", color: "#8fa8c8", borderColor: "#1e2d4a" }
              }
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Cert + episode count */}
        <div className="mt-2 px-1 flex items-center justify-between">
          <span className="text-[10px] text-[#8fa8c8] opacity-50">{course.cert}</span>
          <span
            className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
            style={{ background: course.accent + "22", color: course.accent }}
          >
            {courseVids.length} ep
          </span>
        </div>

        {/* Progress bar */}
        <div className="mt-2 px-1">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] text-[#8fa8c8] opacity-50">Progress</span>
            <span className="text-[10px] font-semibold" style={{ color: course.light }}>
              {mounted ? `${doneCount}/${courseVids.length}` : "—"}{mounted && doneCount === courseVids.length && courseVids.length > 0 ? " 🎉" : ""}
            </span>
          </div>
          <div className="h-1 rounded-full bg-[#1e2d4a] overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: mounted ? `${pct}%` : "0%",
                background: `linear-gradient(90deg, ${course.accent}, ${course.light})`,
              }}
            />
          </div>
        </div>
      </div>

      <div className="h-px bg-[#1e2d4a] mx-4 my-2 flex-shrink-0" />

      {/* Video list */}
      <nav className="flex-1 px-3 pb-6 overflow-y-auto">
        {courseVids.map((video, index) => {
          const isActive    = pathname === `/video/${video.id}`;
          const isDone      = mounted && completed.has(video.id);
          const epNum       = index + 1;

          return (
            <Link
              key={video.id}
              href={`/video/${video.id}`}
              className="block rounded-xl px-3 py-2.5 mb-0.5 transition-all group border"
              style={
                isActive
                  ? { background: course.accent + "20", borderColor: course.accent + "50" }
                  : { borderColor: "transparent" }
              }
            >
              <div className="flex items-start gap-2.5">
                {/* Episode number */}
                <div
                  className="mt-0.5 w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center text-[10px] font-bold transition-colors"
                  style={
                    isActive
                      ? { background: course.accent, color: "#fff" }
                      : { background: "#1e2d4a", color: course.accent }
                  }
                >
                  {epNum}
                </div>

                {/* Title */}
                <div className="min-w-0 flex-1">
                  <div
                    className="text-xs font-medium leading-snug truncate transition-colors"
                    style={{ color: isActive ? "#fff" : "#8fa8c8" }}
                  >
                    {video.title}
                  </div>
                  <div className="text-[10px] opacity-40 mt-0.5" style={{ color: course.accent }}>
                    {video.slides.length} slides
                  </div>
                </div>

                {/* Checkmark if done */}
                {isDone && (
                  <svg
                    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                    style={{ color: "#22c55e" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
