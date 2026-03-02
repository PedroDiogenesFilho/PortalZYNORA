import PostCard from "@/components/PostCard";
import { getAllPosts, getAllCategories } from "@/lib/posts";
import Link from "next/link";

interface BlogPageProps {
  searchParams: Promise<{ categoria?: string }>;
}

export const metadata = {
  title: "Blog – PortalZYNORA",
  description: "Artigos e tutoriais de tecnologia para desenvolvedores",
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { categoria } = await searchParams;
  const allPosts = getAllPosts();
  const categories = getAllCategories();

  const posts = categoria
    ? allPosts.filter((p) => p.category === categoria)
    : allPosts;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Blog de Tecnologia</h1>
        <p className="text-gray-400">
          Artigos, tutoriais e novidades do mundo da tecnologia
        </p>
      </div>

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
    </div>
  );
}
