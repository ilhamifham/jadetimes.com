import { NextResponse } from "next/server";

interface VideoSnippet {
  snippet: { title: string; description: string; resourceId: { videoId: string } };
}

export async function GET() {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const CHANNEL_ID = "UUSHh3RLLVBaEeBRRZBbnnVWWA";

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${CHANNEL_ID}&key=${API_KEY}`
  );

  const data = await response.json();

  const videos = data.items.map((item: VideoSnippet, index: number) => {
    return {
      index: index,
      title: item.snippet.title.split("#")[0].split(".")[0],
      description: item.snippet.description,
      videoId: item.snippet.resourceId.videoId,
    };
  });

  return NextResponse.json(videos);
}
