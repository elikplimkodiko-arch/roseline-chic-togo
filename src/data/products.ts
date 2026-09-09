import mulesHAsset from "@/assets/mules-h-multicolores.jpg.asset.json";
import doubleBoucleAsset from "@/assets/sandales-double-boucle.jpg.asset.json";
import strassAsset from "@/assets/mules-strass-multicolores.jpg.asset.json";
import mulesBlanchesAsset from "@/assets/mules-blanches-talon.jpg.asset.json";
import sacsZaraAsset from "@/assets/sacs-zara-multicolores.jpg.asset.json";
import cabasAsset from "@/assets/cabas-monogramme.jpg.asset.json";
import pastelAsset from "@/assets/sacs-pastel-chic.jpg.asset.json";
import comboAsset from "@/assets/combo-sac-ballerines.jpg.asset.json";

export type Item = {
  name: string;
  category: string;
  image: string;
  price: string;
  note: string;
  badge?: string;
};

export const shoeCategories = [
  "Tout",
  "Mules",
  "Sandales",
  "Talons",
];

export const shoes: Item[] = [
  {
    name: "Mules H Arc-en-ciel",
    category: "Mules",
    image: mulesHAsset.url,
    price: "Prix sur demande",
    note: "Une ligne graphique déclinée dans des couleurs franches et lumineuses.",
    badge: "Multicolore",
  },
  {
    name: "Sandales Double Boucle Signature",
    category: "Sandales",
    image: doubleBoucleAsset.url,
    price: "Prix sur demande",
    note: "Beige ou noir, deux boucles dorées et une semelle pensée pour le quotidien.",
    badge: "Confort",
  },
  {
    name: "Mules Strass Éclat",
    category: "Mules",
    image: strassAsset.url,
    price: "Prix sur demande",
    note: "Couleurs vibrantes, détails scintillants et allure festive assumée.",
    badge: "Éclat VIP",
  },
  {
    name: "Mules Blanches Valentino",
    category: "Talons",
    image: mulesBlanchesAsset.url,
    price: "Prix sur demande",
    note: "Blanc éclatant, talon sculpté et boucle dorée pour une allure précieuse.",
    badge: "Chic",
  },
];

export const bagCategories = [
  "Tout",
  "Sacs à main",
  "Grands cabas",
  "Collections",
  "Sacs à main",
  "Combos",
];

export const bags: Item[] = [
  {
    name: "Mini Sacs Tressés Couleurs",
    category: "Sacs à main",
    image: sacsZaraAsset.url,
    price: "Prix sur demande",
    note: "Poignées tressées, format structuré et palette joyeuse pour chaque tenue.",
    badge: "Collection couleur",
  },
  {
    name: "Grand Cabas Monogramme Teddy",
    category: "Grands cabas",
    image: cabasAsset.url,
    price: "Prix sur demande",
    note: "Grand format, longues anses et pendentif peluche pour une touche signature.",
    badge: "Maxi format",
  },
  {
    name: "Collection Pastel Élégance",
    category: "Collections",
    image: pastelAsset.url,
    price: "Prix sur demande",
    note: "Rose poudré, camel, vert d'eau et noir matelassé aux finitions dorées.",
    badge: "Coup de cœur",
  },
  {
    name: "Combo Monogramme Sac & Ballerines",
    category: "Combos",
    image: comboAsset.url,
    price: "Prix sur demande",
    note: "Un ensemble coordonné aux tons crème et or pour une silhouette harmonieuse.",
    badge: "Combo exclusif",
  },
];

export const selection: Item[] = [
  {
    name: "Mules Blanches Valentino",
    category: "Coup de cœur",
    image: mulesBlanchesAsset.url,
    price: "Prix sur demande",
    note: "La touche blanche et or qui illumine une silhouette.",
    badge: "Édition limitée",
  },
  {
    name: "Collection Pastel Élégance",
    category: "Coup de cœur",
    image: pastelAsset.url,
    price: "Prix sur demande",
    note: "Des teintes douces et des formats pour chaque moment.",
    badge: "Palette VIP",
  },
  {
    name: "Mules Strass Éclat",
    category: "Coup de cœur",
    image: strassAsset.url,
    price: "Prix sur demande",
    note: "La couleur et la lumière au centre de votre look.",
    badge: "Nouveauté",
  },
];

export const galleryImages = [
  { src: mulesHAsset.url, alt: "Mules H multicolores de la collection Roseline VIP Shop" },
  { src: doubleBoucleAsset.url, alt: "Sandales beige et noir à double boucle dorée" },
  { src: strassAsset.url, alt: "Mules multicolores ornées de strass" },
  { src: mulesBlanchesAsset.url, alt: "Mules blanches à talon et boucle dorée" },
  { src: sacsZaraAsset.url, alt: "Sacs à main multicolores à poignées tressées" },
  { src: cabasAsset.url, alt: "Grands cabas monogramme avec pendentif peluche" },
  { src: pastelAsset.url, alt: "Collection de sacs pastel et noir matelassé" },
  { src: comboAsset.url, alt: "Combo sac et ballerines monogramme crème" },
];
