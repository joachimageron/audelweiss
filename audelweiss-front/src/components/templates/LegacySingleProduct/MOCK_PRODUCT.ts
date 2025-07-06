export const MOCK_PRODUCT = {
  categories: ["Scrunchy", "Decoration", "Vêtement"],
  price: 4.5,
  oldPrice: 8,
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
      { label: "Non", value: false, extra: 0 },
    ],
  },
  options: [
    { label: "Protection résine", value: "resine", extra: 2 },
    { label: "Rien sur le verso", value: "no_back", extra: -2 },
  ],
  personalization: {
    enabledIfNot: "no_back",
    placeholder: "ex : Je t'aime",
  },
  giftWrap: [{ label: "Emballage en papier épais / cartonné", value: "gift", extra: 3 }],
  specialOffer: "🔥 3 achetés = le lot à 9€ au lieu de 12€",
  stockQuantity: 5,
};
