'use client';

import Image from "next/image";
import CustomLink from "@/src/components/atoms/CustomLink";
import { useFooter } from "@/src/hooks/useFooter";
import { renderRichText } from '@/src/utils/renderRichtext';
import CustomTitle from "./atoms/CustomTitle";

export default function Footer({ className = '' }) {
  const { data: footer, isLoading } = useFooter({ queryKey: ["footer"] });

  if (isLoading || !footer) return null;

  return (
    <footer className={`bg-dark-background text-white px-[2rem] py-[4rem] lg:px-[6rem] ${className}`}>
      <div className="mx-auto h-full flex flex-col justify-between">

        <div className="inner-wrap flex flex-col lg:flex-row gap-[3rem] items-center mx-auto my-auto">
          {/* Navigation gauche */}
          {footer.leftColumnLinks && (
            <div className="order-1 flex flex-col justify-center h-full flex-1 items-center text-center lg:items-start lg:text-left">
              {footer.leftColumnTitle && (
                <CustomTitle level={2} className="font-aboreto text-[2rem]">{footer.leftColumnTitle}</CustomTitle>
              )}
              <ul className="flex flex-col gap-[1.4rem] mt-[2rem] font-semibold">
                {footer.leftColumnLinks.map((link, index) => (
                  <li key={index}>
                    <CustomLink href={link.url} className="as--underline-hover">
                      {link.label}
                    </CustomLink>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Colonne centrale */}
          <div className="lg:order-2 order-0 flex flex-col justify-center h-full text-center flex-2">
            <div className="mb-3 flex justify-center">
              {footer.logo?.url && (
                <CustomLink href="/">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}${footer.logo.url}`}
                    alt="Logo"
                    width={180}
                    height={163}
                  />
                </CustomLink>
              )}
            </div>

            {footer.centralRichtext && (
              <div className="text-2xl leading-[2]">{renderRichText(footer.centralRichtext)}</div>
            )}

            <ul className="flex justify-center gap-[2rem] flex-wrap">
              {footer.reseaux?.map((reseau, i) => (
                <li key={i}>
                  <CustomLink href={reseau.url} className="block p-[10px] border border-white rounded-full as--filter-white transition hover:border-primary as--hover-filter-primary">
                    {reseau.icon?.url && (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_API_URL}${reseau.icon.url}`}
                        alt={reseau.icon.alternativeText || 'Réseau social'}
                        width={20}
                        height={20}
                        className="transition"
                      />
                    )}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation droite */}
          {footer.rightColumnLinks && (
            <div className="order-3 flex flex-col justify-center h-full flex-1 items-center text-center lg:items-end lg:text-right">
              {footer.rightColumnTitle && (
                <CustomTitle level={2} className="font-aboreto text-[2rem]">{footer.rightColumnTitle}</CustomTitle>
              )}
              <ul className="flex flex-col gap-[1.5rem] mt-[2rem] font-semibold">
                {footer.rightColumnLinks.map((link, index) => (
                  <li key={index}>
                    <CustomLink href={link.url} className="as--underline-hover">
                      {link.label}
                    </CustomLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>


        <div className="text-center text-xxl text-white mt-[1.5rem] mb-0">
          <hr className="my-[3rem] w-[87%] lg:w-[69%] mx-auto border-white-600" />
          <p className="leading-[2]">2025 © Projet annuel : AUDELWEISS Craft – Site réalisé par Lisa MICHALLON, Joachim AGERON, Hugo DUPERTHUY et Louis CAUVET</p>
        </div>
      </div>
    </footer>
  );
}
