'use client';

import CustomLink from '../atoms/CustomLink';
import CustomButton from '../atoms/CustomButton';
import Image from 'next/image';
import logoImage from '@/app/assets/images/logo/logo-white.svg';

type FooterProps = {
    className?: string;
};

const footerLinks = [
    {
        title: 'Besoin d’aide ?',
        links: [
            { label: 'Points de vente physiques', href: '/points-vente' },
            { label: 'Livraison', href: '/livraison' },
            { label: 'Foire aux questions', href: '/faq' },
            { label: 'Me contacter', href: '/contact' },
        ],
    },
    {
        title: 'Liens utiles',
        links: [
            { label: 'CGV', href: '/cgv' },
            { label: 'Mentions légales', href: '/mentions-legales' },
            { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
        ],
    },
];

export default function Footer({ className = '' }: FooterProps) {
    return (
        <footer className={`h-[600px] bg-dark-background text-white px-[2rem] py-[4rem] lg:px-[6rem] ${className}`}>
            <div className="mx-auto h-full flex flex-col justify-between">
                {/* Colonnes alignées au milieu verticalement */}
                <div className="w-[80%] flex flex-col lg:flex-row gap-[3rem] items-center mx-auto my-auto">
                    
                    {/* Première colonne avec les liens "Besoin d'aide ?" */}
                    {footerLinks[0] && (
                        <div className="flex flex-col justify-center h-full flex-1">
                            <h4 className="text-lg font-semibold mb-[1rem]">{footerLinks[0].title}</h4>
                            <ul className="flex flex-col gap-[.7rem]">
                                {footerLinks[0].links.map((link, i) => (
                                    <li key={i}>
                                        <CustomLink href={link.href} className="text-primary transition">
                                            {link.label}
                                        </CustomLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Colonne centrale avec du contenu brut (plus large) */}
                    <div className="flex flex-col justify-center h-full text-center flex-2">
                        <div className="mb-4 flex justify-center">
                            <Image
                                src={logoImage}
                                alt="Logo Audelweiss"
                                width={170} 
                                height={160}
                                className="mx-auto lg:mx-0"
                            />
                        </div>
                        <p className="text-2xl leading-relaxed">
                            Chaque pièce est imaginée et réalisée à la main dans les Hautes-Alpes, avec passion et créativité.
                            Un mélange d’authenticité, d’expérimentation et d’énergie positive pour apporter douceur et harmonie à votre quotidien.
                        </p>
                        <p className="mt-3 italic text-base">Retrouvez-moi sur Instagram pour suivre les actus 🧶✨</p>
                    </div>

                    {/* Deuxième colonne avec les liens "Liens utiles" */}
                    {footerLinks[1] && (
                        <div className="flex flex-col justify-center h-full text-right items-end flex-1">
                            <h4 className="text-lg font-semibold mb-[1rem]">{footerLinks[1].title}</h4>
                            <ul className="flex flex-col gap-[.7rem]">
                                {footerLinks[1].links.map((link, i) => (
                                    <li key={i}>
                                        <CustomLink href={link.href} className="text-primary transition">
                                            {link.label}
                                        </CustomLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                </div>

                {/* Trait séparateur centré */}
                <hr className="my-[2rem] w-[80%] mx-auto border-gray-600" />

                {/* Copyright */}
                <div className="text-center text-xxl text-gray-400">
                    2025 © AUDELWEISS Craft – Site réalisé par Audrey HOSSEPIAN
                </div>
            </div>
        </footer>
    );
}

