import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { useInView } from "../Hooks/useGlowEffect";
import QuoteBlock from "../components/QuoteBlock";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const { ref, isVisible } = useInView();
  const VideoPreview = lazy(() => import("../components/VideoPreview"));
  const tracks = [
    {
      title: "Defensie",
      items: [
        "Korps Mariniers",
        "Korps Commando Troepen",
        "11 Luchtmobiele Brigade",
      ],
    },
    {
      title: "Veiligheidsdiensten",
      items: ["Politie", "Marechaussee", "Brandweer"],
    },
  ];
  const coreValues = [
    "Discipline",
    "Broederschap",
    "Doelgerichtheid",
    "Eer",
    "Structuur",
  ];

  return (
    <div className="pt-20 md:pt-0">
      <Helmet>
        <title>Mission Movement | Voorbereiding op selectie & opleiding</title>
        <meta
          name="description"
          content="Fysieke en mentale voorbereiding voor Defensie (Korps Mariniers, KCT, 11 Luchtmobiele Brigade) en Veiligheidsdiensten (Politie, Marechaussee, Brandweer)."
        />
        <meta property="og:title" content="Mission Movement" />
        <meta
          property="og:description"
          content="Een compleet systeem om je lichaam te smeden, je geest te verscherpen en je voor te bereiden op een leven dat maar weinigen aandurven."
        />
        <meta
          property="og:image"
          content="https://missionmovement.vercel.app/img/milprepcourse.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://missionmovement.vercel.app" />
      </Helmet>

      <header className="relative w-full h-screen md:h-[600px] overflow-hidden flex items-center justify-center">
        <img
          src="/img/royalmarines.webp"
          alt="Royal Marine in actie"
          className="absolute inset-0 w-full h-full object-cover object-[center_left] md:object-bottom scale-[1.25] md:scale-100 transition-transform duration-300"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 mm-heroOverlay" />
        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center px-5 lg:px-0">
          <h1 className="h1-teko mb-4 text-mmAccent">
            Voorbereiding op selectie &amp; opleiding
          </h1>
          <p className="text-gray-200 font-normal text-lg md:text-xl max-w-xl leading-relaxed">
            Fysieke en mentale voorbereiding voor Defensie en
            Veiligheidsdiensten — gericht op keuring, selectie en
            belastbaarheid.
          </p>

          <div className="flex flex-col-reverse md:flex-row items-center gap-4 mt-6">
            <Link to="/pricing">
              <button className="mm-btnPrimary uppercase font-bold tracking-widest text-xl min-w-[200px] h-[60px]">
                Aanmelden
              </button>
            </Link>
          </div>

          {/* Scope chips */}
          <div className="mt-6 flex items-center gap-3 text-mmTextMuted font-display uppercase tracking-widest text-xs md:text-sm">
            <span>Defensie</span>
            <span className="text-mmAccent">|</span>
            <span>Veiligheidsdiensten</span>
          </div>
        </div>
      </header>

      <section className="bg-mmPage py-14 md:py-16 px-6 md:px-10 lg:px-20">
        <div className="mm-container">
          <h2 className="mm-h2 text-center mb-8">
            Voor wie is dit?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tracks.map((track) => (
              <div
                key={track.title}
                className="mm-card p-6 md:p-8"
              >
                <h3 className="text-mmAccent font-display uppercase tracking-widest text-sm md:text-base mb-3">
                  {track.title}
                </h3>
                <ul className="text-mmTextMuted text-sm md:text-base space-y-2">
                  {track.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-mmAccent mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mmSurface py-4 border-t border-b border-mmBorder w-full text-center">
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

      <section className="w-full bg-mmPage py-20 px-6 md:px-20 flex flex-col items-center">
        <h2 className="mm-h2 text-center mb-12 border-b border-mmBorder pb-4 w-full max-w-4xl">
          Wat Je Krijgt
        </h2>

        <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl text-mmTextMuted font-normal text-sm md:text-base leading-relaxed">
          {/* Linkerkant - Wat je krijgt */}
          <div className="mm-card space-y-4 p-6">
            <h3 className="text-mmAccent font-display uppercase tracking-widest mb-2 text-sm md:text-base">
              Dit zit erin:
            </h3>
            <ul className="list-none space-y-2">
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span>
                Een volledig weekschema met krachttraining, conditie, mobiliteit
                en mentale weerbaarheid
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span>
                Zwemoefeningen & watervertrouwen volgens special forces-normen
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span>
                Een videobibliotheek voor perfecte techniek en uitvoering
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span>
                Een voortgangstracker om prestaties en groei te meten
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span>
                Wekelijkse check-ins en reflectie-opdrachten voor structuur en
                begeleiding
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span>
                Ontwikkeld door een voormalig marinier - geen theorie, maar
                praktijk
              </li>
            </ul>
          </div>

          {/* Rechterkant - Wat je eruit haalt */}
          <div className="mm-card space-y-4 p-6">
            <h3 className="text-mmAccent font-display uppercase tracking-widest mb-2 text-sm md:text-base">
              Wat je eraan overhoudt:
            </h3>
            <ul className="list-none space-y-2">
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span>
                Fysieke en mentale weerbaarheid die je onderscheidt van de massa
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span>
                Een sterke mindset gevormd door structuur, druk en
                doelgerichtheid
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span>
                Diepgeworteld zelfvertrouwen - omdat je het écht hebt verdiend
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span>
                Een leven van discipline, adrenaline en uitdaging waar maar
                weinigen voor durven kiezen
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span>
                Broederschap en verbondenheid die verder reiken dan het
                programma. Dit gaat over thuishoren
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span>
                Richting, helderheid en een gevoel van identiteit dat weinig
                mensen ooit zullen begrijpen
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-16 gap-10">
          <h2 className="text-mmText text-md md:text-lg font-semibold tracking-wider uppercase md:text-center">
            Klaar om te starten? <br />
            <span className="text-mmTextMuted lowercase">
              Bekijk het programma
            </span>
          </h2>
          <div className="flex justify-center items-center my-10">
            <Link to="/pricing">
              <button className="mm-btnPrimary uppercase font-bold tracking-widest text-xl min-w-[200px] h-[60px]">
                Programma
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* <section className="semisection flex justify-center items-center px-10 py-20 md:py-14">
        <p className="font-display text-mmText tracking-widest text-[25px] md:text-[40px] text-center leading-snug">
          Not for everyone, <br className="md:hidden" /> but for those willing
          to earn it.
        </p>
      </section>


      <section className="flex flex-col items-center justify-center px-6 md:px-10 text-center space-y-6 pb-10">
        <h3 className="text-mmAccent font-display text-sm md:text-base tracking-widest uppercase">
          This is not fitness. This is preparation.
        </h3>

        <p className="text-white font-light text-base md:text-lg max-w-3xl text-justify leading-relaxed">
          This isn’t just training. It’s entry into a world few will ever
          experience.
          <br className="hidden md:block" />
          A life driven by adrenaline, forged by discipline, and bound by
          unbreakable loyalty.
          <br className="hidden md:block" />
          Most will never feel what it’s like to earn a place in something
          greater. You can.
        </p>
      </section> */}

      <main>
        {/* Over Mission Movement */}
        <article
          id="about"
          className="lg:h-[500px] w-screen flex flex-col lg:flex-row relative pt-10 md:pt-24"
        >
          <div
            className="order-first lg:order-last w-full lg:w-1/2 bg-fixed bg-barret bg-bottom bg-cover lg:h-full h-[450px]"
            role="img"
            loading="lazy"
            aria-label="Achtergrondafbeelding met baret"
          ></div>

          <div className="w-full lg:w-1/2 px-10 lg:px-20 py-20 flex flex-col justify-center items-start text-left relative">
            <h2 className="mm-h2 text-mmText mb-5">Over Mission Movement</h2>
            <p className="text-mmTextMuted text-lg tracking-wider text-justify leading-relaxed">
              Dit is geen standaard trainingsschema - dit is transformatie.
              Mission Movement bereidt jou voor op een leven met doel, druk en
              prestaties op het hoogste niveau. Dit is jouw toegang tot een
              wereld van structuur, strijdlust en onverbrekelijke broederschap.
              Het burgerleven stopt hier. Jouw missie begint.
            </p>
            <div className="w-full flex md:justify-start justify-center">
              <Link to="about">
                <button className="mm-btnPrimary h-[60px] my-5 w-[250px]">
                  Lees meer →
                </button>
              </Link>
            </div>
          </div>
        </article>

        {/* Ons Programma */}
        <article
          id="programs"
          className="lg:h-[500px] w-screen flex flex-col lg:flex-row"
        >
          <div
            className="order-first lg:order-first w-full lg:w-1/2 bg-fixed bg-marsof bg-bottom bg-cover lg:h-full h-[450px]"
            role="img"
            loading="lazy"
            aria-label="Achtergrondafbeelding Marsof"
          ></div>

          <div className="w-full lg:w-1/2 px-10 lg:px-20 py-20 flex flex-col justify-center items-start text-left">
            <h2 className="mm-h2 text-mmText mb-5">Het Programma</h2>
            <p className="text-mmTextMuted text-lg tracking-wider text-justify leading-relaxed">
              Stap in een zesweekse transformatie - ontwikkeld voor wie
              elitevoorbereiding serieus neemt.
              <br />
              Dit coachingtraject behandelt alles: van fysieke kracht tot
              mentale weerbaarheid. Je stapt in een gestructureerd systeem
              waarmee jij je voorbereidt op de eisen van de praktijk - militair
              of anders.
            </p>
            <div className="w-full flex justify-center md:justify-start">
              <Link to="program">
                <button className="mm-btnPrimary my-5 h-auto w-[250px]">
                  Programma
                </button>
              </Link>
            </div>
          </div>
        </article>

        {/* Succesverhalen */}
        <article
          id="success"
          className="lg:h-[500px] w-screen flex flex-col lg:flex-row"
        >
          <div
            className="order-first lg:order-last w-full lg:w-1/2 bg-fixed bg-boatgroup bg-bottom bg-cover lg:h-full h-[450px]"
            role="img"
            loading="lazy"
            aria-label="Militair team op boot tijdens missie"
          ></div>

          <div className="w-full lg:w-1/2 px-10 lg:px-20 py-20 flex flex-col justify-center items-start text-left">
            <h2 className="mm-h2 text-mmText mb-5">Zij die het verdiend hebben</h2>
            <p className="text-mmTextMuted text-lg tracking-wider text-justify leading-relaxed">
              Ontdek verhalen van deelnemers die hun leven hebben veranderd met
              Mission Movement. Lees hun ervaringen, hun doorbraken, en hoe dit
              programma hen hielp richting special forces of een sterker leven.
            </p>
          </div>
        </article>

        {/* Inspirerende Quote */}
        <QuoteBlock
          quote="Je stijgt niet tot het niveau van je doelen. Je zakt tot het niveau van je training."
          author="Mission Movement"
        />

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

        {/* Floating CTA */}
        {/* <FloatingCTA /> */}

        {/* Laatste Call to Action */}
        <section className="h-[350px] md:h-[600px] w-screen flex justify-center items-center px-10 bg-mmPage">
          <div className="w-full flex flex-col justify-center items-center">
            <h2
              ref={ref}
              className={`mm-h1 text-mmText text-[40px] md:text-[70px] mb-2 text-center transition-all duration-700 ease-in-out ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              Dit is het pad. Jij kiest of je het bewandelt.
            </h2>
            <p className="text-mmTextMuted tracking-wider md:text-[20px] text-center leading-relaxed">
              Dit is geen training. <br />
              Dit is toegang tot een leven vol adrenaline, richting en
              verbondenheid. <br />
              Weinigen beleven dit. Nog minder verdienen het.
            </p>

            <Link to="/pricing">
              <button className="mm-btnPrimary my-7 md:my-10">Start</button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
