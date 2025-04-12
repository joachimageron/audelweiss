'use client';

import Image from 'next/image';
import CustomTitle from '../atoms/CustomTitle';
import CustomLink from '../atoms/CustomLink';
import Link from 'next/link';

type CreationImage = {
    imgSrc: string;
    imgAlt: string;
    imgDescription?: string;
    linkHref?: string;
};

type HighlightingCreationsProps = {
    /**
     * images ---> array of images displayed in block
     */
    images: CreationImage[];

    /**
     * title ---> block's title
     */
    title: string;

    /**
     * children ---> block's textual content
     */
    children: React.ReactNode;

    /**
     * link ---> block's link
     */
    link: {
        label: string;
        href: string;
    };

    /**
     * className --->  elements' additionnal classes
     */
    className?: string;
};

export default function HighlightingCreations({ images, title, children, link, className = '' }: HighlightingCreationsProps) {
    return (
        <section className={`highlighting-creations inner-wrap flex flex-row lg:items-center gap-y-[3rem] lg:flex-nowrap flex-wrap mt-[7rem] mb-[5rem] ${className}`}>
            {images.slice(0, 4).map((creationImage, index) => {
                const orderMap = [2, 4, 1, 5];
                const orderClass = `lg:order-${orderMap[index] || 0}`;
                return (
                    <div key={index} className={`flex flex-col w-[50%] sm:w-[25%] px-[.6rem] lg:px-0 ${orderClass} ${index === 0 ? 'lg:ml-[-2.5rem] lg:mt-[-4rem] lg:z-1' : ''} ${index === 1 ? 'lg:mr-[-2.5rem] lg:mt-[-4rem] lg:z-1' : ''}`}>
                        {creationImage.linkHref ? (
                            <Link href={creationImage.linkHref} className="w-full aspect-[1/2] border-[.3rem] border-solid border-white rounded-[14rem] overflow-hidden" title={creationImage.imgDescription}>
                                <Image src={creationImage.imgSrc} alt={creationImage.imgAlt} className="w-full h-full object-cover object-center transition hover:scale-[1.15]" width={250} height={400} unoptimized />
                            </Link>
                        ) : (
                            <div className="w-full aspect-[1/2] border-[.3rem] border-solid border-white rounded-[14rem] overflow-hidden">
                                <Image src={creationImage.imgSrc} alt={creationImage.imgAlt} className="w-full h-full object-cover object-center" width={250} height={400} unoptimized />
                            </div>
                        )}

                        {creationImage.imgDescription && (<p className="mt-[1rem] mx-auto max-w-[80%] text-[1.4rem] text-dark-secondary italic text-center">{creationImage.imgDescription}</p>)}
                    </div>
                );
            })}

            <div className='lg:order-3 order-[-1] lg:px-[3rem] w-full lg:w-[45%] lg:max-w-[40rem]'>
                <CustomTitle level={2} className="text-[3.2rem] lg:text-center mb-[3rem]">{title}</CustomTitle>
                <div className='mb-[2rem]'>{children}</div>
                <CustomLink href={link.href} className="text-primary as--underline-hover">{link.label}</CustomLink>
            </div>
        </section>
    );
}
