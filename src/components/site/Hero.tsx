import heroAsset from "@/assets/roseline-hero.jpg.asset.json";
import { waOrder } from "@/lib/wa";

export default function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-navy-deep pt-28 lg:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:pb-24">
        <div className="order-2 lg:order-1">
          <span className="inline-block border border-gold/40 px-4 py-2 text-xs tracking-[0.18em] text-gold-soft">
            📍 Tsévié • Livraison partout au Togo
          </span>
          <h1 className="mt-7 font-serif text-4xl leading-[1.08] text-cream sm:text-5xl lg:text-6xl">
            Votre style mérite
            <span className="block italic text-gold">une touche d'exception</span>
          </h1>
          <div className="gold-rule mt-7 max-w-[220px]" />
          <p className="mt-7 max-w-xl text-base leading-relaxed text-cream/75">
            Chaussures élégantes et sacs professionnels sélectionnés pour les femmes et les
            hommes qui soignent chaque détail. Une boutique de confiance à Tsévié, des conseils
            personnalisés et une livraison dans toutes les villes du Togo.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#chaussures"
              className="border border-cream/40 px-8 py-4 text-center text-xs tracking-[0.22em] uppercase text-cream transition-colors hover:border-gold hover:text-gold"
            >
              Voir la collection
            </a>
            <a
              href={waOrder}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold px-8 py-4 text-center text-xs tracking-[0.22em] uppercase text-navy-deep transition-opacity hover:opacity-90"
            >
              Commander sur WhatsApp
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-3 border border-gold/30" aria-hidden="true" />
            <img
              src={heroAsset.url}
              alt="Roseline, fondatrice de Roseline Chop Line, en tailleur bleu nuit et escarpins vernis"
              width={716}
              height={1600}
              className="relative aspect-[3/4] w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
