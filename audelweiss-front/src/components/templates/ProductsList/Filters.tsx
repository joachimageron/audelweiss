import Button from "@/src/components/atoms/Button";
import { tv } from "tailwind-variants";
import CustomTitle from "@/src/components/atoms/CustomTitle";

const styles = tv({
  slots: {
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

const {
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
} = styles();

const Filters = () => {
  return (
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
  );
};

export default Filters;
