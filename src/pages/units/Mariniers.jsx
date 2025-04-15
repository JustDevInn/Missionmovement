import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const marsofAccordion = [
  {
    title: "Wat is NLMARSOF?",
    content:
      "De Netherlands Maritime Special Operations Forces (NLMARSOF) is de special forces-eenheid binnen het Korps Mariniers. Deze eenheid voert wereldwijd geheime, hoogrisico-operaties uit. Denk aan antiterreuracties, bevrijdingsmissies en verkenningen onder extreme omstandigheden. NLMARSOF werkt vaak samen met internationale special forces en valt onder de hoogste paraatheid binnen Defensie.",
  },
  {
    title: "Mountain Leader",
    content:
      "De Mountain Leader is een marinier die gespecialiseerd is in operaties in bergachtig terrein. Deze opleiding is internationaal erkend en wordt gezien als een van de zwaarste in Europa. Je leert klimmen, abseilen, overleven, en opereren in sneeuw, kou en extreme hoogte. Slechts een kleine groep mariniers slaagt erin deze titel te behalen.",
  },
  {
    title: "Kikvorsman (Combat Diver)",
    content:
      "De kikvorsman is gespecialiseerd in onderwateroperaties, verplaatsing over water en duiken met gesloten systemen. Door het gebruik van speciale apparatuur kunnen zij onder water opereren zonder detecteerbare luchtbellen. De opleiding tot kikvorsman is zwaar: fysiek, technisch én mentaal. Ze voeren operaties uit in kustgebieden, havens, en rivieromgevingen — vaak ongezien en diep achter de linies.",
  },
];

const potomAccordion = [
  {
    title: "Wat is POTOM?",
    content:
      "De Praktische Opleiding tot Officier der Mariniers (POTOM) is de opleiding voor toekomstige officieren van het Korps Mariniers. De opleiding duurt 11 maanden en vindt plaats op de Van Ghentkazerne in Rotterdam, na een selectie en voorbereidende fase via de Koninklijke Militaire Academie (KMA).",
  },
  {
    title: "Wat leer je tijdens de POTOM?",
    content:
      "Tijdens POTOM word je opgeleid tot leidinggevende in zware omstandigheden. Je leert:\n\n- Tactiek en bevelvoering op pelotonsniveau\n- Functioneren onder oorlogssituaties\n- Militaire besluitvorming (OODA-loop, bevelsstructuur)\n- Leiderschap, groepsdynamiek en communicatie\n\nDe nadruk ligt op karakter, mentale kracht en fysieke robuustheid. Je moet een peloton kunnen leiden in stressvolle omstandigheden, met weinig slaap en hoge druk.",
  },
  {
    title: "Voor wie is dit geschikt?",
    content:
      "POTOM is toegankelijk voor kandidaten met minimaal een VWO-, HBO- of WO-diploma. Je moet beschikken over leiderschapskwaliteiten, strategisch inzicht en fysieke paraatheid. De opleiding is zwaarder dan men vaak verwacht — je traint fysiek mee met de troepen, maar draagt daarnaast ook de verantwoordelijkheid van een bevelvoerend militair.",
  },
];

const accordionData = [
  {
    title: "Ontstaan & Missie",
    image: "/img/ontstaan_missie.jpg",
    content:
      "Het Korps Mariniers werd opgericht op 10 december 1665 tijdens de Tweede Engels-Nederlandse Oorlog, op initiatief van raadpensionaris Johan de Witt en admiraal Michiel de Ruyter. Het doel was het creëren van een gespecialiseerde eenheid voor amfibische oorlogsvoering, die zowel op zee als op land effectief kon opereren. Sindsdien heeft het korps deelgenomen aan talloze militaire operaties wereldwijd, variërend van de Slag bij Chatham in 1667 tot recente missies in Afghanistan en Mali. Het motto van het korps, 'Qua Patet Orbis' ('Zo wijd de wereld strekt'), weerspiegelt de wereldwijde inzetbaarheid en het streven naar operationele excellentie onder alle omstandigheden.",
  },
  {
    title: "Inzet & Specialisaties",
    image: "/img/inzet_specialisaties.jpg",
    content:
      "Het Korps Mariniers is een snel inzetbare eenheid die wereldwijd wordt ingezet voor diverse missies, waaronder gevechtsoperaties, vredeshandhaving, humanitaire hulp en terrorismebestrijding. Mariniers zijn getraind om te opereren in uiteenlopende omgevingen zoals stedelijke gebieden, jungles, bergen en arctische gebieden. Binnen het korps bestaan verschillende specialisaties, zoals:\n\n- Scherpschutter (Sniper): Gespecialiseerd in precisieschieten over lange afstanden.\n- Verbindingsofficier (Communicatiespecialist): Verantwoordelijk voor het opzetten en onderhouden van communicatie tijdens operaties.\n- Medic: Biedt medische ondersteuning in het veld.\n- Mountain Leader: Expert in operaties in bergachtig terrein.\n- Kikvorsman: Gespecialiseerd in onderwateroperaties en duiken.\n\nDeze specialisaties stellen het korps in staat om flexibel en effectief te reageren op uiteenlopende operationele uitdagingen. Daarnaast kunnen mariniers zich — na bewezen inzet — verder ontwikkelen binnen de special forces van het korps, zoals NLMARSOF, of doorgroeien tot mountain leader, kikvorsman of instructeur. Deze opleidingen behoren tot de zwaarste trainingen binnen Defensie.",
  },
  {
    title: "Organisatie & Internationale Partners",
    image: "/img/organisatie_internationaal.jpg",
    content:
      "Het Korps Mariniers is onderdeel van de Koninklijke Marine en heeft zijn hoofdkwartier in Den Helder. Belangrijke bases zijn onder andere de Van Ghentkazerne in Rotterdam en de Marinierskazerne in Doorn. De operationele structuur bestaat uit meerdere eenheden, waaronder:\n\n- Maritime Combat Groups (MCGs): De kerngevechtseenheden van het korps.\n- Sea-based Support Group: Verzorgt logistieke ondersteuning tijdens operaties.\n- Netherlands Maritime Special Operations Forces (NLMARSOF): De special forces eenheid binnen het korps, gespecialiseerd in complexe en geheime operaties.\n\nInternationaal werkt het Korps Mariniers nauw samen met buitenlandse eenheden. Sinds 1972 vormt het samen met de Britse Royal Marines de UK/NL Amphibious Force, een gezamenlijke amfibische strijdmacht binnen NAVO-verband. Daarnaast zijn er samenwerkingen met onder andere het Amerikaanse Marine Corps en andere NAVO-partners, wat de interoperabiliteit en gezamenlijke inzetbaarheid versterkt.",
  },
  {
    title: "Keuring & Slagingskans",
    image: "/img/keuring_slagingskans.jpg",
    content:
      "Het selectieproces voor het Korps Mariniers is uiterst streng en bestaat uit meerdere fasen:\n\n1. Medische keuring: Beoordeling van de algemene gezondheid en fysieke geschiktheid.\n2. Psychologisch onderzoek: Evaluatie van mentale weerbaarheid, persoonlijkheid en cognitieve capaciteiten.\n3. Sporttest: Test van fysieke vaardigheden zoals kracht, uithoudingsvermogen en snelheid.\n\nNa succesvolle afronding van deze selecties start de Algemene Militaire Opleiding voor Mariniers (AMOL), een intensieve training van ongeveer 33 weken. De slagingskans is relatief laag; historisch gezien voltooit slechts 30–40% van de kandidaten de opleiding succesvol. Dit onderstreept de hoge eisen en het uitdagende karakter van het traject.",
  },
  {
    title: "Fysieke Eisen",
    image: "/img/fysieke_eisen.jpg",
    content:
      "Kandidaten moeten voldoen aan strikte fysieke eisen om toegelaten te worden tot het Korps Mariniers. Enkele minimale vereisten zijn:\n\n- Coopertest: Minimaal 2.800 meter hardlopen in 12 minuten.\n- Pull-ups: Ten minste 6 correcte pull-ups.\n- Sit-ups: Minimaal 25 sit-ups binnen 2 minuten.\n- Zwemvaardigheid: 100 meter zwemmen met volledige kleding binnen een gestelde tijd.\n\nDeze normen zijn slechts de basis; tijdens de opleiding en operaties worden aanzienlijk hogere prestaties verwacht. Een uitstekende fysieke conditie en voorbereiding zijn essentieel om blessures te voorkomen en de zware training te doorstaan.",
  },
  {
    title: "Opleiding & Voorbereiding",
    image: "/img/opleiding_voorbereiding.jpg",
    content: `De basisopleiding tot marinier heet de Elementaire Militaire Vorming Mariniers (EMV Marns) en vindt plaats op de Van Ghentkazerne in Rotterdam. Deze opleiding duurt ongeveer 33 weken en vormt de ruggengraat van het Korps Mariniers. Je wordt fysiek, mentaal en militair gevormd tot inzetbare marinier.
  
  Inhoud van de opleiding:
  - Fysieke training: Dagelijkse kracht-, duur- en circuittraining gericht op uithoudingsvermogen, belastbaarheid en herstel.
  - Militaire basisvaardigheden: Wapentraining (C7/C8), kaartlezen, exercitie, camouflage, gevechtstechnieken en patrouilles.
  - Overlevingstraining: Opereren met minimale middelen in koude, natte of ruige omgevingen.
  - Veldoefeningen: Meerdere bivakweken, vaak onder zware belasting, koude, slaaptekort en mentale druk.
  - Samenwerking & mentaliteit: Kameradschap, functioneren in groepen, leiderschap en mentale weerbaarheid.
  
  Amfibische training op Texel:
  Een bijzonder onderdeel is de amfibische week op de Joost Dourleinkazerne op Texel. Hier leer je opereren vanuit het water naar het land — een unieke vaardigheid voor mariniers.
  
  Mentale voorbereiding:
  De opleiding is ontworpen om je mentale grenzen te testen:
  - Werken onder slaaptekort
  - Omgaan met fysieke pijn en vermoeidheid
  - Correctie en discipline verwerken
  - Inzicht krijgen in groepsdruk en leiderschap onder stress
  
  Voorbereiding vóór aanvang:
  Veel uitval komt voort uit onderschatting, blessures of gebrek aan structuur. Een goede voorbereiding op:
  - Duurvermogen (Coopertest)
  - Krachtuithouding (pull-ups, sit-ups)
  - Zwemvaardigheid (100m met kleding)
  - Mentale focus en discipline
  
  ...is essentieel om de opleiding te starten én vol te houden.
  
  Samengevat:
  De EMV Marns is één van de zwaarste opleidingen binnen Defensie. Wie onvoorbereid begint, haakt af. Wie doelgericht toewerkt, wordt gevormd tot marinier.`,
  },
  {
    title: "Carrièrepad & Doorstroom",
    image: "/img/carrierepad_doorstroom.jpg",
    content: `Na het behalen van je groene baret start je als marinier der tweede klasse. Binnen het korps bestaan verschillende groeipaden, afhankelijk van inzet, prestaties en persoonlijke ambitie.
  
  Doorgroeimogelijkheden:
  - Gespecialiseerd marinier: Na verloop van tijd kun je je specialiseren als:
    - Sniper (scherpschutter)
    - Medic (gevechtsverpleger)
    - Verbindelaar (ICT/communicatie)
    - Gevechtsinstructeur
    - NLMARSOF (Netherlands Maritime Special Operation Forces)
  
  - Leidinggevende rollen: Je kunt doorgroeien naar:
    - Groepscommandant
    - Instructeur bij de opleiding
    - Pelotonssergeant via de Korporaalsopleiding, waarin leidinggeven centraal staat
  
  - Officier worden: Beschik je over een VWO-, HBO- of WO-diploma? Dan kun je geselecteerd worden voor de POTOM (Praktische Opleiding tot Officier der Mariniers). Deze opleiding van 11 maanden vereist leiderschap onder zware omstandigheden. Als officier geef je leiding aan een peloton, zowel op oefening als tijdens inzet.
  
  - Special Forces: Ervaren mariniers kunnen solliciteren bij NLMARSOF, de special forces-eenheid van het korps. Deze voert geheime operaties, antiterrorismemissies en complexe interventies uit, vaak onder extreme omstandigheden.
  
  Doorstroom buiten het korps:
  Ervaren mariniers kunnen zich later ook ontwikkelen binnen:
  - Korps Commandotroepen (KCT)
  - Internationale eenheden via uitwisseling
  - Politie (AT/DSI), brandweer of speciale diensten
  
  Langetermijncarrière:
  Binnen het Korps Mariniers kun je je blijven ontwikkelen op gebied van logistiek, planning, training, leiderschap of internationale samenwerking. Wie zich blijft bewijzen, blijft groeien.`,
  },
];

const mariniersVeelgesteldevragen = [
  {
    title: "Moet ik al superfit zijn voor ik begin met de keuring?",
    content:
      "Nee. Je hoeft geen topatleet te zijn om te beginnen — maar zonder gerichte voorbereiding is de kans op uitval groot. De meeste kandidaten vallen af omdat ze te laat begonnen zijn of zich enkel fysiek voorbereiden. Mission Movement helpt je stap voor stap sterker worden — fysiek én mentaal — zodat je voorbereid aankomt, niet opgebrand vertrekt.",
  },
  {
    title: "Kan ik dit combineren met school of werk?",
    content:
      "Ja. Het programma is ontworpen met realiteit in het achterhoofd. Je kunt de trainingen uitvoeren op momenten die passen binnen jouw schema — zolang je consistent blijft en de discipline opbrengt. Het vergt toewijding, maar juist dat maakt het waardevol. Dit is geen quick fix, dit is voorbereiding voor een ander soort leven.",
  },
  {
    title: "Wat als ik nog twijfel over mijn keuze?",
    content:
      "Twijfel is normaal. En juist die twijfel maakt dit programma waardevol. Het geeft je een eerlijke inkijk in wat er gevraagd wordt — fysiek, mentaal, en qua mindset. Je ontdekt niet alleen of je het fysiek aankan, maar vooral of je dit écht wilt. Zonder direct een opleiding in te stappen kun je jezelf testen, voelen en groeien.",
  },
  {
    title: "Wat als ik al zelf train — wat voegt dit toe?",
    content:
      "Train je al zelfstandig? Mooi. Maar trainen op eigen kracht is niet hetzelfde als doelgericht toewerken naar een selectie met militaire eisen. Mission Movement geeft je structuur, testmomenten, herstelopbouw en mentale druk — zodat je geen energie verspilt en weet waar je écht staat.",
  },
  {
    title: "Wat gebeurt er als ik uitval of een week mis?",
    content:
      "Uitval is geen falen — het is onderdeel van het proces. In dit programma leer je omgaan met tegenslag, maar ook hoe je herpakt. Je krijgt praktische tools om ritme op te bouwen en je voortgang bij te houden, ook als het even misgaat. Want het gaat niet om perfectie, het gaat om volhouden.",
  },
  {
    title: "Is dit programma alleen voor mensen die marinier willen worden?",
    content:
      "Nee. Dit programma is geschikt voor iedereen die zich serieus wil voorbereiden op een militaire loopbaan binnen het Korps Mariniers, Korps Commandotroepen (KCT) of 11 Luchtmobiele Brigade. Hoewel de basisprincipes van fysieke en mentale voorbereiding hetzelfde zijn, verschilt de aanpak per eenheid. Afhankelijk van jouw doel, stemmen we daar het contact en de inhoud op af — zodat je traint met de juiste focus.",
  },
  {
    title: "Is dit programma ook geschikt voor vrouwen?",
    content:
      "Absoluut. Steeds meer vrouwen kiezen bewust voor een leven vol discipline, fysieke uitdaging en mentale kracht. Voor luchtmobiele eenheden is het inmiddels gebruikelijk dat vrouwelijke kandidaten de selectie halen. Voor het Korps Mariniers en het Korps Commandotroepen is dit nog niet gebeurd — maar dat betekent niet dat het onmogelijk is. Ben jij degene die die grens doorbreekt?\n\nDit programma helpt je fysiek én mentaal groeien met eerlijke feedback, duidelijke opbouw en persoonlijke begeleiding. Het is ontworpen voor iedereen met de mindset om zichzelf te overstijgen — ongeacht geslacht.",
  },
];

const Mariniers = () => {
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
          className="absolute inset-0 w-full h-full object-cover object-bottom scale-110"
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
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Embleem (tijdelijk Korps Mariniers embleem) */}
          <div className="flex-shrink-0 flex items-center justify-center h-[160px] md:h-[220px]">
            <img
              src="/img/eenheden/kmarns_embleem.svg"
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
              Het Korps Mariniers is de amfibische infanterie van de Koninklijke
              Marine. Ze zijn gespecialiseerd in operaties vanuit zee naar land,
              maar ook inzetbaar in de lucht en op het land. Mariniers opereren
              wereldwijd in de zwaarste omstandigheden — van poolgebieden tot
              tropische regenwouden, in conflictgebieden of bij humanitaire
              rampen.
              <br className="hidden md:block" />
              <br />
              Deze eenheid staat bekend om discipline, fysieke kracht, mentale
              weerbaarheid en sterke onderlinge verbondenheid. Of je nu kiest
              voor de rol van manschap of officier: je betreedt een omgeving
              waarin alleen de meest gedreven en goed voorbereide kandidaten
              kunnen slagen.
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

      {/* Special Forces Accordion Rendering */}
      <section className="px-4 md:px-10 max-w-5xl mx-auto pb-16">
        <h2 className="text-yellow text-2xl md:text-3xl font-secondary uppercase tracking-widest mb-6">
          Special Forces binnen het Korps Mariniers
        </h2>
        {marsofAccordion.map((item, index) => (
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
      {/* POTOM Accordion Rendering */}
      <section className="px-4 md:px-10 max-w-5xl mx-auto pb-16">
        <h2 className="text-yellow text-2xl md:text-3xl font-secondary uppercase tracking-widest mb-6">
          Officierenroute: POTOM
        </h2>
        {potomAccordion.map((item, index) => (
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
            Vanuit ervaring
          </p>
          <h3 className="text-3xl md:text-4xl font-bold tracking-wide mb-3">
            Dit is geen training. Dit is een levenskeuze.
          </h3>
          <p className="text-base md:text-lg mb-6">
            Als je iets voelt voor discipline, broederschap en het uiterste uit
            jezelf halen — dan is dit voor jou. Ik help je erbij.
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
            Je voelt dat er méér in je zit dan wat je nu laat zien — en je bent
            klaar om het te bewijzen.
          </li>
          <li>
            Je wilt geen gymprogramma, je wilt een doel. Een reden om elke dag
            op te staan met vuur.
          </li>
          <li>
            Je verlangt naar structuur, discipline en een leven met standaarden
            die ertoe doen.
          </li>
          <li>
            Je bent (bijna) marinier, ex-militair of burger — maar diep
            vanbinnen voel jij dat je gemaakt bent voor meer.
          </li>
          <li>
            Je wil je voorbereiding serieus nemen. Niet gokken. Niet hopen.
            Komen opdagen als professional.
          </li>
          <li>
            Je bent op zoek naar een broederschap. Iets dat je kunt verdienen.
            Iets dat blijft als het zwaar wordt.
          </li>
        </ul>
      </section>
      {/* Route */}
      <section className="bg-[#101010] py-16 px-6 md:px-10 max-w-5xl mx-auto text-left border-t border-yellow">
        <h2 className="text-yellow text-2xl md:text-3xl font-secondary uppercase tracking-widest mb-6">
          Jouw route naar het Korps Mariniers
        </h2>
        <ol className="relative border-l border-yellow pl-6 space-y-6 text-gray-300 font-light text-sm md:text-base">
          {[
            "Serieuze voorbereiding — fysiek en mentaal",
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

      {/* FAQ Accordion */}
      <section className="px-4 md:px-10 max-w-5xl mx-auto py-16 space-y-4 border-t border-yellow">
        <h2 className="text-yellow text-2xl md:text-3xl font-secondary uppercase tracking-widest mb-6">
          Veelgestelde Vragen
        </h2>

        {mariniersVeelgesteldevragen.map((item, index) => {
          const isOpen = activeIndex === index + accordionData.length;
          return (
            <div
              key={index}
              className={`border border-yellow/20 rounded-lg transition-all duration-300 ${
                isOpen ? "bg-[#111111] border-yellow" : "bg-[#0a0a0a]"
              }`}
            >
              <button
                onClick={() =>
                  setActiveIndex(isOpen ? null : index + accordionData.length)
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

export default Mariniers;
