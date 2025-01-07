"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import PictureLink from "@/app/components/PictureLink";
import PaginationButtons from "@/app/components/PaginationButtons";
import usePagination from "@/app/hooks/usePagination";

interface Post {
  link: string;
  image: StaticImageData | string;
  title: string;
  posted: string;
  authorName: string;
  readTime: string;
}

const Pagination = ({ articles }: { articles: Post[] }) => {
  const [currentIndex, visiblePages, pageItems, lastIndex, prevArticles, nextArticles, handlePrevDisabled, handleNextDisabled, handleCurrentArticle] =
    usePagination(1, articles.length);

  return (
    <>
      <div className="flex flex-col gap-4 py-4 lg:py-5">
        {articles.slice(currentIndex * pageItems - pageItems, pageItems * currentIndex).map((article, index) => (
          <article className="flex flex-row gap-4 border border-neutral-300 p-4 items-center lg:items-start lg:grid lg:grid-cols-4" key={index}>
            <PictureLink link={article.link} className="lg:order-2">
              <Image src={article.image} alt={article.title} className="min-w-24 w-24 min-h-24 h-24 object-cover object-center lg:w-full lg:h-full" />
            </PictureLink>
            <div className="col-span-3">
              <Link href={article.link} className="line-clamp-3 overflow-wrap-anywhere lg:text-lg lg:mb-2">
                {article.title}
              </Link>
              <div>
                <Link href="" className="hidden mb-1 lg:block w-fit text-xs">
                  {article.authorName}
                </Link>
                <div className="hidden lg:block whitespace-nowrap text-xs">
                  <span>{article.posted}</span>
                  <span className="w-[2px] h-[2px] bg-neutral-900 inline-block mx-2 align-middle"></span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      {lastIndex !== 1 && (
        <PaginationButtons
          currentIndex={currentIndex}
          lastIndex={lastIndex}
          prevArticles={prevArticles}
          nextArticles={nextArticles}
          handlePrevDisabled={handlePrevDisabled}
          handleNextDisabled={handleNextDisabled}
          handleCurrentArticle={handleCurrentArticle}
          visiblePages={visiblePages}
        />
      )}
    </>
  );
};

export default Pagination;
