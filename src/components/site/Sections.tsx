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
  Star,
  BadgeCheck,
} from "lucide-react";
import { SectionTitle } from "./ProductGrid";
import { selection, galleryImages } from "@/data/products";
import { waProduct, waOrder, waDelivery, waGeneral, waCombo, PHONE_DISPLAY, PHONE_TEL } from "@/lib/wa";
import comboVideoAsset from "@/assets/combo-sac-chaussure.mp4.asset.json";
import cliente1 from "@/assets/cliente-1.jpg.asset.json";
import cliente2 from "@/assets/cliente-2.jpg.asset.json";
import cliente3 from "@/assets/cliente-3.jpg.asset.json";
import cliente4 from "@/assets/cliente-4.jpg.asset.json";
import cliente5 from "@/assets/cliente-5.jpg.asset.json";
import cliente6 from "@/assets/cliente-6.jpg.asset.json";
import cliente7 from "@/assets/cliente-7.jpg.asset.json";
import cliente8 from "@/assets/cliente-8.jpg.asset.json";
import cliente9 from "@/assets/cliente-9.jpg.asset.json";
import cliente10 from "@/assets/cliente-10.jpg.asset.json";

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
              <p className="mt-2 text-sm text-cream/80">{item.note}</p>
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
            <div key={r.title} className="card-luxe p-8">
              <r.icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
              <h3 className="mt-5 font-serif text-2xl text-navy-deep">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/85">{r.text}</p>
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
            className="btn-gold mt-9 inline-flex items-center gap-2 px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase"
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
          <p className="mt-6 text-[0.95rem] leading-relaxed text-navy">
            Roseline VIP Shop est née d'une conviction simple : une paire de chaussures bien
            choisie et un sac à la hauteur changent la façon dont on entre dans une pièce. Depuis
            Tsévié, nous réunissons des chaussures élégantes et des sacs professionnels pensés
            pour le travail, les rendez-vous importants et les grandes occasions.
          </p>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-navy">
            Chaque modèle est sélectionné à la main, essayé et validé avant d'être proposé. Ancrée
            localement, la boutique accompagne une clientèle exigeante partout au Togo, avec le
            même soin qu'en boutique : écoute, conseil et suivi jusqu'à la livraison.
          </p>
          <a
            href={waGeneral}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-navy-deep px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase text-cream transition-colors hover:bg-royal"
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
              <p className="mt-3 text-sm leading-relaxed text-navy/85">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href={waOrder}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2 px-9 py-4 text-xs font-semibold tracking-[0.22em] uppercase"
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
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-cream/85">
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
              <p className="mt-2 text-sm text-cream/80">{c.d}</p>
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
    model: "Mules H Arc-en-ciel",
    avatar: cliente1.url,
  },
  {
    text: "Le sac est encore plus beau en vrai. Roseline a pris le temps de me conseiller et la livraison a été très simple.",
    name: "Kafui",
    city: "Tsévié",
    model: "Sacs tressés ZARA",
    avatar: cliente2.url,
  },
  {
    text: "J'ai commandé un combo sac et chaussures pour un événement. Tout était bien assorti et très soigné.",
    name: "Ablavi",
    city: "Kpalimé",
    model: "Combo Monogramme",
    avatar: cliente3.url,
  },
  {
    text: "Livraison rapide jusqu'à Kara et emballage impeccable. Mon cabas est spacieux et solide.",
    name: "Mawuena",
    city: "Kara",
    model: "Grand Cabas Monogramme",
    avatar: cliente4.url,
  },
  {
    text: "Les chaussures sont légères et confortables même après une longue journée. Très satisfaite de mon choix.",
    name: "Essi",
    city: "Sokodé",
    model: "Mules Strass Éclat",
    avatar: cliente5.url,
  },
  {
    text: "J'adore les couleurs proposées. Mon mini sac apporte exactement la touche vive que je cherchais.",
    name: "Fafali",
    city: "Atakpamé",
    model: "Sacs tressés ZARA",
    avatar: cliente6.url,
  },
  {
    text: "Commande claire sur WhatsApp et réception sans difficulté à Aného. La qualité du sac m'a agréablement surprise.",
    name: "Ayawa",
    city: "Aného",
    model: "Sacs Pastel Chic",
    avatar: cliente7.url,
  },
  {
    text: "Les doubles boucles sont élégantes et la semelle est très agréable. Je peux les porter toute la journée.",
    name: "Sena",
    city: "Notsè",
    model: "Sandales Double Boucle",
    avatar: cliente8.url,
  },
  {
    text: "Mon sac pastel est raffiné et facile à assortir. Le suivi jusqu'à la livraison était rassurant.",
    name: "Adjoa",
    city: "Dapaong",
    model: "Sacs Pastel Chic",
    avatar: cliente9.url,
  },
  {
    text: "Une belle sélection, un accueil attentionné et une livraison rapide. Je commanderai encore avec plaisir.",
    name: "Elom",
    city: "Lomé",
    model: "Mules Blanches Boucle Or",
    avatar: cliente10.url,
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 étoiles sur 5">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className="h-4 w-4 fill-gold text-gold" strokeWidth={1} />
      ))}
    </div>
  );
}

function WhatsAppGlyph({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.67-2.09-.17-.3-.02-.46.13-.61.15-.15.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.19-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.46 0 1.45 1.06 2.85 1.21 3.05.15.2 2.09 3.2 5.06 4.37 2.98 1.16 2.98.77 3.52.72.54-.05 1.75-.71 2-1.4.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.13c-1.55 0-3.07-.42-4.4-1.2l-.32-.19-3.11.82.83-3.04-.2-.33a8.16 8.16 0 0 1-1.25-4.34c0-4.53 3.69-8.21 8.22-8.21 4.53 0 8.21 3.68 8.21 8.21 0 4.53-3.68 8.21-8.21 8.21z" />
    </svg>
  );
}

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
            <figure key={t.name} className="card-luxe mb-6 break-inside-avoid p-8">
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
        <p className="mt-6 text-sm font-medium text-navy">
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
            className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase"
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
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
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
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
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
