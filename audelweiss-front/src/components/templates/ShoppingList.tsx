"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import CustomInputField from "@/src/components/atoms/CustomInputField";
import Button from "@/src/components/atoms/Button";
import { tv } from "tailwind-variants";
import CustomTitle from "@/src/components/atoms/CustomTitle";
import CustomLink from "@/src/components/atoms/CustomLink";
import { useProducts } from "@/src/hooks/useProducts";
import Image from "../atoms/Image";
import ProductCard from "./ProductsList/ProductCard";
import { useProductCategories } from "@/src/hooks/useProductCategories";

const styles = tv({
  slots: {
    mainWrapper: "inner-wrap",
    searchAndSort: "flex justify-between sm:items-end flex-col-reverse sm:flex-row gap-x-[5rem] gap-y-[4rem] my-[3rem]",
    searchWrapper: "flex flex-wrap sm:flex-nowrap gap-2",
    sortLabel: "block mb-1",
    sortInput:
      "border px-[1.6rem] py-[1.2rem] rounded-[.4rem] text-dark-primary transition outline-none placeholder:text-dark-primary focus:ring-1 border-primary focus:ring-primary",
    filtersWrapper:
      "relative flex flex-col justify-center items-center gap-[2rem] p-[2rem] pb-[3rem] border-y border-y-gray-300",
    filtersTitle: "text-[3.3rem] text-dark-primary font-allura",
    pricesFiltersList:
      "lg:absolute top-[1rem] right-[1rem] flex flex-wrap justify-center gap-[1.5rem] w-full sm:w-auto",
    priceFilterItem: "flex flex-col",
    priceFilterLabel: "text-dark-primary mb-[.5rem]",
    priceFilterInput:
      "border border-gray-300 rounded-[.4rem] px-[1.2rem] py-[.8rem] w-[15rem] text-dark-primary outline-none focus:ring-1 focus:ring-primary",
    errorText: "text-red-600 text-center mb-4 text-[1.6rem]",
    categoriesGrid: "grid grid-cols-1 sm:grid-cols-3 mt-[2rem] w-full",
    categoryName: "mb-[1.5rem] text-[1.8rem] font-bold font-aboreto italic text-gray-500 text-center",
    subCategoriesList: "flex flex-wrap gap-x-[3.5rem] gap-y-[1.5rem]",
    subCategorieItem: "min-w-[40%]",
    subCategorieLabel: "flex items-center text-dark-primary cursor-pointer",
    subCategorieInput: "accent-primary mr-[1rem] w-[2rem] h-[2rem]",
    filtersButtons: "flex flex-wrap gap-x-[3rem] gap-y-[1.5rem] mt-[2rem]",
    resetFiltersButton: "bg-secondary hover:bg-dark-secondary",
    errorText2: "text-center text-[1.6rem] text-gray-500 my-[3rem]",
    productsGrid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[3rem] my-[4rem]",
    paginationWrapper: "flex justify-center flex-wrap gap-[1rem]",
  },
});

const categoryColumn = tv({
  base: "sm:px-[3rem] py-[1rem]",
  variants: {
    last: {
      false: "sm:border-r border-r-gray-300",
      true: "",
    },
  },
});

const paginationButton = tv({
  base: "w-[3.5rem] h-[3.5rem] rounded-[.6rem] border cursor-pointer",
  variants: {
    active: {
      true: "bg-primary text-white",
      false: "border-gray-300 text-dark-primary hover:bg-gray-100",
    },
  },
});

const {
  mainWrapper,
  searchAndSort,
  searchWrapper,
  sortLabel,
  sortInput,
  filtersWrapper,
  filtersTitle,
  pricesFiltersList,
  priceFilterItem,
  priceFilterLabel,
  priceFilterInput,
  errorText,
  categoriesGrid,
  categoryName,
  subCategoriesList,
  subCategorieItem,
  subCategorieLabel,
  subCategorieInput,
  filtersButtons,
  resetFiltersButton,
  errorText2,
  productsGrid,
  paginationWrapper,
} = styles();

const PRODUCTS_PER_PAGE = 12;

export default function ShoppingList() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = Number(searchParams.get("page") || 1);
  const sort = searchParams.get("sort") || "newest";
  const searchQuery = searchParams.get("search") || "";
  const initialMin = searchParams.get("min") || "";
  const initialMax = searchParams.get("max") || "";
  const categoryParams = searchParams.getAll("cat") || [];

  const [searchTerm, setSearchTerm] = useState(searchQuery);
  const [minPrice, setMinPrice] = useState(initialMin);
  const [maxPrice, setMaxPrice] = useState(initialMax);
  const [selectedCategories, setSelectedCategories] = useState(categoryParams);
  const [tempSelectedCategories, setTempSelectedCategories] = useState(categoryParams);
  const [resetTriggered, setResetTriggered] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { data: products } = useProducts({ queryKey: ["products"] });
  const { data: categories } = useProductCategories();

  useEffect(() => {
    if (resetTriggered) {
      updateURL(1, []);
      setResetTriggered(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategories, minPrice, maxPrice, resetTriggered]);

  if (!products) return;

  const updateURL = (page = 1, categories = selectedCategories) => {
    const categoryQuery = categories.map(cat => `cat=${encodeURIComponent(cat)}`).join("&");
    const query = `?sort=${sort}&page=${page}&search=${encodeURIComponent(searchTerm)}&min=${minPrice}&max=${maxPrice}${categoryQuery ? `&${categoryQuery}` : ""
      }`;
    router.push(query);
  };

  const handleSearch = () => {
    updateURL(1);
  };

  const handleApplyFilters = () => {
    if (minPrice && maxPrice && parseFloat(minPrice) > parseFloat(maxPrice)) {
      setErrorMessage("Le prix minimum ne peut pas être supérieur au prix maximum.");
      return;
    }
    setErrorMessage("");
    setSelectedCategories(tempSelectedCategories);
    updateURL(1, tempSelectedCategories);
  };

  const handleSortChange = e => {
    const selected = e.target.value;
    const categoryQuery = selectedCategories.map(cat => `cat=${encodeURIComponent(cat)}`).join("&");
    const query = `?sort=${selected}&page=1&search=${encodeURIComponent(searchQuery)}&min=${minPrice}&max=${maxPrice}${categoryQuery ? `&${categoryQuery}` : ""
      }`;
    router.push(query);
  };

  const goToPage = page => {
    updateURL(page);
  };

  const handleCategoryChange = value => {
    setTempSelectedCategories(prev => (prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]));
  };

  const filteredProducts = products.filter(product => {
    console.log("selected cat : ", selectedCategories);
    const nameMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const minMatch = !initialMin || product.price >= parseFloat(initialMin);
    const maxMatch = !initialMax || product.price <= parseFloat(initialMax);
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.some(
        cat => product.subcategories && product.subcategories.some(subcat => subcat.slug === cat),
      );
    selectedCategories.length === 0 ||
      selectedCategories.some(
        cat => product.subcategories && product.subcategories.some(subcat => subcat.slug === cat),
      );
    return nameMatch && minMatch && maxMatch && categoryMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sort) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "alpha-asc":
        return a.name.localeCompare(b.name);
      case "alpha-desc":
        return b.name.localeCompare(a.name);
      case "newest":
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE,
  );

  return (
    <div className={mainWrapper()}>
      <div className={searchAndSort()}>
        <div className={searchWrapper()}>
          <CustomInputField
            name="search"
            type="search"
            placeholder="Nom du produit"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <Button onClick={handleSearch}>Rechercher</Button>
        </div>
        <div>
          <label htmlFor="sort" className={sortLabel()}>
            Trier par
          </label>
          <select id="sort" name="sort" value={sort} onChange={handleSortChange} className={sortInput()}>
            <option value="newest">Du plus récent au plus ancien</option>
            <option value="price-asc">Prix croissant</option>
            <option value="price-desc">Prix décroissant</option>
            <option value="alpha-asc">Nom A → Z</option>
            <option value="alpha-desc">Nom Z → A</option>
          </select>
        </div>
      </div>

      <div className={filtersWrapper()}>
        <CustomTitle level={2} className={filtersTitle()}>
          Filtrer les produits
        </CustomTitle>

        <div className={pricesFiltersList()}>
          <div className={priceFilterItem()}>
            <label htmlFor="minPrice" className={priceFilterLabel()}>
              Prix min
            </label>
            <input
              id="minPrice"
              type="number"
              value={minPrice}
              onChange={e => setMinPrice(e.target.value)}
              className={priceFilterInput()}
              placeholder="0"
            />
          </div>
          <div className={priceFilterItem()}>
            <label htmlFor="maxPrice" className={priceFilterLabel()}>
              Prix max
            </label>
            <input
              id="maxPrice"
              type="number"
              value={maxPrice}
              onChange={e => setMaxPrice(e.target.value)}
              className={priceFilterInput()}
              placeholder="100"
            />
          </div>
        </div>

        {errorMessage && <p className={errorText()}>{errorMessage}</p>}

        <div className={categoriesGrid()}>
          {categories?.map(category => (
            <div key={category.documentId} className={categoryColumn({ last: false })}>
              <h3 className={categoryName()}>{category.name}</h3>
              <ul className={subCategoriesList()}>
                {category.product_subcategories.map(subcategory => (
                  <li key={subcategory?.documentId} className={subCategorieItem()}>
                    <label className={subCategorieLabel()}>
                      <input
                        type="checkbox"
                        value={subcategory?.slug}
                        checked={tempSelectedCategories.includes(subcategory?.slug)}
                        onChange={e => handleCategoryChange(e.target.value)}
                        className={subCategorieInput()}
                      />
                      {subcategory?.name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={filtersButtons()}>
          <Button onClick={handleApplyFilters}>Appliquer les filtres</Button>
          <Button
            onClick={() => {
              setMinPrice("");
              setMaxPrice("");
              setSelectedCategories([]);
              setTempSelectedCategories([]);
              setResetTriggered(true);
            }}
            className={resetFiltersButton()}
          >
            Réinitialiser les filtres
          </Button>
        </div>
      </div>

      {sortedProducts.length === 0 && !errorMessage && (
        <p className={errorText2()}>
          Aucun produit n&apos;a été trouvé avec les critères sélectionnés... Veuillez les modifier
        </p>
      )}

      <div className={productsGrid()}>
        {paginatedProducts.map(product => (
          <ProductCard key={product.documentId} product={product} />
        ))}
      </div>

      <div className={paginationWrapper()}>
        {Array.from({ length: totalPages }).map((_, index) => {
          const pageNum = index + 1;
          const isActive = pageNum === currentPage;
          return (
            <button key={pageNum} onClick={() => goToPage(pageNum)} className={paginationButton({ active: isActive })}>
              {pageNum}
            </button>
          );
        })}
      </div>
    </div>
  );
}
