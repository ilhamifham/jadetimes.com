import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import SecondBigArticles from "@/components/SecondBigArticles";
import Section from "@/components/Section";
import H1 from "@/components/H1";
import H2 from "@/components/H2";
import PictureLink from "@/components/PictureLink";
import Pagination from "@/components/Pagination";

interface Post {
  link: string;
  image: StaticImageData | string;
  title: string;
  description: string;
  posted: string;
  authorName: string;
  readTime: string;
  categoryLink: string;
  categoryTitle: string;
}

interface Props {
  name?: string;
  articles: Post[];
}

const PageDesignSecond = ({ name, articles }: Props) => {
  return (
    <>
      <Section className="pt-3 lg:max-w-[1280px]">
        <H1>
          Opinion
          {name && (
            <span className="font-normal">
              <span className="mx-4">|</span>
              {name}
            </span>
          )}
        </H1>
        <div className="sm:p-4">
          <article className="p-4 sm:p-0 sm:text-center max-w-[900px] mx-auto">
            <PictureLink link={articles[0].link} className="h-full">
              <Image src={articles[0].image} alt={articles[0].title} className="object-cover object-center sm:h-full" priority />
            </PictureLink>
            <div className="py-4 pb-0 flex flex-col gap-2 sm:px-0 sm:pb-8 sm:gap-4 sm:items-center lg:py-8 lg:pb-12">
              <div className="lg:flex lg:flex-col lg:items-center">
                <Link href="" className="hidden lg:block mb-1 w-fit text-xs">
                  {articles[0].authorName}
                </Link>
                <div className="flex flex-row items-center whitespace-nowrap lg:text-xs">{articles[0].posted}</div>
              </div>
              <Link href={articles[0].categoryLink} className="hidden lg:block w-fit text-sm font-light text-neutral-500">
                {articles[0].categoryTitle}
              </Link>
              <Link href={articles[0].link} className="text-2xl line-clamp-3 lg:line-clamp-2 lg:text-3xl lg:leading-[2.8rem]">
                {articles[0].title}
              </Link>
              <p className="line-clamp-2 lg:text-base lg:line-clamp-1">{articles[0].title}</p>
            </div>
          </article>
          <SecondBigArticles articles={articles.slice(0, 5)} />
        </div>
      </Section>
      <Section className="p-4 lg:max-w-[1280px]">
        <H2>
          {name ? (
            <>
              More from <span className="font-normal">{name}</span>
            </>
          ) : (
            <>
              More <span className="font-normal">Opinion</span>
            </>
          )}
        </H2>
        <div className="max-w-[900px]">
          <Pagination articles={articles} />
        </div>
      </Section>
    </>
  );
};

export default PageDesignSecond;
