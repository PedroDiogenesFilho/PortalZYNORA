"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import PromotionCard from "@/components/PromotionCard";
import { Promotion } from "@/types";

interface PromotionsContentProps {
  allPromotions: Promotion[];
  categories: string[];
}

export default function PromotionsContent({ allPromotions, categories }: PromotionsContentProps) {
  const searchParams = useSearchParams();
  const categoria = searchParams.get("categoria") ?? undefined;

  const promotions = categoria
    ? allPromotions.filter((p) => p.category === categoria)
    : allPromotions;

  return (
    <>
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
    </>
  );
}
