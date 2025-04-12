'use client';

import CustomTitle from "../atoms/CustomTitle";
import CustomLink from "../atoms/CustomLink";
import Image from "next/image";

type Column = {
    id: number;
    image?: string;
    title: string;
    content: string;
    link: {
        label: string;
        href: string;
    };
};

type MultiplesColumnsProps = {
    /**
     * columns ---> array of columns which defines the contents
     */
    columns: Column[];

    /**
     * className ---> elements' additionnal classes
     */
    className?: string;
};

export default function MultipleColumns({ columns, className = '' }: MultiplesColumnsProps) {
    return (
        <section className={`multiples-columns inner-wrap flex flex-col items-center gap-[5rem] py-[7rem]`}>
            <CustomTitle level={2} className='text-[3.2rem]'>Titre optionnel et dynamique</CustomTitle>

            <div className="flex justify-center items-start gap-[4.5rem] lg:gap-[3rem] xl:gap-[6rem] flex-wrap">
                {columns.map((col, index) => {
                    const counter = String(index + 1).padStart(2, '0');

                    return (
                        <div key={col.id} className={`relative lg:flex-1 w-full lg:max-w-[40%] ${index % 2 != 0 ? 'lg:mt-[5rem]' : ''}`}>
                            {col.image && (<Image src={col.image.src} alt="exemple d'illustration" width={250} height={250} className="absolute right-0 lg:right-[-5rem] bottom-[-1rem] z-[-1] opacity-40" />)}
                            <span className="inline-block mb-[1.4rem] text-primary text-[3rem] font-bold font-aboreto opacity-70">{counter}</span>
                            <CustomTitle level={3} className="mb-[1.5rem] text-[2.4rem]">{col.title}</CustomTitle>
                            <p className="mb-[1.5rem] leading-[1.9]">{col.content}</p>
                            <CustomLink href={col.link.href} className="text-primary as--underline-hover">{col.link.label}</CustomLink>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
