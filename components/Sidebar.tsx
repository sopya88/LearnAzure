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
            <img
              src="/avatar.jpg"
              alt="Swapnil Dongare"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-[#0078d4]/60 flex-shrink-0"
            />
            <div className="min-w-0 flex-1">
              <div className="text-white font-semibold text-sm leading-tight">Azure + AI</div>
              <div className="text-[#50e6ff] text-xs opacity-60 mb-1">Content Studio</div>
              <div className="flex items-center gap-1.5" onClick={(e) => e.preventDefault()}>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/swapnil-dongare-7b630a36/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-[#0a66c2]/20 hover:bg-[#0a66c2]/40 transition-all"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg className="w-3 h-3 text-[#0a66c2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-[10px] text-[#0a66c2] font-semibold">in</span>
                </a>
                {/* Website */}
                <a
                  href="https://www.itcareermentorship.in/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Website"
                  className="flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-[#0078d4]/20 hover:bg-[#0078d4]/40 transition-all"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg className="w-3 h-3 text-[#50e6ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <span className="text-[10px] text-[#50e6ff] font-semibold">web</span>
                </a>
              </div>
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
