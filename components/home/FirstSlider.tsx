"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import PictureLink from "@/components/PictureLink";
import ChevronIcon from "@/components/ChevronIcon";
import useCarousel from "@/hooks/useCarousel";

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

const FirstSlider = ({ articles }: { articles: Post[] }) => {
  const [scrollRef, handleNextSlide, handlePreviousSlide] = useCarousel();

  return (
    <div className="hidden lg:block lg:col-span-6 lg:border lg:border-neutral-300 lg:mr-5">
      <div className="relative">
        <div className="flex flex-row overflow-x-hidden snap-x snap-mandatory" ref={scrollRef}>
          <article className="snap-end flex-none w-full relative">
            <PictureLink link={articles[0].link}>
              <Image src={articles[0].image} alt={articles[0].title} />
            </PictureLink>
            <div className="flex flex-col p-4 gap-4">
              <div>
                <Link href={articles[0].link} className="block w-fit text-xs mb-1">
                  {articles[0].authorName}
                </Link>
                <div className="whitespace-nowrap text-xs">{articles[0].posted}</div>
              </div>
              <Link href={articles[0].categoryLink} className="w-fit text-sm text-neutral-500 font-light">
                {articles[0].categoryTitle}
              </Link>
              <Link href={articles[0].link} className="text-lg text-[1.375rem] line-clamp-2">
                {articles[0].title}
              </Link>
              <p className="line-clamp-1 text-base">{articles[0].title}</p>
            </div>
            <div className="text-black absolute top-1/3 right-4 flex cursor-pointer" onClick={handleNextSlide} tabIndex={-1}>
              <ChevronIcon className="w-9" />
            </div>
          </article>
          <article className="snap-end flex-none w-full relative">
            <PictureLink link={articles[1].link}>
              <Image src={articles[1].image} alt={articles[1].title} />
            </PictureLink>
            <div className="flex flex-col p-4 gap-4">
              <div>
                <Link href={articles[1].link} className="block w-fit text-xs mb-1">
                  {articles[1].authorName}
                </Link>
                <div className="whitespace-nowrap text-xs">{articles[1].posted}</div>
              </div>
              <Link href={articles[1].categoryLink} className="w-fit text-sm text-neutral-500 font-light">
                {articles[1].categoryTitle}
              </Link>
              <Link href={articles[1].link} className="text-lg text-[1.375rem] line-clamp-2">
                {articles[1].title}
              </Link>
              <p className="line-clamp-1 text-base">{articles[1].title}</p>
            </div>
            <div className="text-black absolute top-1/3 left-4 flex cursor-pointer" onClick={handlePreviousSlide} tabIndex={-1}>
              <ChevronIcon rotate="180deg" className="w-9" />
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default FirstSlider;
