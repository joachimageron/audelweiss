'use client';

import Image from "next/image";
import arrowIcon from '@/app/assets/images/icons/icon-arrow-right.svg';

type ButtonProps = {
    /**
     * children ---> child content
     */
    children: React.ReactNode;

    /**
     * onClick ---> function to call on click inside
     */
    onClick?: () => void;

    /**
     * type ---> button's type, can be 'button', 'submit' or 'reset'
     */
    type?: 'button' | 'submit' | 'reset';

    /**
     * className ---> elements' additionnal classes
     */
    className?: string;

    /**
     * withIcon ---> if true : adding a left arrow icon which appears on hover
     */
    withIcon?: boolean;

    /**
     * tabIndex ---> allows to managed to accessibility with tab navigation
     */
    tabIndex?: number;

    /**
     * isSpanTag ---> if true: replace the <button> tag by a <span> tag
     */
    isSpanTag?: boolean;
};

export default function CustomButton({ children, onClick, type = 'button', className = '', withIcon = false, tabIndex, isSpanTag = false }: ButtonProps) {
    const baseClass = `inline-block px-[2rem] py-[1.2rem] text-center leading-none bg-primary hover:bg-dark-primary text-white rounded-[4px] transition duration-200 ${className} ${withIcon ? 'as--icon' : ''}`;

    if (isSpanTag) {
        return (
            <span onClick={onClick} className={baseClass} tabIndex={tabIndex}>
                {children}
                {withIcon && (<Image src={arrowIcon.src} alt="Icône de flèche vers la droite" width={16} height={16} className="a-icon" />)}
            </span>
        );
    } else {
        return (
            <button type={type} onClick={onClick} className={`${baseClass} cursor-pointer`} tabIndex={tabIndex}>
                {children}
                {withIcon && <Image src={arrowIcon.src} alt="Icône de flèche vers la droite" width={16} height={16} className="a-icon" />}
            </button>
        );
    }
}
