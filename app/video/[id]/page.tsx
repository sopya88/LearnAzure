import { getVideo, videos, courseMap } from "@/lib/data";
import { notFound } from "next/navigation";
import VideoPage from "@/components/VideoPage";

export function generateStaticParams() {
  return videos.map((v) => ({ id: String(v.id) }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const video = getVideo(Number(id));
  if (!video) notFound();
  const course = courseMap[video.id] ?? "Azure Cloud";
  return <VideoPage video={video} course={course} />;
}
