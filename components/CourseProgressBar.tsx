"use client";
import { useProgress } from "@/lib/useProgress";
import { CourseType } from "@/lib/data";

interface Props {
  course: CourseType;
  episodeIds: number[];
}

export default function CourseProgressBar({ course, episodeIds }: Props) {
  const { completed, mounted } = useProgress();

  if (!mounted) return null;

  const done = episodeIds.filter((id) => completed.has(id)).length;
  const total = episodeIds.length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  const accent = course === "Azure Cloud" ? "#0078d4" : "#7c3aed";
  const light = course === "Azure Cloud" ? "#50e6ff" : "#a78bfa";

  return (
    <div className="mt-4 mb-1">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs text-[#8fa8c8] opacity-60">Your progress</span>
        <span className="text-xs font-semibold" style={{ color: light }}>
          {done}/{total} completed
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-[#1e2d4a] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${accent}, ${light})` }}
        />
      </div>
      {done === total && total > 0 && (
        <p className="text-xs mt-1.5 font-semibold" style={{ color: light }}>
          🎉 Course complete!
        </p>
      )}
    </div>
  );
}
