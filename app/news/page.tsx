import PageDesign from "@/app/components/PageDesign";
import posts from "@/app/data/posts";

export default function NewsPage() {
  return <PageDesign articles={posts} />;
}
