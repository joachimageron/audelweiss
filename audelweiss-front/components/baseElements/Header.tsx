'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import CustomLink from '../atoms/CustomLink';
import Image from "next/image";
import logoImage from '@/app/assets/images/logo/logo.svg';
import menuIcon from '@/app/assets/images/icons/icon-burger.svg';
import closeIcon from '@/app/assets/images/icons/icon-close.svg';
import userIcon from '@/app/assets/images/icons/icon-user.svg';
import shopIcon from '@/app/assets/images/icons/icon-shop.svg';
import searchIcon from '@/app/assets/images/icons/icon-search.svg';
import CustomButton from '../atoms/CustomButton';
import CustomInputField from '@/components/atoms/CustomInputField';

type HeaderProps = {
    /**
     * className ---> elements' additionnal classes
     */
    className?: string;
};

// TODO : Dynamiser ces données avec celles issues de Strapi pour le composant "Menu de navigation"
const navItems = [
    { label: "La marque", href: "/marque" },
    {
        label: "Boutique", href: "/boutique",
        children: [
            { label: "Crochet", href: "/boutique/crochet" },
            { label: "Bois", href: "/boutique/bois" },
            { label: "Flocage", href: "/boutique/flocage" },
        ],
    },
    { label: "Créations personnalisées", href: "/creations" },
    { label: "Blog", href: "/blog" },
    { label: "Mon compte", href: "/compte", icon: userIcon, iconSize: 22, hasIconOnly: true },
    { label: "Mon panier", href: "/panier", icon: shopIcon, iconSize: 18, hasIconOnly: true },
];

export default function Header({ className }: HeaderProps) {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        const shouldLockScroll = isOpen || isSearchOpen;

        document.body.classList.toggle('overflow-hidden', shouldLockScroll);
    }, [isOpen, isSearchOpen]);

    return (
        <header className={`lg:relative fixed top-0 left-0 w-full flex gap-[2rem] items-center lg:px-[6rem] px-[1.5rem] py-[1.5rem] bg-white shadow-md ${className}`}>
            {/* Logo */}
            <CustomLink href="/" className='mr-auto' title="Retourner à la page d'accueil">
                <Image src={logoImage.src} alt="Logo Audelweiss" width={200} height={45} priority className='max-w-[20rem]' />
            </CustomLink>

            {/* Bouton burger (visible en mobile) */}
            <button className={`lg:hidden cursor-pointer as--hover-filter-primary transition-all ${isOpen ? 'mr-[.5rem]' : ''}`} onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"} tabIndex={-1}>
                <Image src={isOpen ? closeIcon.src : menuIcon.src} alt={isOpen ? "Fermer le menu" : "Ouvrir le menu"} width={isOpen ? 40 : 30} height={isOpen ? 40 : 30} />
            </button>

            {/* Navigation */}
            <nav className={`${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} flex-col lg:flex lg:flex-row gap-[2rem] absolute lg:static lg:opacity-100 lg:pointer-events-auto top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent z-50 lg:px-[3rem] px-[2rem] lg:py-[2rem] pb-[2rem] shadow-lg lg:shadow-none focus-within:opacity-100 focus-within:pointer-events-auto transition max-h-mobile-menu`}>
                <ul className="flex flex-col lg:items-center lg:flex-row lg:gap-[2rem] gap-[.5rem] w-full">
                    {navItems.map(({ label, href, icon, iconSize, hasIconOnly, children }, index) => {
                        const isActive = pathname === href;
                        return (
                            <li className="relative flex flex-col group" key={index}>
                                <CustomLink href={href} className={`nav-link flex items-center lg:gap-[.7rem] gap-[1.2rem] py-[1rem] text-[1.4rem] font-semibold uppercase as--hover-filter-primary transition ${isActive ? 'text-dark-primary' : 'hover:text-primary'}`}>
                                    {icon && (<Image src={icon.src} alt={`Icône ${label}`} width={iconSize} height={iconSize} priority className={`${isActive ? 'as--filter-dark-primary' : ''}`} />)}
                                    {/* 'hasIconOnly' = false --> On affiche toujours le texte */}
                                    {!hasIconOnly && <span>{label}</span>}
                                    {/* 'hasIconOnly' = true --> On affiche le texte uniquement sur mobile */}
                                    {hasIconOnly && <span className="lg:hidden">{label}</span>}
                                </CustomLink>

                                {/* Sous-menu si le lien possède des enfants */}
                                {children && (<ul className="lg:absolute lg:left-[50%] lg:top-full lg:translate-x-[-50%] lg:py-[1rem] lg:shadow-lg lg:group-hover:opacity-100 lg:group-hover:pointer-events-auto lg:group-focus-within:opacity-100 lg:group-focus-within:pointer-events-auto lg:opacity-0 lg:pointer-events-none min-w-[100%] bg-white flex flex-col transition z-40">
                                    {children.map((child, subIndex) => {
                                        const isSubmenuActive = pathname === child.href;
                                        return (
                                            <li key={subIndex}>
                                                <CustomLink href={child.href} className={`inline-block lg:px-[1.5rem] px-[2.3rem] py-[1rem] w-full text-[1.4rem] font-semibold uppercase ${isSubmenuActive ? 'text-dark-primary' : 'hover:text-primary'}`}>
                                                    {child.label}
                                                </CustomLink>
                                            </li>
                                        )
                                    })}
                                </ul>)}
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Bouton du moteur de recherche interne */}
            <button onClick={() => setIsSearchOpen(prev => !prev)} aria-label="Rechercher" className='cursor-pointer as--hover-filter-primary'>
                <Image src={searchIcon.src} alt="Icône loupe pour la recherche interne" width={22} height={22} />
            </button>

            {/* Moteur de recherche interne*/}
            <search className={`${isSearchOpen ? 'translate-y-[0]' : 'translate-y-[-110%]'} searchbar fixed top-0 left-0 w-full flex flex-col gap-[4rem] bg-white z-1000 px-[3rem] py-[4rem] shadow-md items-center gap-2 transition-transform duration-300`}>
                <button onClick={() => setIsSearchOpen(false)} aria-label="Fermer la recherche" className='cursor-pointer as--hover-filter-primary' tabIndex={isSearchOpen ? 0 : -1}>
                    <Image src={closeIcon.src} alt="Icône croix pour fermer la recherche interne" width={40} height={40} />
                </button>
                <form className='flex sm:items-stretch items-center sm:flex-row flex-col gap-y-[1.4rem] w-full max-w-[85rem]'>
                    <CustomInputField id="search" name="search" type="text" placeholder="Rechercher une création, une catégorie..." label="Rechercher un terme" className='h-full' hasLabelHidden autoFocus={isSearchOpen} tabIndex={isSearchOpen ? 0 : -1} />
                    <CustomButton type="submit" className="w-fit bg-primary hover:bg-dark-primary" tabIndex={isSearchOpen ? 0 : -1}>Rechercher</CustomButton>
                </form>
            </search>
        </header>
    );
}