import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SubNav from "../../components/SubNav";

const kctSpecialisaties = [
  {
    title: "Speciale Inzetmethodes",
    content:
      "Binnen het KCT zijn er drie operationele inzetvormen waaraan commando’s zich kunnen specialiseren:\n\n- Air (vrije val): Operaties op grote hoogte met parachutesprongen (HALO/HAHO). Operators springen ongezien vanuit vliegtuigen tot op 10 km hoogte met zuurstofmaskers en zware bepakking.\n\n- Mountain (OBT): Opereren in extreem bergachtig terrein. Commando’s leren klimmen, abseilen, overleven en tactisch optreden in sneeuw, rotsen en op grote hoogte.\n\n- Water (combat diver): Infiltreren via rivieren, meren of havens. Zij zijn getraind in gesloten duiksystemen, gevechtszwemmen en onopvallend verplaatsen onder water.",
  },
  {
    title: "Individuele Specialisaties",
    content:
      "Elke commandoploeg beschikt over specialisten met unieke functies. Na de voortgezette opleiding kunnen operators geselecteerd worden voor:\n\n- Sniper: Precisie-optreden op afstanden tot 2 km. Getraind in observatie, camouflage en stealth-operaties.\n- Demspec (Demolition Specialist): Werkt met springstoffen en voert precisie-sabotage uit.\n- Comspec (Communicatiespecialist): Zorgt voor veilige en langeafstand communicatie onder alle omstandigheden.\n- Medic: Verleent geavanceerde medische hulp op het slagveld, tot 72 uur zelfstandig opereren met gewonden.\n\nDeze opleidingen zijn fysiek en cognitief zeer zwaar en enkel voorbehouden aan operators die zich langdurig bewezen hebben.",
  },
];

const kctAccordionData = [
  {
    title: "Ontstaan & Missie",
    image: "/img/kct.webp",
    objectPosition: "object-[center_20%]",
    content:
      "Het Korps Commandotroepen (KCT) is de Special Forces-eenheid van de Koninklijke Landmacht. Opgericht in 1942 en geïnspireerd door de Britse commando's, heeft het KCT zich ontwikkeld tot een elite-eenheid gespecialiseerd in operaties onder de zwaarste omstandigheden. Het motto 'Nunc aut Nunquam' — Nu of nooit — weerspiegelt de altijd-paraate en doortastende aard van het korps. Het KCT is wereldwijd inzetbaar voor specialistische operaties, vaak in het diepste geheim.",
  },
  {
    title: "Inzet & Specialisaties",
    image: "/img/kct.webp",
    objectPosition: "object-top",
    content:
      "Het KCT voert drie hoofdtaken uit binnen het domein van Speciale Operaties:\n\n- **Direct Action (DA):** snelle, kleinschalige gevechtsoperaties in vijandig gebied zoals uitschakelen, ontvoeren of bevrijden.\n- **Special Reconnaissance (SR):** inlichtingen verzamelen diep in vijandelijk gebied, vaak zonder ontdekt te worden.\n- **Military Assistance (MA):** het opleiden en begeleiden van (buitenlandse) partnereenheden, eventueel tot in actie.\n\nOperators kunnen zich verder specialiseren als Sniper, JTAC, Medic, Mountain Leader of Combat Diver. Elke ploeg heeft daarnaast specialisten voor bergachtig terrein, onderwaterinzet of parachutesprongen van grote hoogte.",
  },
  {
    title: "Structuur & Locaties",
    image: "/img/kct.webp",
    objectPosition: "object-top",
    content:
      "Het KCT is gevestigd op de Engelbrecht van Nassaukazerne in Roosendaal. De eenheid bestaat uit operationele squadrons — Commandotroepencompagnieën (Cotrcie) — en ondersteunende afdelingen. Operators werken in kleine teams die volledig zelfstandig moeten kunnen opereren onder extreme omstandigheden. Vertrouwelijkheid, precisie en flexibiliteit zijn kernwaarden binnen deze organisatie.",
  },
  {
    title: "Keuring & Slagingskans",
    image: "/img/kct.webp",
    objectPosition: "object-top",
    content:
      "De weg naar het KCT begint met een kennismakingsdag, fysieke testen en een persoonlijk advies. Burgers moeten eerst de AMOL (Algemene Militaire Opleiding Luchtmobiel) afronden. Daarna volgt de Vooropleiding (VO) met nadruk op velddienst, kaartlezen, fysieke training en groepsdiscipline.\n\nNa 8 weken VO start de **Elementaire Commando Opleiding (ECO)**: 8 weken vol fysieke afmatting, mentale druk en extreme omstandigheden. De ECO eindigt met ‘De Afmatting’: 200 km te voet in 5 dagen. Slechts 8–15% van de kandidaten slaagt.",
  },
  {
    title: "Fysieke Eisen",
    image: "/img/kct.webp",
    objectPosition: "object-top",
    content:
      "Om kans te maken op toelating moet je beschikken over:\n\n- Minimaal 10 pull-ups\n- Minimaal 30 sit-ups in 2 minuten\n- 3.000 meter hardlopen in 12 minuten\n- Voltooien van een hindernisbaan binnen tijdslimiet\n- Navigatietocht met bepakking\n\nDe nadruk ligt daarnaast op herstelvermogen, stressbestendigheid, doorzettingsvermogen en teamwork. De opleiding test zowel fysieke kracht als mentale hardheid — in combinatie met vermoeidheid, slaapgebrek en besluitvorming onder druk.",
  },
  {
    title: "Carrièrepad & Special Forces",
    image: "/img/kct.webp",
    objectPosition: "object-top",
    content:
      "Na het behalen van de groene baret begint de **Voortgezette Commando Opleiding (VCO)** van 12 maanden. Hier leer je de volledige basis om inzetbaar te worden binnen een commandoploeg:\n\n- Special Reconnaissance & Direct Action\n- Combat Life Saver (CLS)\n- Vrije val opleiding (BOVV)\n- Optreden in bergen, stedelijk terrein en water\n- Helikopterinzet & voertuigoptreden\n\nNa de VCO volg je een van de 4 **individuele specialisaties (I-spec):**\n\n- **Demspec:** specialist in gebruik van springstoffen, IED-herkenning en precisieontploffingen\n- **Comspec:** specialist in tactische communicatie, apparatuur en noodreparaties\n- **Medic:** getraind voor traumaopvang, medische handelingen en 72 uur stabilisatie\n- **Sniper:** training in camoufleren, observeren en uitschakelen op tot 2 km afstand\n\nDaarnaast kan een operator deel uitmaken van een van de 3 inzetspecialisaties:\n\n- **Waterploeg:** operaties onder/over water met duikapparatuur\n- **Bergploeg:** operaties in extreme berggebieden wereldwijd\n- **Airploeg:** parachutisten met HALO/HAHO inzet tot 10 km hoogte\n\nDoorstroming naar M-Squadron (antiterreur), instructeursrollen of internationale Special Forces behoort tot de mogelijkheden — afhankelijk van prestatie en ervaring.",
  },
  {
    title: "Voorbereiding & Realiteit",
    image: "/img/kct.webp",
    objectPosition: "object-top",
    content:
      "De selectieprocedure van het KCT laat geen ruimte voor improvisatie. Uitval vindt vaak al in de eerste weken plaats — door blessures, mentale blokkades of gebrek aan voorbereiding. Alleen wie structureel heeft getraind op kracht, uithoudingsvermogen, herstel en besluitvorming onder stress, maakt kans om de volledige opleiding af te ronden. Wie het haalt, behoort tot een zeer select gezelschap.",
  },
  {
    title: "Voortgezette Commando Opleiding (VCO)",
    content:
      "Na het succesvol afronden van de ECO is een operator nog niet volledig inzetbaar. De VCO (Voortgezette Commando Opleiding) duurt ongeveer 12 maanden. In deze periode leert de commando:\n\n- Urban warfare (SOUT)\n- Bergoptreden (OBT)\n- Wateroptreden (OWG)\n- Helikopteroptreden\n- Combat Life Saver\n- Basistraining vrije val (BOVV)\n\nDe VCO bereidt operators voor op alle vormen van inzet: heimelijk, zelfstandig en onder zware omstandigheden wereldwijd. Pas na afronding van de VCO word je volledig operationeel opgenomen in een commando-ploeg.",
  },
];

const kctVeelgesteldevragen = [
  {
    q: "Hoe zwaar is de ECO écht?",
    a: "De Elementaire Commando Opleiding (ECO) staat bekend als een van de zwaarste trajecten binnen Defensie. De fysieke en mentale druk is structureel — het is ontworpen om te breken, niet te motiveren. Slechts een klein percentage haalt het. Maar wie zich tijdig en doelgericht voorbereidt, vergroot niet alleen de overlevingskans — maar de kans om echt te presteren.",
  },
  {
    q: "Kan ik trainen naast school of werk?",
    a: "Ja, maar het vereist planning, discipline en prioriteit. De voorbereiding is flexibel op te bouwen, maar vraagt structurele inzet. Je traint op je eigen tijd — zolang je de lat serieus neemt. Als je het combineert met andere verplichtingen, moet je dus keuzes durven maken. De realiteit is: dit past niet in een 'even kijken of het lukt'-schema.",
  },
  {
    q: "Wat als ik nog twijfel of ik geschikt ben?",
    a: "Twijfel is normaal — vooral bij iets dat zó groot is. Maar uiteindelijk ontdek je pas wat je in je hebt door het aan te gaan. Een serieuze voorbereidingstraject confronteert je met je zwaktes en laat je groeien in wat nodig is. Niet iedereen hoeft commando te worden — maar als jij het overweegt, verdien je het om goed te testen of je die weg echt wilt bewandelen.",
  },
  {
    q: "Is dit alleen voor mannen?",
    a: "Nee. Hoewel het KCT op dit moment nog geen vrouwelijke operatoren kent, staat de deur niet gesloten. De selectie stelt dezelfde eisen aan iedereen — en wordt niet aangepast. Ben jij vastberaden genoeg om geschiedenis te schrijven? Dan is de voorbereiding niet anders, maar des te belangrijker.",
  },
  {
    q: "Wat maakt deze voorbereiding anders dan zelf trainen?",
    a: "Zelf trainen is goed. Gerichte voorbereiding is beter. Het verschil zit in structuur, testmomenten, herstelopbouw en mentale druk. Een opbouwend traject helpt je energie richten, voortgang meten en obstakels herkennen voor het te laat is. De ECO is geen plek om fouten te corrigeren — dat gebeurt ervoor.",
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
          src="/img/eenheden/kct.webp"
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

      {/* Subnavigatie */}

      <SubNav />

      {/* Intro */}
      <section className="bg-[#0a0a0a] py-16 px-6 md:px-10 lg:px-20 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Embleem links van de tekst */}
          <div className="flex-shrink-0 flex items-center justify-center h-[160px] md:h-[220px]">
            <img
              src="/img/eenheden/kct-embleem.svg"
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
              Het Korps Commandotroepen (KCT) is de Special Operations Force van
              de Koninklijke Landmacht. De eenheid voert wereldwijd
              specialistische operaties uit, vaak onder strikte geheimhouding en
              in hoog-risico-gebieden. Commandotroepen worden ingezet voor
              verkenningen, sabotage, precisieacties en het ondersteunen van
              buitenlandse eenheden in vijandig gebied.
              <br className="hidden md:block" />
              <br />
              Toelating tot het KCT is een van de zwaarste trajecten binnen
              Defensie. Kandidaten worden geselecteerd op fysieke kracht,
              mentale weerbaarheid, uithoudingsvermogen en het vermogen om
              zelfstandig te opereren onder druk. Alleen wie alle fasen van de
              selectie en opleiding doorstaat, mag zich uiteindelijk commando
              noemen.
            </p>
          </div>
        </div>
      </section>

      {/* Accordion */}
      <section className="px-4 md:px-10 max-w-5xl mx-auto py-16 space-y-4">
        {kctAccordionData.map((item, index) => {
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

      {/* KCT specialisaties*/}
      <section className="px-4 md:px-10 max-w-5xl mx-auto pb-16">
        <h2 className="text-yellow text-2xl md:text-3xl font-secondary uppercase tracking-widest mb-6">
          Specialisaties binnen het KCT
        </h2>
        {kctSpecialisaties.map((item, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-yellow font-semibold text-lg mb-2">
              {item.title}
            </h3>
            <p className="text-gray-300 font-light text-sm md:text-base whitespace-pre-line">
              {item.content}
            </p>
          </div>
        ))}
      </section>
      {/* CTA */}
      <section className="relative bg-yellow text-black py-12 my-10 px-6 text-center shadow-lg overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase text-xs tracking-widest mb-2 font-bold">
            Special Forces Voorbereiding
          </p>
          <h3 className="text-3xl md:text-4xl font-bold tracking-wide mb-3">
            Eén kans. Eén selectie. Zorg dat je klaar bent.
          </h3>
          <p className="text-base md:text-lg mb-6">
            De weg naar het KCT is geen traject om 'wel te proberen'. Je krijgt
            geen tweede kans — je moet sterk, voorbereid en gefocust starten.
            Dit programma is gebouwd om je daar te krijgen, met begeleiding van
            iemand die de lat begrijpt.
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
            Je ambieert een plek binnen het Korps Commandotroepen maar weet niet
            waar je voorbereiding moet beginnen.
          </li>
          <li>
            Je hebt al eerder een poging gewaagd, maar liep vast tijdens de
            keuring of ECO.
          </li>
          <li>
            Je wilt niet afwachten of je het haalt — je wilt doelgericht
            toewerken naar je selectie.
          </li>
          <li>
            Je zoekt meer dan alleen fysieke training. Je zoekt structuur,
            mentale druk en begeleiding richting iets dat telt.
          </li>
          <li>
            Je neemt deze kans serieus. Eén moment, één selectie — en je wil er
            alles aan doen om klaar te zijn.
          </li>
          <li>
            Je bent vrouw en vastberaden om het onmogelijke waar te maken —
            misschien wel de eerste Nederlandse vrouwelijke commando ooit.
          </li>
        </ul>
      </section>

      {/* Route */}
      <section className="bg-[#101010] py-16 px-6 md:px-10 max-w-5xl mx-auto text-left border-t border-yellow">
        <h2 className="text-yellow text-2xl md:text-3xl font-secondary uppercase tracking-widest mb-6">
          Jouw route naar het Korps Commandotroepen
        </h2>
        <ol className="relative border-l border-yellow pl-6 space-y-6 text-gray-300 font-light text-sm md:text-base">
          {[
            "Serieuze voorbereiding — fysiek en mentaal",
            "Oriëntatie en aanmelding via Defensie",
            "Kennismakingsdag en toelating tot de AMOL",
            "Militaire keuringen en fysieke voorselectie",
            "Start van de Elementaire Commando Opleiding (ECO)",
            "Afronding en inzet als operationeel commando",
          ].map((step, i) => (
            <li key={i}>
              <span className="absolute left-[-9px] top-[5px] w-3 h-3 bg-yellow rounded-full" />
              {step}
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ Accordion */}
      <section className="px-4 md:px-10 max-w-5xl mx-auto py-16 space-y-4 border-t border-yellow">
        <h2 className="text-yellow text-2xl md:text-3xl font-secondary uppercase tracking-widest mb-6">
          Veelgestelde Vragen
        </h2>

        {kctVeelgesteldevragen.map((item, index) => {
          const isOpen = activeIndex === index + kctAccordionData.length;
          return (
            <div
              key={index}
              className={`border border-yellow/20 rounded-lg transition-all duration-300 ${
                isOpen ? "bg-[#111111] border-yellow" : "bg-[#0a0a0a]"
              }`}
            >
              <button
                onClick={() =>
                  setActiveIndex(
                    isOpen ? null : index + kctAccordionData.length
                  )
                }
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <span className="text-yellow font-secondary text-base md:text-lg tracking-widest uppercase">
                  {item.q}
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
                <p className="whitespace-pre-line text-gray-300 font-light leading-relaxed text-sm md:text-base">
                  {item.a}
                </p>
              </div>
            </div>
          );
        })}
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
