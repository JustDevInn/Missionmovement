import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Container from "../components/layout/Container";

const pageUrl = "https://missionmovement.vercel.app/voorbereiding-defensie";
const ogImage = "https://missionmovement.vercel.app/img/royalmarines.webp";

const focusItems = [
  {
    title: "Fysieke basis",
    text: "Kracht, conditie, mobiliteit en techniek vormen de fundering.",
  },
  {
    title: "Belastbaarheid",
    text: "Je lichaam voorbereiden op volume, impact, herhaling en herstel.",
  },
  {
    title: "Mentale weerbaarheid",
    text: "Leren omgaan met ongemak, druk, onzekerheid en tegenslag.",
  },
  {
    title: "Structuur",
    text: "Niet willekeurig trainen, maar werken met een duidelijke opbouw.",
  },
  {
    title: "Duurzame progressie",
    text: "Sterker worden zonder jezelf onnodig kapot te trainen.",
  },
];

const unitLinks = [
  {
    title: "Korps Mariniers",
    path: "/units/mariniers",
    text: "Voor kandidaten die richting amfibische infanterie en zware mariniersopleiding willen werken.",
  },
  {
    title: "Korps Commandotroepen",
    path: "/units/commandotroepen",
    text: "Voor wie zich wil verdiepen in de route richting het KCT en specialistische voorbereiding.",
  },
  {
    title: "11 Luchtmobiele Brigade",
    path: "/units/luchtmobiel",
    text: "Voor kandidaten richting de rode baretten, snelheid, inzetbaarheid en fysieke basis.",
  },
  {
    title: "Veiligheidsdiensten",
    path: "/units/veiligheidsdiensten",
    text: "Voor politie, brandweer, KMar en andere functies waar voorbereiding onder druk telt.",
  },
];

const faqItems = [
  {
    question: "Hoe bereid ik me fysiek voor op Defensie?",
    answer:
      "Begin met een brede fysieke basis: kracht, conditie, mobiliteit, techniek en herstel. Train niet alleen voor één testmoment, maar bouw aan belastbaarheid zodat je lichaam ook langere periodes van training en vermoeidheid aankan.",
  },
  {
    question: "Zijn de minimale selectie-eisen genoeg?",
    answer:
      "De minimale eisen zijn een startpunt, geen einddoel. Wie alleen traint om de norm te halen, mist vaak de marge die nodig is tijdens opleiding, herhaling en langdurige belasting.",
  },
  {
    question: "Kan Mission Movement helpen als ik nog niet op niveau ben?",
    answer:
      "Ja. Je hoeft nog niet klaar te zijn om te starten. Het belangrijkste is dat je eerlijk kijkt naar waar je nu staat en bereid bent om gestructureerd te werken aan wat nodig is.",
  },
  {
    question: "Is deze voorbereiding alleen voor Defensie?",
    answer:
      "Nee. Mission Movement richt zich ook op kandidaten richting politie, brandweer, KMar en andere veiligheidsdiensten waar fysieke en mentale voorbereiding belangrijk is.",
  },
];

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Voorbereiding Defensie",
  url: pageUrl,
  inLanguage: "nl-NL",
  description:
    "Bereid je gericht voor op Defensie, politie, brandweer, KMar of specialistische eenheden met Mission Movement.",
  about: {
    "@type": "Thing",
    name: "Militaire voorbereiding",
  },
  publisher: {
    "@type": "Organization",
    name: "Mission Movement",
    url: "https://missionmovement.vercel.app/",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Voorbereiding Defensie en Veiligheidsdiensten",
  url: pageUrl,
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
  serviceType: "Militaire voorbereiding, fysieke training en mentale voorbereiding",
  audience: {
    "@type": "Audience",
    audienceType:
      "Kandidaten richting Defensie, politie, brandweer, KMar en specialistische eenheden",
  },
  description:
    "Mission Movement helpt kandidaten gestructureerd bouwen aan kracht, conditie, belastbaarheid, discipline en mentale voorbereiding.",
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const VoorbereidingDefensie = () => {
  return (
    <main className="min-h-screen bg-mmPage text-mmText">
      <Helmet>
        <title>Voorbereiding Defensie | Militaire Training & Begeleiding</title>
        <meta
          name="description"
          content="Bereid je gericht voor op Defensie, politie, brandweer, KMar of specialistische eenheden met Mission Movement: fysieke training, belastbaarheid, discipline en mentale voorbereiding."
        />
        <meta
          property="og:title"
          content="Voorbereiding Defensie | Mission Movement"
        />
        <meta
          property="og:description"
          content="Mission Movement helpt kandidaten zich fysiek en mentaal voorbereiden op Defensie en veiligheidsdiensten met structuur, training en begeleiding."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={pageUrl} />
        <link rel="canonical" href={pageUrl} />
        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqPageSchema)}
        </script>
      </Helmet>

      <section className="relative min-h-[520px] md:min-h-[620px] flex items-center overflow-hidden border-b border-mmBorder">
        <img
          src="/img/royalmarines.webp"
          alt="Militaire voorbereiding en training"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 mm-heroOverlay" />
        <Container className="relative z-10 py-20">
          <div className="max-w-4xl">
            <p className="font-display uppercase tracking-[0.18em] text-mmAccent text-sm md:text-base mb-4">
              Mission Movement
            </p>
            <h1 className="font-display uppercase tracking-widest text-white text-[42px] md:text-[76px] leading-[0.95]">
              Voorbereiding op Defensie
            </h1>
            <div className="h-[3px] w-20 bg-mmAccent rounded-full my-6" />
            <p className="text-white/90 text-base md:text-xl leading-relaxed max-w-3xl">
              Niet alleen trainen om de norm te halen, maar bouwen aan een
              lichaam en mindset die selectie, opleiding en het werk daarna
              aankunnen.
            </p>
            <div className="mt-8">
              <Link to="/program">
                <button className="mm-btnPrimary uppercase font-bold tracking-widest h-[56px] px-8">
                  Bekijk het programma
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 border-b border-mmBorder">
        <Container>
          <div className="max-w-4xl">
            <h2 className="mm-h2 mb-6">Wat is goede voorbereiding op Defensie?</h2>
            <div className="space-y-6 text-mmTextMuted text-base md:text-lg leading-relaxed">
              <p>
                Goede voorbereiding op Defensie draait niet alleen om hardlopen,
                push-ups of het halen van minimale eisen. De selectie of keuring
                is slechts één moment. Daarna begint vaak pas de echte belasting:
                opleiding, herhaling, vermoeidheid, druk, herstel en het vermogen
                om dag na dag te blijven functioneren.
              </p>
              <p>
                Mission Movement helpt kandidaten begrijpen waar ze nu staan, wat
                er ontwikkeld moet worden en hoe ze daar gestructureerd naartoe
                kunnen werken. De focus ligt op fysieke basis, belastbaarheid,
                mentale weerbaarheid, discipline en duurzame progressie.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-mmSurface border-b border-mmBorder">
        <Container>
          <div className="max-w-4xl">
            <h2 className="mm-h2 mb-6">
              Waarom alleen de selectie-eisen niet genoeg zijn
            </h2>
            <div className="space-y-6 text-mmTextMuted text-base md:text-lg leading-relaxed">
              <p>
                Veel kandidaten richten zich vooral op de zichtbare eisen:
                hardlooptijden, krachtstandaarden of testmomenten. Dat is
                begrijpelijk, maar vaak te beperkt. Een norm halen betekent niet
                automatisch dat je lichaam klaar is voor langdurige belasting.
              </p>
              <p>
                Tijdens een opleiding of operationele functie krijg je te maken
                met vermoeidheid, beperkte hersteltijd, herhaling, druk en
                onverwachte omstandigheden. Daarom moet voorbereiding verder gaan
                dan alleen fit worden. Je moet marge opbouwen.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 border-b border-mmBorder">
        <Container>
          <h2 className="mm-h2 mb-10">Waar Mission Movement op focust</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {focusItems.map((item, index) => (
              <article key={item.title} className="mm-card p-6">
                <div className="h-9 w-9 rounded-full border border-mmBorderStrong flex items-center justify-center text-mmAccent font-semibold mb-5">
                  {index + 1}
                </div>
                <h3 className="font-display uppercase tracking-widest text-mmAccent text-base mb-3">
                  {item.title}
                </h3>
                <p className="text-mmTextMuted text-sm leading-relaxed">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-mmSurface border-b border-mmBorder">
        <Container>
          <div className="max-w-4xl">
            <h2 className="mm-h2 mb-6">
              Voor wie is deze voorbereiding bedoeld?
            </h2>
            <div className="space-y-6 text-mmTextMuted text-base md:text-lg leading-relaxed">
              <p>
                Mission Movement is bedoeld voor mensen die serieus richting
                Defensie of veiligheidsdiensten willen werken. Dat kan gaan om
                kandidaten voor de krijgsmacht, het Korps Mariniers, het Korps
                Commandotroepen, de Luchtmobiele Brigade, de Koninklijke
                Marechaussee, politie, brandweer of andere fysiek en mentaal
                veeleisende functies.
              </p>
              <p>
                Je hoeft nog niet op niveau te zijn. Je moet wel bereid zijn om
                eerlijk te kijken naar waar je staat en gericht te bouwen aan wat
                nodig is.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 mt-10">
            {unitLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="group mm-card p-6 block transition-transform hover:-translate-y-[2px] hover:border-mmAccent/40"
              >
                <h3 className="font-display uppercase tracking-widest text-mmText group-hover:text-mmAccent transition-colors text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-mmTextMuted text-sm md:text-base leading-relaxed">
                  {item.text}
                </p>
                <span className="inline-block mt-5 text-mmAccent font-semibold uppercase tracking-widest text-xs">
                  Bekijk route
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 border-b border-mmBorder">
        <Container>
          <div className="max-w-4xl">
            <h2 className="mm-h2 mb-6">De rol van Mission Movement</h2>
            <div className="space-y-6 text-mmTextMuted text-base md:text-lg leading-relaxed">
              <p>
                Mission Movement geeft richting aan je voorbereiding. Je leert
                niet alleen wat je moet trainen, maar ook waarom. De aanpak is
                gebouwd op militaire praktijkervaring, coaching sinds 2014 en
                jarenlange ervaring met fysieke ontwikkeling, techniek,
                belastbaarheid en mentale voorbereiding.
              </p>
              <p>
                Het doel is niet alleen om door een selectie heen te komen. Het
                doel is om sterker, slimmer en beter voorbereid te starten aan
                het traject waar je serieus voor kiest.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-mmSurface border-b border-mmBorder">
        <Container>
          <div className="max-w-4xl">
            <h2 className="mm-h2 mb-8">Veelgestelde vragen</h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <article key={item.question} className="mm-card p-6">
                  <h3 className="font-display uppercase tracking-widest text-mmAccent text-base md:text-lg mb-3">
                    {item.question}
                  </h3>
                  <p className="text-mmTextMuted text-base leading-relaxed">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="mm-card p-8 md:p-10 text-center">
            <h2 className="mm-h2 mb-5">Start gericht met je voorbereiding</h2>
            <p className="text-mmTextMuted text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Wil je serieus richting Defensie of veiligheidsdiensten werken?
              Begin dan met structuur, duidelijkheid en een plan dat verder kijkt
              dan alleen de test.
            </p>
            <div className="mt-8">
              <Link to="/pricing">
                <button className="mm-btnPrimary uppercase font-bold tracking-widest h-[56px] px-8">
                  Bekijk het aanbod
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default VoorbereidingDefensie;
