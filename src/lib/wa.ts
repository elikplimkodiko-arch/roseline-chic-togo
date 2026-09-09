export const PHONE_DISPLAY = "+228 71 39 67 25";
export const PHONE_TEL = "+22871396725";
const WA_NUMBER = "22871396725";

export function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function waProduct(name: string, price?: string) {
  return waLink(
    `Bonjour Roseline VIP Shop 👋, je souhaite connaître le prix et la disponibilité du modèle ${name}. Pouvez-vous me renseigner ?`,
  );
}

export const waGeneral = waLink(
  "Bonjour Roseline VIP Shop 👋, je souhaite des informations sur vos chaussures et sacs.",
);

export const waOrder = waLink(
  "Bonjour Roseline VIP Shop 👋, je voudrais passer une commande. Pouvez-vous m'aider à choisir mon modèle ?",
);

export const waDelivery = waLink(
  "Bonjour Roseline VIP Shop 👋, je souhaite connaître les conditions de livraison vers ma ville au Togo.",
);

export const waCombo = waLink(
  "Bonjour Roseline VIP Shop 👋, je souhaite connaître les combos sacs et chaussures disponibles. Pouvez-vous me renseigner ?",
);
