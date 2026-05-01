import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SubNav from "../../components/SubNav";
import CtaSection from "../../components/blueprint/CtaSection";
import HeroSection from "../../components/blueprint/HeroSection";
import IntroSection from "../../components/blueprint/IntroSection";
import ServiceSectionCard from "../../components/blueprint/ServiceSectionCard";
import veiligheidsdienstenConfig from "../config/veiligheidsdiensten.config";
import mmTheme from "../../styles/mmTheme";

const Veiligheidsdiensten = () => {
  const theme = mmTheme;
  const { meta, hero, intro, sections, cta, faq } = veiligheidsdienstenConfig;
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Voorbereiding Politie, Brandweer en Koninklijke Marechaussee",
    url: "https://missionmovement.vercel.app/units/veiligheidsdiensten",
    inLanguage: "nl-NL",
    description:
      "Informatie en voorbereiding voor kandidaten richting Politie, Brandweer en Koninklijke Marechaussee: selectie, fysieke keuring, opleiding, belastbaarheid en mentale weerbaarheid.",
    publisher: {
      "@type": "Organization",
      name: "Mission Movement",
      url: "https://missionmovement.vercel.app/",
    },
  };
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.title,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.content,
      },
    })),
  };

  return (
    <main
      className={`veiligheidsdienstenPage min-h-screen font-body ${theme.page}`}
    >
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.ogTitle} />
        <meta property="og:description" content={meta.ogDescription} />
        <meta property="og:image" content={meta.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={meta.ogUrl} />
        <link rel="canonical" href={meta.canonical} />
        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqPageSchema)}
        </script>
      </Helmet>

      <HeroSection hero={hero} theme={theme} />

      <div className="relative shadow-sm">
        <SubNav variant="dark" scrollable />
      </div>

      <IntroSection intro={intro} theme={theme} />

      <section className={`${theme.section} py-12 md:py-16`}>
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-20 space-y-8">
          {sections.map((section) => (
            <ServiceSectionCard
              key={section.title}
              section={section}
              theme={theme}
            />
          ))}
        </div>
      </section>

      <section className={`${theme.section} border-t ${theme.border} py-12 md:py-16`}>
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-20">
          <div className="bg-mmSurface rounded-2xl border border-mmBorder shadow-sm p-6 md:p-8">
            <h2 className="font-display uppercase tracking-widest text-mmAccent text-xl md:text-2xl mb-4">
              Voorbereiding voor veiligheidsdiensten
            </h2>
            <p className="text-mmTextMuted text-base md:text-lg leading-relaxed max-w-3xl">
              Wil je niet alleen lezen over Politie, Brandweer of KMar, maar
              gericht trainen richting jouw selectie, keuring of opleiding? Het
              programma Veiligheidsdiensten helpt je bouwen aan conditie,
              kracht, belastbaarheid, mentale weerbaarheid en structuur.
            </p>
            <Link to="/programma-veiligheidsdiensten" className="inline-flex mt-6">
              <button className="mm-btnPrimary uppercase font-bold tracking-widest">
                Bekijk programma veiligheidsdiensten
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className={`${theme.section} border-t ${theme.border} py-12 md:py-16`}>
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-20">
          <h2 className="mm-h2 text-mmText mb-8">{faq.heading}</h2>
          <div className="grid gap-4">
            {faq.items.map((item) => (
              <article key={item.title} className="mm-card p-6">
                <h3 className="font-display uppercase tracking-widest text-mmAccent text-base md:text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-mmTextMuted leading-relaxed">
                  {item.content}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection cta={cta} theme={theme} />
    </main>
  );
};

export default Veiligheidsdiensten;
