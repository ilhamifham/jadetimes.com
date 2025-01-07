import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/image";
import PictureLink from "@/app/components/PictureLink";

type Post = {
  link: string;
  image: StaticImageData | string;
  title: string;
  posted: string;
};

interface Props {
  articles: Post[];
}

const ThirdBigArticles = ({ articles }: Props) => {
  return (
    <div className="flex flex-col gap-4 m-4 sm:m-0 sm:col-span-2 sm:grid sm:grid-cols-2 sm:row-span-2 lg:grid-cols-4 lg:col-span-full lg:row-start-1 lg:row-span-1 lg:gap-0">
      {articles.map((article, index) => (
        <article
          key={index}
          className="flex flex-col border border-neutral-300 lg:border-y-0 lg:border-l-0 lg:pr-5 lg:pl-5 lg:border-r lg:border-neutral-300 lg:first:pl-0 lg:last:pr-0 lg:last:border-none"
        >
          <PictureLink link={article.link} className="lg:hidden">
            <Image src={article.image} alt={article.title} className="aspect-video object-cover object-center" />
          </PictureLink>
          <div className="flex flex-col gap-4 p-4 lg:p-0">
            <div className="whitespace-nowrap lg:text-xs">{article.posted}</div>
            <Link href={article.link} className="text-lg line-clamp-2 lg:text-base">
              {article.title}
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ThirdBigArticles;
