"use client";

import { tv } from "tailwind-variants";
import Image from "next/image";
import { useRef, useState } from "react";
import Button from "@/src/components/atoms/Button";
import Breadcrumb from "@/src/components/baseElements/Breadcrumb";
import CustomTitle from "@/src/components/atoms/CustomTitle";
import CustomLink from "@/src/components/atoms/CustomLink";
import { Prev } from "@/src/components/icons";
import { Next } from "@/src/components/icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import SingleRichtext from "@/src/components/modules/SingleRichtext";
import FeaturedProducts from "@/src/components/modules/FeaturedProducts";


const styles = tv({
    slots: {
        mainWrapper: "inner-wrap mb-[5rem]",
        productTopSection: "flex flex-col lg:flex-row gap-[5rem] my-[1rem]",
        productImagesPart: "relative w-full lg:w-[50%] lg:max-w-[60rem]",
        productImagesMainSlider: "rounded-[1rem] overflow-hidden",
        productImages: "w-full h-auto",
        mainSliderPrevButton: "swiper-custom-prev group absolute top-1/2 left-[1rem] z-10 flex justify-center items-center bg-white w-[4rem] h-[4rem] rounded-full opacity-[.75] -translate-y-1/2 cursor-pointer",
        mainSliderButtonIcon: "w-[2.4rem] h-[2.4rem] transition group-hover:fill-primary",
        mainSliderNextButton: "swiper-custom-next group absolute top-1/2 right-[1rem] z-10 flex justify-center items-center  bg-white w-[4rem] h-[4rem] rounded-full opacity-[.75] -translate-y-1/2 cursor-pointer",
        productImagesDotsSlider: "mt-[1rem] max-w-[60rem]",
        dotsSliderSlide: "!w-[8rem]",
        dotsSliderDot: "rounded-[.4rem] cursor-pointer",
        productInformationsWrapper: "flex flex-col gap-[1.5rem] grow-2",
        productName: "text-[3.2rem]",
        productCategoriesWrapper: "my-[1rem] py-[1.5rem] text-[1.6rem] border-t border-b border-primary",
        productCategoriesTitle: "mr-[1.5rem]",
        productCategoriesList: "inline-flex gap-x-[2.5rem] gap-y-[1rem] flex-wrap",
        productCategoryItem: "text-primary as--underline-hover",
        productDescription: "leading-[1.6]",
        productPricesWrapper: "my-[.8rem] text-[2rem]",
        productOldPrice: "text-gray-400 line-through mr-[1.5rem]",
        productNewPrice: "text-primary font-bold",
        productCriteriasTitle: "text-[2.2rem]",
        productCriteriasWrapper: "flex flex-wrap gap-x-[4.5rem] gap-y-[3rem] mt-[2rem]",
        criteriaRadioItem: "flex flex-col gap-[.5rem]",
        criteriaErrorMessage: "text-[1.4rem] text-red-500 font-medium",
        criteriaRadioLabelWrapper: "mb-[1rem] text-[1.6rem] font-semibold text-text",
        criteriaRadioLabel: "ml-[.5rem] text-primary",
        criteriaColorsChoiceWrapper: "flex flex-wrap gap-[1.2rem]",
        criteriaColorsChoiceItem: "relative block w-[3rem] h-[3rem] cursor-pointer rounded-[.3rem] border-2 hover:border-primary",
        criteriaColorsChoiceInput: "peer absolute inset-0 opacity-0 cursor-pointer",
        criteriaColorsChoiceTooltip: "absolute bottom-full left-1/2 -translate-x-1/2 mb-[.8rem] bg-dark-primary text-white text-[1.4rem] px-[.8rem] py-[.4rem] rounded opacity-0 pointer-events-none whitespace-nowrap peer-hover:opacity-100 peer-focus:opacity-100 transition",
        criteriaTextualRadiosList: "flex gap-[1rem]",
        srOnly: "sr-only",
        criteriaTextualRadiosPriceAdditional: "ml-[.6rem] text-[1.4rem] text-gray-500",
        criteriaCheckboxesLabel: "font-semibold text-[1.6rem] mb-[.8rem]",
        criteriaCheckboxesList: "flex flex-col gap-y-[1.5rem] mt-[.6rem]",
        criteriaCheckboxesListItem: "min-w-[40%]",
        criteriaCheckboxesItemLabel: "flex items-center text-dark-primary cursor-pointer",
        criteriaCheckboxesItemInput: "accent-primary mr-[1rem] w-[2rem] h-[2rem]",
        criteriaCheckboxesItemAdditionnalPrice: "ml-[.6rem] text-[1.4rem] text-gray-500 font-bold",
        criteriaCustomizationWrapper: "w-[50%]",
        criteriaCustomizationLabel: "text-[1.4rem] italic mb-[.4rem]",
        criteriaCustomizationInput: "w-full bg-gray-100 p-[.8rem] rounded text-[1.5rem]",
        addingProductSection: "mt-[2rem] flex flex-col",
        specialOfferText: "mb-[2rem] bg-light-primary px-[1rem] py-[.8rem] rounded-[.4rem]",
        quantityStockText: "text-[1.5rem] text-secondary font-semibold",
        choiceQuantityWrapper: "flex items-center gap-[1.5rem]",
        choiceQuantityInput: "w-[6rem] border border-gray-300 rounded-[.4rem] px-[.6rem] py-[.4rem] text-center text-[1.5rem] text-dark-primary",
        addingToCartButton: "mt-[1.5rem] w-fit bg-secondary hover:bg-dark-secondary",
        outOfStockMessage: "text-[1.5rem] text-red-600 font-semibold",
        productBottomContent: "inner-wrap max-w-[105rem]! text-[1.7rem] mt-[6rem] mb-[4rem]"
    },
});

export const colorSwatch = tv({
    base: "w-full h-full rounded-[.2rem] ring-3 transition",
    variants: {
        selected: {
            true: "ring-primary",
            false: "ring-transparent",
        },
    },
});

const criteriaTextualRadioLabel = tv({
    base: "cursor-pointer border border-[2px] text-[1.5rem] px-[1.6rem] py-[.8rem] rounded-[.4rem] transition",
    variants: {
        selected: {
            true: "border-primary font-semibold",
            false: "border-black",
        },
    },
});

const {
    mainWrapper, productTopSection, productImagesPart, productImagesMainSlider, productImages, mainSliderPrevButton, mainSliderButtonIcon,
    mainSliderNextButton, productImagesDotsSlider, dotsSliderSlide, dotsSliderDot, productInformationsWrapper, productName, productCategoriesWrapper,
    productCategoriesTitle, productCategoriesList, productCategoryItem, productDescription, productPricesWrapper, productOldPrice, productNewPrice,
    productCriteriasTitle, productCriteriasWrapper, criteriaRadioItem, criteriaErrorMessage, criteriaRadioLabelWrapper, criteriaRadioLabel,
    criteriaColorsChoiceWrapper, criteriaColorsChoiceItem, criteriaColorsChoiceInput, criteriaColorsChoiceTooltip, criteriaTextualRadiosList,
    srOnly, criteriaTextualRadiosPriceAdditional, criteriaCheckboxesLabel, criteriaCheckboxesList, criteriaCheckboxesListItem,
    criteriaCheckboxesItemLabel, criteriaCheckboxesItemInput, criteriaCheckboxesItemAdditionnalPrice, criteriaCustomizationWrapper,
    criteriaCustomizationLabel, criteriaCustomizationInput, addingProductSection, specialOfferText, quantityStockText, choiceQuantityWrapper,
    choiceQuantityInput, addingToCartButton, outOfStockMessage, productBottomContent
} = styles();

const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Boutique", href: "/boutique" },
    { label: "Nom du produit", href: "/nom-produit" },
];

const MOCK_PRODUCT = {
    title: "Scrunchy | Tricotin•e",
    categories: ["Scrunchy", "Decoration", "Vêtement"],
    price: 4.5,
    oldPrice: 8,
    description: "Scrunchy tricoté à la main, doux et stylé. Idéal pour attacher tes cheveux sans les abîmer. Disponible en plusieurs couleurs !",
    images: Array.from({ length: 9 }, (_, i) => `https://picsum.photos/600/4${i + 1}5?random=${i + 1}`),
    productContent: "coucou",
    colors: [
        { hex: "#5299d3", name: "Bleu" },
        { hex: "#f4a4b4", name: "Rose" },
        { hex: "#9bd383", name: "Vert" },
        { hex: "#b5b5b5", name: "Gris" },
        { hex: "#ffe05e", name: "Jaune" },
        { hex: "#f8f8f8", name: "Blanc" },
    ],
    sizes: ["Femme", "Homme", "Enfant"],
    motifs: ["Uni", "Bicolore", "Rayé"],
    pomponOptions: {
        label: "Avec pompon",
        choices: [
            { label: "Oui", value: true, extra: 2 },
            { label: "Non", value: false, extra: 0 }
        ]
    },
    options: [
        { label: "Protection résine", value: "resine", extra: 2 },
        { label: "Rien sur le verso", value: "no_back", extra: -2 },
    ],
    personalization: {
        enabledIfNot: "no_back",
        placeholder: "ex : Je t'aime"
    },
    giftWrap: [
        { label: "Emballage en papier épais / cartonné", value: "gift", extra: 3 }
    ],
    specialOffer: "🔥 3 achetés = le lot à 9€ au lieu de 12€",
    stockQuantity: 5
};

const MOCK_LINKED_PRODUCTS = [
    {
        id: 1,
        name: "Boucles d’oreilles artisanales",
        price: "35€",
        image: {
            src: "/images/boucle.webp",
            alt: "Boucles d’oreilles",
        },
        link: {
            label: "",
            href: "/",
        },
        promo: true,
    },
    {
        id: 2,
        name: "Collier fait main",
        price: "42€",
        image: {
            src: "/images/collier.jpeg",
            alt: "Collier",
        },
        link: {
            label: "",
            href: "/",
        },
        promo: false,
    },
    {
        id: 3,
        name: "Bracelet perlé",
        price: "29€",
        image: {
            src: "/images/bracelet.webp",
        },
        link: {
            label: "",
            href: "/",
        },
        promo: true,
    },
    {
        id: 4,
        name: "Bague perlé",
        price: "29€",
        image: {
            src: "/images/bague.webp",
        },
        link: {
            label: "",
            href: "/",
        },
        promo: true,
    },
];

export default function ProductDetails() {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [selectedMotif, setSelectedMotif] = useState<string | null>(null);
    const [withPompon, setWithPompon] = useState<boolean | null>(null);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [selectedGiftWraps, setSelectedGiftWraps] = useState<string[]>([]);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});


    const {
        title,
        categories,
        price,
        oldPrice,
        description,
        images,
        productContent,
        colors,
        sizes,
        motifs,
        pomponOptions,
        options,
        personalization,
        giftWrap,
        specialOffer,
        stockQuantity
    } = MOCK_PRODUCT;


    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!selectedColor) newErrors.color = "Veuillez sélectionner une couleur.";
        if (!selectedSize) newErrors.size = "Veuillez choisir une taille.";
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

    const finalPrice = price + pomponExtra + optionsExtra + giftWrapExtra;
    const finalOldPrice = oldPrice + pomponExtra + optionsExtra + giftWrapExtra;

    return (
        <>
            <Breadcrumb items={breadcrumbItems} />
            <article className={mainWrapper()}>
                <section className={productTopSection()}>
                    <div className={productImagesPart()}>
                        <Swiper
                            modules={[Navigation, Thumbs]}
                            navigation={{
                                nextEl: ".swiper-custom-next",
                                prevEl: ".swiper-custom-prev",
                            }}
                            thumbs={{ swiper: thumbsSwiper }}
                            loop
                            autoHeight
                            spaceBetween={10}
                            className={productImagesMainSlider()}
                        >
                            {images.map((url, index) => (
                                <SwiperSlide key={index}>
                                    <Image src={url} alt={`Aperçu ${index}`} width={600} height={455} className={productImages()} />
                                </SwiperSlide>
                            ))}

                            <button className={mainSliderPrevButton()}>
                                <Prev className={mainSliderButtonIcon()} />
                            </button>

                            <button className={mainSliderNextButton()}>
                                <Next className={mainSliderButtonIcon()} />
                            </button>
                        </Swiper>

                        {/* Swiper des miniatures (sans loop) */}
                        <Swiper
                            modules={[Thumbs]}
                            onSwiper={setThumbsSwiper}
                            spaceBetween={25}
                            slidesPerView="auto"
                            watchSlidesProgress
                            freeMode
                            className={productImagesDotsSlider()}
                        >
                            {images.map((url, index) => (
                                <SwiperSlide key={index} className={dotsSliderSlide()}>
                                    <Image src={url} alt={`Miniature ${index}`} width={80} height={80} className={dotsSliderDot()} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Infos produit */}
                    <div className={productInformationsWrapper()}>
                        <CustomTitle level={1} className={productName()}>{title}</CustomTitle>

                        <div className={productCategoriesWrapper()}>
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
                        </div>

                        <p className={productDescription()}>
                            {description}
                        </p>

                        <div className={productPricesWrapper()}>
                            <span className={productOldPrice()}>
                                {finalOldPrice.toFixed(2)} €
                            </span>
                            <span className={productNewPrice()}>
                                {finalPrice.toFixed(2)} €
                            </span>
                        </div>

                        <CustomTitle level={2} className={productCriteriasTitle()}>Sélection de vos besoins</CustomTitle>

                        <div className={productCriteriasWrapper()}>

                            {/* Choix de la couleur */}
                            <div className={criteriaRadioItem()}>
                                {errors.color && (
                                    <span className={criteriaErrorMessage()}>{errors.color}</span>
                                )}
                                <div className={criteriaRadioLabelWrapper()}>
                                    Couleur :
                                    {selectedColor && <span className={criteriaRadioLabel()}>{selectedColor}</span>}
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
                                                <div className={criteriaColorsChoiceTooltip()}>
                                                    {color.name}
                                                </div>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Choix de la taille */}
                            <div className={criteriaRadioItem()}>
                                {errors.size && (
                                    <span className={criteriaErrorMessage()}>{errors.size}</span>
                                )}
                                <div className={criteriaRadioLabelWrapper()}>
                                    Taille :
                                    {selectedSize && (
                                        <span className={criteriaRadioLabel()}>{selectedSize}</span>
                                    )}
                                </div>

                                <ul className={criteriaTextualRadiosList()}>
                                    {sizes.map((size, index) => (
                                        <li key={index}>
                                            <label className={criteriaTextualRadioLabel({ selected: selectedSize === size })}>
                                                <input
                                                    type="radio"
                                                    name="product-size"
                                                    value={size}
                                                    checked={selectedSize === size}
                                                    onChange={() => setSelectedSize(size)}
                                                    className={srOnly()}
                                                />
                                                {size}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Choix du motif */}
                            <div className={criteriaRadioItem()}>
                                {errors.motif && (
                                    <span className={criteriaErrorMessage()}>{errors.motif}</span>
                                )}
                                <div className={criteriaRadioLabelWrapper()}>
                                    Motif :
                                    {selectedMotif && (
                                        <span className={criteriaRadioLabel()}>{selectedMotif}</span>
                                    )}
                                </div>

                                <ul className={criteriaTextualRadiosList()}>
                                    {motifs.map((motif, index) => (
                                        <li key={index}>
                                            <label className={criteriaTextualRadioLabel({ selected: selectedMotif === motif })}>
                                                <input
                                                    type="radio"
                                                    name="product-motif"
                                                    value={motif}
                                                    checked={selectedMotif === motif}
                                                    onChange={() => setSelectedMotif(motif)}
                                                    className={srOnly()}
                                                />
                                                {motif}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Ajout optionnel du pompom */}
                            <div className={criteriaRadioItem()}>
                                {errors.pompon && (
                                    <span className={criteriaErrorMessage()}>{errors.pompon}</span>
                                )}
                                <div className={criteriaRadioLabelWrapper()}>
                                    {pomponOptions.label} :
                                    {withPompon !== null && (
                                        <span className={criteriaRadioLabel()}>
                                            {pomponOptions.choices.find(opt => opt.value === withPompon)?.label}
                                        </span>
                                    )}
                                </div>

                                <ul className={criteriaTextualRadiosList()}>
                                    {pomponOptions.choices.map((opt, index) => (
                                        <li key={index}>
                                            <label className={criteriaTextualRadioLabel({ selected: withPompon === opt.value })}>
                                                <input
                                                    type="radio"
                                                    name="product-pompon"
                                                    value={String(opt.value)}
                                                    checked={withPompon === opt.value}
                                                    onChange={() => setWithPompon(opt.value)}
                                                    className={srOnly()}
                                                />
                                                {opt.label}
                                                {opt.extra > 0 && (
                                                    <span className={criteriaTextualRadiosPriceAdditional()}>
                                                        (+{opt.extra.toFixed(2)}€)
                                                    </span>
                                                )}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>


                            {/* Ajout des options */}
                            <div>
                                <h3 className={criteriaCheckboxesLabel()}>Options</h3>
                                <ul className={criteriaCheckboxesList()}>
                                    {options.map((opt, index) => (
                                        <li key={index} className={criteriaCheckboxesListItem()}>
                                            <label className={criteriaCheckboxesItemLabel()}>
                                                <input
                                                    type="checkbox"
                                                    value={opt.value}
                                                    onChange={(e) => {
                                                        const { checked, value } = e.target;
                                                        setSelectedOptions(prev =>
                                                            checked ? [...prev, value] : prev.filter(v => v !== value)
                                                        );
                                                    }}
                                                    className={criteriaCheckboxesItemInput()}
                                                />
                                                {opt.label}
                                                {opt.extra !== 0 && (
                                                    <span className={criteriaCheckboxesItemAdditionnalPrice()}>
                                                        ({opt.extra > 0 ? "+" : ""}{opt.extra.toFixed(2)}€)
                                                    </span>
                                                )}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Ajout facultatif de l'emballage cadeau */}
                            <div>
                                <h3 className={criteriaCheckboxesLabel()}>Emballage cadeau</h3>
                                <ul className={criteriaCheckboxesList()}>
                                    {giftWrap.map((gift, index) => (
                                        <li key={index} className={criteriaCheckboxesListItem()}>
                                            <label className={criteriaCheckboxesItemLabel()}>
                                                <input
                                                    type="checkbox"
                                                    value={gift.value}
                                                    checked={selectedGiftWraps.includes(gift.value)}
                                                    onChange={(e) => {
                                                        const { checked, value } = e.target;
                                                        setSelectedGiftWraps((prev) =>
                                                            checked ? [...prev, value] : prev.filter((v) => v !== value)
                                                        );
                                                    }}
                                                    className={criteriaCheckboxesItemInput()}
                                                />
                                                {gift.label}
                                                {gift.extra > 0 && (
                                                    <span className={criteriaCheckboxesItemAdditionnalPrice()}>
                                                        (+{gift.extra.toFixed(2)}€)
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
                                        <label htmlFor="quantity">
                                            Combien en désirez-vous ?
                                        </label>
                                        <input
                                            id="quantity"
                                            type="number"
                                            min={1}
                                            max={stockQuantity}
                                            value={quantity}
                                            onChange={(e) =>
                                                setQuantity(Math.min(stockQuantity, Math.max(1, Number(e.target.value))))
                                            }
                                            className={choiceQuantityInput()}
                                        />
                                    </div>

                                    <Button
                                        className={addingToCartButton()}
                                        onClick={handleAddToCart}
                                    >
                                        Ajouter au panier
                                    </Button>
                                </>
                            ) : (
                                <div className={outOfStockMessage()}>Produit en rupture de stock, veuillez nous contacter pour plus d'informations.</div>
                            )}
                        </div>
                    </div>
                </section>

                <section className={productBottomContent()}>
                    {/* TODO : Il faudra appeler cette fonction en lui faisant passer un richtext Json en paramètres pour qu'il s'affiche correctement */}
                    <SingleRichtext block={{ id: "0", richtextContent: productContent }}></SingleRichtext>

                    {/* TODO : En attendant, j'utilise un substitut de richtext, juste pour vérifier l'affichage */}
                    <div className="inner-wrap max-w-[105rem]! text-[1.7rem] mt-[3rem] mb-[6rem]">
                        <h2 className="font-aboreto font-bold leading-[1.1] mb-[1.5rem] text-[3rem] font-dm-sans text-primary">🧶 La patate positive : qu’est-ce que c’est ?</h2>
                        <p className="mb-[2.5rem]">Tu as peut-être déjà croisé ces petites patates souriantes en crochet qui envahissent les réseaux sociaux. Mais qu’est-ce qui les rend si spéciales ? La patate positive, c’est une mini-création artisanale en crochet qui représente… une patate, tout simplement. Avec son petit sourire brodé, elle apporte une touche de bonne humeur et un brin de réconfort à ceux qui la possèdent.</p>
                        <p className="mb-[2.5rem]"></p>
                        <h2 className="font-aboreto font-bold leading-[1.1] mb-[1.5rem] text-[3rem] font-dm-sans text-primary">🌿 Un allié contre le stress</h2>
                        <p className="mb-[2.5rem]">Dans un monde où tout va toujours trop vite, on cherche tous des moyens de se détendre. La patate positive au crochet s’impose comme une solution originale. Sa texture moelleuse, sa forme arrondie et son sourire bienveillant en font un véritable doudou anti-stress. Certains la serrent dans la main quand ils ont une montée d’anxiété, d’autres l’affichent sur leur bureau pour une dose de positivité quotidienne.</p>
                        <p className="mb-[2.5rem]"></p>
                        <h2 className="font-aboreto font-bold leading-[1.1] mb-[1.5rem] text-[3rem] font-dm-sans text-primary">🎁 Le cadeau idéal et personnalisé</h2>
                        <p className="mb-[2.5rem]">Offrir une patate positive, ce n’est pas juste offrir un objet, c’est transmettre une intention : celle d’apporter un peu de douceur et de bienveillance dans le quotidien de quelqu’un. Fait main et souvent personnalisable, c’est un cadeau qui sort de l’ordinaire. Tu peux choisir sa couleur, ajouter un petit message brodé ou même lui donner une expression unique. Résultat : une création qui fait mouche à tous les coups.</p>
                    </div>
                </section>

                {/* TODO : Au lieu d'afficher les produits à partir d'un mock, il faudrait récupérer les plus récents qui possèdent au moins une catégorie en commun avec le produit  */}
                <FeaturedProducts
                    description={<h2>Vous pourriez également être intéréssé par ces produits</h2>}
                    products={MOCK_LINKED_PRODUCTS}
                    linkHref="/boutique"
                />
            </article >
        </>
    );
}
