import React, { useState, lazy, Suspense } from "react";
import { FaCheck } from "react-icons/fa6";
import { GrAchievement } from "react-icons/gr";
import Banners from "../components/Banners";
import MobileBanners from "../components/MobileBanners";
import { faqDataNL, programDetails } from "../data/data";
import Reviews from "../components/Reviews";
import { Link } from "react-router-dom";
import QuoteBlock from "../components/QuoteBlock";
import { Helmet } from "react-helmet-async";
import PublicHero from "../components/PublicHero";

const Bundle = "/img/bundle.png";

const programServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mission Movement Voorbereidingsprogramma",
  url: "https://missionmovement.vercel.app/program",
  provider: {
    "@type": "Organization",
    name: "Mission Movement",
    url: "https://missionmovement.vercel.app/",
  },
  areaServed: {
    "@type": "Country",
    name: "Netherlands",
  },
  inLanguage: "nl-NL",
  serviceType:
    "Militaire voorbereiding en begeleiding richting Defensie en veiligheidsdiensten",
  audience: {
    "@type": "Audience",
    audienceType:
      "Kandidaten richting Defensie, politie, brandweer, KMar en specialistische eenheden",
  },
  description:
    "Het Mission Movement programma helpt kandidaten gericht bouwen aan kracht, conditie, belastbaarheid, discipline en mentale voorbereiding voor Defensie en veiligheidsdiensten.",
};

const Program = () => {
  const VideoPreview = lazy(() => import("../components/VideoPreview"));
  const [openProgramIndex, setOpenProgramIndex] = useState(null);
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const toggleProgram = (index) => {
    setOpenProgramIndex(openProgramIndex === index ? null : index);
  };

  const coreValues = [
    "Discipline",
    "Broederschap",
    "Doelgerichtheid",
    "Eer",
    "Structuur",
  ];

  return (
    <div>
      <Helmet>
        <title>
          Programma | Voorbereiding op Defensie, Politie, Brandweer & KMar
        </title>
        <meta
          name="description"
          content="Train gericht met Mission Movement en bouw aan kracht, conditie, belastbaarheid, discipline en mentale voorbereiding voor Defensie en veiligheidsdiensten."
        />
        <meta
          property="og:title"
          content="Programma | Voorbereiding op Defensie, Politie, Brandweer & KMar"
        />
        <meta
          property="og:description"
          content="Train gericht met Mission Movement en bouw aan kracht, conditie, belastbaarheid, discipline en mentale voorbereiding voor Defensie en veiligheidsdiensten."
        />
        <meta
          property="og:image"
          content="https://missionmovement.vercel.app/img/milprep.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:url"
          content="https://missionmovement.vercel.app/program"
        />
        <link
          rel="canonical"
          href="https://missionmovement.vercel.app/program"
        />
        <script type="application/ld+json">
          {JSON.stringify(programServiceSchema)}
        </script>
      </Helmet>

      <PublicHero
        eyebrow="Mission Movement"
        title="Militair Voorbereidingsprogramma"
        subtitle="Een gestructureerd programma voor kandidaten die zich serieus willen voorbereiden op Defensie, selectie, opleiding en de fysieke belasting daarna."
        button={{ label: "Bekijk het aanbod", to: "/pricing" }}
        imageSrc="/img/royalmarines.webp"
        imageAlt="Militaire voorbereiding voor Defensie"
        imageClassName="object-[center_left] md:object-bottom"
      />

      <section className="bg-mmSurface py-4 border-t border-b border-mmBorder w-full text-center mb-20">
        <div className="text-mmTextMuted font-display tracking-widest uppercase text-md md:text-lg flex flex-wrap justify-center gap-4 px-4">
          {coreValues.map((value, index) => (
            <React.Fragment key={index}>
              <span className="px-1 hover:text-mmAccent transition duration-200">
                {value}
              </span>

              {index < coreValues.length - 1 && (
                <span className="text-mmAccent">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Programma overzicht */}
      <section className="w-full px-5 sm:px-10 lg:px-20">
        <header className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 tracking-wider text-mmText max-w-7xl mx-auto">
          <div className="mm-card p-5 md:p-7 lg:p-8">
            <h1 className="mm-h2 text-center border-b border-mmBorder pb-2 mb-4 text-mmText">
              Programma Overzicht
            </h1>
            <p className="text-sm md:text-base font-normal text-mmTextMuted text-left leading-relaxed mb-6">
              Het Militair Voorbereidingsprogramma van Mission Movement is
              gebouwd voor kandidaten die zich serieus willen voorbereiden op
              Defensie, selectie, opleiding en de fysieke belasting daarna.
              <br />
              <br />
              Het programma gaat verder dan alleen trainen voor een testmoment.
              Je werkt aan kracht, conditie, belastbaarheid, herstel, discipline
              en mentale voorbereiding, zodat je niet alleen de norm haalt, maar
              met meer marge aan je traject begint.
              <br />
              <br />
              Het programma bestaat uit vijf onderdelen.
            </p>
            {programDetails.map((item, index) => (
              <div
                key={index}
                className="mb-3 bg-mmSurface border border-mmBorder rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.01]"
              >
                <button
                  onClick={() => toggleProgram(index)}
                  className="w-full flex justify-between items-center px-3 py-2 text-left text-mmText text-xs md:text-sm font-medium uppercase bg-mmSurface hover:text-mmAccent transition duration-300"
                  aria-expanded={openProgramIndex === index}
                >
                  {item.title}
                  <span className="text-mmAccent text-xl">
                    {openProgramIndex === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openProgramIndex === index
                      ? "max-h-40 opacity-100 px-3 py-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-mmTextMuted text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Vereisten + Skills + Voor wie */}
          <div className="mm-card flex flex-col p-5 md:p-7 lg:p-8 gap-8 lg:gap-10">
            <div className="border-b border-mmBorder pb-6">
              <h1 className="text-mmAccent font-display text-xl md:text-2xl tracking-widest uppercase mb-3">
                Vereisten
              </h1>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-mmTextMuted">
                {[
                  "Mindset en houding",
                  "Fysieke basisconditie",
                  "Toegang tot trainingsmateriaal",
                  "Niveau van toewijding",
                  "Tijdsinvestering",
                  "Geen medische belemmeringen",
                ].map((req, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FaCheck className="text-mmAccent min-w-[16px] h-[16px] md:min-w-[20px] md:h-[20px]" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-b border-mmBorder pb-6">
              <h1 className="text-mmAccent font-display text-xl md:text-2xl tracking-widest uppercase mb-3">
                Wat Je Leert
              </h1>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-mmTextMuted">
                {[
                  "Fysieke belastbaarheid",
                  "Techniek en uitvoering",
                  "Mentale weerbaarheid",
                  "Discipline",
                  "Herstel en opbouw",
                  "Doorzettingsvermogen",
                ].map((skill, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <GrAchievement className="text-mmAccent min-w-[16px] h-[16px] md:min-w-[20px] md:h-[20px]" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h1 className="text-mmAccent font-display text-xl md:text-2xl uppercase tracking-widest mb-3">
                Voor Wie
              </h1>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-mmTextMuted">
                {[
                  "Kandidaten richting Defensie",
                  "Kandidaten richting selectie of keuring",
                  "Mensen die starten aan een opleiding",
                  "Sporters die militaire voorbereiding zoeken",
                  "Mensen die belastbaarheid willen opbouwen",
                  "Iedereen die fysieke en mentale voorbereiding serieus neemt",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FaCheck className="text-mmAccent min-w-[16px] h-[16px] md:min-w-[20px] md:h-[20px]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Begin FAQ & bundle - zelfde grid en header als erboven */}
          <div className="col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* FAQ sectie */}
            <div className="space-y-4 border-t border-mmBorder pt-6">
              <h2 className="mm-h2 text-mmText mb-6">Veelgestelde Vragen</h2>

              {faqDataNL.map((faq, index) => {
                const isOpen = openFAQIndex === index;
                return (
                  <div
                    key={index}
                    className={`border border-mmBorder rounded-2xl transition-all duration-300 ${
                      isOpen ? "bg-mmSurface border-mmAccent" : "bg-mmSurface"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFAQIndex(isOpen ? null : index)}
                      className="w-full flex justify-between items-center px-6 py-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-mmAccent font-display text-base md:text-lg tracking-widest uppercase">
                        {faq.vraag}
                      </span>
                      <span className="text-mmAccent text-xl">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? "max-h-[1000px] py-4 px-6" : "max-h-0"
                      }`}
                    >
                      <p className="whitespace-pre-line text-mmTextMuted leading-relaxed text-base md:text-lg">
                        {faq.antwoord}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bundle image + button */}
            <div className="flex flex-col justify-center items-center p-4 md:p-6 lg:p-8">
              <img
                src={Bundle}
                alt="Programma bundle"
                loading="lazy"
                className="h-[400px] w-[250px] rounded-2xl shadow-sm border border-mmBorder bg-mmSurface hover:scale-[1.03] transition-transform"
              />
              <Link to="/pricing" className="mt-8">
                <button className="mm-btnPrimary w-[250px]">Start nu</button>
              </Link>
            </div>
          </div>
        </header>
      </section>

      {/* Video Preview */}
      <section className="py-16 px-4 md:px-10 lg:px-20 flex justify-center items-center bg-mmPage border-t border-mmBorder">
        <Suspense
          fallback={
            <div className="text-gray-500">Preview wordt geladen...</div>
          }
        >
          <VideoPreview videoId="YHffzTVE_9Q" />
        </Suspense>
      </section>

      <QuoteBlock
        quote="Mijn missie is het bouwen van onverwoestbare mensen - fysiek capabel en mentaal stabiel. Dit programma is wat ik zelf nodig had aan het begin."
        author="Justin Peeters"
      />

      <div className="hidden lg:flex">
        <Banners />
      </div>
      <div className="lg:hidden">
        <MobileBanners />
      </div>

      <Reviews />

      <QuoteBlock
        quote="Zware tijden bouwen geen karakter. Ze onthullen het."
        author="Justin Peeters"
      />

      <section className="w-full bg-mmSurface py-16 md:py-20 px-5 sm:px-10 lg:px-20 border-t border-mmBorder">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-[28px] md:text-[42px] lg:text-[50px] tracking-widest text-mmTextMuted uppercase leading-tight">
            <span className="text-mmAccent tracking-widest">
              Klaar om gericht te starten?{" "}
            </span>
            Bouw aan een lichaam en mindset die voorbereid zijn op wat er straks
            gevraagd wordt.
          </h2>
          <Link to="/pricing" className="inline-flex mt-8">
            <button className="mm-btnPrimary !min-w-0 !h-auto px-8 py-4 text-center uppercase tracking-widest">
              Bekijk het aanbod
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Program;
