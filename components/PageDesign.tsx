import { StaticImageData } from "next/image";
import AllArticles from "@/components/AllArticles";
import ThirdSlider from "@/components/ThirdSlider";
import Pagination from "@/components/Pagination";
import Section from "@/components/Section";
import H1 from "@/components/H1";
import H2 from "@/components/H2";

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

const PageDesign = ({ name, articles }: Props) => {
  return (
    <>
      <Section className="pt-3 lg:max-w-[1280px]">
        <H1>
          News
          {name && (
            <span className="font-normal">
              <span className="mx-4">|</span>
              {name}
            </span>
          )}
        </H1>
        <AllArticles articles={articles} />
      </Section>
      <ThirdSlider articles={articles.slice(0, 2)} />
      <Section className="p-4 lg:max-w-[1280px]">
        <H2>
          {name ? (
            <>
              More from <span className="font-normal">{name}</span>
            </>
          ) : (
            <>
              More <span className="font-normal">News</span>
            </>
          )}
        </H2>
        <Pagination articles={articles} />
      </Section>
    </>
  );
};

export default PageDesign;
