import { useState } from "react";
import { MessageCircle } from "lucide-react";
import type { Item } from "@/data/products";
import { waProduct } from "@/lib/wa";

export function SectionTitle({
  eyebrow,
  title,
  intro,
  light = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className={`eyebrow ${light ? "text-gold-soft" : "text-royal"}`}>{eyebrow}</span>
      <h2
        className={`mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl ${
          light ? "text-cream" : "text-navy-deep"
        }`}
      >
        {title}
      </h2>
      <div className="gold-rule mx-auto mt-6 w-24" />
      {intro && (
        <p
          className={`mt-6 text-[0.95rem] leading-relaxed ${
            light ? "text-cream/85" : "text-navy"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

export function ProductCard({ item }: { item: Item }) {
  return (
    <article className="card-luxe group flex flex-col">
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          width={900}
          height={1100}
          className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.08]"
        />
        {item.badge && (
          <span className="absolute left-0 top-4 bg-navy-deep px-3 py-1.5 text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-gold">
            {item.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-7">
        <span className="eyebrow text-royal">{item.category}</span>
        <h3 className="mt-2 font-serif text-2xl text-navy-deep">{item.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/85">{item.note}</p>
        <p className="mt-4 text-sm font-semibold text-navy-deep">Prix communiqué sur WhatsApp</p>
        <a
          href={waProduct(item.name, item.price)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold mt-5 inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase"
        >
          <MessageCircle className="h-4 w-4" /> Demander le prix
        </a>
      </div>
    </article>
  );
}

export default function FilterableGrid({
  id,
  eyebrow,
  title,
  intro,
  categories,
  items,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  categories: string[];
  items: Item[];
}) {
  const [active, setActive] = useState(categories[0]);
  const filtered = active === categories[0] ? items : items.filter((i) => i.category === active);

  return (
    <section id={id} className="px-5 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow={eyebrow} title={title} intro={intro} />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={`border-2 px-5 py-2.5 text-xs font-semibold tracking-[0.16em] uppercase transition-colors ${
                active === c
                  ? "border-navy-deep bg-navy-deep text-cream"
                  : "border-border text-navy-deep hover:border-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((item) => (
            <ProductCard key={`${item.name}-${item.note}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
