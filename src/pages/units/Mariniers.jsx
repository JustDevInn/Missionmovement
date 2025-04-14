import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const accordionData = [
  {
    title: "Ontstaan & Missie",
    image: "/img/spelioladder.jpg",
    content:
      "Het Korps Mariniers, opgericht in 1665, is één van de oudste elite-eenheden ter wereld. Ze zijn gespecialiseerd in amfibische operaties en staan bekend om hun inzet in extreme omstandigheden: jungle, arctisch, bergachtig en stedelijk terrein. Het motto: Qua Patet Orbis — 'Zo wijd de wereld strekt.'",
  },
  {
    title: "Inzet & Specialisaties",
    image: "/img/spelioladder.jpg",
    content:
      "Mariniers worden wereldwijd ingezet voor snelle interventies, humanitaire missies, NAVO-operaties, en beveiliging van kritieke infrastructuur. Specialisaties binnen het korps zijn o.a. scherpschutter, gevechtsinstructeur, verbindingen en medic.",
  },
  {
    title: "Structuur & Locaties",
    image: "/img/spelioladder.jpg",
    content:
      "Hoofdlocaties zijn Doorn en Rotterdam. Eenheden bestaan uit pelotons van 30 man, onderverdeeld in secties. Het korps is onderdeel van de Koninklijke Marine en werkt nauw samen met internationale marine-infanterie-eenheden.",
  },
  {
    title: "Keuring & Slagingskans",
    image: "/img/spelioladder.jpg",
    content:
      "De marinierskeuring is fysiek en mentaal zwaar. Veel kandidaten vallen uit op het lichamelijk onderzoek of de mariniersvaardigheidstoets. Slechts 30–40% van de kandidaten rondt de AMOL (Algemene Militaire Opleiding voor Mariniers) succesvol af.",
  },
  {
    title: "Fysieke Eisen",
    image: "/img/spelioladder.jpg",
    content:
      "Je moet onder andere voldoen aan:\n- 6 pull-ups\n- 25 sit-ups in 2 minuten\n- 2.800 meter in 12 minuten (Coopertest)\n- 100 meter zwemmen met kledij\n\nEen goede voorbereiding op uithoudingsvermogen, kracht, zwemmen en explosieve tests is cruciaal.",
  },
  {
    title: "Carrièrepad & Doorstroom",
    image: "/img/spelioladder.jpg",
    content:
      "Als Mariniersmanschap kun je doorgroeien tot groepscommandant, instructeur, of specialist. Ook overstappen naar o.a. het KCT, Luchtmobiel of buitenlandse eenheden is mogelijk. Officiersroutes zijn beschikbaar via de KMA.",
  },
  {
    title: "Waarom Voorbereiding Essentieel Is",
    image: "/img/spelioladder.jpg",
    content:
      "Veel uitval komt door fysieke achterstand, mentale onderschatting en gebrek aan structuur. Mission Movement helpt jou systematisch voor te bereiden met een 6-weekse aanpak gericht op het echte werk.",
  },
];

const Mariniers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showStickyCTA, setShowStickyCTA] = useState(true);
  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white min-h-screen pt-20">
      <Helmet>
        <title>Korps Mariniers | Missie & Voorbereiding</title>
        <meta
          name="description"
          content="Leer alles over het Korps Mariniers. Structuur, inzet, slagingskans en waarom goede voorbereiding essentieel is."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <img
          src="/img/spelioladder.jpg"
          alt="Spelioladder Mariniers"
          className="absolute inset-0 w-full h-full object-cover object-[center_top] scale-110"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 h-full w-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-yellow text-[32px] md:text-[50px] font-secondary uppercase tracking-widest mb-4">
            Korps Mariniers
          </h1>
          <p className="text-gray-200 max-w-xl font-light text-base md:text-lg">
            Alles wat je moet weten over deze elite-eenheid — van selectie tot
            inzet.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#0a0a0a] py-16 px-6 md:px-10 lg:px-20 max-w-5xl mx-auto">
        <div className="flex items-center gap-6">
          {/* Embleem (tijdelijk Korps Mariniers embleem) */}
          <div className="flex-shrink-0 h-[160px] flex items-center">
            <img
              src="/img/kmarns_embleem.svg"
              alt="Korps Mariniers Embleem"
              className="h-full w-auto object-contain"
            />
          </div>

          {/* Gele streep + content */}
          <div className="border-l-[3px] border-yellow pl-6">
            <h2 className="text-yellow text-2xl md:text-4xl font-secondary uppercase tracking-widest mb-4">
              Wat is het Korps Mariniers?
            </h2>
            <p className="text-gray-300 font-light leading-relaxed text-base md:text-lg">
              Het Korps Mariniers vormt de amfibische infanterie van de
              Koninklijke Marine. Ze worden wereldwijd ingezet voor missies
              onder extreme omstandigheden — op land, vanuit zee, of via
              luchtverplaatsing. Deze eenheid staat bekend om haar fysieke
              kracht, mentale weerbaarheid en kameraadschap. Mariniers zijn geen
              gewone militairen: ze vormen een broederschap waar je bij moet
              horen.
              <br className="hidden md:block" />
              <br />
              Of je nu manschap wilt worden of officier, je stapt een wereld
              binnen waarin alleen de best voorbereiden standhouden.
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
                  className="w-full max-h-[300px] object-cover rounded-md shadow-md"
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
            Exclusief programma
          </p>
          <h3 className="text-3xl md:text-4xl font-bold tracking-wide mb-3">
            Klaar om jouw missie te starten?
          </h3>
          <p className="text-base md:text-lg mb-6">
            Start jouw voorbereiding met ons 6-weekse programma en vergroot je
            kans op succes bij het Korps Mariniers.
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
          <li>Je wilt marinier worden, maar weet niet waar te beginnen.</li>
          <li>Je hebt de keuring geprobeerd maar haakte af.</li>
          <li>Je zoekt structuur in je fysieke voorbereiding.</li>
          <li>Je wilt voorbereid aankomen, niet gokken.</li>
        </ul>
      </section>

      {/* Route */}
      <section className="bg-[#101010] py-16 px-6 md:px-10 max-w-5xl mx-auto text-left border-t border-yellow">
        <h2 className="text-yellow text-2xl md:text-3xl font-secondary uppercase tracking-widest mb-6">
          Jouw route naar het Korps Mariniers
        </h2>
        <ol className="relative border-l border-yellow pl-6 space-y-6 text-gray-300 font-light text-sm md:text-base">
          {[
            "Interesse in dienst nemen",
            "Oriëntatiegesprek & aanmelding",
            "Marinierskeuring (fysiek & mentaal)",
            "Start AMOL opleiding in Rotterdam",
            "Operationele inzet als marinier",
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
              q: "Moet ik al superfit zijn voor ik begin met keuring?",
              a: "Nee, maar zonder gerichte voorbereiding is de kans op uitval groot. Mission Movement helpt je gestructureerd opbouwen.",
            },
            {
              q: "Kan ik dit combineren met school of werk?",
              a: "Ja, het programma is flexibel maar wel intensief. Je bepaalt zelf je tijdstip van trainen — mits je consistent blijft.",
            },
            {
              q: "Wat als ik nog twijfel over mijn keuze?",
              a: "Juist dan is dit programma nuttig. Het geeft je een voorproef van wat je kunt verwachten — fysiek én mentaal.",
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
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-yellow text-black px-6 py-4 flex items-start justify-between shadow-md">
          {/* Content */}
          <div>
            <span className="font-bold tracking-wide uppercase text-sm block mb-1">
              Klaar voor?
            </span>
            <Link to="/pricing">
              <button className="bg-black text-yellow font-bold py-2 px-4 text-sm rounded hover:bg-yellow hover:text-black border border-black transition-all">
                Bekijk Programma
              </button>
            </Link>
          </div>

          {/* Close button */}
          <button
            onClick={() => setShowStickyCTA(false)}
            className="text-black hover:text-gray-700 font-bold text-xl px-2"
            aria-label="Sluiten"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default Mariniers;
