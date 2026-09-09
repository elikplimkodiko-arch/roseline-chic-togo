import { createFileRoute } from "@tanstack/react-router";

import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import FilterableGrid from "@/components/site/ProductGrid";
import WhatsAppFab from "@/components/site/WhatsAppFab";
import {
  Selection,
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

const title = "Roseline Chop Line — Chaussures & Sacs professionnels à Tsévié, Togo";
const description =
  "Chaussures élégantes et sacs professionnels sélectionnés à Tsévié. Commande sur WhatsApp au +228 71 39 67 25, livraison partout au Togo.";

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
          name: "Roseline Chop Line",
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
        <FilterableGrid
          id="sacs"
          eyebrow="Collection"
          title="Sacs professionnels"
          intro="Sacs business, cabas, sacs à main et bandoulières : du volume, de la tenue et des finitions à la hauteur de vos journées."
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
