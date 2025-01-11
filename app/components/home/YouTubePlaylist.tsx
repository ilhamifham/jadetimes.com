"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useCarousel from "@/app/hooks/useCarousel";
import useSwitch from "@/app/hooks/useSwitch";
import Iframe from "@/app/components/Iframe";
import PlayButton from "@/app/components/PlayButton";

interface Video {
  index: number | null;
  videoId: string;
  title: string;
}

const YouTubePlaylist = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentVideo, setCurrentVideo] = useState<Video>({ index: null, videoId: "", title: "" });
  const [youTubeVideos, setYouTubeVideos] = useState<Video[][]>([]);
  const [currentIndex, scrollRef, handleNextSlide, handlePreviousSlide] = useCarousel(youTubeVideos.length);
  const [isPlay, handlePlayOpen, handlePlayClose] = useSwitch();

  const updateCurrentVideo = useCallback(
    (index: number | null) => {
      if (typeof index === "number") {
        setCurrentVideo({
          index: videos[index]?.index,
          title: videos[index]?.title,
          videoId: videos[index]?.videoId,
        });
      }
    },
    [videos]
  );

  useEffect(() => {
    const getVideos = async () => {
      try {
        const res = await fetch("https://ilhamifham.github.io/data/youtube/playlist.json");
        if (!res.ok) {
          throw new Error(`Error fetching playlist: ${res.status}`);
        }
        const data = await res.json();
        const items = data.reverse().map((video: Video, index: number) => ({
          ...video,
          index: index,
        }));
        setVideos(items);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
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
    setYouTubeVideos(playlist);
  }, [videos, updateCurrentVideo]);

  function handleCurrentVideo(index: number | null) {
    updateCurrentVideo(index);
    handlePlayClose();
  }

  function playCurrentVideo(index: number | null) {
    updateCurrentVideo(index);
    handlePlayOpen();
  }

  if (loading) {
    return (
      <>
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
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="aspect-video mb-5 bg-red-50 border border-red-300 text-accent text-lg flex items-center justify-center">{error}</div>
        <div className="grid grid-cols-4 gap-5 w-full">
          {Array.from({ length: 4 }, (_, index) => index).map((_, index) => (
            <div key={index}>
              <div className="aspect-video bg-red-50 border border-red-300 flex items-center justify-center text-sm text-accent">{error}</div>
              <div className="bg-red-50 border border-red-300 h-4 mt-2 mb-1"></div>
              <div className="w-1/2 bg-red-50 h-4 border border-red-300"></div>
            </div>
          ))}
        </div>
        <div className="h-6 mt-7"></div>
      </>
    );
  }

  return (
    <>
      <div className="aspect-video mb-5 border border-neutral-300">
        {isPlay ? (
          <Iframe title={currentVideo.title} videoId={currentVideo.videoId} autoplay={true} />
        ) : (
          <div className="h-full relative">
            {currentVideo.videoId && (
              <Image
                src={`https://i.ytimg.com/vi/${currentVideo.videoId}/sddefault.jpg`}
                alt=""
                width={912}
                height={512}
                priority
                className="absolute top-0 w-full h-full -z-[1] object-cover object-center"
              />
            )}
            <div className="bg-[#000000CC] text-white h-full flex flex-col items-center justify-center">
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
        {youTubeVideos.map((articles, index) => (
          <div
            className="grid grid-cols-4 w-full flex-none gap-5 snap-center duration-1000"
            key={index}
            aria-hidden={currentIndex !== index}
            inert={currentIndex !== index}
          >
            {articles.map((article) => (
              <article className="text-sm w-full h-full cursor-pointer group" onClick={() => handleCurrentVideo(article.index)} key={article.index}>
                <div className="aspect-video w-full group/2 border border-neutral-300 relative">
                  {
                    <>
                      <Image
                        src={`https://i.ytimg.com/vi/${article.videoId}/mqdefault.jpg`}
                        alt=""
                        width={212}
                        height={128}
                        className="absolute top-0 w-full h-full -z-[1] object-cover object-center"
                      />
                      <div
                        className={`w-full h-full flex items-center justify-center text-white bg-[#000000CC] duration-300 ${
                          currentVideo.index === article.index ? "opacity-100" : "opacity-0 group-focus-within:opacity-100 group-hover:opacity-100"
                        }`}
                      >
                        {isPlay && currentVideo.index === article.index ? (
                          <div>Now Playing</div>
                        ) : (
                          <PlayButton
                            className="w-9"
                            onClick={(event) => {
                              event.stopPropagation();
                              playCurrentVideo(article.index);
                            }}
                            ariaLabel="play"
                          />
                        )}
                      </div>
                    </>
                  }
                </div>
                <p className="line-clamp-1 mt-2">{article.title}</p>
                <div className="text-neutral-500">Jadetimes</div>
              </article>
            ))}
          </div>
        ))}
      </div>
      <div className="relative flex mt-6">
        {currentIndex !== 0 && (
          <button className={`flex flex-row flex-nowrap items-center gap-3 text-sm text-black`} onClick={handlePreviousSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 rotate-[135deg]" viewBox="0 0 16 16">
              <path d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0z" />
            </svg>
            Prev
          </button>
        )}
        {currentIndex !== youTubeVideos.length - 1 && (
          <button className={`flex flex-row flex-nowrap items-center gap-3 text-sm text-black ml-auto`} onClick={handleNextSlide}>
            Next
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 -rotate-45" viewBox="0 0 16 16">
              <path d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0z" />
            </svg>
          </button>
        )}
      </div>
    </>
  );
};

export default YouTubePlaylist;
