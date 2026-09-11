import { MapPin, Crown, MessageCircle, ShieldCheck, Truck, Users } from "lucide-react";
import heroImage from "@/assets/roseline-vip-founder.jpg";
import { waOrder, waGeneral } from "@/lib/wa";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-background pt-32 pb-14 lg:pt-36 lg:pb-20"
    >
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_28%,transparent),transparent_70%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-10">
        <div className="order-2 animate-reveal lg:order-1">
          <p className="eyebrow mb-3 text-royal">Roseline VIP Shop</p>
          <span className="inline-flex items-center gap-2 border border-gold bg-card px-4 py-2 text-xs font-medium tracking-[0.18em] text-navy-deep shadow-soft">
            <MapPin className="h-3.5 w-3.5" strokeWidth={2} /> Tsévié • Livraison partout au Togo
          </span>
          <h1 className="mt-6 font-serif text-4xl leading-[1.06] font-semibold text-navy-deep sm:text-5xl lg:text-6xl">
            Votre style mérite
            <span className="block italic text-royal">une touche d'exception</span>
          </h1>
          <div className="gold-rule mt-6 max-w-[220px]" />
          <p className="mt-6 max-w-lg text-base leading-relaxed text-navy">
            Votre élégance entre de bonnes mains : chaque article est vérifié à la main avant
            expédition. Mules colorées, sacs affirmés et combos coordonnés, disponibles à Tsévié et
            livrés partout au Togo.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waOrder}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold tracking-[0.22em] uppercase"
            >
              <MessageCircle className="h-4 w-4" /> Commander sur WhatsApp
            </a>
            <a
              href={waGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-navy-deep px-8 py-4 text-center text-xs font-semibold tracking-[0.22em] uppercase text-navy-deep transition-colors hover:bg-navy-deep hover:text-cream"
            >
              Demander un conseil
            </a>
          </div>
          <ul className="mt-8 grid gap-3 text-[0.82rem] font-semibold text-navy sm:grid-cols-3">
            <li className="flex items-center gap-2">
              <Users className="h-4 w-4 shrink-0 text-royal" strokeWidth={2.2} /> Plus de 500
              clientes satisfaites
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 shrink-0 text-royal" strokeWidth={2.2} /> Articles
              vérifiés à la main
            </li>
            <li className="flex items-center gap-2">
              <Truck className="h-4 w-4 shrink-0 text-royal" strokeWidth={2.2} /> Livraison suivie
              au Togo
            </li>
          </ul>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
          <div className="absolute -inset-3 border border-gold/60 sm:-inset-5" aria-hidden="true" />
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
          <p className="mx-auto mt-5 w-fit border border-gold bg-card px-5 py-2.5 text-center text-[0.68rem] font-bold tracking-[0.2em] uppercase text-navy-deep shadow-soft">
            Roseline • Fondatrice &amp; Directrice Artistique
          </p>
        </div>
      </div>
    </section>
  );
}
