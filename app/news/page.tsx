import PageDesign from "@/components/PageDesign";
import posts from "@/data/posts";

export default function NewsPage() {
  return <PageDesign articles={posts} />;
}
