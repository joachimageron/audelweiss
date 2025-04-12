'use client';

import Link from 'next/link';
import Image from "next/image";
import arrowIcon from '@/app/assets/images/icons/icon-arrow-right.svg';

type CustomLinkProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
    title?: string;
    target?: '_blank' | '_self';
    withIcon?: boolean;
    isButtonLink?: boolean;
};

export default function CustomLink({ href, children, className = '', title = '', target = '_self', withIcon = false, isButtonLink = false }: CustomLinkProps) {
    return (
        <Link href={href} target={target} title={title} className={`${className} ${isButtonLink ? 'inline-block px-[2rem] py-[1.2rem] text-center leading-none bg-primary hover:bg-dark-primary text-white rounded-[4px] transition duration-200' : ''} ${withIcon ? 'as--icon' : ''}`}>
            {children}
            {withIcon && <Image src={arrowIcon.src} alt="Icône de flèche vers la droite" width={16} height={16} className="a-icon" />}
        </Link>
    );
}