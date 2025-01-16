import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import PictureLink from "@/components/PictureLink";

type Post = {
  link: string;
  image: StaticImageData | string;
  title: string;
  posted: string;
  categoryLink: string;
  categoryTitle: string;
};

interface Props {
  articles: Post[];
}

const FourthBigArticles = ({ articles }: Props) => {
  return (
    <div className="m-4 flex flex-col gap-4 sm:m-0 sm:grid sm:col-span-2 sm:grid-cols-2 lg:flex lg:row-start-2 lg:col-span-4 lg:gap-5">
      {articles.slice(0, 3).map((article, index) => (
        <article className="flex flex-row gap-4 p-4 border border-neutral-300" key={index}>
          <PictureLink link={article.link} className="lg:order-2">
            <Image
              src={article.image}
              alt={article.title}
              className="aspect-square min-w-[5.5rem] w-[5.5rem] min-h-[5.5rem] h-[5.5rem] object-cover object-center lg:min-w-20 lg:w-20 lg:min-h-20 lg:h-20"
            />
          </PictureLink>
          <div className="flex flex-col justify-between gap-4">
            <Link href={article.link} className="line-clamp-2 overflow-wrap-anywhere lg:text-sm">
              {article.title}
            </Link>
            <Link href={article.categoryLink} className="hidden lg:block w-fit text-sm text-neutral-500 font-light">
              {article.categoryTitle}
            </Link>
            <div className="lg:hidden whitespace-nowrap">{article.posted}</div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default FourthBigArticles;
