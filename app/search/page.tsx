"use client";

import Link from "next/link";
import Image from "next/image";
import PictureLink from "@/app/components/PictureLink";
import PaginationButtons from "@/app/components/PaginationButtons";
import SearchIcon from "@/app/components/SearchIcon";
import Section from "@/app/components/Section";
import usePagination from "../hooks/usePagination";
import posts from "@/app/data/posts";

export default function Search() {
  const [currentIndex, visiblePages, pageItems, lastIndex, prevArticles, nextArticles, handlePrevDisabled, handleNextDisabled, handleCurrentArticle] =
    usePagination(3, posts.length);
  return (
    <Section className="p-4 lg:max-w-[1000px]">
      <div className="md:flex md:flex-row md:gap-4 md:items-center">
        <h1 className="text-3xl font-semibold md:text-2xl">Search</h1>
        <div className="mt-5 relative md:mt-0 md:w-full">
          <input
            className="border-2 border-neutral-300 w-full block text-xl duration-300 placeholder:text-neutral-500 py-3 pl-12 pr-4 md:text-base focus-visible:outline-none focus:border-neutral-900 lg:hover:border-neutral-900"
            type="text"
            placeholder="What are you looking for ?"
            autoFocus
          />
          <SearchIcon className="w-5 text-black absolute left-[0.9rem] top-1/2 -translate-y-1/2" />
        </div>
      </div>
      <div className="flex flex-col gap-4 py-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {posts.slice(currentIndex * pageItems - pageItems, pageItems * currentIndex).map((article, index) => (
          <article key={index} className="border border-neutral-300 p-4">
            <div className="flex flex-row gap-4 justify-between">
              <h2>
                <Link href={article.link} className="text-lg line-clamp-3 overflow-wrap-anywhere lg:text-sm">
                  {article.title}
                </Link>
              </h2>
              <PictureLink link={article.link}>
                <Image
                  src={article.image}
                  alt={article.title}
                  className="min-w-[5.5rem] w-[5.5rem] min-h-[5.5rem] h-[5.5rem] object-cover object-center lg:min-w-16 lg:w-16 lg:min-h-16 lg:h-16"
                />
              </PictureLink>
            </div>
            <Link href={article.categoryLink} className="w-fit text-lg mt-2 block text-neutral-500 font-light lg:text-sm">
              {article.categoryTitle}
            </Link>
            <div className="whitespace-nowrap mt-2 lg:text-xs lg:mt-3">{article.posted}</div>
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
    </Section>
  );
}
