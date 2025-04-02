'use client';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
};

export default function CustomButton({ children, onClick, type = 'button', className = '' }: ButtonProps) {
    return (
        <button type={type}
            onClick={onClick}
            className={`px-4 py-2 rounded bg-black text-white hover:bg-gray-800 transition ${className}`}
        >
            {children}
        </button>
    );
}
