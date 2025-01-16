import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import PictureLink from "@/components/PictureLink";

interface Post {
  link: string;
  image: StaticImageData | string;
  title: string;
  posted: string;
  categoryLink: string;
  categoryTitle: string;
}

const SecondBigArticles = ({ articles }: { articles: Post[] }) => {
  return (
    <div className="m-4 flex flex-col gap-4 sm:m-0 sm:grid sm:grid-cols-2 sm:col-span-2 sm:gap-4 lg:grid-cols-10 lg:gap-5 lg:col-span-full">
      {articles.map((article, index) => (
        <article
          key={index}
          className="flex flex-row p-4 gap-4 justify-between border border-neutral-300 lg:justify-normal lg:p-0 lg:flex-col lg:gap-0 lg:col-span-2"
        >
          <PictureLink link={article.link} className="order-2 lg:order-none">
            <Image
              src={article.image}
              alt={article.title}
              className="aspect-square min-w-[5.5rem] w-[5.5rem] min-h-[5.5rem] h-[5.5rem] object-cover object-center lg:aspect-auto lg:w-full lg:h-full"
            />
          </PictureLink>
          <div className="flex flex-col justify-between lg:justify-normal gap-4 lg:p-4">
            <Link href={article.categoryLink} className="hidden lg:block w-fit text-sm font-light text-neutral-500">
              {article.categoryTitle}
            </Link>
            <Link href={article.link} className="overflow-wrap-anywhere line-clamp-2 lg:text-sm lg:line-clamp-3">
              {article.title}
            </Link>
            <p className="hidden lg:block line-clamp-2 text-xs">{article.title}</p>
            <div className="lg:hidden whitespace-nowrap text-xs">{article.posted}</div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default SecondBigArticles;
