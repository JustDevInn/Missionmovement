import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const accordionData = [
  {
    title: "Ontstaan & Missie",
    image: "/img/kct.webp",
    objectPosition: "object-[center_20%]",
    content:
      "Het Korps Commandotroepen (KCT) is de special forces-eenheid van de Koninklijke Landmacht. Opgericht in 1942 tijdens de Tweede Wereldoorlog en geïnspireerd door de Britse commandotroepen. De missie: het uitvoeren van speciale operaties in vijandelijk gebied. Het motto: Nunc aut Nunquam — Nu of nooit.",
  },
  {
    title: "Inzet & Specialisaties",
    image: "/img/kct.webp",
    objectPosition: "object-top",
    content:
      "Commando's worden wereldwijd ingezet voor antiterreur, verkenningen diep in vijandelijk gebied, militaire bijstand en sabotage. Specialisaties zijn onder meer sniper, mountain leader, medic, JTAC en diving.",
  },
  {
    title: "Structuur & Locaties",
    image: "/img/kct.webp",
    objectPosition: "object-top",
    content:
      "Het KCT is gevestigd in Roosendaal. Het bestaat uit operationele squadrons en ondersteunende afdelingen. Iedere operator maakt deel uit van een klein team met maximale zelfstandigheid en flexibiliteit.",
  },
  {
    title: "Keuring & Slagingskans",
    image: "/img/kct.webp",
    objectPosition: "object-top",
    content:
      "De Elementaire Commando Opleiding (ECO) staat bekend als een van de zwaarste opleidingen binnen Defensie. Slechts 8–15% van de kandidaten slaagt. De toelating begint met de algemene militaire keuring, gevolgd door de AMOL en uiteindelijk de keiharde ECO.",
  },
  {
    title: "Fysieke Eisen",
    image: "/img/kct.webp",
    objectPosition: "object-top",
    content:
      "Je moet onder andere voldoen aan:\n- 10+ pull-ups\n- 30+ sit-ups in 2 minuten\n- 3.000 meter hardlopen in 12 minuten\n- Hindernisbaan\n- Navigatietocht met bepakking\n\nNaast fysieke eisen wordt vooral mentale weerbaarheid getest.",
  },
  {
    title: "Carrièrepad & Special Forces",
    image: "/img/kct.webp",
    objectPosition: "object-top",
    content:
      "Na succesvolle afronding van de ECO word je operationeel inzetbaar als commando. Hierna kun je je verder specialiseren en doorgroeien tot teamleider, instructeur of officier. Doorstroming naar M-Squadron of internationale SF-units behoort tot de mogelijkheden.",
  },
  {
    title: "Waarom Voorbereiding Essentieel Is",
    image: "/img/kct.webp",
    objectPosition: "object-top",
    content:
      "De uitvalpercentages zijn extreem. Zonder voorbereiding op fysieke én mentale belasting red je het niet. Mission Movement bereidt je voor met progressieve overbelasting, mentale simulaties en doelgerichte opbouw.",
  },
];

const KorpsCommandoTroepen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowStickyCTA(true);
    }, 20000); // 20 seconden

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen pt-20">
      <Helmet>
        <title>Korps Commandotroepen | Missie & Voorbereiding</title>
        <meta
          name="description"
          content="Alles over het KCT: de zwaarste eenheid binnen Defensie. Slagingskansen, structuur en hoe je jezelf kunt voorbereiden."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <img
          src="/img/kct.webp"
          alt="KCT trainingsvisual"
          className="absolute inset-0 w-full h-full object-cover object-[center_20%] scale-110"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 h-full w-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-yellow text-[32px] md:text-[50px] font-secondary uppercase tracking-widest mb-4">
            Korps Commandotroepen
          </h1>
          <p className="text-gray-200 max-w-xl font-light text-base md:text-lg">
            De absolute top binnen Defensie — ontdek hoe jij hier klaar voor
            kunt zijn.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#0a0a0a] py-16 px-6 md:px-10 lg:px-20 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Embleem links van de tekst */}
          <div className="flex-shrink-0 flex items-center justify-center h-[160px] md:h-[220px]">
            <img
              src="/img/kct-embleem.svg"
              alt="KCT Embleem"
              className="h-full w-auto object-contain"
            />
          </div>

          {/* Gele streep + content */}
          <div className="border-l-[3px] border-yellow pl-6">
            <h2 className="text-yellow text-2xl md:text-4xl font-secondary uppercase tracking-widest mb-4">
              Wat is het KCT?
            </h2>
            <p className="text-gray-300 font-light leading-relaxed text-base md:text-lg">
              Het Korps Commandotroepen is de Special Operations Force van de
              Landmacht. Operators worden wereldwijd ingezet voor de moeilijkste
              missies — vaak in het diepste geheim. Hier kom je alleen binnen
              als je fysiek én mentaal tot het uiterste gaat.
              <br className="hidden md:block" />
              <br />
              Mission Movement helpt je deze weg voorbereid en gefocust te
              bewandelen.
            </p>
          </div>
        </div>
      </section>

      {/* Accordion */}
      <section className="px-4 md:px-10 max-w-5xl mx-auto py-16 space-y-4">
        {accordionData.map((item, index) => {
          const isOpen = activeIndex === index;
          return (
            <div
              key={index}
              className={`border border-yellow/20 rounded-lg transition-all duration-300 ${
                isOpen ? "bg-[#111111] border-yellow" : "bg-[#0a0a0a]"
              }`}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <span className="text-yellow font-secondary text-base md:text-lg tracking-widest uppercase">
                  {item.title}
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
                <p className="whitespace-pre-line text-gray-300 font-light leading-relaxed text-sm md:text-base mb-4">
                  {item.content}
                </p>
                <img
                  src={item.image}
                  alt={`${item.title} visual`}
                  className={`w-full max-h-[300px] rounded-md shadow-md object-cover ${
                    item.objectPosition || "object-center"
                  }`}
                />
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="relative bg-yellow text-black py-12 my-10 px-6 text-center shadow-lg overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase text-xs tracking-widest mb-2 font-bold">
            Special Forces Voorbereiding
          </p>
          <h3 className="text-3xl md:text-4xl font-bold tracking-wide mb-3">
            Jij wil het uiterste? Dan moet je nu starten.
          </h3>
          <p className="text-base md:text-lg mb-6">
            Ons programma helpt je fysiek en mentaal door de zwaarste selectie
            van Defensie.
          </p>
          <Link to="/pricing" className="flex justify-center items-center">
            <button className="btn-lg bg-black text-yellow hover:bg-yellow hover:text-black border border-black">
              Start Voorbereiding
            </button>
          </Link>
        </div>
      </section>

      {/* Voor wie */}
      <section className="py-16 px-6 md:px-10 max-w-5xl mx-auto text-left">
        <h2 className="text-yellow text-2xl md:text-3xl font-secondary uppercase tracking-widest mb-6">
          Voor wie is dit geschikt?
        </h2>
        <ul className="list-disc pl-6 text-gray-300 font-light space-y-2">
          <li>
            Je droomt ervan om commando te worden, maar weet niet waar te
            beginnen.
          </li>
          <li>
            Je hebt al eens de keuring of opleiding geprobeerd, maar haakte af.
          </li>
          <li>
            Je wilt fysiek en mentaal voorbereid zijn op het zwaarste wat
            Defensie biedt.
          </li>
          <li>Je wilt geen gok wagen — je wilt binnenkomen met een plan.</li>
        </ul>
      </section>

      {/* Route */}
      <section className="bg-[#101010] py-16 px-6 md:px-10 max-w-5xl mx-auto text-left border-t border-yellow">
        <h2 className="text-yellow text-2xl md:text-3xl font-secondary uppercase tracking-widest mb-6">
          Jouw route naar het Korps Commandotroepen
        </h2>
        <ol className="relative border-l border-yellow pl-6 space-y-6 text-gray-300 font-light text-sm md:text-base">
          {[
            "Interesse tonen & aanmelding via Defensie",
            "Kennismakingsdag & AMOL-start",
            "Keuringen & fysieke voorselectie",
            "Elementaire Commando Opleiding (ECO)",
            "Inzet als operationeel commando",
          ].map((step, i) => (
            <li key={i}>
              <span className="absolute left-[-9px] top-[5px] w-3 h-3 bg-yellow rounded-full" />
              {step}
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 md:px-10 max-w-5xl mx-auto text-left border-t border-yellow">
        <h2 className="text-yellow text-2xl md:text-3xl font-secondary uppercase tracking-widest mb-6">
          Veelgestelde Vragen
        </h2>
        <div className="space-y-6">
          {[
            {
              q: "Hoe zwaar is de ECO écht?",
              a: "De ECO is ontworpen om je fysiek én mentaal te breken. Slechts een klein percentage haalt het. Maar met de juiste voorbereiding vergroot je je kansen aanzienlijk.",
            },
            {
              q: "Kan ik dit programma volgen naast werk of school?",
              a: "Ja. Ons programma is intensief maar flexibel — je traint op eigen tijd, met duidelijke doelen en progressie.",
            },
            {
              q: "Wat als ik nog twijfel of ik geschikt ben?",
              a: "Twijfel is normaal. Onze training laat je precies ervaren wat je kunt verwachten en helpt je met die mentale beslissing.",
            },
          ].map((faq, i) => (
            <div key={i}>
              <h3 className="text-yellow font-semibold text-lg mb-2">
                {faq.q}
              </h3>
              <p className="text-gray-300 font-light">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      {showStickyCTA && (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-yellow text-black px-4 py-3 flex justify-between items-center shadow-md">
          {/* Klaar voor (links) */}
          <span className="font-bold tracking-wide uppercase text-sm">
            Klaar voor?
          </span>

          {/* X en Button (rechts) */}
          <div className="flex items-center gap-2">
            <Link to="/pricing">
              <button className="bg-black text-yellow font-bold py-1.5 px-3 text-sm rounded hover:bg-yellow hover:text-black border border-black transition-all">
                Bekijk Programma
              </button>
            </Link>
            <button
              onClick={() => setShowStickyCTA(false)}
              className="text-black hover:text-gray-700 font-bold text-xl"
              aria-label="Sluiten"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default KorpsCommandoTroepen;
