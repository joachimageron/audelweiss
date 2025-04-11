'use client';

type TitleProps = {
    /**
     * level = nombre
     */
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    children: React.ReactNode;
    className?: string;
};

export default function CustomTitle({ level = 2, children, className = 'text-[4rem]' }: TitleProps) {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    return (
        <Tag className={`font-aboreto font-bold ${className}`}>
            {children}
        </Tag>
    );
}