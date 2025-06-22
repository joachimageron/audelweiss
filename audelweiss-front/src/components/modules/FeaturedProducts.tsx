'use client';

import Image from 'next/image';
import CustomLink from '@/src/components/atoms/CustomLink';
import clsx from 'clsx';
import { ComponentBlocksFeaturedProducts } from '@/src/types/generated';
import { renderRichText } from '@/src/utils/renderRichtext';

type Props = {
  block: ComponentBlocksFeaturedProducts;
  className?: string;
};

export default function FeaturedProducts({ block, className = "" }: Props) {
  return (
    <section className="featured-products inner-wrap py-[5rem] text-center">
      {/* Texte de description centré */}
      <div className="text-[2.8rem] mx-auto mb-[4rem] leading-relaxed">
        {renderRichText(block.headingBlock)}
      </div>

      {/* Liste des produits */}
      <div className="flex flex-wrap justify-center gap-[2rem] mx-[1rem] mt-[4rem] mb-[4rem]">
        {block.products.map((product) => (
          <div key={product?.documentId} className="max-w-[280px] w-full">
            {/* Lien englobant l'image et le bouton */}
            <a href={product.productSlug} className="relative block">
              <div className="relative">
                <Image
                  src={process.env.NEXT_PUBLIC_API_URL + product.photos[0].url}
                  alt={product.photos[0].alternativeText || "Produit"}
                  width={280}
                  height={280}
                  className="w-[280px] h-[280px] object-cover rounded"
                />

                {/* Faux bouton */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white border border-black px-[1rem] py-[1rem] text-[1.6rem] font-medium uppercase shadow-md">
                  Voir l'article
                </div>
              </div>
            </a>

            {/* Nom et prix */}
            <div className="mt-[3rem]">
              <p className="text-[1.5rem] font-semibold mb-1">{product.name}</p>
              <p className="text-[1.4rem] font-medium text-gray-800">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bouton global */}
      {block.blockLink?.url && block.blockLink.label &&
        <CustomLink isButtonLink href={block.blockLink.url}>
          {block.blockLink.label}
        </CustomLink>
      }
    </section>
  );
}
