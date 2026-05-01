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

  return (
    <div className={`min-h-screen pt-20 ${theme.page}`}>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link
          rel="canonical"
          href="https://missionmovement.vercel.app/units/mariniers"
        />
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
