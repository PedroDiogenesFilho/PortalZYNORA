import { Suspense } from "react";
import { getAllPromotions, getAllPromotionCategories } from "@/lib/promotions";
import PromotionsContent from "@/components/PromotionsContent";

export const metadata = {
  title: "Promoções de Afiliados – PortalZYNORA",
  description:
    "As melhores promoções de cursos, ferramentas e serviços de tecnologia com descontos exclusivos",
};

export default function PromotionsPage() {
  const allPromotions = getAllPromotions();
  const categories = getAllPromotionCategories();

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

      <Suspense fallback={null}>
        <PromotionsContent allPromotions={allPromotions} categories={categories} />
      </Suspense>
    </div>
  );
}
