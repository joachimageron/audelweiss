'use client';

import Image from "next/image";
import arrowIcon from '@/app/assets/images/icons/icon-arrow-right.svg';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    withIcon?: boolean;
};

export default function CustomButton({ children, onClick, type = 'button', className = '', withIcon = false }: ButtonProps) {
    return (
        <button type={type} onClick={onClick} className={`inline-block px-[2rem] py-[1.2rem] text-center leading-none bg-primary hover:bg-dark-primary  text-white rounded-[4px] cursor-pointer transition duration-200 ${className} ${withIcon ? 'as--icon' : ''}`}>
            {children}
            {withIcon && <Image src={arrowIcon.src} alt="Icône de flèche vers la droite" width={16} height={16} className="a-icon" />}
        </button>
    );
}
