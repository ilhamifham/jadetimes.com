interface Props {
  title: string;
  videoId: string;
  autoplay: boolean;
}

const Iframe = ({ title, videoId, autoplay }: Props) => {
  return (
    <>
      {videoId ? (
        <iframe
          title={title}
          className="aspect-video"
          width="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=${autoplay}&mute=0&controls=1&loop=0&rel=0&origin=https://www.jadetimes.com&playsinline=1`}
          sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          loading="lazy"
        ></iframe>
      ) : (
        <div className="bg-neutral-700 aspect-video w-full text-center text-xl h-full text-white flex items-center justify-center p-4">
          <p>This video is unavailable</p>
        </div>
      )}
    </>
  );
};

export default Iframe;
