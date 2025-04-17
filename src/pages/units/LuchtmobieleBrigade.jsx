import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SubNav from "../../components/SubNav";

const lmbSpecialisaties = [
  {
    title: "Specialisaties & Doorgroeimogelijkheden",
    image: "/img/luchtmobiel-doorgroei.jpg",
    objectPosition: "object-[center_40%]",
    content: `Binnen 11 Luchtmobiele Brigade zijn er volop mogelijkheden om je verder te specialiseren of door te groeien naar zwaardere rollen. Na het behalen van je rode baret begin je als luchtmobiel infanterist, maar afhankelijk van je inzet, capaciteiten en ambities kun je doorgroeien naar o.a.:
  
  - Pathfinder: Vooruitsturende eenheden die landing zones verkennen, markeren en tactisch voorbereiden voor helikopterinzet.
  - Sniper of Verkenner: Gericht op stealth, observatie en precisieoptreden in kleine zelfstandige teams.
  - Medic: Gevechtsverpleger die zelfstandig medische hulp verleent in het veld.
  - JTAC: Joint Terminal Attack Controller — specialist in het coördineren van luchtsteun vanuit de grond.
  - Air Assault Instructeur: Training geven in het tactisch inzetten van eenheden via helikopters.
  
  Daarnaast is er ruimte voor:
  
  - Internationale samenwerking: Via uitzendingen, trainingen of de Division Schnelle Kräfte (DSK) werk je intensief samen met buitenlandse eenheden.
  - Overstap naar special forces: Ervaren luchtmobiele militairen kunnen geselecteerd worden voor de opleiding tot commando (KCT) — mits ze voldoen aan de vereisten. De AMOL vormt hiervoor een stevige basis.
  
  Deze doorgroeimogelijkheden vragen discipline, betrouwbaarheid onder druk en de wil om jezelf te blijven ontwikkelen — fysiek, mentaal en tactisch.`,
  },
];

const luchtmobielAccordionData = [
  {
    title: "Ontstaan & Missie",
    image: "/img/lmb/ontstaan.jpeg",
    objectPosition: "bottom",
    content:
      "De 11 Luchtmobiele Brigade is een snel inzetbare infanterie-eenheid van de Koninklijke Landmacht. De eenheid werd opgericht in 1992 en is gespecialiseerd in luchtverplaatsbare operaties. Militairen van deze brigade worden via helikopters of vliegtuigen direct ingezet in gebieden waar snelheid en mobiliteit cruciaal zijn. De brigade vormt samen met het Korps Mariniers de Nederlandse bijdrage aan de snelle interventiemacht van de NAVO.",
  },
  {
    title: "Inzet & Specialisaties",
    image: "/img/lmb/inzet.jpg",
    objectPosition: "center",
    content:
      "De Luchtmobiele Brigade wordt wereldwijd ingezet voor missies waarbij snelheid en flexibiliteit essentieel zijn — zoals humanitaire operaties, evacuaties en gevechtsinzet. De eenheid opereert vaak in kleine groepen en is getraind op snel reageren in complexe omstandigheden. Luchtmobiel optreden vraagt om fysieke weerbaarheid, mentale veerkracht en nauwe samenwerking.",
  },
  {
    title: "Structuur & Locaties",
    image: "/img/lmb/locatie.jpg",
    objectPosition: "center",
    content:
      "De 11 Luchtmobiele Brigade is gestationeerd op twee hoofdlocaties: de Oranjekazerne in Schaarsbergen en de Johan Willem Frisokazerne in Assen. De brigade bestaat uit infanteriecompagnieën, ondersteunende gevechtseenheden en logistieke afdelingen. Voor luchtverplaatsing werkt de eenheid nauw samen met de Koninklijke Luchtmacht, met inzet van transporthelikopters en vliegtuigen.",
  },
  {
    title: "Keuring & Slagingskans",
    image: "/img/lmb/keuring.webp",
    objectPosition: "center",
    content:
      "Toelating tot de Luchtmobiele Brigade begint met de algemene keuring van Defensie. Na goedkeuring volg je de AMOL-opleiding (Algemene Militaire Opleiding Landmacht) met een luchtmobiel profiel. Deze opleiding is fysiek en mentaal uitdagend, met nadruk op duurvermogen, groepsdruk en het functioneren onder belasting. Ongeveer 40–50% van de kandidaten rondt de opleiding succesvol af.",
  },
  {
    title: "Fysieke Eisen",
    image: "/img/lmb/fysiek.webp",
    objectPosition: "center",
    content:
      "Om toegelaten te worden, moet je voldoen aan minimale fysieke eisen zoals:\n\n- 6 of meer pull-ups\n- 30 sit-ups in 2 minuten\n- 2.800 meter hardlopen in 12 minuten\n- 100 meter zwemmen met kleding\n\nDaarbovenop wordt je getest op het vermogen om gewicht te dragen over langere afstanden, uithoudingsvermogen onder groepsdruk en mentale weerbaarheid. Teamwork speelt een grote rol in de selectie en opleiding.",
  },
  {
    title: "Carrièrepad & Doorstroom",
    image: "/img/lmb/pathfinders.jpg",
    objectPosition: "top",
    content:
      "Na het afronden van de opleiding start je als luchtmobiele infanterist. Vanuit deze basisrol kun je doorgroeien naar leidinggevende functies of deelnemen aan aanvullende trainingen en cursussen. Doorstroom naar andere onderdelen binnen Defensie is ook mogelijk — zoals het Korps Commandotroepen (KCT), de Koninklijke Luchtmacht of internationale eenheden. Specialisaties en doorgroei worden verder toegelicht onderaan deze pagina.",
  },
  {
    title: "Voorbereiding & Uitvalrisico",
    image: "/img/lmb/barret.jpeg",
    objectPosition: "top",
    content:
      "De luchtmobiele opleiding vraagt meer dan alleen motivatie. Fysieke achterstand, blessures door overbelasting en onderschatting van mentale druk zorgen voor veel uitval. Een gestructureerde voorbereiding — met aandacht voor conditie, herstel, krachtuithouding en samenwerken — is essentieel voor wie deze stap serieus neemt.",
  },
];

const lmbVeelgesteldevragen = [
  {
    title: "Is luchtmobiel net zo zwaar als het KCT?",
    content:
      "Nee. De opleiding en selectie bij 11 Luchtmobiele Brigade zijn fysiek zwaar en mentaal veeleisend, maar minder extreem dan het traject van het Korps Commandotroepen. Dat neemt niet weg dat je moet beschikken over een uitstekende conditie, discipline, en de mentale capaciteit om onder druk te functioneren. Verwacht geen gemak — alleen een andere vorm van intensiteit.",
  },
  {
    title: "Is dit programma ook geschikt voor vrouwen?",
    content:
      "Zeker. Steeds meer vrouwen ronden de luchtmobiele opleiding succesvol af. Het traject stelt dezelfde eisen aan iedereen — ongeacht geslacht. Dit programma focust op functionele kracht, uithoudingsvermogen, herstel en mentale weerbaarheid. Vrouwen zijn volwaardig inzetbaar binnen de eenheid, mits ze voldoen aan de standaard — net als ieder ander.",
  },
  {
    title: "Hoe combineer ik training met werk of school?",
    content:
      "De voorbereiding is flexibel op te bouwen en zelfstandig uit te voeren. Elke week heb je duidelijke trainingsdoelen, maar het is aan jou om je tijd goed te plannen. Verwacht wel een hoge mate van consistentie — de opleiding vraagt straks ook om discipline naast slaaptekort, groepsdruk en fysieke vermoeidheid. Hoe beter je nu leert plannen, hoe sterker je instroom wordt.",
  },
  {
    title: "Wat als ik twijfel of ik geschikt ben?",
    content:
      "Twijfel is normaal — zeker als je iets aangaat dat groter is dan jezelf. De enige manier om daarachter te komen is door actie te ondernemen. Een gerichte voorbereiding helpt je testen waar je staat: fysiek, mentaal en qua mindset. Niet iedereen hoeft militair te worden — maar als het in je hoofd speelt, verdien je het om er serieus achter te komen of dit bij je past.",
  },
  {
    title: "Ik sport al — waarom zou ik dit nodig hebben?",
    content:
      "Zelf trainen is goed. Maar luchtmobiel vraagt om specifieke vaardigheden: lopen met bepakking, presteren onder groepsdruk, herstel onder vermoeidheid, werken binnen hiërarchie. Een doelgericht trainingsplan voorkomt overbelasting, leert je omgaan met belasting, en bouwt vertrouwen op vóór je begint. De AMOL is geen plek om dingen nog uit te zoeken — dat doe je nu.",
  },
  {
    title: "Wat leer je tijdens de AMOL voor luchtmobiel?",
    content:
      "De AMOL (Algemene Militaire Opleiding Landmacht) met luchtmobiel profiel duurt gemiddeld 24 weken. Je leert onder andere militair gedrag, kaartlezen, schieten, marsen met bepakking, samenwerken onder druk, camoufleren, slaapdeprivatie en basisveldhandelingen. Richting het einde van de opleiding volgen luchtmobiele veldoefeningen met helikopterinzet. Zowel fysiek als mentaal vraagt dit traject alles van je. Een goede voorbereiding is geen luxe — het is noodzakelijk.",
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
          src="/img/eenheden/lmb_wide.jpg"
          alt="Luchtmobiele Brigade"
          className="absolute inset-0 w-full h-full object-cover object-[center_80%] scale-110"
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

      {/* Subnavigatie */}

      <SubNav />
      {/* Intro */}
      <section className="bg-[#0a0a0a] py-16 px-6 md:px-10 lg:px-20 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="flex-shrink-0 flex items-center justify-center h-[160px] md:h-[220px]">
            <img
              src="/img/eenheden/lmb_embleem.png"
              alt="Luchtmobiele Embleem"
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="border-l-[3px] border-yellow pl-6">
            <h2 className="text-yellow text-2xl md:text-4xl font-secondary uppercase tracking-widest mb-4">
              Wat is 11 Luchtmobiele Brigade?
            </h2>
            <p className="text-gray-300 font-light leading-relaxed text-base md:text-lg">
              Na de val van de Berlijnse Muur in 1989 veranderde de wereldwijde
              veiligheidssituatie ingrijpend. Nederland zag de noodzaak voor een
              snel inzetbare eenheid die wereldwijd flexibel kon opereren binnen
              het volledige geweldsspectrum. Dit leidde in 1992 tot de
              oprichting van 11 Luchtmobiele Brigade. Deze brigade is een
              hoogwaardige infanterie-eenheid van de Koninklijke Landmacht,
              gespecialiseerd in snelle inzet via helikopters of
              transportvliegtuigen. De nadruk ligt op snelheid, wendbaarheid en
              het opereren in kleine, zelfstandige teams – vaak diep achter
              vijandelijke linies.
              <br className="hidden md:block" />
              <br />
              Als luchtmobiel militair word je opgeleid om langdurig te
              presteren onder fysieke en mentale druk. Je traint intensief op
              uithoudingsvermogen, oriëntatievermogen en samenwerking onder
              stress. De missies zijn uiteenlopend – van gevechtsoperaties tot
              humanitaire inzet – maar vragen altijd een hoog niveau van
              discipline, fitheid en paraatheid.{" "}
            </p>
          </div>
        </div>
      </section>

      {/* Accordion */}
      <section className="px-4 md:px-10 max-w-5xl mx-auto py-16 space-y-4">
        {luchtmobielAccordionData.map((item, index) => {
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
                  className="w-full max-h-[300px] rounded-md shadow-md object-cover"
                  style={{ objectPosition: item.objectPosition || "center" }}
                />
              </div>
            </div>
          );
        })}
      </section>

      {/* LMB specialisaties*/}
      <section className="px-4 md:px-10 max-w-5xl mx-auto pb-16">
        <h2 className="text-yellow text-2xl md:text-3xl font-secondary uppercase tracking-widest mb-6">
          Specialisaties binnen de Luchtmobiele brigade
        </h2>
        {lmbSpecialisaties.map((item, index) => (
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
            Luchtmobiel Voorbereiding
          </p>
          <h3 className="text-3xl md:text-4xl font-bold tracking-wide mb-3">
            Wil je dit echt, dan moet je voorbereid starten.
          </h3>
          <p className="text-base md:text-lg mb-6">
            De luchtmobiele opleiding is fysiek zwaar en mentaal veeleisend. Eén
            poging, geen ruimte voor gokken. Dit programma helpt je gericht
            toewerken naar een sterke en realistische start.{" "}
            <br className="hidden md:block" />
            <br />
            Ook steeds meer vrouwen bewijzen dat ze hier thuishoren.
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
            Je wilt deel uitmaken van een snelle, internationale
            interventie-eenheid die optreedt onder druk.
          </li>
          <li>
            Je zoekt niet alleen fysieke uitdaging, maar ook teamverband, ritme
            en mentale groei.
          </li>
          <li>
            Je wilt niet twijfelend beginnen aan de AMOL — maar voorbereid,
            hersteld en met een sterk fundament.
          </li>
          <li>
            Je weet dat snelheid, samenwerking en draagvermogen net zo
            belangrijk zijn als brute kracht.
          </li>
          <li>
            Je bent vrouw of man — en klaar om jezelf te bewijzen in een
            omgeving waar inzet zwaarder telt dan geslacht.
          </li>
          <li>
            Je neemt deze kans serieus en kiest voor gerichte opbouw in plaats
            van 'even kijken of je het haalt'.
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
            "Voorbereiding — fysiek",
            "Oriëntatie en aanmelding via Defensie",
            "Kennismakingsdag en keuringen",
            "Start van de AMOL met luchtmobiel profiel",
            "Afronding luchtmobiele opleiding & toewijzing eenheid",
            "Inzet als luchtmobiel militair",
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

        {lmbVeelgesteldevragen.map((item, index) => {
          const isOpen =
            activeIndex === index + luchtmobielAccordionData.length;
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
                    isOpen ? null : index + luchtmobielAccordionData.length
                  )
                }
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
                <p className="whitespace-pre-line text-gray-300 font-light leading-relaxed text-sm md:text-base">
                  {item.content}
                </p>
              </div>
            </div>
          );
        })}
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
