import { useState } from "react";
import {
  Sparkles,
  Gem,
  Truck,
  HeartHandshake,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  X,
  Quote,
} from "lucide-react";
import { SectionTitle } from "./ProductGrid";
import { selection, galleryImages } from "@/data/products";
import { waProduct, waOrder, waDelivery, waGeneral, PHONE_DISPLAY, PHONE_TEL } from "@/lib/wa";

export function Selection() {
  return (
    <section className="bg-navy-deep px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          light
          eyebrow="Coups de cœur"
          title="La Sélection Roseline"
          intro="Trois pièces choisies chaque mois pour leur allure, leur confort et leur capacité à transformer une tenue de travail en véritable signature."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {selection.map((item) => (
            <article key={item.name} className="group">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  width={900}
                  height={1100}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 bg-gold px-3 py-1.5 text-[0.65rem] tracking-[0.18em] uppercase text-navy-deep">
                  {item.badge}
                </span>
              </div>
              <h3 className="mt-5 font-serif text-2xl text-cream">{item.name}</h3>
              <p className="mt-2 text-sm text-cream/65">{item.note}</p>
              <a
                href={waProduct(item.name, item.price)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block border-b border-gold pb-1 text-xs tracking-[0.2em] uppercase text-gold"
              >
                Commander ce modèle
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const reasons = [
  {
    icon: Sparkles,
    title: "Style affirmé",
    text: "Des modèles sélectionnés avec un œil de styliste : lignes nettes, couleurs justes, allure professionnelle.",
  },
  {
    icon: Gem,
    title: "Qualité durable",
    text: "Matières soignées et finitions vérifiées une à une avant la mise en boutique.",
  },
  {
    icon: Truck,
    title: "Livraison partout au Togo",
    text: "Lomé, Kpalimé, Atakpamé, Sokodé, Kara… votre commande vous rejoint où que vous soyez.",
  },
  {
    icon: HeartHandshake,
    title: "Conseil personnalisé",
    text: "On vous aide à choisir la taille, la couleur et le modèle adaptés à votre quotidien.",
  },
];

export function Why() {
  return (
    <section className="px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Nos engagements"
          title="Pourquoi nous choisir"
          intro="Une boutique à taille humaine, exigeante sur la qualité et attentive à chaque cliente."
        />
        <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div key={r.title} className="bg-card p-8">
              <r.icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
              <h3 className="mt-5 font-serif text-2xl text-navy-deep">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="apropos" className="bg-blush/40 px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
        <div className="relative">
          <div className="absolute -inset-3 border border-gold/40" aria-hidden="true" />
          <img
            src={galleryImages[1]!.src}
            alt="Sac business en cuir bleu nuit de la boutique Roseline Chop Line"
            loading="lazy"
            width={900}
            height={1100}
            className="relative aspect-[4/5] w-full object-cover"
          />
        </div>
        <div>
          <span className="eyebrow text-royal">À propos</span>
          <h2 className="mt-4 font-serif text-3xl text-navy-deep sm:text-4xl lg:text-5xl">
            L'élégance commence par le bon choix
          </h2>
          <div className="gold-rule mt-6 w-24" />
          <p className="mt-6 text-sm leading-relaxed text-navy/80">
            Roseline Chop Line est née d'une conviction simple : une paire de chaussures bien
            choisie et un sac à la hauteur changent la façon dont on entre dans une pièce. Depuis
            Tsévié, nous réunissons des chaussures élégantes et des sacs professionnels pensés
            pour le travail, les rendez-vous importants et les grandes occasions.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-navy/80">
            Chaque modèle est sélectionné à la main, essayé et validé avant d'être proposé. Ancrée
            localement, la boutique accompagne une clientèle exigeante partout au Togo, avec le
            même soin qu'en boutique : écoute, conseil et suivi jusqu'à la livraison.
          </p>
          <a
            href={waGeneral}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-navy px-8 py-4 text-xs tracking-[0.2em] uppercase text-cream transition-colors hover:bg-royal"
          >
            Échanger avec Roseline
          </a>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    n: "01",
    title: "Choisissez votre modèle",
    text: "Parcourez les chaussures et les sacs, repérez la pièce qui vous plaît.",
  },
  {
    n: "02",
    title: "Écrivez-nous sur WhatsApp",
    text: "Un clic sur « Commander » ouvre une conversation avec le modèle déjà mentionné.",
  },
  {
    n: "03",
    title: "Recevez votre commande",
    text: "Nous confirmons la taille, le prix et la livraison vers votre ville au Togo.",
  },
];

export function HowTo() {
  return (
    <section className="px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Simple et rapide"
          title="Comment commander"
          intro="Trois étapes, aucune inscription, une réponse rapide."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="border-t border-gold pt-6">
              <span className="font-serif text-4xl text-gold">{s.n}</span>
              <h3 className="mt-3 font-serif text-2xl text-navy-deep">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href={waOrder}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold px-9 py-4 text-xs tracking-[0.22em] uppercase text-navy-deep"
          >
            <MessageCircle className="h-4 w-4" /> Commander maintenant
          </a>
        </div>
      </div>
    </section>
  );
}

export function Delivery() {
  return (
    <section id="livraison" className="bg-navy px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <span className="eyebrow text-gold-soft">Livraison</span>
        <h2 className="mt-4 font-serif text-3xl text-cream sm:text-4xl lg:text-5xl">
          Livraison partout au Togo
        </h2>
        <div className="gold-rule mx-auto mt-6 w-24" />
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-cream/75">
          Depuis notre boutique de Tsévié, nous expédions dans toutes les régions du pays. Retrait
          sur place possible, ou envoi par le transporteur de votre choix. Les frais et le délai
          vous sont confirmés sur WhatsApp avant l'expédition.
        </p>
        <div className="mt-12 grid gap-px overflow-hidden border border-cream/15 bg-cream/15 sm:grid-cols-3">
          {[
            { icon: MapPin, t: "Tsévié & environs", d: "Retrait en boutique ou livraison rapide" },
            { icon: Truck, t: "Toutes les villes", d: "Lomé, Kpalimé, Atakpamé, Sokodé, Kara…" },
            { icon: Clock, t: "Délais annoncés", d: "Confirmation claire avant chaque envoi" },
          ].map((c) => (
            <div key={c.t} className="bg-navy p-8">
              <c.icon className="mx-auto h-6 w-6 text-gold" strokeWidth={1.5} />
              <h3 className="mt-4 font-serif text-xl text-cream">{c.t}</h3>
              <p className="mt-2 text-sm text-cream/65">{c.d}</p>
            </div>
          ))}
        </div>
        <a
          href={waDelivery}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-block border border-gold px-8 py-4 text-xs tracking-[0.2em] uppercase text-gold transition-colors hover:bg-gold hover:text-navy-deep"
        >
          Vérifier ma livraison
        </a>
      </div>
    </section>
  );
}

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Galerie"
          title="En boutique et en images"
          intro="Cliquez sur une photo pour l'agrandir."
        />
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((img, i) => (
            <button
              key={img.alt}
              type="button"
              onClick={() => setOpen(i)}
              className="group relative overflow-hidden"
              aria-label={`Agrandir : ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={900}
                height={1100}
                className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-navy-deep/0 transition-colors group-hover:bg-navy-deep/25" />
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/95 p-5"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            aria-label="Fermer"
            onClick={() => setOpen(null)}
            className="absolute right-5 top-5 text-cream"
          >
            <X className="h-7 w-7" />
          </button>
          <img
            src={galleryImages[open]!.src}
            alt={galleryImages[open]!.alt}
            className="max-h-[85vh] w-auto max-w-full object-contain"
          />
        </div>
      )}
    </section>
  );
}

const testimonials = [
  {
    text: "J'ai reçu mes escarpins à Lomé en deux jours, exactement la couleur annoncée. Un service impeccable.",
    name: "Afi K.",
    city: "Lomé",
  },
  {
    text: "Mon sac business ne me quitte plus au bureau. Beau, solide, et le conseil de Roseline était juste.",
    name: "Sandrine A.",
    city: "Kpalimé",
  },
  {
    text: "Accueil chaleureux à Tsévié et vrais conseils de style. Je recommande sans hésiter.",
    name: "Yawa D.",
    city: "Tsévié",
  },
];

export function Testimonials() {
  return (
    <section className="bg-secondary px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Témoignages"
          title="Ce que disent nos clientes"
          intro="Quelques retours reçus sur WhatsApp après livraison."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="border border-border bg-card p-8">
              <Quote className="h-6 w-6 text-gold" strokeWidth={1.5} />
              <blockquote className="mt-5 font-serif text-xl leading-relaxed text-navy-deep italic">
                « {t.text} »
              </blockquote>
              <figcaption className="mt-6 eyebrow text-royal">
                {t.name} — {t.city}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <span className="eyebrow text-royal">Contact</span>
        <h2 className="mt-4 font-serif text-3xl text-navy-deep sm:text-4xl lg:text-5xl">
          Parlons de votre prochaine pièce
        </h2>
        <div className="gold-rule mx-auto mt-6 w-24" />
        <p className="mt-6 text-sm text-muted-foreground">
          Boutique à Tsévié, Togo • Livraison partout au Togo
        </p>
        <p className="mt-8 font-serif text-3xl text-navy sm:text-4xl">{PHONE_DISPLAY}</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center justify-center gap-2 border border-navy px-8 py-4 text-xs tracking-[0.2em] uppercase text-navy transition-colors hover:bg-navy hover:text-cream"
          >
            <Phone className="h-4 w-4" /> Appeler directement
          </a>
          <a
            href={waGeneral}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gold px-8 py-4 text-xs tracking-[0.2em] uppercase text-navy-deep"
          >
            <MessageCircle className="h-4 w-4" /> Écrire sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-deep px-5 py-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-serif text-lg tracking-[0.18em] text-cream">
              ROSELINE CHOP LINE
            </span>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Chaussures &amp; sacs professionnels. Boutique à Tsévié, livraison partout au Togo.
            </p>
          </div>
          <div>
            <h3 className="eyebrow text-gold-soft">Boutique</h3>
            <ul className="mt-4 space-y-2 text-sm text-cream/65">
              <li>
                <a href="#chaussures" className="hover:text-gold">
                  Chaussures
                </a>
              </li>
              <li>
                <a href="#sacs" className="hover:text-gold">
                  Sacs
                </a>
              </li>
              <li>
                <a href="#livraison" className="hover:text-gold">
                  Livraison
                </a>
              </li>
              <li>
                <a href="#apropos" className="hover:text-gold">
                  À propos
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="eyebrow text-gold-soft">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-cream/65">
              <li>
                <a href={`tel:${PHONE_TEL}`} className="hover:text-gold">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={waGeneral} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                  WhatsApp
                </a>
              </li>
              <li>Tsévié, Togo</li>
            </ul>
          </div>
          <div>
            <h3 className="eyebrow text-gold-soft">Informations</h3>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Prix communiqués sur demande via WhatsApp. Modèles disponibles selon stock. Photos
              non contractuelles.
            </p>
          </div>
        </div>
        <div className="gold-rule mt-12" />
        <p className="mt-6 text-center text-xs tracking-[0.14em] uppercase text-cream/45">
          © 2026 Roseline Chop Line — Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
