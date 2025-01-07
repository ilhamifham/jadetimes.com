import PageDesign from "../PageDesign";
import posts from "@/app/data/posts";

export default function Editorials() {
  return <PageDesign name="Editorials" articles={posts} />;
}
