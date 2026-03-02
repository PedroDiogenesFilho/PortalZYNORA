"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import PostCard from "@/components/PostCard";
import { Post } from "@/types";

interface BlogContentProps {
  allPosts: Post[];
  categories: string[];
}

export default function BlogContent({ allPosts, categories }: BlogContentProps) {
  const searchParams = useSearchParams();
  const categoria = searchParams.get("categoria") ?? undefined;

  const posts = categoria
    ? allPosts.filter((p) => p.category === categoria)
    : allPosts;

  return (
    <>
      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Link
          href="/blog"
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            !categoria
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          Todos
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/blog?categoria=${encodeURIComponent(cat)}`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              categoria === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {cat}
          </Link>
        ))}
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">Nenhum artigo encontrado nessa categoria.</p>
          <Link href="/blog" className="text-blue-400 hover:text-blue-300 mt-2 inline-block">
            Ver todos os artigos
          </Link>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </>
  );
}
