import Page from "@/app/components/Page";
import posts from "@/app/data/posts";

export default function News() {
  return <Page articles={posts} />;
}
