import React from "react";
import { Helmet } from "react-helmet-async";
import SubNav from "../../components/SubNav";
import CtaSection from "../../components/blueprint/CtaSection";
import HeroSection from "../../components/blueprint/HeroSection";
import IntroSection from "../../components/blueprint/IntroSection";
import ServiceSectionCard from "../../components/blueprint/ServiceSectionCard";
import veiligheidsdienstenConfig from "../config/veiligheidsdiensten.config";
import mmTheme from "../../styles/mmTheme";

const Veiligheidsdiensten = () => {
  const theme = mmTheme;
  const { meta, hero, intro, sections, cta } = veiligheidsdienstenConfig;

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

      <CtaSection cta={cta} theme={theme} />
    </main>
  );
};

export default Veiligheidsdiensten;
