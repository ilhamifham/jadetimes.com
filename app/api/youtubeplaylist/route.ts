import { NextResponse } from "next/server";

interface VideoSnippet {
  contentDetails: {
    videoId: string;
    videoPublishedAt: string;
  };
  snippet: {
    title: string;
  };
}

export async function GET() {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const PLAYLIST_ID = "PL-5p6ii0pvVHcd_swLVii3Ry0mQBH4IEj";

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${PLAYLIST_ID}&maxResults=50&key=${API_KEY}`
  );

  const data = await response.json();

  const videos = data.items
    .sort(
      (a: VideoSnippet, b: VideoSnippet) =>
        new Date(b.contentDetails.videoPublishedAt).getTime() - new Date(a.contentDetails.videoPublishedAt).getTime()
    )
    .map((item: VideoSnippet, index: number) => {
      return {
        index: index,
        videoId: item.contentDetails.videoId,
        title: item.snippet.title,
      };
    });

  return NextResponse.json(videos);
}
