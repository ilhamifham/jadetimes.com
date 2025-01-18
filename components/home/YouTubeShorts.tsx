"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import CloseButton from "@/components/CloseButton";
import ChevronIcon from "@/components/ChevronIcon";
import Iframe from "@/components/Iframe";
import PlayButton from "@/components/PlayButton";
import useSwitch from "@/hooks/useSwitch";
import useCarousel from "@/hooks/useCarousel";
import useStopScroll from "@/hooks/useStopScroll";

interface Video {
  index: number;
  videoId: string;
  title: string;
  description: string;
}

const YouTubeShorts = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [currentVideo, setCurrentVideo] = useState<Video>({ index: 0, videoId: "", title: "", description: "" });
  const [scrollRef, handleNextSlide, handlePreviousSlide, prev, next, whileScroll] = useCarousel();
  const [isPlay, handlePlayOn, handlePlayOff] = useSwitch();
  const [isPlayScreen, handlePlayScreenOn, handlePlayScreenOff] = useSwitch();
  useStopScroll(isPlayScreen);

  function updateCurrentVideo(index: number) {
    setCurrentVideo({
      index: videos[index]?.index,
      title: videos[index]?.title,
      videoId: videos[index]?.videoId,
      description: videos[index]?.description,
    });
  }

  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await fetch("/api/youtubeshorts");
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
    getVideos();
  }, []);

  function handleNextCurrentVideo() {
    const index = currentVideo.index === videos.length - 1 ? videos.length - 1 : currentVideo.index + 1;
    updateCurrentVideo(index);
    handlePlayOff();
  }

  function handlePreviousCurrentVideo() {
    const index = currentVideo.index === 0 ? 0 : currentVideo.index - 1;
    updateCurrentVideo(index);
    handlePlayOff();
  }

  if (loading) {
    return (
      <div className="hidden lg:block p-5 mx-auto max-w-[2560px]">
        <div className="flex flex-row gap-5 overflow-x-hidden">
          {Array.from({ length: 9 }, (_, index) => index).map((_, index) => (
            <div key={index} className="animate-pulse w-72 flex-none">
              <div className="aspect-video bg-neutral-300"></div>
              <div className="mt-3 bg-neutral-300 h-5"></div>
              <div className="bg-neutral-300 h-5 mt-2"></div>
              <div className="mt-4 bg-neutral-300 h-3"></div>
              <div className="bg-neutral-300 h-3 mt-2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return null;
  }

  return (
    <div
      className={`${
        isPlayScreen ? "bg-neutral-900 fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col" : "hidden lg:block max-w-[2560px] mx-auto"
      }`}
    >
      <div className="relative p-5 mb-auto order-1">
        <div
          className="flex flex-row overflow-x-hidden gap-5 snap-x snap-mandatory peer max-w-[2560px] mx-auto"
          ref={scrollRef}
          onScroll={whileScroll}
        >
          {videos.map((video) => (
            <div key={video.index} className={`aspect-video flex-none w-72 snap-start ${isPlayScreen ? "border border-neutral-700" : ""}`.trim()}>
              <div className={`relative ${!isPlayScreen ? "mb-4" : ""}`.trim()}>
                <Image
                  src={`https://i.ytimg.com/vi/${video.videoId}/mqdefault.jpg`}
                  alt=""
                  className="absolute top-0 w-full object-cover object-center -z-[1]"
                  width={320}
                  height={180}
                />
                <div
                  className={`bg-[#000000AA] aspect-video flex flex-col items-center justify-center p-4 font-medium text-white text-center  ${
                    isPlayScreen && currentVideo.index !== video.index ? "duration-300 opacity-0 hover:opacity-100 focus-within:opacity-100" : ""
                  }`.trim()}
                >
                  {isPlay && currentVideo.index === video.index ? (
                    <div>Now Playing</div>
                  ) : (
                    <>
                      <PlayButton
                        className="w-10"
                        onClick={() => {
                          handlePlayScreenOn();
                          updateCurrentVideo(video.index);
                          handlePlayOn();
                        }}
                      />
                    </>
                  )}
                </div>
              </div>
              {!isPlayScreen && (
                <>
                  <p className="text-heading font-semibold mb-3 line-clamp-2">{video.title}</p>
                  <p className="line-clamp-2 text-xs">
                    {video.description.split("\n")[0]} {video.description.split("\n")[2]}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
        {next && (
          <button
            className="absolute text-black bg-white border border-neutral-300 w-10 h-10 items-center justify-center shadow-lg rounded-full duration-300 opacity-0 peer-hover:opacity-100 hover:opacity-100 focus:opacity-100 flex top-1/2 -translate-y-1/2 focus:rounded-full right-9"
            onClick={handleNextSlide}
          >
            <span className="sr-only">Next slide</span>
            <ChevronIcon className="w-7 translate-x-[2px]" />
          </button>
        )}
        {prev && (
          <button
            className="absolute text-black bg-white border border-neutral-300 w-10 h-10 items-center justify-center shadow-lg rounded-full duration-300 opacity-0 peer-hover:opacity-100 hover:opacity-100 focus:opacity-100 flex top-1/2 -translate-y-1/2 focus:rounded-full left-9"
            onClick={handlePreviousSlide}
          >
            <span className="sr-only">Previous slide</span>
            <ChevronIcon rotate="180deg" className="w-7 translate-x-[2px]" />
          </button>
        )}
      </div>
      {isPlayScreen && (
        <div className="px-5 mt-auto max-w-[2560px] mx-auto">
          <div className="grid grid-cols-10 gap-5 aspect-[33/9]">
            <div className="col-span-5 col-start-2 aspect-video border border-neutral-700">
              {isPlay ? (
                <div className="bg-black">
                  <Iframe title={currentVideo.title} videoId={currentVideo.videoId} autoplay={isPlay} />
                </div>
              ) : (
                <div className="relative h-full">
                  <Image
                    src={`https://i.ytimg.com/vi/${currentVideo.videoId}/sddefault.jpg`}
                    alt=""
                    className="absolute object-cover object-center w-full h-full -z-[1]"
                    width={1250}
                    height={703}
                  />
                  <div className="bg-[#00000080] w-full h-full flex flex-col items-center justify-center gap-4 text-center p-4">
                    <div className="text-neutral-300">Jadetimes</div>
                    <p className="text-white font-semibold text-2xl xl:text-3xl">{currentVideo.title}</p>
                    <PlayButton className="w-12 text-white" onClick={handlePlayOn} />
                  </div>
                </div>
              )}
            </div>
            <div className="col-span-3 overflow-y-auto">
              <p className="text-white text-2xl mb-4">{currentVideo.title}</p>
              <p className="text-sm text-neutral-500 font-medium mb-4">Jadetimes</p>
              <p className="text-neutral-300">
                {currentVideo.description.split("\n")[0]} {currentVideo.description.split("\n")[2]}
              </p>
              <p className="text-neutral-300"></p>
            </div>
            <div className="col-span-1 flex items-center justify-center col-start-10">
              {currentVideo.index !== videos.length - 1 && (
                <button onClick={handleNextCurrentVideo}>
                  <ChevronIcon className="w-9 text-white" />
                </button>
              )}
            </div>
            <div className="col-span-1 flex items-center justify-center col-start-1 row-start-1">
              {currentVideo.index !== 0 && (
                <button onClick={handlePreviousCurrentVideo}>
                  <ChevronIcon rotate="180deg" className="w-9 text-white" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      {isPlayScreen && (
        <div className="p-5 flex w-full -order-1 max-w-[2560px] mx-auto">
          <CloseButton
            className="w-[1.7rem] text-white ml-auto"
            onClick={() => {
              handlePlayScreenOff();
              handlePlayOff();
            }}
          />
        </div>
      )}
    </div>
  );
};

export default YouTubeShorts;
