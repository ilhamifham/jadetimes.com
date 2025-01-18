import { useRef, useState, UIEvent } from "react";

const useCarousel = (): [React.RefObject<HTMLDivElement | null>, () => void, () => void, boolean, boolean, (event: UIEvent<HTMLElement>) => void] => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [prev, setIsPrev] = useState(false);
  const [next, setIsNext] = useState(true);

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

  function whileScroll(event: UIEvent<HTMLElement>) {
    const scrollElement = event.currentTarget;
    if (scrollElement.scrollLeft === 0) {
      setIsPrev(false);
    } else {
      setIsPrev(true);
    }

    if (scrollElement.scrollWidth - 1 <= scrollElement.scrollLeft + scrollElement.clientWidth) {
      setIsNext(false);
    } else {
      setIsNext(true);
    }
  }

  return [scrollRef, handleNextSlide, handlePreviousSlide, prev, next, whileScroll];
};

export default useCarousel;
