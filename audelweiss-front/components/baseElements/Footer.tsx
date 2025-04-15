'use client';
import CustomLink from '../atoms/CustomLink';
import CustomButton from '../atoms/CustomButton';
import Image from 'next/image';
import logoImage from '@/app/assets/images/logo/logo-white.svg';
import instaImage from '@/app/assets/images/icons/icon-instagram.svg';

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
    {
        title: "Suivez-moi",
        links: [
            {
                label: "Instagram",
                href: "https://www.instagram.com/toncompte",
                icon: instaImage,
                iconSize: 17,
                hasIconOnly: true
            }
        ]
    }
];

export default function Footer({ className = '' }: FooterProps) {
    return (
        <footer className={`bg-dark-background text-white px-[2rem] py-[4rem] lg:px-[6rem] ${className}`}>
            <div className="mx-auto h-full flex flex-col justify-between">

                {/* Partie principale avec les 3 colonnes */}
                <div className="w-[87%] lg:w-[69%] flex flex-col lg:flex-row gap-[3rem] items-center mx-auto my-auto">

                    {/* Colonne centrale – en premier sur mobile */}
                    <div className="order-1 lg:order-2 flex flex-col justify-center h-full text-center flex-2">
                        <div className="mb-5 flex justify-center">
                            <Image
                                src={logoImage}
                                alt="Logo Audelweiss"
                                width={180}
                                height={163}
                                className="mx-auto lg:mx-0"
                            />
                        </div>

                        <p className="text-2xl leading-[2] my-5">
                            Chaque pièce est imaginée et réalisée à la main dans les Hautes-Alpes, avec passion et créativité.
                            Un mélange d’authenticité, d’expérimentation et d’énergie positive pour apporter douceur et harmonie à votre quotidien.
                        </p>

                        <p className="mt-3 text-2xl my-5">Retrouvez-moi sur Instagram pour suivre les actus 🧶✨</p>

                        <ul>
                            {footerLinks[2] && footerLinks[2].links.map((link, i) => {
                                const { label, href, icon, iconSize, hasIconOnly } = link;
                                return (
                                    <li key={i} className="flex justify-center mt-5">
                                        <a href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2">                                            {/* Conteneur pour l’icône avec bordure circulaire */}
                                            <div className="p-[18px] border border-white rounded-full transition hover:opacity-65 hover:text-primary">
                                                {icon && (
                                                    <Image
                                                        src={icon}
                                                        alt={`Logo ${label}`}
                                                        width={iconSize}
                                                        height={iconSize}
                                                        className="mx-auto invert"
                                                    />
                                                )}
                                            </div>         
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Première colonne – en second sur mobile */}
                    {footerLinks[0] && (
                        <div className="order-2 lg:order-1 flex flex-col justify-center h-full flex-1 items-center text-center lg:items-start lg:text-left">
                            <h4 className="text-3xl font-semibold mb-[1rem]">{footerLinks[0].title}</h4>
                            <ul className="flex flex-col gap-[.7rem] font-semibold">
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

                    {/* Deuxième colonne – en dernier sur mobile */}
                    {footerLinks[1] && (
                        <div className="order-3 lg:order-3 flex flex-col justify-center h-full flex-1 items-center text-center lg:items-end lg:text-right">
                            <h4 className="text-3xl font-semibold mb-[1rem]">{footerLinks[1].title}</h4>
                            <ul className="flex flex-col gap-[.7rem] font-semibold">
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

                {/* Trait séparateur + copyright */}
                <div className="text-center text-xxl text-white mt-16 mb-0">
                    <hr className="my-[2rem] w-[87%] lg:w-[69%] mx-auto border-white-600" />
                    <p class="leading-[2]">2025 © AUDELWEISS Craft – Site réalisé par Audrey HOSSEPIAN</p>
                </div>
            </div>
        </footer>
    );
}
