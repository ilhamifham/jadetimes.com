import PageDesignSecond from "@/app/components/PageDesignSecond";
import posts from "@/app/data/posts";

export default function EditorialsPage() {
  return <PageDesignSecond name="Editorials" articles={posts} />;
}
