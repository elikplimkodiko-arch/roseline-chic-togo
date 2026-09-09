import escarpins from "@/assets/escarpins-navy.jpg";
import talons from "@/assets/talons-blush.jpg";
import mocassins from "@/assets/mocassins-noir.jpg";
import bottines from "@/assets/bottines-navy.jpg";
import sandales from "@/assets/sandales-or.jpg";
import sacBusiness from "@/assets/sac-business.jpg";
import sacCabas from "@/assets/sac-cabas.jpg";
import sacMain from "@/assets/sac-main.jpg";
import sacOrdinateur from "@/assets/sac-ordinateur.jpg";
import sacBandouliere from "@/assets/sac-bandouliere.jpg";

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
  "Escarpins",
  "Talons",
  "Mocassins",
  "Bottines",
  "Sandales",
];

export const shoes: Item[] = [
  {
    name: "Escarpin Nuit Royale",
    category: "Escarpins",
    image: escarpins,
    price: "Prix sur demande",
    note: "Verni bleu nuit, bout effilé, ornement doré",
    badge: "Signature",
  },
  {
    name: "Talon Blush Bureau",
    category: "Talons",
    image: talons,
    price: "Prix sur demande",
    note: "Talon bloc 7 cm, cuir souple, confort journée",
  },
  {
    name: "Mocassin Noir Classique",
    category: "Mocassins",
    image: mocassins,
    price: "Prix sur demande",
    note: "Cuir lisse, ligne intemporelle, tenue impeccable",
  },
  {
    name: "Bottine Nuit Structurée",
    category: "Bottines",
    image: bottines,
    price: "Prix sur demande",
    note: "Zip latéral, talon stable, allure affirmée",
  },
  {
    name: "Sandale Or Éclat",
    category: "Sandales",
    image: sandales,
    price: "Prix sur demande",
    note: "Cuir métallisé doré, plate et élégante",
    badge: "Nouveau",
  },
  {
    name: "Escarpin Verni Pointu",
    category: "Escarpins",
    image: escarpins,
    price: "Prix sur demande",
    note: "L'allure parfaite pour vos rendez-vous d'affaires",
  },
];

export const bagCategories = [
  "Tout",
  "Business",
  "Cabas",
  "Sacs à main",
  "Bandoulière",
];

export const bags: Item[] = [
  {
    name: "Sac Business Nuit",
    category: "Business",
    image: sacBusiness,
    price: "Prix sur demande",
    note: "Cuir grainé bleu nuit, finitions dorées, format A4",
    badge: "Best-seller",
  },
  {
    name: "Cabas Grège Atelier",
    category: "Cabas",
    image: sacCabas,
    price: "Prix sur demande",
    note: "Grand volume, port épaule, quotidien professionnel",
  },
  {
    name: "Sac Main Soirée Matelassé",
    category: "Sacs à main",
    image: sacMain,
    price: "Prix sur demande",
    note: "Chaîne dorée, cuir matelassé, format élégant",
  },
  {
    name: "Porte-ordinateur Bordeaux",
    category: "Business",
    image: sacOrdinateur,
    price: "Prix sur demande",
    note: "Compartiment 14\", bandoulière amovible",
  },
  {
    name: "Mini Bandoulière Nuit",
    category: "Bandoulière",
    image: sacBandouliere,
    price: "Prix sur demande",
    note: "Chaîne dorée, mains libres, tenue soignée",
  },
  {
    name: "Cabas Cuir Souple",
    category: "Cabas",
    image: sacCabas,
    price: "Prix sur demande",
    note: "Souple et spacieux, parfait pour le bureau",
  },
];

export const selection: Item[] = [
  {
    name: "Escarpin Nuit Royale",
    category: "Coup de cœur",
    image: escarpins,
    price: "Prix sur demande",
    note: "La pièce qui signe une silhouette",
    badge: "Édition limitée",
  },
  {
    name: "Sac Business Nuit",
    category: "Coup de cœur",
    image: sacBusiness,
    price: "Prix sur demande",
    note: "L'allié des femmes qui décident",
    badge: "Favori clientes",
  },
  {
    name: "Sandale Or Éclat",
    category: "Coup de cœur",
    image: sandales,
    price: "Prix sur demande",
    note: "L'éclat discret des grandes occasions",
    badge: "Nouveauté",
  },
];

export const galleryImages = [
  { src: escarpins, alt: "Escarpins vernis bleu nuit à ornement doré" },
  { src: sacBusiness, alt: "Sac business en cuir grainé bleu nuit" },
  { src: talons, alt: "Talons blocs en cuir blush" },
  { src: sacMain, alt: "Sac à main matelassé noir à chaîne dorée" },
  { src: mocassins, alt: "Mocassins noirs en cuir lisse" },
  { src: sacCabas, alt: "Cabas grège en cuir souple" },
  { src: bottines, alt: "Bottines bleu nuit à talon stable" },
  { src: sacBandouliere, alt: "Mini sac bandoulière bleu nuit à chaîne dorée" },
];
