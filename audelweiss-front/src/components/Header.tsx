"use client";

import { useHeaderAutoHide } from "@/src/hooks/useHeaderAutoHide";
import { useHeader } from "@/src/hooks/useHeader";

import CustomLink from "@/src/components/atoms/CustomLink";
import Navigation from "@/src/components/baseElements/Navigation";
import Image from "next/image";

import { tv } from "tailwind-variants";


const styles = tv({
  slots: {
    headerWrapper: "z-50 transition-transform duration-300 lg:relative fixed top-0 left-0 w-full flex gap-[2rem] items-center lg:px-[6rem] px-[1.5rem] py-[1.5rem] bg-white shadow-md",
    logoLink: "mr-auto",
    logoImage: "max-w-[20rem]",
  },
  variants: {
    visible: {
      true: {
        headerWrapper: "translate-y-0",
      },
      false: {
        headerWrapper: "-translate-y-full"
      }
    }
  }
});
const { headerWrapper, logoLink, logoImage } = styles();

const Header = () => {
  const showHeader = useHeaderAutoHide();

  const { data: header } = useHeader({ queryKey: ["header"] });

  return (
    <header className={headerWrapper({ visible: showHeader })}>
      {/* Logo */}
      < CustomLink href="/" className={logoLink()} title="Retourner à la page d'accueil" >
        {header?.logo && (
          <Image
            src={`${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}${header.logo.url}`}
            alt="Logo Audelweiss"
            width={200}
            height={45}
            priority
            className={logoImage()}
          />
        )}
      </CustomLink >
      {header?.navigation && <Navigation />}
    </header >
  );
};

export default Header;
