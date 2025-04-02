'use client';

import CustomButton from '@/components/Button';
import CustomLink from '@/components/Link';

export default function BuildComponents() {
    return (
        <main>
            <h2 className="text-[20px] text-font-dm-sans uppercase">Des créations uniques au crochet</h2>
            <h2 className="text-[20px] font-aboreto uppercase">Éditions limitées ou sur-mesure</h2>

            <CustomButton onClick={() => alert('Clicked!')}>Clique ici</CustomButton>

            <CustomButton className="bg-blue-600 hover:bg-blue-500">Second Bouton</CustomButton>

            <CustomLink href="/contact">Contactez-moi</CustomLink>

            <CustomLink href="/blog" className="bg-blue-600 hover:bg-blue-500">Voir le blog</CustomLink>
        </main>
    );
}
