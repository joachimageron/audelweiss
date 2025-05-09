'use client';

import Image from 'next/image';
import CustomLink from '@/src/components/atoms/CustomLink';

type Product = {
  id: number;
  name: string;
  price: string;
  image: {
    src: string;
    alt?: string;
  };
  link: {
    label: string;
    href: string;
  };
  promo?: boolean;
};

type FeaturedProductsProps = {
  description: React.ReactNode;
  products: Product[];
  linkHref: string;
};

export default function FeaturedProducts({ description, products, linkHref }: FeaturedProductsProps) {
  return (
    <section className="featured-products inner-wrap py-[5rem] text-center">
      {/* Texte de description centré */}
      <div className="text-[2.8rem] mx-auto mb-[4rem] leading-relaxed">
        {description}
      </div>

      {/* Liste des produits */}
      <div className="flex flex-wrap justify-center gap-[2rem] mx-[1rem] mt-[4rem] mb-[4rem]">
        {products.map((product) => (
          <div key={product.id} className="max-w-[280px] w-full">
            {/* Lien englobant l'image et le bouton */}
            <a href={product.link.href} className="relative block">
              <div className="relative">
                <Image
                  src={product.image.src}
                  alt={product.image.alt || "Produit"}
                  width={280}
                  height={280}
                  className="w-[280px] h-[280px] object-cover rounded"
                />
                {/* Pastille promo */}
                {product.promo && (
                  <span className="absolute top-[15px] left-[15px] bg-red-600 text-white text-[1.6rem] px-3 py-1 rounded-full">
                    En promo !
                  </span>
                )}
                {/* Faux bouton */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white border border-black px-4 py-2 text-[1.6rem] font-medium uppercase shadow-md">
                  Voir l'article
                </div>
              </div>
            </a>

            {/* Nom et prix */}
            <div className="mt-[3rem]">
              <h3 className="text-[1.5rem] font-semibold mb-1">{product.name}</h3>
              <p className="text-[1.4rem] font-medium text-gray-800">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bouton global */}
      <CustomLink isButtonLink href={linkHref}>
        Voir la boutique
      </CustomLink>
    </section>
  );
}
