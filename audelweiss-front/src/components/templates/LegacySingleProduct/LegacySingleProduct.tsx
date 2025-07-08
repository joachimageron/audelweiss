"use client";

import { useState } from "react";
import Button from "@/src/components/atoms/Button";
import CustomTitle from "@/src/components/atoms/CustomTitle";
import { MOCK_PRODUCT } from "./MOCK_PRODUCT";
import { colorSwatch, styles } from "./LegacySingleProduct.css";

const {
  mainWrapper,
  productTopSection,
  productInformationsWrapper,
  productName,
  productCriteriasTitle,
  productCriteriasWrapper,
  criteriaRadioItem,
  criteriaErrorMessage,
  criteriaRadioLabelWrapper,
  criteriaRadioLabel,
  criteriaColorsChoiceWrapper,
  criteriaColorsChoiceItem,
  criteriaColorsChoiceInput,
  criteriaColorsChoiceTooltip,
  criteriaTextualRadiosList,
  srOnly,
  criteriaTextualRadiosPriceAdditional,
  criteriaCheckboxesLabel,
  criteriaCheckboxesList,
  criteriaCheckboxesListItem,
  criteriaCheckboxesItemLabel,
  criteriaCheckboxesItemInput,
  criteriaCheckboxesItemAdditionnalPrice,
  criteriaCustomizationWrapper,
  criteriaCustomizationLabel,
  criteriaCustomizationInput,
  addingProductSection,
  specialOfferText,
  quantityStockText,
  choiceQuantityWrapper,
  choiceQuantityInput,
  addingToCartButton,
  outOfStockMessage,
  productBottomContent,
} = styles();

type Props = {
  slug: string;
};

export default function ProductDetails({ slug }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedMotif, setSelectedMotif] = useState<string | null>(null);
  const [withPompon, setWithPompon] = useState<boolean | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedGiftWraps, setSelectedGiftWraps] = useState<string[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const { images, colors, options, personalization, specialOffer, stockQuantity } = MOCK_PRODUCT;

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!selectedColor) newErrors.color = "Veuillez sélectionner une couleur.";
    // if (!selectedSize) newErrors.size = "Veuillez choisir une taille.";
    if (!selectedMotif) newErrors.motif = "Veuillez choisir un motif.";
    if (withPompon === null) newErrors.pompon = "Veuillez indiquer si vous souhaitez un pompon.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddToCart = () => {
    if (!validateForm()) return;
    // TODO : Ajout au panier ici
  };

  const optionsExtra = MOCK_PRODUCT.options
    .filter(opt => selectedOptions.includes(opt.value))
    .reduce((acc, opt) => acc + opt.extra, 0);

  const giftWrapExtra = MOCK_PRODUCT.giftWrap
    .filter(opt => selectedGiftWraps.includes(opt.value))
    .reduce((acc, opt) => acc + opt.extra, 0);

  const pomponExtra = MOCK_PRODUCT.pomponOptions.choices.find(opt => opt.value === withPompon)?.extra || 0;

  const finalPrice = MOCK_PRODUCT.price + pomponExtra + optionsExtra + giftWrapExtra;
  // const finalOldPrice = oldPrice + pomponExtra + optionsExtra + giftWrapExtra;

  return (
    <>
      <article className={mainWrapper()}>
        <section className={productTopSection()}>
          {/* Infos produit */}
          <div className={productInformationsWrapper()}>
            <CustomTitle level={1} className={productName()}>
              Scrunchy
            </CustomTitle>

            {/* <div className={productCategoriesWrapper()}>
              <span className={productCategoriesTitle()}>Catégorie(s) :</span>
              <ul className={productCategoriesList()}>
                {categories.map((cat, index) => (
                  <li key={index}>
                    <CustomLink href={`/boutique/categorie/${cat.toLowerCase()}`} className={productCategoryItem()}>
                      {cat}
                    </CustomLink>
                  </li>
                ))}
              </ul>
            </div> */}

            <CustomTitle level={2} className={productCriteriasTitle()}>
              Sélection de vos besoins
            </CustomTitle>

            <div className={productCriteriasWrapper()}>
              {/* Choix de la couleur */}
              <div className={criteriaRadioItem()}>
                {errors.color && <span className={criteriaErrorMessage()}>{errors.color}</span>}
                <div className={criteriaRadioLabelWrapper()}>
                  Couleur :{selectedColor && <span className={criteriaRadioLabel()}>{selectedColor}</span>}
                </div>
                <ul className={criteriaColorsChoiceWrapper()}>
                  {colors.map((color, index) => (
                    <li key={index}>
                      <label className={criteriaColorsChoiceItem()}>
                        <input
                          type="radio"
                          name="product-color"
                          value={color.name}
                          checked={selectedColor === color.name}
                          onChange={() => setSelectedColor(color.name)}
                          className={criteriaColorsChoiceInput()}
                        />
                        <div
                          className={colorSwatch({ selected: selectedColor === color.name })}
                          style={{ backgroundColor: color.hex }}
                        />
                        <div className={criteriaColorsChoiceTooltip()}>{color.name}</div>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ajout optionnel du pompom */}
              {/* <div className={criteriaRadioItem()}>
                {errors.pompon && <span className={criteriaErrorMessage()}>{errors.pompon}</span>}
                <div className={criteriaRadioLabelWrapper()}>
                  {pomponOptions.label} :
                  {withPompon !== null && (
                    <span className={criteriaRadioLabel()}>
                      {pomponOptions.choices.find(opt => opt.value === withPompon)?.label}
                    </span>
                  )}
                </div>

              {/* Ajout des options */}
              <div>
                <ul className={criteriaCheckboxesList()}>
                  {options.map((opt, index) => (
                    <li key={index} className={criteriaCheckboxesListItem()}>
                      <label className={criteriaCheckboxesItemLabel()}>
                        <input
                          type="checkbox"
                          value={opt.value}
                          onChange={e => {
                            const { checked, value } = e.target;
                            setSelectedOptions(prev => (checked ? [...prev, value] : prev.filter(v => v !== value)));
                          }}
                          className={criteriaCheckboxesItemInput()}
                        />
                        {opt.label}
                        {opt.extra !== 0 && (
                          <span className={criteriaCheckboxesItemAdditionnalPrice()}>
                            ({opt.extra > 0 ? "+" : ""}
                            {opt.extra.toFixed(2)}€)
                          </span>
                        )}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Personnalisation facultative du produit */}
              <div className={criteriaCustomizationWrapper()}>
                <h3 className={criteriaCheckboxesLabel()}>Message personnalisé</h3>
                <p className={criteriaCustomizationLabel()}>Indiquez le texte à écrire sur le produit.</p>
                <input
                  type="text"
                  placeholder={personalization.placeholder}
                  className={criteriaCustomizationInput()}
                  disabled={false /* ex: selectedOptions.includes('no_back') */}
                />
              </div>
            </div>

            {/* Ajouter au panier + offre */}
            <div className={addingProductSection()}>
              <div className={specialOfferText()}>{specialOffer}</div>
              {stockQuantity > 0 ? (
                <>
                  <div className={quantityStockText()}>
                    {stockQuantity} exemplaire{stockQuantity > 1 ? "s" : ""} disponible{stockQuantity > 1 ? "s" : ""}
                  </div>

                  <div className={choiceQuantityWrapper()}>
                    <label htmlFor="quantity">Combien en désirez-vous ?</label>
                    <input
                      id="quantity"
                      type="number"
                      min={1}
                      max={stockQuantity}
                      value={quantity}
                      onChange={e => setQuantity(Math.min(stockQuantity, Math.max(1, Number(e.target.value))))}
                      className={choiceQuantityInput()}
                    />
                  </div>

                  <Button className={addingToCartButton()} onClick={handleAddToCart}>
                    Ajouter au panier
                  </Button>
                </>
              ) : (
                <div className={outOfStockMessage()}>
                  Produit en rupture de stock, veuillez nous contacter pour plus d'informations.
                </div>
              )}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
