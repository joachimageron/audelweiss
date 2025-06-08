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


const styles = tv({
    slots: {
        mainWrapper: "inner-wrap",
    },
});

const { mainWrapper } = styles();

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
                <div className="flex gap-[5rem] my-[1rem]">
                    <div className="relative w-[50%] max-w-[60rem]">
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
                            className="rounded-[1rem] overflow-hidden"
                        >
                            {images.map((url, index) => (
                                <SwiperSlide key={index}>
                                    <Image src={url} alt={`Aperçu ${index}`} width={600} height={455} />
                                </SwiperSlide>
                            ))}

                            <button className="swiper-custom-prev group absolute top-1/2 left-[1rem] z-10 flex justify-center items-center bg-white w-[4rem] h-[4rem] rounded-full opacity-[.75] -translate-y-1/2 cursor-pointer">
                                <Prev className="w-[2.4rem] h-[2.4rem] transition group-hover:fill-primary " />
                            </button>

                            <button className="swiper-custom-next group absolute top-1/2 right-[1rem] z-10 flex justify-center items-center  bg-white w-[4rem] h-[4rem] rounded-full opacity-[.75] -translate-y-1/2 cursor-pointer">
                                <Next className="w-[2.4rem] h-[2.4rem] transition group-hover:fill-primary " />
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
                            className="mt-[1rem] max-w-[60rem]"
                        >
                            {images.map((url, index) => (
                                <SwiperSlide key={index} className="!w-[8rem]">
                                    <Image src={url} alt={`Miniature ${index}`} width={80} height={80} className="rounded-[.4rem] cursor-pointer" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Infos produit */}
                    <div className="flex flex-col gap-[1.5rem] grow-2">
                        <CustomTitle level={1} className="text-[3.2rem]">{title}</CustomTitle>

                        <div className="my-[1rem] py-[1.5rem] text-[1.6rem] border-t border-b border-primary">
                            <span className="mr-[1.5rem]">Catégorie(s) :</span>
                            <ul className="inline-flex gap-x-[2.5rem] gap-y-[1rem] flex-wrap">
                                {categories.map((cat, index) => (
                                    <li key={index}>
                                        <CustomLink href={`/boutique/categorie/${cat.toLowerCase()}`} className="text-primary as--underline-hover">
                                            {cat}
                                        </CustomLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="leading-[1.6]">
                            {description}
                        </p>

                        <div className="my-[.8rem] text-[2rem]">
                            <span className="text-gray-400 line-through mr-[1.5rem]">
                                {finalOldPrice.toFixed(2)} €
                            </span>
                            <span className="text-primary font-bold">
                                {finalPrice.toFixed(2)} €
                            </span>
                        </div>

                        <CustomTitle level={2} className="text-[2.2rem]">Sélection des caractéristiques</CustomTitle>

                        <div className="flex flex-wrap gap-x-[4.5rem] gap-y-[3rem] mt-[2rem]">

                            {/* Choix de la couleur */}
                            <div className="flex flex-col gap-[.5rem]">
                                {errors.color && (
                                    <span className="text-[1.4rem] text-red-500 font-medium">{errors.color}</span>
                                )}
                                <div className="mb-[1rem] text-[1.6rem] font-semibold text-text">
                                    Couleur :
                                    {selectedColor && <span className="ml-[.5rem] text-primary">{selectedColor}</span>}
                                </div>
                                <ul className="flex flex-wrap gap-[1.2rem]">
                                    {colors.map((color, index) => (
                                        <li key={index}>
                                            <label className="relative block w-[3rem] h-[3rem] cursor-pointer rounded-[.3rem] border-2 hover:border-primary">
                                                <input
                                                    type="radio"
                                                    name="product-color"
                                                    value={color.name}
                                                    checked={selectedColor === color.name}
                                                    onChange={() => setSelectedColor(color.name)}
                                                    className="peer absolute inset-0 opacity-0 cursor-pointer"
                                                />
                                                <div
                                                    className={`w-full h-full rounded-[.2rem] ring-3 transition 
            ${selectedColor === color.name ? 'ring-primary' : 'ring-transparent'}`}
                                                    style={{ backgroundColor: color.hex }}
                                                />
                                                <div
                                                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[.8rem] bg-dark-primary text-white text-[1.4rem] px-[.8rem] py-[.4rem] rounded opacity-0 pointer-events-none whitespace-nowrap
          peer-hover:opacity-100 peer-focus:opacity-100 transition"
                                                >
                                                    {color.name}
                                                </div>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Choix de la taille */}
                            <div className="flex flex-col gap-[.5rem]">
                                {errors.size && (
                                    <span className="text-[1.4rem] text-red-500 font-medium">{errors.size}</span>
                                )}
                                <div className="mb-[1rem] text-[1.6rem] font-semibold text-text">
                                    Taille :
                                    {selectedSize && (
                                        <span className="ml-[.5rem] text-primary">{selectedSize}</span>
                                    )}
                                </div>

                                <ul className="flex gap-[1rem]">
                                    {sizes.map((size, index) => (
                                        <li key={index}>
                                            <label
                                                className={`cursor-pointer border border-[2px] text-[1.5rem] px-[1.6rem] py-[.8rem] rounded-[.4rem] transition
          ${selectedSize === size
                                                        ? "border-primary font-semibold"
                                                        : "border-black"
                                                    }`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="product-size"
                                                    value={size}
                                                    checked={selectedSize === size}
                                                    onChange={() => setSelectedSize(size)}
                                                    className="sr-only"
                                                />
                                                {size}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Choix du motif */}
                            <div className="flex flex-col gap-[.5rem]">
                                {errors.motif && (
                                    <span className="text-[1.4rem] text-red-500 font-medium">{errors.motif}</span>
                                )}
                                <div className="mb-[1rem] text-[1.6rem] font-semibold text-text">
                                    Motif :
                                    {selectedMotif && (
                                        <span className="ml-[.5rem] text-primary">{selectedMotif}</span>
                                    )}
                                </div>

                                <ul className="flex gap-[1rem]">
                                    {motifs.map((motif, index) => (
                                        <li key={index}>
                                            <label
                                                className={`cursor-pointer border border-[2px] text-[1.5rem] px-[1.6rem] py-[.8rem] rounded-[.4rem] transition
                        ${selectedMotif === motif
                                                        ? "border-primary font-semibold"
                                                        : "border-black"
                                                    }`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="product-motif"
                                                    value={motif}
                                                    checked={selectedMotif === motif}
                                                    onChange={() => setSelectedMotif(motif)}
                                                    className="sr-only"
                                                />
                                                {motif}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Ajout optionnel du pompom */}
                            <div className="flex flex-col gap-[.5rem]">
                                {errors.pompon && (
                                    <span className="text-[1.4rem] text-red-500 font-medium">{errors.pompon}</span>
                                )}
                                <div className="mb-[1rem] text-[1.6rem] font-semibold text-text">
                                    {pomponOptions.label} :
                                    {withPompon !== null && (
                                        <span className="ml-[.5rem] text-primary">
                                            {pomponOptions.choices.find(opt => opt.value === withPompon)?.label}
                                        </span>
                                    )}
                                </div>

                                <ul className="flex gap-[1rem]">
                                    {pomponOptions.choices.map((opt, index) => (
                                        <li key={index}>
                                            <label
                                                className={`cursor-pointer border border-[2px] text-[1.5rem] px-[1.6rem] py-[.8rem] rounded-[.4rem] transition
          ${withPompon === opt.value
                                                        ? "border-primary font-semibold"
                                                        : "border-black"
                                                    }`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="product-pompon"
                                                    value={String(opt.value)}
                                                    checked={withPompon === opt.value}
                                                    onChange={() => setWithPompon(opt.value)}
                                                    className="sr-only"
                                                />
                                                {opt.label}
                                                {opt.extra > 0 && (
                                                    <span className="ml-[.6rem] text-[1.4rem] text-gray-500">
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
                                <h3 className="font-semibold text-[1.6rem] mb-[.8rem]">Options</h3>
                                <ul className="flex flex-col gap-y-[1.5rem]">
                                    {options.map((opt, index) => (
                                        <li key={index} className="min-w-[40%]">
                                            <label className="flex items-center text-dark-primary cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    value={opt.value}
                                                    onChange={(e) => {
                                                        const { checked, value } = e.target;
                                                        setSelectedOptions(prev =>
                                                            checked ? [...prev, value] : prev.filter(v => v !== value)
                                                        );
                                                    }}
                                                    className="accent-primary mr-[1rem] w-[2rem] h-[2rem]"
                                                />
                                                {opt.label}
                                                {opt.extra !== 0 && (
                                                    <span className="ml-[.6rem] text-[1.4rem] text-gray-500 font-bold">
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
                                <h3 className="font-semibold text-[1.6rem] mb-[.6rem]">Emballage cadeau</h3>
                                <ul className="flex flex-col gap-y-[1.5rem] mt-[.6rem]">
                                    {giftWrap.map((gift, index) => (
                                        <li key={index} className="min-w-[40%]">
                                            <label className="flex items-center text-dark-primary cursor-pointer">
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
                                                    className="accent-primary mr-[1rem] w-[2rem] h-[2rem]"
                                                />
                                                {gift.label}
                                                {gift.extra > 0 && (
                                                    <span className="ml-[.6rem] text-[1.4rem] text-gray-500 font-bold">
                                                        (+{gift.extra.toFixed(2)}€)
                                                    </span>
                                                )}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Personnalisation facultative du produit */}
                            <div className="w-[50%]">
                                <h3 className="font-semibold text-[1.6rem] mb-[.6rem]">Personnalisation</h3>
                                <p className="text-[1.4rem] italic mb-[.4rem]">Indiquez le texte à écrire sur le produit.</p>
                                <input
                                    type="text"
                                    placeholder={personalization.placeholder}
                                    className="w-full bg-gray-100 p-[.8rem] rounded text-[1.5rem]"
                                    disabled={false /* ex: selectedOptions.includes('no_back') */}
                                />
                            </div>
                        </div>

                        {/* Ajouter au panier + offre */}
                        <div className="mt-[2rem] flex flex-col">
                            <div className="mb-[2rem] bg-light-primary px-[1rem] py-[.8rem] rounded-[.4rem]">{specialOffer}</div>
                            {stockQuantity > 0 ? (
                                <>
                                    <div className="text-[1.5rem] text-secondary font-semibold">
                                        {stockQuantity} exemplaire{stockQuantity > 1 ? "s" : ""} disponible{stockQuantity > 1 ? "s" : ""}
                                    </div>

                                    <div className="flex items-center gap-[1.5rem]">
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
                                            className="w-[6rem] border border-gray-300 rounded-[.4rem] px-[.6rem] py-[.4rem] text-center text-[1.5rem] text-dark-primary"
                                        />
                                    </div>

                                    <Button
                                        className="mt-[1.5rem] w-fit bg-secondary hover:bg-dark-secondary"
                                        onClick={handleAddToCart}
                                    >
                                        Ajouter au panier
                                    </Button>
                                </>
                            ) : (
                                <div className="text-[1.5rem] text-red-600 font-semibold">
                                    Produit en rupture de stock, veuillez nous contacter pour plus d'informations.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}
