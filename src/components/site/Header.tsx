import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { waOrder } from "@/lib/wa";
import { PHONE_DISPLAY } from "@/lib/wa";
import Monogram from "./Monogram";

const nav = [
  { label: "Accueil", href: "#accueil" },
  { label: "Vidéo", href: "#video" },
  { label: "Chaussures", href: "#chaussures" },
  { label: "Sacs", href: "#sacs" },
  { label: "À propos", href: "#apropos" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-deep/95 backdrop-blur-md shadow-[0_1px_0_0_var(--color-gold)]"
          : "bg-navy-deep/80 backdrop-blur-sm"
      }`}
    >
      <div className="bg-gold px-5 py-2 text-center lg:px-10">
        <p className="mx-auto max-w-6xl text-[0.68rem] font-bold tracking-[0.1em] text-navy-deep sm:text-xs">
          <Sparkles className="mr-1.5 inline h-3.5 w-3.5 align-[-2px]" strokeWidth={2.5} />
          Livraison express partout au Togo • Commandes &amp; devis rapides sur WhatsApp au{" "}
          {PHONE_DISPLAY}
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:px-10">
        <a href="#accueil" className="flex min-w-0 items-center gap-3">
          <Monogram className="h-11 w-11 shrink-0" />
          <span className="min-w-0">
            <span className="block truncate font-serif text-lg tracking-[0.18em] text-cream sm:text-xl">
              ROSELINE VIP SHOP
            </span>
            <span className="eyebrow mt-0.5 block text-gold-soft/85">
              Chaussures • Sacs • Combos
            </span>
          </span>
        </a>

        <div className="flex shrink-0 items-center gap-6">
          <nav className="hidden items-center gap-5 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-cream/85 transition-colors hover:text-gold"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={waOrder}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden border border-gold px-5 py-2.5 text-xs tracking-[0.2em] uppercase text-gold transition-colors hover:bg-gold hover:text-navy-deep sm:inline-block"
          >
            Commander
          </a>
          <button
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="text-cream lg:hidden"
          >
            {open ? <Menu className="h-6 w-6 rotate-90" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-gold/25 bg-navy-deep lg:hidden">
          <div className="flex items-center justify-between px-5 py-3">
            <span className="eyebrow text-gold-soft/70">Navigation</span>
            <button type="button" aria-label="Fermer le menu" onClick={() => setOpen(false)}>
              <X className="h-5 w-5 text-cream" />
            </button>
          </div>
          <nav className="flex flex-col px-5 pb-6">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-cream/10 py-3 font-serif text-xl text-cream"
              >
                {n.label}
              </a>
            ))}
            <a
              href={waOrder}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 bg-gold px-5 py-3 text-center text-xs tracking-[0.2em] uppercase text-navy-deep"
            >
              Commander sur WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
