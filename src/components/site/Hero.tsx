import { MapPin } from "lucide-react";
import heroImage from "@/assets/roseline-vip-founder.jpg";
import { waOrder } from "@/lib/wa";

export default function Hero() {
  return (
    <section id="accueil" className="relative flex min-h-[88svh] items-end overflow-hidden bg-background pt-28 lg:min-h-[860px] lg:items-center">
      <img
        src={heroImage}
        alt="Fondatrice de Roseline VIP Shop dans un décor boutique blanc et or"
        width={1200}
        height={1600}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[58%_center] lg:object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--background)_8%,color-mix(in_oklab,var(--background)_92%,transparent)_40%,transparent_72%),linear-gradient(to_right,color-mix(in_oklab,var(--background)_96%,transparent)_0%,color-mix(in_oklab,var(--background)_72%,transparent)_43%,transparent_72%)] lg:bg-[linear-gradient(to_right,var(--background)_0%,color-mix(in_oklab,var(--background)_94%,transparent)_32%,color-mix(in_oklab,var(--background)_30%,transparent)_60%,transparent_78%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 lg:px-10 lg:pb-0">
        <div className="max-w-xl animate-reveal">
          <p className="eyebrow mb-4 text-royal">Roseline VIP Shop</p>
          <span className="inline-flex items-center gap-2 border border-gold/70 bg-background/75 px-4 py-2 text-xs tracking-[0.18em] text-navy backdrop-blur-sm">
            <MapPin className="h-3.5 w-3.5" strokeWidth={1.75} /> Tsévié • Livraison partout au Togo
          </span>
          <h1 className="mt-7 font-serif text-4xl leading-[1.08] text-navy-deep sm:text-5xl lg:text-7xl">
            Votre style mérite
            <span className="block italic text-royal">une touche d'exception</span>
          </h1>
          <div className="gold-rule mt-7 max-w-[220px]" />
          <p className="mt-7 max-w-lg text-base leading-relaxed text-navy/80">
            Mules colorées, sacs affirmés et combos soigneusement choisis pour donner du caractère
            à chaque tenue. Découvrez une sélection vivante, disponible à Tsévié et livrée partout au Togo.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#chaussures"
              className="border border-navy px-8 py-4 text-center text-xs tracking-[0.22em] uppercase text-navy transition-colors hover:bg-navy hover:text-cream"
            >
              Voir la collection
            </a>
            <a
              href={waOrder}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold px-8 py-4 text-center text-xs tracking-[0.22em] uppercase text-navy-deep transition-transform hover:-translate-y-1"
            >
              Commander sur WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
