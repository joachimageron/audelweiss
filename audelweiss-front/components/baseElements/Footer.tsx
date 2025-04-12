'use client';

import CustomLink from '../atoms/CustomLink';
import CustomButton from '../atoms/CustomButton';
import Image from 'next/image';
import logoImage from '@/app/assets/images/logo/logo.svg';

type FooterProps = {
    className?: string;
};

const footerLinks = [
    {
        title: 'Navigation',
        links: [
            { label: 'Accueil', href: '/' },
            { label: 'La marque', href: '/marque' },
            { label: 'Boutique', href: '/boutique' },
            { label: 'Blog', href: '/blog' },
        ],
    },
    {
        title: 'Informations',
        links: [
            { label: 'Mentions légales', href: '/mentions-legales' },
            { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
            { label: 'CGV', href: '/cgv' },
        ],
    },
    {
        title: 'Contact',
        links: [
            { label: 'contact@audelweiss.fr', href: 'mailto:contact@audelweiss.fr' },
            { label: 'Instagram', href: 'https://instagram.com/audelweiss' },
        ],
    },
];

export default function Footer({ className = '' }: FooterProps) {
    return (
        <footer className={`bg-dark text-white px-[2rem] py-[4rem] lg:px-[6rem] ${className}`}>
            <div className="flex flex-col lg:flex-row gap-[4rem] justify-between">
                {/* Logo + Newsletter */}
                <div className="flex flex-col gap-[2rem] max-w-[30rem]">
                    <CustomLink href="/" title="Retour à l'accueil">
                        <Image src={logoImage.src} alt="Logo Audelweiss" width={180} height={40} />
                    </CustomLink>
                    <form className="flex flex-col gap-[1rem]">
                        <label htmlFor="newsletter" className="text-sm">Inscrivez-vous à la newsletter</label>
                        <input
                            type="email"
                            id="newsletter"
                            placeholder="Votre adresse email"
                            className="p-[1rem] rounded text-black"
                        />
                        <CustomButton type="submit" className="bg-white text-black hover:bg-primary">S'inscrire</CustomButton>
                    </form>
                </div>

                {/* Liens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h4 className="text-lg font-semibold mb-[1rem]">{section.title}</h4>
                            <ul className="flex flex-col gap-[.7rem]">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <CustomLink
                                            href={link.href}
                                            className="text-sm hover:text-primary transition"
                                        >
                                            {link.label}
                                        </CustomLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-[4rem] text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Audelweiss. Tous droits réservés.
            </div>
        </footer>
    );
}
