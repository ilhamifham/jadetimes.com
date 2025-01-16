import { useRef } from "react";

const useCarousel = (): [React.RefObject<HTMLDivElement | null>, () => void, () => void] => {
  const scrollRef = useRef<HTMLDivElement>(null);

  function handleNextSlide() {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  }

  function handlePreviousSlide() {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  }

  return [scrollRef, handleNextSlide, handlePreviousSlide];
};

export default useCarousel;
