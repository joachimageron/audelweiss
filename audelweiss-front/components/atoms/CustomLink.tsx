'use client';

import Link from 'next/link';
import Image from "next/image";
import arrowIcon from '@/app/assets/images/icons/icon-arrow-right.svg';

type CustomLinkProps = {
    /**
     * href ---> link's target
     */
    href: string;

    /**
     * children ---> child content
     */
    children: React.ReactNode;

    /**
     * className ---> elements' additionnal classes
     */
    className?: string;

    /**
     * title ---> potential link's title
     */
    title?: string;

    /**
     * target ---> define the links' destination context
     */
    target?: '_blank' | '_self';

    /**
     * withIcon ---> if true : adding a left arrow icon which appears on hover
     */
    withIcon?: boolean;

    /**
     * isButtonLink ---> if true : adding a button style to the link 
     */
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