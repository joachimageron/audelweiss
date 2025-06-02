"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import CustomInputField from "@/src/components/atoms/CustomInputField";
import Button from "@/src/components/atoms/Button";
import { tv } from "tailwind-variants";
import CustomTitle from "@/src/components/atoms/CustomTitle";
import CustomLink from "@/src/components/atoms/CustomLink";

const styles = tv({
    slots: {
        mainWrapper: "inner-wrap",
        searchAndSort: "flex justify-between sm:items-end flex-col-reverse sm:flex-row gap-x-[5rem] gap-y-[4rem] my-[3rem]",
        searchWrapper: "flex flex-wrap sm:flex-nowrap gap-2",
        sortLabel: "block mb-1",
        sortInput: "border px-[1.6rem] py-[1.2rem] rounded-[.4rem] text-dark-primary transition outline-none placeholder:text-dark-primary focus:ring-1 border-primary focus:ring-primary",
        filtersWrapper: "relative flex flex-col justify-center items-center gap-[2rem] p-[2rem] pb-[3rem] border-y border-y-gray-300",
        filtersTitle: "text-[3.3rem] text-dark-primary font-allura",
        pricesFiltersList: "lg:absolute top-[1rem] right-[1rem] flex flex-wrap justify-center gap-[1.5rem] w-full sm:w-auto",
        priceFilterItem: "flex flex-col",
        priceFilterLabel: "text-dark-primary mb-[.5rem]",
        priceFilterInput: "border border-gray-300 rounded-[.4rem] px-[1.2rem] py-[.8rem] w-[15rem] text-dark-primary outline-none focus:ring-1 focus:ring-primary",
        errorText: "text-red-600 text-center mb-4 text-[1.6rem]",
        categoriesGrid: "grid grid-cols-1 sm:grid-cols-3 mt-[2rem] w-full",
        categoryColumnBase: "sm:px-[3rem] py-[1rem]",
        categoryColumnBorderRight: "sm:border-r border-r-gray-300",
        categoryName: "mb-[1.5rem] text-[1.8rem] font-bold font-aboreto italic text-gray-500 text-center",
        subCategoriesList: "flex flex-wrap gap-x-[3.5rem] gap-y-[1.5rem]",
        subCategorieItem: "min-w-[40%]",
        subCategorieLabel: "flex items-center text-dark-primary cursor-pointer",
        subCategorieInput: "accent-primary mr-[1rem] w-[2rem] h-[2rem]",
        filtersButtons: "flex flex-wrap gap-x-[3rem] gap-y-[1.5rem] mt-[2rem]",
        resetFiltersButton: "bg-secondary hover:bg-dark-secondary",
        errorText2: "text-center text-[1.6rem] text-gray-500 my-[3rem]",
        productsGrid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[3rem] my-[4rem]",
        productLink: "group flex flex-col",
        productImageWrapper: "relative w-full aspect-[4/3] rounded-[1rem] overflow-hidden",
        productImage: "object-cover w-full h-full",
        productCategoriesTags: "absolute top-[1rem] left-[1rem] flex items-center gap-[1rem] flex-wrap z-1",
        productTag: "relative px-[1rem]! py-[.8rem]! w-fit text-[1.3rem] pointer-events-none",
        productCardHoverSection: "absolute bottom-0 left-0 w-full flex justify-center z-10",
        productHoverButton: "translate-y-0 bg-dark-primary! text-[1.4rem] opacity-0 group-hover:translate-y-[-1.8rem] group-hover:opacity-100 transition-all duration-500",
        productName: "mt-[1.2rem] text-center text-dark-primary font-medium text-[1.6rem]",
        productCaracteristics: "mt-[.8rem] text-center text-[1.5rem]",
        productOldPrice: "text-gray-400 line-through mr-[1rem]",
        productCurrentPrice: "text-primary font-bold",
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
    mainWrapper, searchAndSort, searchWrapper, sortLabel, sortInput, filtersWrapper, filtersTitle,
    pricesFiltersList, priceFilterItem, priceFilterLabel, priceFilterInput, errorText,
    categoriesGrid, categoryColumnBase, categoryColumnBorderRight, categoryName,
    subCategoriesList, subCategorieItem, subCategorieLabel, subCategorieInput,
    filtersButtons, resetFiltersButton, errorText2, productsGrid, productLink,
    productImageWrapper, productImage, productCategoriesTags, productTag,
    productCardHoverSection, productHoverButton, productName, productCaracteristics,
    productOldPrice, productCurrentPrice, paginationWrapper
} = styles();



const mockProducts = [
    { id: 1, name: "Porte-clé crocheté", price: 8, oldPrice: 12, image: "https://picsum.photos/300/225", slug: "porte-cle-crochete", subcategories: ["Autre", "Petit format"], date: "2023-01-01" },
    { id: 2, name: "Lampe en bois flotté", price: 49, image: "https://picsum.photos/300/226", slug: "lampe-bois-flotte", subcategories: ["Bois flotté"], date: "2024-02-10" },
    { id: 3, name: "Sweat floqué personnalisé", price: 35, oldPrice: 40, image: "https://picsum.photos/300/227", slug: "sweat-flocage", subcategories: ["Mug céramique"], date: "2023-10-05" },
    { id: 4, name: "Sac en tissu imprimé", price: 22, image: "https://picsum.photos/300/228", slug: "sac-tissu", subcategories: ["Sweat personnalisé", "Tissu"], date: "2023-08-20" },
    { id: 5, name: "Tableau abstrait coloré", price: 60, image: "https://picsum.photos/300/229", slug: "tableau-abstrait", subcategories: ["Autre"], date: "2022-12-01" },
    { id: 6, name: "Tote bag brodé main", price: 27, image: "https://picsum.photos/300/230", slug: "tote-bag-brode", subcategories: ["Sweat personnalisé", "Autre"], date: "2023-05-14" },
    { id: 7, name: "Mug personnalisé en céramique", price: 18, image: "https://picsum.photos/301/225", slug: "mug-personnalise", subcategories: ["Autre", "Cuisine"], date: "2023-11-22" },
    { id: 8, name: "Suspension murale macramé", price: 38, image: "https://picsum.photos/302/225", slug: "suspension-macrame", subcategories: ["Textile", "Déco"], date: "2023-07-18" },
    { id: 9, name: "Bracelet perles naturelles", price: 15, image: "https://picsum.photos/303/225", slug: "bracelet-perles", subcategories: ["Sweat personnalisé", "Perles"], date: "2023-03-11" },
    { id: 10, name: "Carnet relié à la main", price: 20, image: "https://picsum.photos/304/225", slug: "carnet-reliure", subcategories: ["Sculpté"], date: "2022-11-05" },
    { id: 11, name: "Boîte à bijoux en bois", price: 55, oldPrice: 70, image: "https://picsum.photos/305/225", slug: "boite-bijoux-bois", subcategories: ["Bois", "Déco"], date: "2024-01-08" },
    { id: 12, name: "Écharpe tricotée main", price: 42, image: "https://picsum.photos/301/226", slug: "echarpe-tricot", subcategories: ["Sweat personnalisé", "Sculpté"], date: "2023-09-15" },
    { id: 13, name: "Bague résine fleurs séchées", price: 30, image: "https://picsum.photos/301/227", slug: "bague-resine-fleurs", subcategories: ["Bijoux", "Petit format"], date: "2023-04-30" },
    { id: 14, name: "Coussin brodé géométrique", price: 33, image: "https://picsum.photos/301/228", slug: "coussin-brode", subcategories: ["Sculpté", "Autre"], date: "2023-06-08" },
];

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

    useEffect(() => {
        if (resetTriggered) {
            updateURL(1, []);
            setResetTriggered(false);
        }
    }, [selectedCategories, minPrice, maxPrice, resetTriggered]);

    const updateURL = (page = 1, categories = selectedCategories) => {
        const categoryQuery = categories.map(cat => `cat=${encodeURIComponent(cat)}`).join("&");
        const query = `?sort=${sort}&page=${page}&search=${encodeURIComponent(searchTerm)}&min=${minPrice}&max=${maxPrice}${categoryQuery ? `&${categoryQuery}` : ""}`;
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

    const handleSortChange = (e) => {
        const selected = e.target.value;
        const categoryQuery = selectedCategories.map(cat => `cat=${encodeURIComponent(cat)}`).join("&");
        const query = `?sort=${selected}&page=1&search=${encodeURIComponent(searchQuery)}&min=${minPrice}&max=${maxPrice}${categoryQuery ? `&${categoryQuery}` : ""}`;
        router.push(query);
    };

    const goToPage = (page) => {
        updateURL(page);
    };

    const handleCategoryChange = (value) => {
        setTempSelectedCategories((prev) =>
            prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
        );
    };

    const filteredProducts = mockProducts.filter((product) => {
        const nameMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const minMatch = !initialMin || product.price >= parseFloat(initialMin);
        const maxMatch = !initialMax || product.price <= parseFloat(initialMax);
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.some((cat) => product.subcategories.includes(cat));
        return nameMatch && minMatch && maxMatch && categoryMatch;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sort) {
            case "price-asc": return a.price - b.price;
            case "price-desc": return b.price - a.price;
            case "alpha-asc": return a.name.localeCompare(b.name);
            case "alpha-desc": return b.name.localeCompare(a.name);
            case "newest":
            default:
                return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
    });

    const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);
    const paginatedProducts = sortedProducts.slice((currentPage - 1) * PRODUCTS_PER_PAGE, currentPage * PRODUCTS_PER_PAGE);

    return (
        <div className={mainWrapper()}>
            <div className={searchAndSort()}>
                <div className={searchWrapper()}>
                    <CustomInputField
                        name="search"
                        type="search"
                        placeholder="Nom du produit"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button onClick={handleSearch}>Rechercher</Button>
                </div>
                <div>
                    <label htmlFor="sort" className={sortLabel()}>Trier par</label>
                    <select
                        id="sort"
                        name="sort"
                        value={sort}
                        onChange={handleSortChange}
                        className={sortInput()}
                    >
                        <option value="newest">Du plus récent au plus ancien</option>
                        <option value="price-asc">Prix croissant</option>
                        <option value="price-desc">Prix décroissant</option>
                        <option value="alpha-asc">Nom A → Z</option>
                        <option value="alpha-desc">Nom Z → A</option>
                    </select>
                </div>
            </div>

            {/* Section dépliable des filtres */}
            <div className={filtersWrapper()}>
                <CustomTitle level={2} className={filtersTitle()}>Filtrer les produits</CustomTitle>


                {/* Filtres par prix */}
                <div className={pricesFiltersList()}>
                    <div className={priceFilterItem()}>
                        <label htmlFor="minPrice" className={priceFilterLabel()}>Prix min</label>
                        <input
                            id="minPrice"
                            type="number"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                            className={priceFilterInput()}
                            placeholder="0"
                        />
                    </div>
                    <div className={priceFilterItem()}>
                        <label htmlFor="maxPrice" className={priceFilterLabel()}>Prix max</label>
                        <input
                            id="maxPrice"
                            type="number"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            className={priceFilterInput()}
                            placeholder="100"
                        />
                    </div>
                </div>

                {errorMessage && (
                    <p className={errorText()}>{errorMessage}</p>
                )}


                {/* Grille 3 colonnes */}
                <div className={categoriesGrid()}>
                    {/* Colonne 1 : Crochet */}
                    <div className={categoryColumn({ last: false })}>
                        <h3 className={categoryName()}>Crochet</h3>
                        <ul className={subCategoriesList()}>
                            <li className={subCategorieItem()}>
                                <label className={subCategorieLabel()}>
                                    <input
                                        type="checkbox"
                                        value="Petit format"
                                        checked={tempSelectedCategories.includes("Petit format")}
                                        onChange={() => handleCategoryChange("Petit format")}
                                        className={subCategorieInput()}
                                    />
                                    Petit format
                                </label>
                            </li>
                            <li className={subCategorieItem()}>
                                <label className={subCategorieLabel()}>
                                    <input
                                        type="checkbox"
                                        value="Autre"
                                        checked={tempSelectedCategories.includes("Autre")}
                                        onChange={() => handleCategoryChange("Autre")}
                                        className={subCategorieInput()}
                                    />
                                    Autre
                                </label>
                            </li>
                        </ul>
                    </div>

                    {/* Colonne 2 : Bois */}
                    <div className={categoryColumn({ last: false })}>
                        <h3 className={categoryName()}>Bois</h3>
                        <ul className={subCategoriesList()}>
                            <li className={subCategorieItem()}>
                                <label className={subCategorieLabel()}>
                                    <input
                                        type="checkbox"
                                        value="Bois flotté"
                                        checked={tempSelectedCategories.includes("Bois flotté")}
                                        onChange={() => handleCategoryChange("Bois flotté")}
                                        className={subCategorieInput()}
                                    />
                                    Bois flotté
                                </label>
                            </li>
                            <li className={subCategorieItem()}>
                                <label className={subCategorieLabel()}>
                                    <input
                                        type="checkbox"
                                        value="Sculpté"
                                        checked={tempSelectedCategories.includes("Sculpté")}
                                        onChange={() => handleCategoryChange("Sculpté")}
                                        className={subCategorieInput()}
                                    />
                                    Sculpté
                                </label>
                            </li>
                        </ul>
                    </div>

                    {/* Colonne 3 : Flocage */}
                    <div className={categoryColumn({ last: true })}>
                        <h3 className={categoryName()}>Flocage</h3>
                        <ul className={subCategoriesList()}>
                            <li className={subCategorieItem()}>
                                <label className={subCategorieLabel()}>
                                    <input
                                        type="checkbox"
                                        value="Sweat personnalisé"
                                        checked={tempSelectedCategories.includes("Sweat personnalisé")}
                                        onChange={() => handleCategoryChange("Sweat personnalisé")}
                                        className={subCategorieInput()}
                                    />
                                    Sweat personnalisé
                                </label>
                            </li>
                            <li className={subCategorieItem()}>
                                <label className={subCategorieLabel()}>
                                    <input
                                        type="checkbox"
                                        value="Mug céramique"
                                        checked={tempSelectedCategories.includes("Mug céramique")}
                                        onChange={() => handleCategoryChange("Mug céramique")}
                                        className={subCategorieInput()}
                                    />
                                    Mug céramique
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Boutons d'action */}
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

            {
                sortedProducts.length === 0 && !errorMessage && (
                    <p className={errorText2()}>
                        Aucun produit n'a été trouvé avec les critères sélectionnés... Veuillez les modifier
                    </p>
                )
            }

            {/* Grille produits */}
            <div className={productsGrid()}>
                {paginatedProducts.map((product) => (
                    <CustomLink href="#_" key={product.id} className={productLink()}>
                        <div className={productImageWrapper()}>
                            <img src={product.image} alt={product.name} className={productImage()} />
                            <ul className={productCategoriesTags()}>
                                {product.subcategories.map((tag, index) => (
                                    <li key={index}>
                                        <Button isSpanButton className={productTag()}>
                                            {tag}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                            <div className={productCardHoverSection()}>
                                <Button isSpanButton className={productHoverButton()}>
                                    Commander ce produit
                                </Button>
                            </div>
                        </div>
                        <div className={productName()}>
                            {product.name}
                        </div>
                        <div className={productCaracteristics()}>
                            {product.oldPrice && (
                                <span className={productOldPrice()}>
                                    {product.oldPrice.toFixed(2)} €
                                </span>
                            )}
                            <span className={productCurrentPrice()}>
                                {product.price.toFixed(2)} €
                            </span>
                        </div>
                    </CustomLink>
                ))}
            </div>

            {/* Pagination */}
            <div className={paginationWrapper()}>
                {Array.from({ length: totalPages }).map((_, index) => {
                    const pageNum = index + 1;
                    const isActive = pageNum === currentPage;
                    return (
                        <button
                            key={pageNum}
                            onClick={() => goToPage(pageNum)}
                            className={paginationButton({ active: isActive })}
                        >
                            {pageNum}
                        </button>
                    );
                })}
            </div>
        </div >
    );
}