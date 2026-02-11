import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import FloatingCTA from "../components/FloatingCTA";
import TrainerCard from "../components/TrainerCard";
import aboutConfig from "./config/about.config";
import mmTheme from "../styles/mmTheme";
import Container from "../components/layout/Container";

const About = () => {
  const theme = mmTheme;
  const {
    meta,
    hero,
    foundations,
    quote,
    missionValues,
    closingCta,
    endDivider,
  } = aboutConfig;
  const foundationParagraphs = foundations.body.split("\n\n");

  return (
    <main className={`aboutPage min-h-screen pt-20 font-body ${theme.page}`}>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.ogTitle} />
        <meta property="og:description" content={meta.ogDescription} />
        <meta property="og:image" content={meta.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={meta.ogUrl} />
      </Helmet>

      {/* Hero Section: The Story */}
      <section
        className={`serviceHero relative h-[400px] md:h-[500px] w-full ${hero.backgroundClass}`}
        aria-hidden="true"
      >
        <div className={`absolute inset-0 z-10 ${theme.heroOverlay}`} />
        <Container className="serviceHeroContent relative z-20 h-full w-full flex flex-col justify-center items-center text-center">
          <h1
            className={`${theme.heroTitle} text-[32px] md:text-[54px] font-display uppercase tracking-[0.08em]`}
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.55)" }}
          >
            {hero.title}
          </h1>
          <div
            className={`h-[3px] w-12 ${theme.accentLine} rounded-full mt-4 opacity-90`}
          />
          <div className="serviceHeroSubtitle">
            <p className="leading-relaxed font-medium text-[15px] md:text-lg">
              {hero.subtitle}
            </p>
          </div>
        </Container>
      </section>

      <FloatingCTA />

      {/* Foundations Section */}
      <section className="w-full py-20 flex flex-col justify-center items-center text-left">
        <Container>
          <h2
            className={`${theme.textPrimary} text-2xl md:text-4xl font-display uppercase tracking-widest pb-10`}
          >
            {foundations.heading}
          </h2>
        <div className="max-w-5xl pt-5 text-left md:text-justify mm-readable">
            <h3
              className={`${theme.accentText} font-display uppercase tracking-widest text-xl md:text-3xl mb-5`}
            >
              {foundations.subheading}
            </h3>
            <div className="space-y-6">
              {foundationParagraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className={`sectionLead ${theme.textMuted} lg:text-xl leading-relaxed`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Inspirational Quote Divider */}
      <section
        className={`relative bg-cover bg-center bg-scroll md:bg-fixed ${quote.backgroundClass} h-[300px] flex items-center justify-center`}
      >
        <Container>
          <div
            className={`bg-black/70 px-6 py-4 border-l-4 ${theme.accentBorder} max-w-4xl`}
          >
            <h2 className="text-white text-lg md:text-2xl uppercase tracking-widest font-display text-center">
              {quote.text}
            </h2>
          </div>
        </Container>
      </section>

      {/* Mission & Values */}
      <section className="w-full py-20 flex flex-col justify-center items-center">
        <Container className="flex flex-col items-center">
          <h2
            className={`${theme.textPrimary} text-2xl md:text-4xl font-display uppercase tracking-widest py-10`}
          >
            {missionValues.heading}
          </h2>
          <div className="flex flex-col md:flex-row w-full max-w-6xl gap-10 text-left md:text-justify">
            {/* Missie */}
            <div
              className={`w-full md:w-1/3 p-6 ${theme.card} border ${theme.border} rounded-2xl`}
            >
              <h3
                className={`${theme.accentText} font-display uppercase text-lg md:text-2xl mb-2 tracking-widest`}
              >
                {missionValues.missionTitle}
              </h3>
              <p
                className={`sectionLead ${theme.textMuted} lg:text-xl leading-relaxed`}
              >
                {missionValues.missionBody}
              </p>
            </div>

            {/* Waarden */}
            <div
              className={`w-full md:w-2/3 p-6 ${theme.card} border ${theme.border} rounded-2xl`}
            >
              <h3
                className={`${theme.accentText} text-lg md:text-2xl mb-2 tracking-widest uppercase font-display`}
              >
                {missionValues.valuesTitle}
              </h3>
              <div
                className={`sectionLead ${theme.textMuted} lg:text-xl space-y-4 leading-relaxed`}
              >
                {missionValues.values.map((value) => (
                  <p key={value.label}>
                    <span
                      className={`${theme.accentText} uppercase font-semibold font-display tracking-widest`}
                    >
                      {value.label}:
                    </span>{" "}
                    {value.text}
                  </p>
                ))}
                <p>{missionValues.outro}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Trainer cards */}
      <TrainerCard />

      {/* CTA Ending Section */}
      <section className="w-full py-20 text-center flex flex-col justify-center items-center">
        <Container className="flex flex-col items-center">
          <h2
            className={`${theme.textPrimary} text-xl md:text-3xl font-display uppercase tracking-widest mb-5`}
          >
            {closingCta.heading}
          </h2>
          <p className={`sectionLead ${theme.textMuted} max-w-2xl mx-auto mb-8`}>
            {closingCta.body}
          </p>
          <Link to={closingCta.buttonLink}>
            <button className="mm-btnPrimary min-w-[200px]">
              {closingCta.buttonText}
            </button>
          </Link>
        </Container>
      </section>

      {/* Background Divider Image */}
      <section
        className={`relative h-[250px] md:h-[450px] w-full bg-cover bg-center bg-scroll md:bg-fixed ${endDivider.backgroundClass} bg-no-repeat`}
        aria-hidden="true"
      ></section>
    </main>
  );
};

export default About;
