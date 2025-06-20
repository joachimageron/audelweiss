"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { useHeader } from "@/src/hooks/useHeader";
import { useProductCategories } from "@/src/hooks/useProductCategories";
import useLockBodyScroll from "@/src/hooks/useBodyScrollLock";

import CustomLink from "@/src/components/atoms/CustomLink";
import Button from "@/src/components/atoms/Button";
import CustomInputField from "@/src/components/atoms/CustomInputField";
import { Burger, Close, Search } from "@/src/components/icons";

import { tv } from "tailwind-variants";
import clsx from "clsx";


const styles = tv({
  slots: {
    navWrapper: "flex-col lg:flex lg:flex-row gap-[2rem] absolute lg:static lg:opacity-100 lg:pointer-events-auto top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent z-50 lg:px-[3rem] px-[2rem] shadow-lg lg:shadow-none focus-within:opacity-100 focus-within:pointer-events-auto transition max-h-mobile-menu",
    navList: "flex flex-col lg:items-center lg:flex-row lg:gap-[2rem] gap-[.5rem] w-full",
    navItem: "flex flex-col group",
    navLink: "nav-link flex items-center lg:gap-[.7rem] gap-[1.2rem] py-[1rem] lg:py-[3.8rem] text-[1.4rem] font-semibold uppercase as--hover-filter-primary transition",
    subMenu: "lg:absolute lg:left-0 lg:top-[99%] lg:p-[1.5rem] lg:shadow-lg lg:group-hover:opacity-100 lg:group-hover:pointer-events-auto lg:group-focus-within:opacity-100 lg:group-focus-within:pointer-events-auto lg:opacity-0 lg:pointer-events-none min-w-[100%] bg-white flex lg:flex-row flex-col lg:gap-0 gap-[1rem] lg:mb-0 mb-[.6rem] lg:border-t border-t-light-primary transition z-40",
    subLink: "inline-block lg:px-[1.5rem] lg:mb-[.6rem] lg:px-[2.3rem] px-[1.4rem] py-[1rem] w-full text-[1.5rem] font-semibold uppercase",
    burgerButton: "lg:hidden cursor-pointer as--hover-filter-primary transition-all",
    closeIcon: "w-4 h-4",
    burgerIcon: "w-3 h-3",
    searchButton: "p-[1rem] cursor-pointer as--hover-filter-primary",
    searchIcon: "w-2 h-2",
    searchBar: "searchbar fixed top-0 left-0 w-full flex flex-col bg-white z-1000 px-[3rem] py-[4rem] shadow-md items-center gap-2 transition-transform duration-300",
    closeSearchBarButton: "cursor-pointer as--hover-filter-primary",
    searchForm: "flex sm:items-stretch items-center sm:flex-row flex-col gap-y-[1.4rem] w-full max-w-[85rem]",
    submitSearchButton: "w-fit bg-primary hover:bg-dark-primary",
  },
  variants: {
    open: {
      true: {
        navWrapper: "opacity-100 pointer-events-auto",
      },
      false: {
        navWrapper: "opacity-0 pointer-events-none",
      },
    },
    active: {
      true: {
        navLink: "text-dark-primary",
        subLink: "text-dark-primary",
      },
      false: {
        navLink: "hover:text-primary",
        subLink: "hover:text-primary",
      },
    },
    searchOpen: {
      true: {
        searchBar: "translate-y-[0]",
      },
      false: {
        searchBar: "translate-y-[-110%]",
      },
    },
  },
});
const { navWrapper, navList, navItem, navLink, subMenu, subLink, burgerButton, closeIcon, burgerIcon, searchButton, searchIcon, searchBar, closeSearchBarButton, searchForm, submitSearchButton } = styles();


const Navigation = ({ className = '' }: { className?: string }) => {
  const pathname = usePathname();
  const { data: header, isLoading } = useHeader({ queryKey: ['header'] });
  const { data: productCategories } = useProductCategories();

  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [isImageVisible, setIsImageVisible] = useState(true);

  useLockBodyScroll(isOpen || isSearchOpen);

  if (isLoading || !header) return null;

  return (
    <>
      <button
        className={`${burgerButton()} ${isOpen ? "mr-[.5rem]" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        tabIndex={-1}
      >
        {isOpen ? <Close className={closeIcon()} /> : <Burger className={burgerIcon()} />}
      </button>

      {/* Navigation */}
      <nav className={navWrapper({ open: isOpen })}>
        <ul className={navList()}>
          {header.navigation.map((group) => {
            const heading = group?.heading;
            const isActive = pathname === heading?.url;

            return (
              <li key={group?.id} className={navItem()}>
                {heading && (
                  <CustomLink href={heading.url} className={navLink({ active: isActive })}>
                    {heading.icon?.url && (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_API_URL}${heading.icon.url}`}
                        alt={`Icône ${heading.label}`}
                        width={20}
                        height={20}
                        className={`${isActive ? 'as--filter-dark-primary' : ''}`}
                      />
                    )}

                    <span className={heading.icon?.url && heading.hasIconOnly ? "lg:hidden" : ""}>
                      {heading.label}
                    </span>
                  </CustomLink>
                )}

                {heading?.hasShopMegamenu && productCategories && (
                  <ul className={subMenu()}>
                    {productCategories.map((category) => (
                      <li
                        key={category.documentId}
                        className="flex flex-col flex-1 lg:border-r border-r-light-primary"
                      >
                        <CustomLink
                          href={`/boutique/categorie/${category.slug}`}
                          onMouseEnter={() => {
                            if (category.illustration?.url) {
                              setHoveredImage(category.illustration.url);
                              setIsImageVisible(false);
                              setTimeout(() => setIsImageVisible(true), 8);
                            }
                          }}
                          className={subLink({ active: pathname === `/categorie/${category.slug}` })}>
                          {category.name}
                        </CustomLink>

                        <ul className="flex flex-col gap-[1rem]">
                          {category.product_subcategories?.map((sub) => (
                            <li key={sub.documentId}>
                              <CustomLink
                                href={`/boutique/categorie/${category.slug}/${sub.slug}`}
                                onMouseEnter={() => {
                                  if (sub.illustration?.url) {
                                    setHoveredImage(sub.illustration.url);
                                  } else if (category.illustration?.url) {
                                    setHoveredImage(category.illustration.url);
                                  }
                                  setIsImageVisible(false);
                                  setTimeout(() => setIsImageVisible(true), 8);
                                }}
                                className="block lg:px-[2.3rem] px-[3.4rem] text-[1.6rem] w-full hover:text-primary"
                              >
                                {sub.name}
                              </CustomLink>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}

                    {(hoveredImage || productCategories[0]?.illustration?.url) && (
                      <li className="lg:block hidden ml-[2rem]">
                        <Image
                          key={hoveredImage || "default"}
                          src={`${process.env.NEXT_PUBLIC_API_URL}${hoveredImage || productCategories[0].illustration.url}`}
                          alt="Illustration"
                          width={250}
                          height={320}
                          className={clsx(
                            "rounded-[.6rem] h-[32rem] w-[25rem] object-cover transition-opacity duration-500",
                            isImageVisible ? "opacity-100" : "opacity-0"
                          )} />
                      </li>
                    )}
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
        className={searchButton()}
      >
        <Search className={searchIcon()} aria-hidden="true" />
      </button>

      {/* Moteur de recherche interne */}
      <search className={searchBar({ searchOpen: isSearchOpen })}>
        <button
          onClick={() => setIsSearchOpen(false)}
          aria-label="Fermer la recherche"
          className={closeSearchBarButton()}
          tabIndex={isSearchOpen ? 0 : -1}
        >
          <Close className={closeIcon()} aria-label="Fermer la recherche interne" />
        </button>
        <form className={searchForm()}>
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
          <Button type="submit" className={submitSearchButton()} tabIndex={isSearchOpen ? 0 : -1}>Rechercher</Button>
        </form>
      </search>
    </>
  );
};

export default Navigation;
