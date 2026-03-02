import Link from "next/link";
import Image from "next/image";
import PostCard from "@/components/PostCard";
import PromotionCard from "@/components/PromotionCard";
import { getAllPosts } from "@/lib/posts";
import { getAllPromotions } from "@/lib/promotions";

export default function Home() {
  const posts = getAllPosts();
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 4);
  const featuredPromotions = getAllPromotions().slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero Section */}
      <section className="mb-14">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-block bg-blue-600/20 text-blue-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
              🚀 Blog de Tecnologia
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Tecnologia e{" "}
              <span className="text-blue-400">Promoções</span>{" "}
              para Devs
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Artigos, tutoriais e as melhores ofertas de cursos, ferramentas e
              serviços para desenvolvedores e entusiastas de tecnologia.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Ver Artigos
              </Link>
              <Link
                href="/promocoes"
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Ver Promoções
              </Link>
            </div>
          </div>
          {featuredPost && (
            <Link href={`/blog/${featuredPost.slug}`} className="group">
              <div className="relative h-72 rounded-2xl overflow-hidden">
                <Image
                  src={featuredPost.imageUrl}
                  alt={featuredPost.title}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full mb-2 inline-block">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-white font-bold text-xl leading-snug group-hover:text-blue-400 transition-colors">
                    {featuredPost.title}
                  </h2>
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* Recent Posts */}
      <section className="mb-14">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Artigos Recentes</h2>
          <Link
            href="/blog"
            className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
          >
            Ver todos →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Promotions Banner */}
      <section className="mb-14">
        <div className="bg-gradient-to-r from-emerald-900/50 to-blue-900/50 rounded-2xl p-8 border border-emerald-800/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-emerald-400 text-sm font-medium mb-2 block">
                💰 Programa de Afiliados
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Promoções Exclusivas para Devs
              </h2>
              <p className="text-gray-300">
                Cursos, ferramentas e serviços com descontos de até 87%. Aproveite antes que acabem!
              </p>
            </div>
            <Link
              href="/promocoes"
              className="whitespace-nowrap bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Ver Todas as Ofertas
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Promotions */}
      <section className="mb-14">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Ofertas em Destaque</h2>
          <Link
            href="/promocoes"
            className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors"
          >
            Ver todas →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPromotions.map((promo) => (
            <PromotionCard key={promo.id} promotion={promo} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Explore por Categoria</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: "Programação", icon: "💻", color: "bg-blue-600/20 hover:bg-blue-600/30 text-blue-400" },
            { name: "Inteligência Artificial", icon: "🤖", color: "bg-purple-600/20 hover:bg-purple-600/30 text-purple-400" },
            { name: "Cloud", icon: "☁️", color: "bg-sky-600/20 hover:bg-sky-600/30 text-sky-400" },
            { name: "Front-end", icon: "🎨", color: "bg-pink-600/20 hover:bg-pink-600/30 text-pink-400" },
            { name: "Segurança", icon: "🔒", color: "bg-red-600/20 hover:bg-red-600/30 text-red-400" },
            { name: "DevOps", icon: "⚙️", color: "bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400" },
          ].map((cat) => (
            <Link
              key={cat.name}
              href={`/blog?categoria=${encodeURIComponent(cat.name)}`}
              className={`${cat.color} rounded-xl p-4 text-center transition-colors`}
            >
              <div className="text-2xl mb-2">{cat.icon}</div>
              <div className="text-sm font-medium">{cat.name}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

