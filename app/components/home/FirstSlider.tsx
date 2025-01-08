"use client";

import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/image";
import PictureLink from "@/app/components/PictureLink";
import ChevronIcon from "@/app/components/ChevronIcon";
import useCarousel from "@/app/hooks/useCarousel";

type Post = {
  link: string;
  image: StaticImageData | string;
  title: string;
  posted: string;
  readTime: string;
  categoryTitle: string;
  categoryLink: string;
  authorName: string;
  description: string;
};

interface Props {
  articles: Post[];
}

const FirstSlider = ({ articles }: Props) => {
  const [currentIndex, scrollRef, handleNextSlide, handlePreviousSlide] = useCarousel(articles.length);

  return (
    <div className="hidden lg:block lg:col-span-6 lg:border lg:border-neutral-300 lg:mr-5">
      <div className="relative">
        <div className="flex flex-row overflow-x-hidden snap-x snap-mandatory" ref={scrollRef}>
          {articles.map((article, index) => (
            <article key={index} className={`${currentIndex === index ? "visible" : "invisible"} snap-end flex-none w-full duration-1000`}>
              <PictureLink link={article.link}>
                <Image src={article.image} alt={article.title} />
              </PictureLink>
              <div className="flex flex-col p-4 gap-4">
                <div>
                  <Link href={article.link} className="block w-fit text-xs mb-1">
                    {article.authorName}
                  </Link>
                  <div className="whitespace-nowrap text-xs">{article.posted}</div>
                </div>
                <Link href={article.categoryLink} className="w-fit text-sm text-neutral-500 font-light">
                  {article.categoryTitle}
                </Link>
                <Link href={article.link} className="text-lg text-[1.375rem] line-clamp-2">
                  {article.title}
                </Link>
                <p className="line-clamp-1 text-base">{article.title}</p>
              </div>
            </article>
          ))}
        </div>
        {currentIndex !== articles.length - 1 && (
          <button className="text-black absolute top-1/3 right-4 flex" onClick={handleNextSlide} aria-label="next slide">
            <ChevronIcon className="w-9" />
          </button>
        )}
        {currentIndex !== 0 && (
          <button className="text-black absolute top-1/3 left-4 flex" onClick={handlePreviousSlide} aria-label="previous slide">
            <ChevronIcon className="w-9 rotate-180" />
          </button>
        )}
      </div>
    </div>
  );
};

export default FirstSlider;