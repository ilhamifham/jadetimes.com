import ReadMoreLink from "@/app/components/ReadMoreLink";
import UpdatesLink from "@/app/components/UpdatesLink";

interface Props {
  className: string;
  article: {
    title: string;
    description: string;
    link: string;
  };
}

const YouTubeArticle = ({ className, article }: Props) => {
  return (
    <div className={className}>
      <UpdatesLink href="https://www.youtube.com/@JadeTimes" className="hidden md:block text-[0.625rem] px-2 py-[0.15rem]">
        Youtube updates
      </UpdatesLink>
      <div className="line-clamp-2 text-lg">{article.title}</div>
      <p className="lg:text-xs line-clamp-5">{article.description}</p>
      <div className="flex flex-row gap-4 text-sm">
        <UpdatesLink href="https://www.youtube.com/@JadeTimes" className="md:hidden px-3 py-2">
          Youtube updates
        </UpdatesLink>
        <ReadMoreLink href={article.link} ariaLabel={article.title} />
      </div>
    </div>
  );
};

export default YouTubeArticle;
