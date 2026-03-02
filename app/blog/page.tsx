import { Suspense } from "react";
import { getAllPosts, getAllCategories } from "@/lib/posts";
import BlogContent from "@/components/BlogContent";

export const metadata = {
  title: "Blog – PortalZYNORA",
  description: "Artigos e tutoriais de tecnologia para desenvolvedores",
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  const categories = getAllCategories();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Blog de Tecnologia</h1>
        <p className="text-gray-400">
          Artigos, tutoriais e novidades do mundo da tecnologia
        </p>
      </div>

      <Suspense>
        <BlogContent allPosts={allPosts} categories={categories} />
      </Suspense>
    </div>
  );
}
