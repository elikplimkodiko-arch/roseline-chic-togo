import { createFileRoute } from "@tanstack/react-router";

import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import FilterableGrid from "@/components/site/ProductGrid";
import WhatsAppFab from "@/components/site/WhatsAppFab";
import {
  Selection,
  VideoShowcase,
  Why,
  About,
  HowTo,
  Delivery,
  Gallery,
  Testimonials,
  Contact,
  Footer,
} from "@/components/site/Sections";
import { shoes, shoeCategories, bags, bagCategories } from "@/data/products";

const title = "Roseline VIP Shop — Chaussures & Sacs à Tsévié";
const description =
  "Mules colorées, sacs élégants et combos à Tsévié. Demandez le prix sur WhatsApp et profitez de la livraison partout au Togo.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "fr_FR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Roseline VIP Shop",
          description,
          image: "/favicon.ico",
          telephone: "+22871396725",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Tsévié",
            addressCountry: "TG",
          },
          areaServed: { "@type": "Country", name: "Togo" },
          url: "/",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FilterableGrid
          id="chaussures"
          eyebrow="Collection"
          title="Chaussures élégantes"
          intro="Escarpins, talons, mocassins, bottines et sandales : des modèles confortables et soignés pour le bureau comme pour les grandes occasions."
          categories={shoeCategories}
          items={shoes}
        />
        <Selection />
        <VideoShowcase />
        <FilterableGrid
          id="sacs"
          eyebrow="Collection"
          title="Sacs & combos VIP"
          intro="Mini sacs colorés, grands cabas, pastels délicats et ensembles coordonnés : choisissez la pièce qui raconte votre style."
          categories={bagCategories}
          items={bags}
        />
        <Why />
        <About />
        <HowTo />
        <Delivery />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
