import ChevronIcon from "@/components/ChevronIcon";

interface Props {
  currentIndex: number;
  visiblePages: number[];
  lastIndex: number;
  prevArticles: () => void;
  nextArticles: () => void;
  handlePrevDisabled: () => void;
  handleNextDisabled: () => void;
  handleCurrentArticle: (index: number) => void;
}

const PaginationButtons = ({
  currentIndex,
  lastIndex,
  prevArticles,
  nextArticles,
  handlePrevDisabled,
  handleNextDisabled,
  handleCurrentArticle,
  visiblePages,
}: Props) => {
  return (
    <div className="flex flex-row gap-8 items-center justify-center">
      <button
        onClick={handlePrevDisabled}
        disabled={currentIndex <= 3 || lastIndex === 5}
        className={currentIndex <= 3 || lastIndex === 5 ? "text-neutral-500" : "text-black"}
      >
        <span className="sr-only">First page</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 rotate-180" viewBox="0 0 16 16">
          <path d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708" />
          <path d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708" />
        </svg>
      </button>
      <button onClick={prevArticles} className={(currentIndex === 1 && "text-neutral-500") || "text-black"} disabled={currentIndex === 1}>
        <span className="sr-only">Previous page</span>
        <ChevronIcon rotate="180deg" className="w-6" />
      </button>
      <div className="lg:hidden w-20 text-center text-lg">
        {currentIndex}/{lastIndex}
      </div>
      <div className="hidden lg:flex flex-row gap-4">
        {visiblePages.map(
          (button) =>
            button > 0 &&
            button <= lastIndex && (
              <button
                key={button}
                onClick={() => {
                  handleCurrentArticle(button);
                }}
                className={`px-2 ${currentIndex === button ? "text-accent" : "text-neutral-900"}`}
              >
                {button}
              </button>
            )
        )}
      </div>
      <button
        onClick={nextArticles}
        className={(currentIndex === lastIndex && "text-neutral-500") || "text-black"}
        disabled={currentIndex === lastIndex}
      >
        <span className="sr-only">Next page</span>
        <ChevronIcon className="w-6" />
      </button>
      <button
        onClick={handleNextDisabled}
        disabled={currentIndex === lastIndex || lastIndex === 5}
        className={currentIndex >= lastIndex - 2 || lastIndex === 5 ? "text-neutral-500" : "text-black"}
      >
        <span className="sr-only">Last page</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6" viewBox="0 0 16 16">
          <path d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708" />
          <path d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708" />
        </svg>
      </button>
    </div>
  );
};

export default PaginationButtons;
