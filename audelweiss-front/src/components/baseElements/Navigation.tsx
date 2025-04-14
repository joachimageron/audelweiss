"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import CustomLink from "../atoms/CustomLink";
import Button from "../atoms/Button";
import Image from "next/image";
import CustomInputField from "@/src/components/atoms/CustomInputField";
import { Burger, Close, Search } from "../icons";
import useLockBodyScroll from "@/src/hooks/useBodyScrollLock";
import { useHeader } from "@/src/hooks/useHeader";


const Navigation = ({ className = '' }: { className?: string }) => {
  const pathname = usePathname();
  const { data: header, isLoading } = useHeader({ queryKey: ['header'] });

  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useLockBodyScroll(isOpen || isSearchOpen);

  if (isLoading || !header) return null;

  return (
    <>
      <button
        className={`lg:hidden cursor-pointer as--hover-filter-primary transition-all ${isOpen ? "mr-[.5rem]" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        tabIndex={-1}
      >
        {isOpen ? (
          <Close className={isOpen ? "w-4 h-4" : "w-3 h-3"} aria-label="Fermer le menu" />
        ) : (
          <Burger className={isOpen ? "w-4 h-4" : "w-3 h-3"} aria-label="Ouvrir le menu" />
        )}
      </button>

      {/* Navigation */}
      <nav
        className={`${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          } flex-col lg:flex lg:flex-row gap-[2rem] absolute lg:static lg:opacity-100 lg:pointer-events-auto top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent z-50 lg:px-[3rem] px-[2rem] lg:py-[2rem] pb-[2rem] shadow-lg lg:shadow-none focus-within:opacity-100 focus-within:pointer-events-auto transition max-h-mobile-menu`}
      >
        <ul className="flex flex-col lg:items-center lg:flex-row lg:gap-[2rem] gap-[.5rem] w-full">
          {header.navigation.map((group) => {
            const heading = group?.heading;
            const entries = group?.entries || [];
            const isActive = pathname === heading?.url;

            return (
              <li key={group?.id} className="relative flex flex-col group">
                {heading && (
                  <CustomLink
                    href={heading.url}
                    className={`nav-link flex items-center lg:gap-[.7rem] gap-[1.2rem] py-[1rem] text-[1.4rem] font-semibold uppercase as--hover-filter-primary transition ${isActive ? 'text-dark-primary' : 'hover:text-primary'
                      }`}
                  >
                    {/* Icône si elle existe */}
                    {heading.icon?.url && (
                      <Image
                        src={`http://localhost:1337${heading.icon.url}`}
                        alt={`Icône ${heading.label}`}
                        width={20}
                        height={20}
                        className={`${isActive ? 'as--filter-dark-primary' : ''}`}
                      />
                    )}

                    {/* Texte selon hasIconOnly */}
                    <span className={heading.icon?.url && heading.hasIconOnly ? "lg:hidden" : ""}>
                      {heading.label}
                    </span>
                  </CustomLink>
                )}
                {entries.length > 0 && (
                  <ul className="lg:absolute lg:left-[50%] lg:top-full lg:translate-x-[-50%] lg:py-[1rem] lg:shadow-lg lg:group-hover:opacity-100 lg:group-hover:pointer-events-auto lg:group-focus-within:opacity-100 lg:group-focus-within:pointer-events-auto lg:opacity-0 lg:pointer-events-none min-w-[100%] bg-white flex flex-col transition z-40">
                    {entries.map((entry, subIndex) => {
                      const isSubActive = pathname === entry?.url;
                      return (
                        <li key={subIndex}>
                          <CustomLink
                            href={entry?.url || '#'}
                            className={`inline-block lg:px-[1.5rem] px-[2.3rem] py-[1rem] w-full text-[1.4rem] font-semibold uppercase ${isSubActive ? 'text-dark-primary' : 'hover:text-primary'
                              }`}
                          >
                            {entry?.label}
                          </CustomLink>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bouton recherche */}
      <button
        onClick={() => setIsSearchOpen((prev) => !prev)}
        aria-label="Rechercher"
        className="p-[1   rem] cursor-pointer as--hover-filter-primary"
      >
        <Search className="w-2 h-2" aria-hidden="true" />
      </button>

      {/* Moteur de recherche interne */}
      <search
        className={`${isSearchOpen ? 'translate-y-[0]' : 'translate-y-[-110%]'
          } searchbar fixed top-0 left-0 w-full flex flex-col bg-white z-1000 px-[3rem] py-[4rem] shadow-md items-center gap-2 transition-transform duration-300`}
      >
        <button
          onClick={() => setIsSearchOpen(false)}
          aria-label="Fermer la recherche"
          className="cursor-pointer as--hover-filter-primary"
          tabIndex={isSearchOpen ? 0 : -1}
        >
          <Close className="w-4 h-4" aria-label="Fermer la recherche interne" />
        </button>
        <form className="flex sm:items-stretch items-center sm:flex-row flex-col gap-y-[1.4rem] w-full max-w-[85rem]">
          <CustomInputField
            id="search"
            name="search"
            type="text"
            placeholder="Rechercher une création, une catégorie..."
            label="Rechercher un terme"
            className="h-full"
            hasLabelHidden
            autoFocus={isSearchOpen}
            tabIndex={isSearchOpen ? 0 : -1}
          />
          <Button type="submit" className="w-fit bg-primary hover:bg-dark-primary" tabIndex={isSearchOpen ? 0 : -1}>
            Rechercher
          </Button>
        </form>
      </search>
    </>
  );
};

export default Navigation;
