import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import SubNav from "../../components/SubNav";
import AccordionList from "../../components/blueprint/AccordionList";
import ContentBlocksSection from "../../components/blueprint/ContentBlocksSection";
import StickyMobileCTA from "../../components/blueprint/StickyMobileCTA";
import TimelineList from "../../components/blueprint/TimelineList";
import UnitCtaSection from "../../components/blueprint/UnitCtaSection";
import UnitHeroSection from "../../components/blueprint/UnitHeroSection";
import UnitIntroSection from "../../components/blueprint/UnitIntroSection";
import PrimaryLinkButton from "../../components/ui/PrimaryLinkButton";
import mariniersConfig from "../config/mariniers.config";
import mmTheme from "../../styles/mmTheme";

const Mariniers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = mmTheme;
  const {
    meta,
    hero,
    intro,
    accordion,
    contentBlocks,
    cta,
    forWho,
    route,
    faq,
    stickyMobileCta,
  } = mariniersConfig;
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Voorbereiding Korps Mariniers",
    url: "https://missionmovement.vercel.app/units/mariniers",
    inLanguage: "nl-NL",
    description:
      "Informatie en voorbereiding voor kandidaten richting het Korps Mariniers: selectie, opleiding, fysieke eisen, mentale weerbaarheid en belastbaarheid.",
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
    <div className={`min-h-screen ${theme.page}`}>
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

      <UnitHeroSection hero={hero} theme={theme} />

      <div className="relative shadow-sm">
        <SubNav variant="dark" scrollable />
      </div>

      <UnitIntroSection intro={intro} />

      <section className="px-4 md:px-10 max-w-5xl mx-auto py-16 space-y-4">
        <AccordionList
          items={accordion.items}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          renderImage
          imageLayout="separate"
        />
      </section>

      {contentBlocks.map((block, index) => (
        <ContentBlocksSection
          key={index}
          heading={block.heading}
          items={block.items}
        />
      ))}

      <UnitCtaSection cta={cta} ButtonComponent={PrimaryLinkButton} />

      <section className="py-16 px-6 md:px-10 max-w-5xl mx-auto text-left">
        <h2 className="mm-h2 text-mmText mb-6">{forWho.heading}</h2>
        <ul className="list-disc pl-6 text-mmTextMuted space-y-2">
          {forWho.bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      </section>

      <section className="bg-mmPage py-16 px-6 md:px-10 max-w-5xl mx-auto text-left border-t border-mmBorder">
        <h2 className="mm-h2 text-mmText mb-6">{route.heading}</h2>
        <TimelineList steps={route.steps} />
      </section>

      <section className="px-4 md:px-10 max-w-5xl mx-auto py-16 space-y-4 border-t border-mmBorder">
        <h2 className="mm-h2 text-mmText mb-6">{faq.heading}</h2>
        <AccordionList
          items={faq.items}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          baseIndexOffset={accordion.items.length}
          renderImage={false}
        />
      </section>

      <StickyMobileCTA
        enabled={stickyMobileCta.enabled}
        delayMs={stickyMobileCta.delayMs}
        label={stickyMobileCta.label}
        buttonText={stickyMobileCta.buttonText}
        buttonTo={stickyMobileCta.buttonTo}
      />
    </div>
  );
};

export default Mariniers;
