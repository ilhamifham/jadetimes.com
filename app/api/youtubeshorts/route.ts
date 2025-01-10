import { NextResponse } from "next/server";

export async function GET() {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=UUSHh3RLLVBaEeBRRZBbnnVWWA&key=${API_KEY}`,
    { cache: "no-store" }
  );
  const data = await response.json();
  const videos = data.items.map((item: { snippet: { title: string; description: string; resourceId: { videoId: string } } }, index: number) => {
    return {
      index: index,
      title: item.snippet.title,
      description: item.snippet.description,
      videoId: item.snippet.resourceId.videoId,
    };
  });

  return NextResponse.json(videos);
}
