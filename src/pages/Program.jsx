import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { GrAchievement } from "react-icons/gr";
import Banners from "../components/Banners";
import MobileBanners from "../components/MobileBanners";
import { useGlowEffect } from "../Hooks/useGlowEffect";
import { faqDataNL, programDetails } from "../data/data";
import Reviews from "../components/Reviews";
import { Link } from "react-router-dom";
import QuoteBlock from "../components/QuoteBlock";
import { Helmet } from "react-helmet-async";

const Bundle = "/img/bundle.png";

const wordDefinitions = {
  Verbondenheid:
    "Een diepe, wederzijdse band tussen mensen gebaseerd op vertrouwen, respect en gedeelde doelen.",
  Kracht:
    "Het vermogen om fysieke, mentale of emotionele weerstand te bieden en actie te ondernemen, zelfs onder druk.",
  Toewijding:
    "De bereidheid en het doorzettingsvermogen om jezelf volledig in te zetten voor een doel, dag in dag uit.",
};

const Program = () => {
  const { animate, elementRef } = useGlowEffect();
  const [hoveredWord, setHoveredWord] = useState(null);
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
    <div className="pt-10">
      <Helmet>
        <title>Programma | Mission Movement</title>
        <meta
          name="description"
          content="Ontdek het Military Preparation Program van Mission Movement, gebouwd vanuit ervaring met special forces en een decennium aan coaching."
        />
        <meta property="og:title" content="Programma | Mission Movement" />
        <meta
          property="og:description"
          content="Van het Korps Mariniers tot moderne krijger. Dit programma geeft je wat je nodig hebt om te slagen."
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
      <section className="section flex flex-col justify-center items-center md:mb-20">
        <div className="flex flex-col justify-start items-start">
          <p className="h2 animate-fade-in">Het</p>
          <h1 className="text-yellow font-primary text-[35px] md:text-[100px] font-medium uppercase leading-[120%] tracking-wider animate-slide-in-left">
            Militaraire
          </h1>
          <h1 className="text-yellow font-primary text-[35px] md:text-[100px] font-medium uppercase leading-[120%] tracking-wider animate-slide-in-left">
            Voorbereidings-
          </h1>
          <p className="h2 animate-fade-in">Programma</p>
        </div>
      </section>

      <section className="bg-[#121212] py-4 border-t border-b border-yellow w-full text-center mb-20">
        <div className="text-brown font-secondary tracking-widest uppercase text-md md:text-lg flex flex-wrap justify-center gap-4 px-4">
          {coreValues.map((value, index) => (
            <React.Fragment key={index}>
              <span className="px-1 hover:text-yellow transition duration-200">
                {value}
              </span>

              {index < coreValues.length - 1 && (
                <span className="text-yellow">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Programma overzicht */}
      <section className="w-full px-5 sm:px-10 lg:px-20">
        <header className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 tracking-wider text-white max-w-7xl mx-auto">
          <div className="bg-primary p-4 md:p-6 lg:p-8 rounded-xl shadow-lg">
            <h1 className="text-yellow text-xl md:text-4xl font-secondary tracking-widest uppercase mb-4 text-center border-b border-yellow pb-2">
              Programma Overzicht
            </h1>
            <p className="text-xs md:text-sm font-normal text-white text-justify leading-relaxed mb-4">
              Het Militaire voorbereidingsprogramma van Mission Movement is
              gebouwd op meer dan 10 jaar ervaring binnen elite eenheden en 10
              jaar in de sport branche. Het gaat verder dan fitness - het is
              voor wie een hoger doel nastreeft. Voor wie klaar is voor het
              leven van een special operator.
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
                  <span className="text-yellow text-xl">
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
              <h1 className="text-yellow font-secondary text-xl md:text-2xl tracking-widest uppercase mb-3">
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
                    <FaCheck className="text-yellow min-w-[16px] h-[16px] md:min-w-[20px] md:h-[20px]" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h1 className="text-yellow font-secondary text-xl md:text-2xl tracking-widest uppercase mb-3">
                Wat Je Leert
              </h1>
              <ul className="grid grid-cols-2 gap-2 text-xs md:text-sm font-light">
                {[
                  "Fysieke paraatheid",
                  "Gespecialiseerde technieken",
                  "Mentale weerbaarheid",
                  "Discipline",
                  "Aanpassings- vermogen",
                  "Doorzettings- vermogen",
                ].map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <GrAchievement className="text-yellow min-w-[16px] h-[16px] md:min-w-[20px] md:h-[20px]" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h1 className="text-yellow font-secondary text-xl md:text-2xl uppercase tracking-widest mb-3">
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
                    <FaCheck className="text-yellow min-w-[16px] h-[16px] md:min-w-[20px] md:h-[20px]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Begin FAQ & bundle - zelfde grid en header als erboven */}
          <div className="col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* FAQ sectie */}
            <div className="space-y-4 border-t border-yellow pt-6">
              <h2 className="text-yellow text-2xl md:text-3xl font-secondary uppercase tracking-widest mb-6">
                Veelgestelde Vragen
              </h2>

              {faqDataNL.map((faq, index) => {
                const isOpen = openFAQIndex === index;
                return (
                  <div
                    key={index}
                    className={`border border-yellow/20 rounded-lg transition-all duration-300 ${
                      isOpen ? "bg-[#111111] border-yellow" : "bg-[#0a0a0a]"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFAQIndex(isOpen ? null : index)}
                      className="w-full flex justify-between items-center px-6 py-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-yellow font-secondary text-base md:text-lg tracking-widest uppercase">
                        {faq.vraag}
                      </span>
                      <span className="text-yellow text-xl">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? "max-h-[1000px] py-4 px-6" : "max-h-0"
                      }`}
                    >
                      <p className="whitespace-pre-line text-gray-300 font-light leading-relaxed text-base md:text-lg">
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
                className="h-[400px] w-[250px] rounded-lg shadow-lg hover:scale-[1.03] transition-transform"
              />
              <Link to="/pricing" className="mt-8">
                <button className="btn btn-lg w-[250px]">Start nu</button>
              </Link>
            </div>
          </div>
        </header>
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

      <section className="w-screen flex flex-col lg:flex-row py-20 p-10 justify-between items-center lg:items-start lg:mt-20">
        <div className="md:w-1/2 flex flex-col font-light px-5 lg:px-28">
          <h5 className="font-secondary text-[30px] lg:text-[50px] tracking-wider text-gray-300 lg:text-left text-center">
            <span className="text-yellow tracking-wider">Klaar? </span>
            Schrijf je in en verander je lijf en geest in een kracht waar niet
            mee te spotten valt.
          </h5>
          <div
            ref={elementRef}
            className={`font-secondary text-brown uppercase lg:py-20 pt-10 pb-20 text-center lg:text-left tracking-widest cursor-pointer ${
              animate ? "animate-light-sweep" : ""
            }`}
          >
            {[
              "Verbondenheid",
              <span className="text-yellow">|</span>,
              "Kracht",
              <span className="text-yellow">|</span>,
              "Toewijding",
            ].map((word, index) => (
              <span
                key={index}
                onMouseEnter={() => word !== "|" && setHoveredWord(word)}
                onMouseLeave={() => setHoveredWord(null)}
                className="relative inline-block px-2 transition duration-200 hover:text-yellow text-brown tracking-wider text-lg"
              >
                {word}
                {hoveredWord === word && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-10 bg-black text-white text-lg rounded-md px-4 py-3 shadow-md w-[220px] transition-opacity duration-300">
                    {wordDefinitions[word]}
                  </div>
                )}
              </span>
            ))}
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
              <button className="btn-lg !min-w-0 !h-auto px-10 py-4 text-center whitespace-nowrap w-[250px]">
                Start nu
              </button>
            </Link>
            <Link to="/pricing" className="block md:hidden">
              <button className="btn-lg !min-w-0 !h-auto px-6 py-3 text-center whitespace-nowrap w-[250px]">
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
