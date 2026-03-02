import PromotionCard from "@/components/PromotionCard";
import { getAllPromotions, getAllPromotionCategories } from "@/lib/promotions";
import Link from "next/link";

interface PromotionsPageProps {
  searchParams: Promise<{ categoria?: string }>;
}

export const metadata = {
  title: "Promoções de Afiliados – PortalZYNORA",
  description:
    "As melhores promoções de cursos, ferramentas e serviços de tecnologia com descontos exclusivos",
};

export default async function PromotionsPage({ searchParams }: PromotionsPageProps) {
  const { categoria } = await searchParams;
  const allPromotions = getAllPromotions();
  const categories = getAllPromotionCategories();

  const promotions = categoria
    ? allPromotions.filter((p) => p.category === categoria)
    : allPromotions;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <span className="inline-block bg-emerald-600/20 text-emerald-400 text-sm font-medium px-3 py-1 rounded-full mb-3">
          💰 Programa de Afiliados
        </span>
        <h1 className="text-3xl font-bold text-white mb-2">
          Promoções Exclusivas para Devs
        </h1>
        <p className="text-gray-400 max-w-2xl">
          As melhores ofertas de cursos, ferramentas, hospedagem e serviços de tecnologia.
          Descontos exclusivos negociados para a comunidade PortalZYNORA.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-800 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-emerald-400">{allPromotions.length}+</div>
          <div className="text-gray-400 text-sm">Ofertas ativas</div>
        </div>
        <div className="bg-gray-800 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-blue-400">87%</div>
          <div className="text-gray-400 text-sm">Desconto máximo</div>
        </div>
        <div className="bg-gray-800 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-purple-400">{categories.length}</div>
          <div className="text-gray-400 text-sm">Categorias</div>
        </div>
      </div>

      {/* Affiliate disclosure */}
      <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-xl p-4 mb-8">
        <p className="text-yellow-300 text-sm">
          <span className="font-semibold">⚠️ Disclosure de Afiliado:</span> Este site contém links
          de afiliados. Se você realizar uma compra através desses links, poderemos receber uma
          comissão sem custo adicional para você. Isso nos ajuda a manter o blog e continuar
          produzindo conteúdo gratuito.
        </p>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Link
          href="/promocoes"
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            !categoria
              ? "bg-emerald-600 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          Todos
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/promocoes?categoria=${encodeURIComponent(cat)}`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              categoria === cat
                ? "bg-emerald-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {cat}
          </Link>
        ))}
      </div>

      {/* Promotions grid */}
      {promotions.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">Nenhuma promoção encontrada nessa categoria.</p>
          <Link href="/promocoes" className="text-emerald-400 hover:text-emerald-300 mt-2 inline-block">
            Ver todas as promoções
          </Link>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {promotions.map((promo) => (
            <PromotionCard key={promo.id} promotion={promo} />
          ))}
        </div>
      )}
    </div>
  );
}
