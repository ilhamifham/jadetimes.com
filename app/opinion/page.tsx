import PageDesign from "./PageDesign";
import posts from "../data/posts";

export default function Opinion() {
  return <PageDesign articles={posts} />;
}
