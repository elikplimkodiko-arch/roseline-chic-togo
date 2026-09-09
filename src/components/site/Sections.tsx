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
  Play,
} from "lucide-react";
import { SectionTitle } from "./ProductGrid";
import { selection, galleryImages } from "@/data/products";
import { waProduct, waOrder, waDelivery, waGeneral, waCombo, PHONE_DISPLAY, PHONE_TEL } from "@/lib/wa";
import comboVideoAsset from "@/assets/combo-sac-chaussure.mp4.asset.json";

export function Selection() {
  return (
    <section className="bg-navy-deep px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          light
          eyebrow="Coups de cœur"
          title="La Sélection VIP"
          intro="Trois pièces choisies pour leur présence, leurs couleurs et leur capacité à transformer instantanément une tenue."
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
                Demander le prix
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

export function VideoShowcase() {
  return (
    <section className="relative overflow-hidden bg-coral px-5 py-24 lg:px-10 lg:py-32">
      <div className="absolute inset-y-0 right-0 w-1/3 bg-emerald/20" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 border border-gold/70" aria-hidden="true" />
          <video
            controls
            playsInline
            preload="metadata"
            poster={galleryImages[7]?.src}
            aria-label="Vidéo des combos sacs et chaussures Roseline VIP Shop"
            className="relative aspect-[9/16] w-full bg-navy-deep object-cover shadow-luxe"
          >
            <source src={comboVideoAsset.url} type="video/mp4" />
          </video>
          <span className="absolute left-4 top-4 inline-flex items-center gap-2 bg-gold px-3 py-2 text-[0.65rem] font-medium tracking-[0.2em] uppercase text-navy-deep">
            <Play className="h-3.5 w-3.5" fill="currentColor" /> VIP en vidéo
          </span>
        </div>
        <div className="text-cream">
          <span className="eyebrow text-gold-soft">Le look complet</span>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Découvrez nos combos sacs &amp; chaussures en vidéo
          </h2>
          <div className="gold-rule mt-7 w-32" />
          <p className="mt-7 max-w-xl text-base leading-relaxed text-cream/85">
            Des associations pensées pour vous faire gagner du temps sans rien céder au style.
            Regardez les détails, choisissez votre combo et demandez sa disponibilité en un message.
          </p>
          <a
            href={waCombo}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2 bg-gold px-8 py-4 text-xs tracking-[0.2em] uppercase text-navy-deep transition-transform hover:-translate-y-1"
          >
            <MessageCircle className="h-4 w-4" /> Découvrir les combos
          </a>
        </div>
      </div>
    </section>
  );
}

export function About() {
  const aboutImage = galleryImages[4];

  return (
    <section id="apropos" className="bg-blush/40 px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
        <div className="relative">
          <div className="absolute -inset-3 border border-gold/40" aria-hidden="true" />
          {aboutImage && (
            <img
              src={aboutImage.src}
              alt="Sacs multicolores sélectionnés par Roseline VIP Shop"
              loading="lazy"
              width={900}
              height={1100}
              className="relative aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          )}
        </div>
        <div>
          <span className="eyebrow text-royal">À propos</span>
          <h2 className="mt-4 font-serif text-3xl text-navy-deep sm:text-4xl lg:text-5xl">
            L'élégance commence par le bon choix
          </h2>
          <div className="gold-rule mt-6 w-24" />
          <p className="mt-6 text-sm leading-relaxed text-navy/80">
            Roseline VIP Shop est née d'une conviction simple : une paire de chaussures bien
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
          {galleryImages[open] && (
            <img
              src={galleryImages[open].src}
              alt={galleryImages[open].alt}
              className="max-h-[85vh] w-auto max-w-full object-contain"
            />
          )}
        </div>
      )}
    </section>
  );
}

const testimonials = [
  {
    text: "Mes mules sont arrivées rapidement à Lomé. La couleur est magnifique et elles sont vraiment confortables.",
    name: "Akossiwa",
    city: "Lomé",
  },
  {
    text: "Le sac est encore plus beau en vrai. Roseline a pris le temps de me conseiller et la livraison a été très simple.",
    name: "Kafui",
    city: "Tsévié",
  },
  {
    text: "J'ai commandé un combo sac et chaussures pour un événement. Tout était bien assorti et très soigné.",
    name: "Ablavi",
    city: "Kpalimé",
  },
  {
    text: "Livraison rapide jusqu'à Kara et emballage impeccable. Mon cabas est spacieux et solide.",
    name: "Mawuena",
    city: "Kara",
  },
  {
    text: "Les chaussures sont légères et confortables même après une longue journée. Très satisfaite de mon choix.",
    name: "Essi",
    city: "Sokodé",
  },
  {
    text: "J'adore les couleurs proposées. Mon mini sac apporte exactement la touche vive que je cherchais.",
    name: "Fafali",
    city: "Atakpamé",
  },
  {
    text: "Commande claire sur WhatsApp et réception sans difficulté à Aného. La qualité du sac m'a agréablement surprise.",
    name: "Ayawa",
    city: "Aného",
  },
  {
    text: "Les doubles boucles sont élégantes et la semelle est très agréable. Je peux les porter toute la journée.",
    name: "Sena",
    city: "Notsè",
  },
  {
    text: "Mon sac pastel est raffiné et facile à assortir. Le suivi jusqu'à la livraison était rassurant.",
    name: "Adjoa",
    city: "Dapaong",
  },
  {
    text: "Une belle sélection, un accueil attentionné et une livraison rapide. Je commanderai encore avec plaisir.",
    name: "Elom",
    city: "Lomé",
  },
];

export function Testimonials() {
  return (
    <section className="bg-secondary px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Témoignages"
          title="Ce que disent nos clientes"
          intro="Dix expériences inspirées des qualités les plus appréciées : conseil, confort, style et livraison nationale."
        />
        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="mb-6 break-inside-avoid border border-border bg-card p-8 transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-luxe">
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
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Textes proposés pour validation avant publication.
        </p>
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
              ROSELINE VIP SHOP
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
          © 2026 Roseline VIP Shop — Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
