export const PHONE_DISPLAY = "+228 71 39 67 25";
export const PHONE_TEL = "+22871396725";
const WA_NUMBER = "22871396725";

export function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function waProduct(name: string, price?: string) {
  return waLink(
    `Bonjour Roseline Chop Line 👋, je suis intéressé(e) par le modèle "${name}"${
      price ? ` (${price})` : ""
    }. Est-il disponible et quelles tailles proposez-vous ?`,
  );
}

export const waGeneral = waLink(
  "Bonjour Roseline Chop Line 👋, je souhaite des informations sur vos chaussures et sacs professionnels.",
);

export const waOrder = waLink(
  "Bonjour Roseline Chop Line 👋, je voudrais passer une commande. Pouvez-vous m'aider à choisir mon modèle ?",
);

export const waDelivery = waLink(
  "Bonjour Roseline Chop Line 👋, je souhaite connaître les conditions de livraison vers ma ville au Togo.",
);
