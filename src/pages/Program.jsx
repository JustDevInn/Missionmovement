import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { GrAchievement } from "react-icons/gr";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Banners from "../components/Banners";
import MobileBanners from "../components/MobileBanners";
import { useGlowEffect } from "../Hooks/useGlowEffect";
import { faqDataNL, programDetails } from "../data/data";
import Reviews from "../components/Reviews";
import { Link } from "react-router-dom";
import TrainerCard from "../components/TrainerCard";
import QuoteBlock from "../components/QuoteBlock";
import { Helmet } from "react-helmet-async";

const Bundle = "/img/bundle.png";

const wordDefinitions = {
  Discipline:
    "De kunst van het consequent trainen van gedrag en gewoontes, niet afhankelijk van motivatie, maar van structuur.",
  Commitment:
    "De bereidheid om er elke dag te staan, juist wanneer het zwaar is.",
  Determination:
    "Vastberadenheid en doorzettingsvermogen. Niet hopen op vooruitgang, maar ervoor vechten.",
};

const Program = () => {
  const { animate, elementRef } = useGlowEffect();
  const [hoveredWord, setHoveredWord] = useState(null);
  const [openProgramIndex, setOpenProgramIndex] = useState(null);
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const toggleProgram = (index) => {
    setOpenProgramIndex(openProgramIndex === index ? null : index);
  };

  return (
    <div className="pt-10">
      <Helmet>
        <title>Programma | Mission Movement</title>
        <meta
          name="description"
          content="Ontdek het Military Preparation Program van Mission Movement — gebouwd vanuit ervaring met special forces en een decennium aan coaching."
        />
        <meta property="og:title" content="Programma | Mission Movement" />
        <meta
          property="og:description"
          content="Van het Korps Mariniers tot moderne krijger — dit programma geeft je wat je nodig hebt om te slagen."
        />
        <meta
          property="og:image"
          content="https://missionmovement.vercel.app/img/milprep.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:url"
          content="https://missionmovement.vercel.app/about"
        />
      </Helmet>

      {/* Hero sectie */}
      <section className="section flex flex-col justify-center items-start md:mb-20">
        <div className="flex flex-col justify-start items-start pl-10 lg:pl-60">
          <p className="h2 animate-fade-in">Het</p>
          <h1 className="text-yellow font-primary text-[35px] md:text-[100px] font-medium uppercase leading-[120%] tracking-wider animate-slide-in-left">
            Militaraire
          </h1>
          <h1 className="text-yellow font-primary text-[35px] md:text-[100px] font-medium uppercase leading-[120%] tracking-wider animate-slide-in-left">
            Voorbereidings
          </h1>
          <p className="h2 animate-fade-in">Programma</p>
        </div>
        <div className="w-full flex flex-row justify-center mt-10 lg:mt-20 text-xs lg:text-2xl tracking-widest">
          <p className="text-brown px-2 lg:px-5">discipline</p>
          <p className="text-brown">|</p>
          <p className="text-brown px-2 lg:px-5">vastberadenheid</p>
          <p className="text-brown">|</p>
          <p className="text-brown px-2 lg:px-5">toewijding</p>
        </div>
      </section>

      {/* Programma overzicht */}
      <section className="w-full px-5 sm:px-10 lg:px-20">
        <header className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 tracking-wider text-white max-w-7xl mx-auto">
          <div className="bg-primary p-4 md:p-6 lg:p-8 rounded-xl shadow-lg">
            <h1 className="text-yellow text-xl md:text-4xl font-secondary uppercase mb-4 text-center border-b border-yellow pb-2">
              Programma Overzicht
            </h1>
            <p className="text-xs md:text-sm font-light text-white text-justify leading-relaxed mb-4">
              Het Military Preparation Program van Mission Movement is gebouwd
              op meer dan 20 jaar ervaring binnen elite eenheden. Het gaat
              verder dan fitness — het is voor wie een hoger doel nastreeft.
              Voor wie klaar is voor het leven van een special operator.
              <br />
              <br />
              Het programma bestaat uit 5 deeltrajecten.
            </p>
            {programDetails.map((item, index) => (
              <div
                key={index}
                className="mb-3 bg-brown rounded-md overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:bg-opacity-80"
              >
                <button
                  onClick={() => toggleProgram(index)}
                  className="w-full flex justify-between items-center px-3 py-2 text-left text-brown text-xs md:text-sm font-medium uppercase bg-primary hover:text-yellow transition duration-300"
                  aria-expanded={openProgramIndex === index}
                >
                  {item.title}
                  {openProgramIndex === index ? (
                    <FaChevronUp className="text-yellow" />
                  ) : (
                    <FaChevronDown className="text-yellow" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openProgramIndex === index
                      ? "max-h-40 opacity-100 px-3 py-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-white text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Vereisten + Skills + Voor wie */}
          <div className="flex flex-col p-4 md:p-6 lg:p-8 gap-8 lg:gap-10">
            <div>
              <h1 className="text-yellow font-secondary text-xl md:text-2xl uppercase mb-3">
                Vereisten
              </h1>
              <ul className="grid grid-cols-2 gap-2 text-xs md:text-sm font-light">
                {[
                  "Mindset en houding",
                  "Fysieke basisconditie",
                  "Toegang tot trainingsmateriaal",
                  "Niveau van toewijding",
                  "Tijdsinvestering",
                  "Geen medische belemmeringen",
                ].map((req, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheck className="text-yellow text-sm" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h1 className="text-yellow font-secondary text-xl md:text-2xl uppercase mb-3">
                Wat Je Leert
              </h1>
              <ul className="grid grid-cols-2 gap-2 text-xs md:text-sm font-light">
                {[
                  "Fysieke paraatheid",
                  "Gespecialiseerde technieken",
                  "Mentale weerbaarheid",
                  "Discipline",
                  "Aanpassingsvermogen",
                  "Doorzettingsvermogen",
                ].map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <GrAchievement className="text-yellow text-sm" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h1 className="text-yellow font-secondary text-xl md:text-2xl uppercase mb-3">
                Voor Wie
              </h1>
              <ul className="grid grid-cols-2 gap-2 text-xs md:text-sm font-light">
                {[
                  "Toekomstige militairen die zich voorbereiden op selectie",
                  "Actieve militairen die structuur zoeken",
                  "Atleten die elite fitheid nastreven",
                  "Sporters die mentale uitdaging zoeken",
                  "Mensen toegewijd aan persoonlijke groei",
                  "Iedereen die fysieke & mentale weerbaarheid wil opbouwen",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheck className="text-yellow text-sm" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Begin FAQ & bundle — zelfde grid en header als erboven */}
          <div className="col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* FAQ sectie */}
            <div className="bg-primary p-4 md:p-6 lg:p-8 rounded-xl shadow-lg">
              <h2 className="text-yellow font-secondary text-xl md:text-4xl uppercase text-center mb-4 border-b border-yellow pb-2">
                Veelgestelde Vragen
              </h2>
              <p className="text-xs md:text-sm font-light text-white mb-6 text-justify leading-relaxed">
                Nog vragen? Hieronder vind je de meest gestelde vragen vóór
                inschrijving. Staat jouw vraag er niet tussen? Neem gerust
                contact op.
              </p>
              <div className="space-y-3">
                {faqDataNL.map((faq, index) => {
                  const isOpen = openFAQIndex === index;
                  return (
                    <div
                      key={index}
                      className="bg-brown rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:bg-opacity-90"
                    >
                      <button
                        onClick={() => setOpenFAQIndex(isOpen ? null : index)}
                        className="w-full flex justify-between items-center p-3 text-left text-brown font-medium tracking-wide uppercase bg-primary hover:text-yellow text-xs md:text-sm"
                        aria-expanded={isOpen}
                      >
                        {faq.vraag}
                        {isOpen ? (
                          <FaChevronUp className="text-yellow" />
                        ) : (
                          <FaChevronDown className="text-yellow" />
                        )}
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          isOpen
                            ? "max-h-[500px] opacity-100 px-4 pb-4"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-white text-sm font-light leading-relaxed">
                          {faq.antwoord}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bundle image + button */}
            <div className="flex flex-col justify-center items-center p-4 md:p-6 lg:p-8">
              <img
                src={Bundle}
                alt="Programma bundle"
                loading="lazy"
                className="h-[400px] w-[250px] rounded-lg shadow-lg hover:scale-[1.03] transition-transform"
              />
              <Link to="/pricing" className="mt-8">
                <button className="btn lg:btn-lg w-[250px]">
                  Start Voorbereiding
                </button>
              </Link>
            </div>
          </div>
        </header>
      </section>

      <QuoteBlock
        quote="Mijn missie is het bouwen van onverwoestbare mensen — fysiek capabel en mentaal stabiel. Dit programma is wat ik zelf nodig had aan het begin."
        author="Justin Peeters"
      />

      <div className="hidden lg:flex">
        <Banners />
      </div>
      <div className="lg:hidden">
        <MobileBanners />
      </div>

      <TrainerCard />

      <Reviews />

      <QuoteBlock
        quote="Zware tijden bouwen geen karakter. Ze onthullen het."
        author="Justin Peeters"
      />

      <section className="w-screen flex flex-col lg:flex-row py-20 p-10 justify-between items-center lg:items-start lg:mt-20">
        <div className="md:w-1/2 flex flex-col font-light px-5 lg:px-28">
          <h5 className="font-secondary text-[30px] lg:text-[50px] tracking-wider text-brown lg:text-left text-center">
            <span className="text-yellow">Klaar? </span>
            Schrijf je in en verander je lijf en geest in een kracht waar niet
            mee te spotten valt.
          </h5>
          <div
            ref={elementRef}
            className={`font-secondary text-brown uppercase lg:py-20 pt-10 pb-20 text-center lg:text-left tracking-widest cursor-pointer ${
              animate ? "animate-light-sweep" : ""
            }`}
          >
            {["Discipline", "|", "Toewijding", "|", "Vastberadenheid"].map(
              (word, index) => (
                <span
                  key={index}
                  onMouseEnter={() => word !== "|" && setHoveredWord(word)}
                  onMouseLeave={() => setHoveredWord(null)}
                  className="relative inline-block px-2 transition duration-200 hover:text-yellow"
                >
                  {word}
                  {hoveredWord === word && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-10 bg-black text-white text-sm rounded-md px-4 py-3 shadow-md w-[220px] transition-opacity duration-300">
                      {wordDefinitions[word]}
                    </div>
                  )}
                </span>
              )
            )}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center lg:w-1/2">
          <img
            src={Bundle}
            loading="lazy"
            alt="projectbundlecover"
            className="h-[400px] w-[250px]"
          />
          <div className="flex justify-center items-center mt-10">
            <Link to="/pricing" className="hidden md:block">
              <button className="btn-lg !min-w-0 !h-auto px-10 py-4 text-center whitespace-nowrap">
                Start — Jij weet waarom je hier bent
              </button>
            </Link>
            <Link to="/pricing" className="block md:hidden">
              <button className="btn-lg !min-w-0 !h-auto px-6 py-3 text-center whitespace-nowrap">
                Start Nu
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Program;
