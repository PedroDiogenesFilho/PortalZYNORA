import Image from "next/image";
import { Promotion } from "@/types";

interface PromotionCardProps {
  promotion: Promotion;
}

export default function PromotionCard({ promotion }: PromotionCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden hover:ring-2 hover:ring-emerald-500 transition-all group flex flex-col">
      <div className="relative h-44 overflow-hidden">
        <Image
          src={promotion.imageUrl}
          alt={promotion.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full font-bold">
            {promotion.discount}
          </span>
          {promotion.badge && (
            <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium">
              {promotion.badge}
            </span>
          )}
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="bg-gray-700/80 text-gray-300 text-xs px-2 py-1 rounded">
            {promotion.category}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-white font-bold text-base leading-snug mb-2 group-hover:text-emerald-400 transition-colors">
          {promotion.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
          {promotion.description}
        </p>
        {(promotion.originalPrice || promotion.promoPrice) && (
          <div className="flex items-center gap-3 mb-4">
            {promotion.originalPrice && (
              <span className="text-gray-500 text-sm line-through">
                {promotion.originalPrice}
              </span>
            )}
            {promotion.promoPrice && (
              <span className="text-emerald-400 font-bold text-lg">
                {promotion.promoPrice}
              </span>
            )}
          </div>
        )}
        {promotion.expiresAt && (
          <p className="text-orange-400 text-xs mb-3">
            ⏰ Oferta válida até{" "}
            {new Date(promotion.expiresAt).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
        )}
        <a
          href={promotion.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-lg font-medium transition-colors text-sm"
        >
          Aproveitar Oferta →
        </a>
      </div>
    </div>
  );
}
