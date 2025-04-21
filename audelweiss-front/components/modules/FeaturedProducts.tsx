'use client';

import Image from 'next/image';
import CustomButton from '@/components/atoms/CustomButton';
import clsx from 'clsx';

type Product = {
  id: number;
  name: string;
  price: string;
  image: {
    src: string;
    alt?: string;
  };
  promo?: boolean;
};

type FeaturedProductsProps = {
  description: React.ReactNode;
  products: Product[];
};

export default function FeaturedProducts({ description, products }: FeaturedProductsProps) {
  return (
    <section className="featured-products inner-wrap py-[5rem] text-center">
      {/* Texte de description centré */}
      <div className="text-[2.8rem] max-w-3xl mx-auto mb-[4rem] leading-relaxed">
        {description}
      </div>

      {/* Liste des produits */}
      <div className="flex flex-wrap justify-center gap-[2rem] mx-[1rem] mt-[4rem] mb-[4rem]">
        {products.map((product) => (
          <div key={product.id} className="max-w-[270px] w-full">
            <div className="relative">
              <Image
                src={product.image.src}
                alt={product.image.alt || "Produit"}
                width={330}
                height={330}
                className="w-full h-auto object-cover rounded"
              />
              {/* Pastille promo */}
              {product.promo && (
                <span className="absolute top-[15px] left-[15px] bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                  En promo !
                </span>
              )}
              {/* Faux bouton */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white border border-black px-4 py-2 text-sm font-medium uppercase shadow-md">
                Voir l'article
              </div>
            </div>

            {/* Nom et prix */}
            <div className="mt-[3rem]">
              <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
              <p className="text-lg font-medium text-gray-800">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bouton global */}
      <CustomButton>
        Voir la boutique
      </CustomButton>
    </section>
  );
}
