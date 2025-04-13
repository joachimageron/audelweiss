"use client";

import CustomLink from "@/src/components/atoms/CustomLink";
import Navigation from "@/src/components/baseElements/Navigation";
import { useHeaderAutoHide } from "@/src/hooks/useHeaderAutoHide";
import Image from "next/image";
import { useHeader } from "@/src/hooks/useHeader";

const Header = () => {
  const showHeader = useHeaderAutoHide();

  const { data: header } = useHeader({ queryKey: ["header"] });

  return (
    <header
      className={`z-50 transition-transform duration-300 lg:relative fixed top-0 left-0 w-full flex gap-[2rem] items-center lg:px-[6rem] px-[1.5rem] py-[1.5rem] bg-white shadow-md ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <CustomLink href="/" className="mr-auto" title="Retourner à la page d'accueil">
        {header?.logo && (
          <Image
            src={`http://localhost:1337${header.logo.url}`}
            alt="Logo Audelweiss"
            width={200}
            height={45}
            priority
            className="max-w-[20rem]"
          />
        )}
      </CustomLink>
      {header?.navigation && <Navigation items={header.navigation} />}
    </header>
  );
};

export default Header;
