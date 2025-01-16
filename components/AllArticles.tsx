import UpdatesLink from "@/components/UpdatesLink";
import FirstBigArticle from "@/components/FirstBigArticle";
import SecondBigArticles from "@/components/SecondBigArticles";
import ThirdBigArticles from "@/components/ThirdBigArticles";
import FourthBigArticles from "@/components/FourthBigArticles";
import { StaticImageData } from "next/image";

interface Post {
  link: string;
  image: StaticImageData | string;
  title: string;
  posted: string;
  categoryLink: string;
  categoryTitle: string;
  authorName: string;
}

const AllArticles = ({ articles }: { articles: Post[] }) => {
  return (
    <div className="sm:p-4 lg:pb-5">
      <UpdatesLink className="hidden sm:block text-[0.625rem] mb-4 px-2 py-[0.15rem] lg:mb-5">Latest Updates</UpdatesLink>
      <div className="sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-[repeat(17,_minmax(0,_1fr))] lg:gap-5 xl:col-start-2 xl:col-span-10 xl:row-start-2">
        <FirstBigArticle article={articles[0]} />
        <SecondBigArticles articles={articles.slice(0, 5)} />
        <ThirdBigArticles articles={articles.slice(0, 4)} />
        <FourthBigArticles articles={articles.slice(0, 3)} />
      </div>
    </div>
  );
};

export default AllArticles;
