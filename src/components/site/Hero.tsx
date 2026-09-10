import { MapPin, Crown, MessageCircle } from "lucide-react";
import heroImage from "@/assets/roseline-vip-founder.jpg";
import { waOrder } from "@/lib/wa";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-background pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_28%,transparent),transparent_70%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-10">
        <div className="animate-reveal">
          <p className="eyebrow mb-4 text-royal">Roseline VIP Shop</p>
          <span className="inline-flex items-center gap-2 border border-gold bg-card px-4 py-2 text-xs font-medium tracking-[0.18em] text-navy-deep shadow-soft">
            <MapPin className="h-3.5 w-3.5" strokeWidth={2} /> Tsévié • Livraison partout au Togo
          </span>
          <h1 className="mt-7 font-serif text-4xl leading-[1.06] font-semibold text-navy-deep sm:text-5xl lg:text-6xl xl:text-7xl">
            Votre style mérite
            <span className="block italic text-royal">une touche d'exception</span>
          </h1>
          <div className="gold-rule mt-7 max-w-[220px]" />
          <p className="mt-7 max-w-lg text-base leading-relaxed text-navy">
            Mules colorées, sacs affirmés et combos soigneusement choisis pour donner du caractère
            à chaque tenue. Une sélection vivante, disponible à Tsévié et livrée partout au Togo.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#chaussures"
              className="border-2 border-navy-deep px-8 py-4 text-center text-xs font-semibold tracking-[0.22em] uppercase text-navy-deep transition-colors hover:bg-navy-deep hover:text-cream"
            >
              Voir la collection
            </a>
            <a
              href={waOrder}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold tracking-[0.22em] uppercase"
            >
              <MessageCircle className="h-4 w-4" /> Commander sur WhatsApp
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            className="absolute -inset-3 border border-gold/60 sm:-inset-5"
            aria-hidden="true"
          />
          <div className="relative bg-card p-3 shadow-luxe sm:p-4">
            <img
              src={heroImage}
              alt="Roseline, fondatrice de Roseline VIP Shop, en tailleur bleu nuit"
              width={1200}
              height={1600}
              fetchPriority="high"
              className="w-full object-cover object-top"
            />
            <span className="absolute right-6 top-6 inline-flex items-center gap-2 bg-navy-deep px-4 py-2 text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-gold">
              <Crown className="h-3.5 w-3.5" strokeWidth={2} /> VIP
            </span>
          </div>
          <p className="mt-5 text-center text-xs font-medium tracking-[0.22em] uppercase text-navy">
            Roseline • Fondatrice
          </p>
        </div>
      </div>
    </section>
  );
}
