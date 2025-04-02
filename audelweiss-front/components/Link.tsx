'use client';

import Link from 'next/link';

type LinkButtonProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
};

export default function CustomLink({ href, children, className = '' }: LinkButtonProps) {
    return (
        <Link
            href={href}
            className={`inline-block px-4 py-2 rounded bg-black text-white hover:bg-gray-800 transition ${className}`}
        >
            {children}
        </Link>
    );
}
