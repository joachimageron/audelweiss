'use client';

import Image from "next/image";
import CustomLink from "@/src/components/atoms/CustomLink";
import { Instagram } from "@/src/components/icons";
import { useFooter } from "@/src/hooks/useFooter";
import { renderRichText } from '@/src/utils/renderRichtext';

export default function Footer({ className = '' }) {
  const { data: footer, isLoading } = useFooter({ queryKey: ["footer"] });

  if (isLoading || !footer) return null;
  console.log(renderRichText(footer.richtext));
  return (
    <footer className={`bg-dark-background text-white px-[2rem] py-[4rem] lg:px-[6rem] ${className}`}>
      <div className="mx-auto h-full flex flex-col justify-between">

        <div className="w-[87%] lg:w-[69%] flex flex-col lg:flex-row gap-[3rem] items-center mx-auto my-auto">
          {/* Colonne centrale */}
          <div className="order-1 lg:order-2 flex flex-col justify-center h-full text-center flex-2">
            <div className="mb-5 flex justify-center">
              {footer.logo?.url && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}${footer.logo.url}`}
                  alt="Logo"
                  width={180}
                  height={163}
                />
              )}
            </div>
            
            {footer.richtext && (
                <div className="text-2xl leading-[2]">
                    {renderRichText(footer.richtext)}
                </div>
            )}

            <ul>
              {footer.reseaux?.map((link, i) => (
                <li key={i} className="flex justify-center mt-5">
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <div className="p-[18px] border border-white rounded-full transition hover:opacity-65 hover:text-primary">
                      <Instagram className="mx-auto invert" />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          {footer.navigation?.map((navGroup, index) => (
            <div
              key={navGroup.id}
              className={`order-${index === 0 ? 2 : 3} lg:order-${index === 0 ? 1 : 3} flex flex-col justify-center h-full flex-1 items-center text-center ${index === 0 ? 'lg:items-start lg:text-left' : 'lg:items-end lg:text-right'}`}
            >
              <h4 className="text-3xl font-semibold mb-[1rem]">{navGroup.heading?.label}</h4>
              <ul className="flex flex-col gap-[.7rem] font-semibold">
                {navGroup?.entries?.map((link, i) => (
                  <li key={i}>
                    <CustomLink href={link.url} className="text-primary transition">
                      {link.label}
                    </CustomLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center text-xxl text-white mt-[1.5rem] mb-0">
          <hr className="my-[3rem] w-[87%] lg:w-[69%] mx-auto border-white-600" />
          <p className="leading-[2]">2025 © AUDELWEISS Craft – Site réalisé par Audrey HOSSEPIAN</p>
        </div>
      </div>
    </footer>
  );
}
