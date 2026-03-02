import Link from "next/link";
import Image from "next/image";
import { Post } from "@/types";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-gray-800 rounded-xl overflow-hidden hover:ring-2 hover:ring-blue-500 transition-all group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 text-gray-400 text-xs mb-3">
          <span>{new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}</span>
          <span>•</span>
          <span>{post.readTime} de leitura</span>
        </div>
        <h2 className="text-white font-bold text-lg leading-snug mb-2 group-hover:text-blue-400 transition-colors">
          {post.title}
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-gray-500 text-xs">Por {post.author}</span>
          <Link
            href={`/blog/${post.slug}`}
            className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
          >
            Ler mais →
          </Link>
        </div>
      </div>
    </article>
  );
}
