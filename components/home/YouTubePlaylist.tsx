"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useCarousel from "@/hooks/useCarousel";
import useSwitch from "@/hooks/useSwitch";
import Iframe from "@/components/Iframe";
import PlayButton from "@/components/PlayButton";

interface Video {
  index: number;
  videoId: string;
  title: string;
}

const YouTubePlaylist = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [currentVideo, setCurrentVideo] = useState<Video>({ index: 0, videoId: "", title: "" });
  const [YouTubePlaylist, setYouTubePlaylist] = useState<Video[][]>([]);
  const [scrollRef, handleNextSlide, handlePreviousSlide] = useCarousel();
  const [isPlay, handlePlayOpen, handlePlayClose] = useSwitch();

  const updateCurrentVideo = useCallback(
    (index: number) => {
      setCurrentVideo({
        index: videos[index]?.index,
        title: videos[index]?.title,
        videoId: videos[index]?.videoId,
      });
    },
    [videos]
  );

  useEffect(() => {
    const getVideos = async () => {
      try {
        const res = await fetch("/api/youtubetop10playlist");
        const data = await res.json();
        setVideos(data);
      } catch (error) {
        if (error instanceof Error) {
          setError("Error occured while fetching the playlist");
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
    getVideos();
  }, []);

  useEffect(() => {
    updateCurrentVideo(0);
    const playlist = [];
    for (let i = 0; i < videos.length; i += 4) {
      playlist.push(videos.slice(i, i + 4));
    }
    setYouTubePlaylist(playlist);
  }, [videos, updateCurrentVideo]);

  function handleCurrentVideo(index: number) {
    if (index !== currentVideo.index) {
      updateCurrentVideo(index);
      handlePlayClose();
    }
  }

  function playCurrentVideo(index: number) {
    updateCurrentVideo(index);
    handlePlayOpen();
  }

  if (loading) {
    return (
      <div className="col-[span_14_/_span_14]">
        <div className="mb-5 bg-neutral-300 h-7 w-96 animate-pulse"></div>
        <div className="aspect-video mb-5 bg-neutral-300 animate-pulse"></div>
        <div className="grid grid-cols-4 gap-5 w-full animate-pulse">
          {Array.from({ length: 4 }, (_, index) => index).map((_, index) => (
            <div key={index}>
              <div className="aspect-video bg-neutral-300"></div>
              <div className="bg-neutral-300 h-4 mt-2 mb-1"></div>
              <div className="w-1/2 bg-neutral-300 h-4"></div>
            </div>
          ))}
        </div>
        <div className="h-6 mt-7"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="col-[span_14_/_span_14]">
        <div className="mb-5 h-7 w-96 bg-red-50 border border-red-300"></div>
        <div className="aspect-video mb-5 bg-red-50 border border-red-300 text-accent text-lg flex items-center justify-center">{error}</div>
        <div className="grid grid-cols-4 gap-5 w-full">
          {Array.from({ length: 4 }, (_, index) => index).map((_, index) => (
            <div key={index}>
              <div className="aspect-video bg-red-50 border border-red-300 flex items-center justify-center text-sm text-accent p-4 text-center">
                {error}
              </div>
              <div className="bg-red-50 border border-red-300 h-4 mt-2 mb-1"></div>
              <div className="w-1/2 bg-red-50 h-4 border border-red-300"></div>
            </div>
          ))}
        </div>
        <div className="h-6 mt-7"></div>
      </div>
    );
  }

  return (
    <section className="col-[span_14_/_span_14]">
      <h3 className="mb-5 font-semibold text-xl">
        Must Watch <span className="font-normal">Top 10 Ranking Segments</span>
      </h3>
      <div className="aspect-video mb-5 border border-neutral-300">
        {isPlay ? (
          <div className="bg-black">
            <Iframe title={currentVideo.title} videoId={currentVideo.videoId} autoplay={isPlay} />
          </div>
        ) : (
          <div className="h-full relative">
            {currentVideo.videoId && (
              <Image
                src={`https://i.ytimg.com/vi/${currentVideo.videoId}/sddefault.jpg`}
                alt=""
                width={640}
                height={480}
                priority
                className="absolute top-0 -z-[1] object-cover w-full h-full"
              />
            )}
            <div className="bg-[#000000AA] text-white h-full flex flex-col items-center justify-center">
              <p className="text-[0.9375rem] mb-2 text-white">{currentVideo.title}</p>
              <div className="text-lg">Jadetimes</div>
              <div className="flex flex-row gap-4 mt-8">
                <button className="flex flex-row flex-nowrap items-center gap-2 bg-accent px-7 py-2 text-sm" onClick={handlePlayOpen}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6" viewBox="0 0 16 16">
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                  </svg>
                  Play Video
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-row gap-5 overflow-x-hidden snap-x snap-mandatory" ref={scrollRef}>
        {YouTubePlaylist.map((videos, index) => (
          <div className="grid grid-cols-4 w-full flex-none gap-5 snap-end" key={index}>
            {videos.map((video) => (
              <div className="text-sm" key={video.index}>
                <div className="relative">
                  <div
                    className={`aspect-video border border-neutral-300 relative ${
                      video.index !== currentVideo.index ? "cursor-pointer" : "cursor-auto"
                    }`}
                    onClick={() => handleCurrentVideo(video.index)}
                  >
                    <Image
                      src={`https://i.ytimg.com/vi/${video.videoId}/mqdefault.jpg`}
                      alt=""
                      width={320}
                      height={180}
                      className="absolute top-0 -z-[1]"
                    />
                    <div className="w-full h-full bg-[#000000AA]"></div>
                  </div>
                  <div className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {isPlay && currentVideo.index === video.index ? (
                      <div>Now Playing</div>
                    ) : (
                      <PlayButton
                        className="w-9"
                        onClick={() => {
                          playCurrentVideo(video.index);
                        }}
                      />
                    )}
                  </div>
                </div>
                <p className="line-clamp-1 mt-2">{video.title}</p>
                <div className="text-neutral-500">Jadetimes</div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="relative flex mt-6">
        <button className={`flex flex-row flex-nowrap items-center gap-3 text-sm text-black`} onClick={handlePreviousSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 rotate-[135deg]" viewBox="0 0 16 16">
            <path d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0z" />
          </svg>
          Prev
        </button>
        <button className={`flex flex-row flex-nowrap items-center gap-3 text-sm text-black ml-auto`} onClick={handleNextSlide}>
          Next
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 -rotate-45" viewBox="0 0 16 16">
            <path d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0z" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default YouTubePlaylist;
