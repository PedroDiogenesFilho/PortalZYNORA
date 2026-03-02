import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} – PortalZYNORA`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  // Render markdown-like content as plain text sections
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: React.ReactNode[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      if (line.startsWith("## ")) {
        elements.push(
          <h2 key={i} className="text-2xl font-bold text-white mt-8 mb-4">
            {line.replace("## ", "")}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3 key={i} className="text-xl font-semibold text-white mt-6 mb-3">
            {line.replace("### ", "")}
          </h3>
        );
      } else if (line.startsWith("**") && line.endsWith("**")) {
        elements.push(
          <p key={i} className="font-semibold text-white mb-2">
            {line.replace(/\*\*/g, "")}
          </p>
        );
      } else if (line.startsWith("- ")) {
        // Collect consecutive list items
        const items: string[] = [];
        while (i < lines.length && lines[i].startsWith("- ")) {
          items.push(lines[i].replace("- ", ""));
          i++;
        }
        elements.push(
          <ul key={`ul-${i}`} className="list-disc list-inside space-y-1 mb-4 text-gray-300 ml-4">
            {items.map((item, idx) => (
              <li key={idx}>{item.replace(/\*\*(.*?)\*\*/g, "$1")}</li>
            ))}
          </ul>
        );
        continue;
      } else if (/^\d+\. /.test(line)) {
        // Collect consecutive numbered list items
        const items: string[] = [];
        while (i < lines.length && /^\d+\. /.test(lines[i])) {
          items.push(lines[i].replace(/^\d+\. /, ""));
          i++;
        }
        elements.push(
          <ol key={`ol-${i}`} className="list-decimal list-inside space-y-1 mb-4 text-gray-300 ml-4">
            {items.map((item, idx) => (
              <li key={idx}>{item.replace(/\*\*(.*?)\*\*/g, "$1")}</li>
            ))}
          </ol>
        );
        continue;
      } else if (line.startsWith("```")) {
        // Collect code block
        const codeLines: string[] = [];
        i++;
        while (i < lines.length && !lines[i].startsWith("```")) {
          codeLines.push(lines[i]);
          i++;
        }
        elements.push(
          <pre key={i} className="bg-gray-800 rounded-lg p-4 overflow-x-auto mb-4 text-sm">
            <code className="text-gray-300">{codeLines.join("\n")}</code>
          </pre>
        );
      } else if (line.startsWith("| ")) {
        // Table
        const tableLines: string[] = [];
        while (i < lines.length && lines[i].startsWith("|")) {
          if (!lines[i].match(/^\|[-\s|]+\|$/)) {
            tableLines.push(lines[i]);
          }
          i++;
        }
        elements.push(
          <div key={`table-${i}`} className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">
              <tbody>
                {tableLines.map((row, rowIdx) => {
                  const cells = row.split("|").filter((c) => c.trim() !== "");
                  return (
                    <tr key={rowIdx} className={rowIdx === 0 ? "bg-gray-700" : "border-t border-gray-700"}>
                      {cells.map((cell, cellIdx) => (
                        rowIdx === 0 ? (
                          <th key={cellIdx} className="px-3 py-2 text-left text-white font-semibold">
                            {cell.trim()}
                          </th>
                        ) : (
                          <td key={cellIdx} className="px-3 py-2 text-gray-300">
                            {cell.trim()}
                          </td>
                        )
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
        continue;
      } else if (line.trim() !== "") {
        // Regular paragraph
        const formattedLine = line.replace(/\*\*(.*?)\*\*/g, "$1");
        elements.push(
          <p key={i} className="text-gray-300 leading-relaxed mb-4">
            {formattedLine}
          </p>
        );
      }

      i++;
    }

    return elements;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-blue-400 transition-colors">Início</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-gray-300">{post.title}</span>
        </nav>

        {/* Article header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Link
              href={`/blog?categoria=${encodeURIComponent(post.category)}`}
              className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              {post.category}
            </Link>
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-gray-400 text-lg mb-4">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>Por {post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span>•</span>
            <span>{post.readTime} de leitura</span>
          </div>
        </header>

        {/* Featured image */}
        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        {/* Article content */}
        <article className="mb-12">
          {renderContent(post.content)}
        </article>

        {/* Tags */}
        <div className="border-t border-gray-700 pt-6 mb-12">
          <h4 className="text-sm font-medium text-gray-400 mb-3">Tags:</h4>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Artigos Relacionados</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <PostCard key={relatedPost.slug} post={relatedPost} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
