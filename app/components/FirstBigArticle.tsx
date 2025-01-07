import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import PictureLink from "@/app/components/PictureLink";
import UpdatesLink from "@/app/components/UpdatesLink";

interface Post {
  link: string;
  image: StaticImageData | string;
  title: string;
  posted: string;
  authorName: string;
}

const FirstBigArticle = ({ article }: { article: Post }) => {
  return (
    <article className="relative p-4 border-b border-b-neutral-300 mb-10 sm:mb-0 sm:p-0 sm:grid sm:grid-cols-2 sm:border sm:border-neutral-300 sm:col-span-2 lg:col-[13_span_/_13_span] lg:row-start-2">
      <UpdatesLink className="sm:hidden px-3 py-2 text-sm absolute -bottom-9 left-1/2 -translate-x-1/2 -translate-y-1/2">Latest Updates</UpdatesLink>
      <PictureLink link={article.link} className="h-full">
        <Image src={article.image} alt={article.title} className="object-cover object-center sm:h-full" priority />
      </PictureLink>
      <div className="py-4 pb-5 flex flex-col gap-2 sm:p-4 sm:gap-4 lg:p-8">
        <div>
          <Link href="" className="hidden lg:block mb-1 w-fit text-xs">
            {article.authorName}
          </Link>
          <div className="flex flex-row items-center whitespace-nowrap lg:text-xs">{article.posted}</div>
        </div>
        <Link href={article.link} className="text-2xl line-clamp-3 lg:text-3xl lg:leading-[2.8rem]">
          {article.title}
        </Link>
        <p className="line-clamp-2 lg:text-sm lg:line-clamp-3">{article.title}</p>
      </div>
    </article>
  );
};

export default FirstBigArticle;
