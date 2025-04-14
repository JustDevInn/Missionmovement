import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const accordionData = [
  {
    title: "Ontstaan & Missie",
    image: "/img/luchtmobiel.jpg",
    objectPosition: "object-[center_20%]",
    content:
      "De 11 Luchtmobiele Brigade is een snel inzetbare eenheid van de Koninklijke Landmacht, opgericht in 1992. De eenheid is gespecialiseerd in luchtverplaatsbare operaties en vormt samen met het Korps Mariniers de Nederlandse bijdrage aan de snelle interventiemacht van de NAVO.",
  },
  {
    title: "Inzet & Specialisaties",
    image: "/img/luchtmobiel.jpg",
    objectPosition: "object-top",
    content:
      "De brigade wordt ingezet voor nationale en internationale missies waarbij snelheid, precisie en mobiliteit cruciaal zijn. Specialisaties zijn o.a. pathfinder, medic, JTAC, sniper, verkenner en air assault.",
  },
  {
    title: "Structuur & Locaties",
    image: "/img/luchtmobiel.jpg",
    objectPosition: "object-top",
    content:
      "De 11 Luchtmobiele Brigade heeft kazernes in Schaarsbergen en Assen. De eenheid bestaat uit infanteriecompagnieën, ondersteunende eenheden en helikoptercapaciteit via samenwerking met de luchtmacht.",
  },
  {
    title: "Keuring & Slagingskans",
    image: "/img/luchtmobiel.jpg",
    objectPosition: "object-top",
    content:
      "De AMOL-opleiding voor luchtmobiel is fysiek zwaar. Na de algemene keuring volg je een luchtmobiele AMOL waarin fysieke en mentale weerbaarheid centraal staan. De slagingskans ligt gemiddeld rond de 40–50%.",
  },
  {
    title: "Fysieke Eisen",
    image: "/img/luchtmobiel.jpg",
    objectPosition: "object-top",
    content:
      "Je moet onder andere voldoen aan:\n- 6+ pull-ups\n- 30 sit-ups in 2 minuten\n- 2.800 meter in 12 minuten\n- 100 meter zwemmen met kledij\n\nDaarnaast moet je presteren onder stress, gewicht dragen en teamwork tonen.",
  },
  {
    title: "Carrièrepad & Doorstroom",
    image: "/img/luchtmobiel.jpg",
    objectPosition: "object-top",
    content:
      "Je kunt doorgroeien naar groepscommandant, instructeur, of doorstromen naar het KCT, Luchtmacht of internationale eenheden. Ook functies als pathfinder of luchtmobiele verkenner behoren tot de opties.",
  },
  {
    title: "Waarom Voorbereiding Essentieel Is",
    image: "/img/luchtmobiel.jpg",
    objectPosition: "object-top",
    content:
      "Fysieke achterstand, blessuregevoeligheid en onderschatting zorgen voor uitval. Mission Movement helpt je met een gefaseerde voorbereiding die je fit, weerbaar en klaar voor inzet maakt.",
  },
];

const LuchtmobieleBrigade = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowStickyCTA(true);
    }, 20000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen pt-20">
      <Helmet>
        <title>11 Luchtmobiele Brigade | Missie & Voorbereiding</title>
        <meta
          name="description"
          content="Alles over de 11 Luchtmobiele Brigade: inzet, keuring en hoe jij je optimaal voorbereidt op deze dynamische eenheid."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <img
          src="/img/luchtmobiel.jpg"
          alt="Luchtmobiele Brigade"
          className="absolute inset-0 w-full h-full object-cover object-center scale-110"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 h-full w-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-yellow text-[32px] md:text-[50px] font-secondary uppercase tracking-widest mb-4">
            11 Luchtmobiele Brigade
          </h1>
          <p className="text-gray-200 max-w-xl font-light text-base md:text-lg">
            De rode baretten van Defensie — snel, licht en altijd inzetbaar.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#0a0a0a] py-16 px-6 md:px-10 lg:px-20 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="flex-shrink-0 flex items-center justify-center h-[160px] md:h-[220px]">
            <img
              src="/img/lmb_embleem.png"
              alt="Luchtmobiele Embleem"
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="border-l-[3px] border-yellow pl-6">
            <h2 className="text-yellow text-2xl md:text-4xl font-secondary uppercase tracking-widest mb-4">
              Wat is 11 Luchtmobiele Brigade?
            </h2>
            <p className="text-gray-300 font-light leading-relaxed text-base md:text-lg">
              Deze brigade is snel, wendbaar en inzetbaar via helikopters of
              vliegtuigen. Je wordt getraind op mobiliteit, samenwerking en
              uithoudingsvermogen. Missies zijn fysiek zwaar en vaak intensief.
              <br className="hidden md:block" />
              <br />
              Mission Movement helpt je voorbereid binnenkomen — niet gokken,
              maar weten waar je aan begint.
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
            Luchtmobiel Voorbereiding
          </p>
          <h3 className="text-3xl md:text-4xl font-bold tracking-wide mb-3">
            Jouw inzet begint hier.
          </h3>
          <p className="text-base md:text-lg mb-6">
            Vergroot je slagingskans bij Luchtmobiel met ons gestructureerde
            trainingsprogramma.
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
          <li>Je wilt deel uitmaken van een snelle interventie-eenheid.</li>
          <li>Je zoekt fysieke uitdaging én kameraadschap.</li>
          <li>Je wilt de AMOL met vertrouwen en kracht starten.</li>
          <li>
            Je wilt tactisch en fysiek voorbereid zijn op missies over de hele
            wereld.
          </li>
        </ul>
      </section>

      {/* Route */}
      <section className="bg-[#101010] py-16 px-6 md:px-10 max-w-5xl mx-auto text-left border-t border-yellow">
        <h2 className="text-yellow text-2xl md:text-3xl font-secondary uppercase tracking-widest mb-6">
          Jouw route naar 11 Luchtmobiele Brigade
        </h2>
        <ol className="relative border-l border-yellow pl-6 space-y-6 text-gray-300 font-light text-sm md:text-base">
          {[
            "Aanmelding via werkenbijdefensie.nl",
            "Voorlichting en sportkeuring",
            "Start AMOL luchtmobiel",
            "Afsluiten luchtmobiele opleiding",
            "Inzet als luchtmobiel militair",
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
              q: "Is luchtmobiel net zo zwaar als KCT?",
              a: "Nee, het is minder extreem, maar nog steeds fysiek pittig. Je moet inzet tonen, discipline hebben en goed kunnen samenwerken.",
            },
            {
              q: "Is dit programma ook geschikt voor vrouwen?",
              a: "Zeker. Veel vrouwen zijn succesvol bij Luchtmobiel. Onze aanpak richt zich op functionele kracht en mentale weerbaarheid — ongeacht geslacht.",
            },
            {
              q: "Hoe train ik naast werk of school?",
              a: "Je volgt onze training zelfstandig. Je hebt elke week duidelijke doelen en richtlijnen, afgestemd op jouw schema.",
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
          <span className="font-bold tracking-wide uppercase text-sm">
            Klaar voor?
          </span>
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

export default LuchtmobieleBrigade;
