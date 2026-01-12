// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useInView } from "../Hooks/useGlowEffect";
import QuoteBlock from "../components/QuoteBlock";

const ImageCard = ({ title, text, cta, to, imgSrc }) => {
  return (
    <div
      className="
        group mm-card overflow-hidden p-0
        flex flex-col h-full
        border border-mmBorder
        transition-all duration-300
        hover:-translate-y-[2px]
        hover:border-mmAccent/40
        hover:shadow-[0_0_0_1px_rgba(31,111,235,0.14),0_10px_24px_-18px_rgba(0,0,0,0.35)]
      "
    >
      {/* Image header */}
      <div className="relative h-[180px] md:h-[220px] w-full overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="
            absolute inset-0 h-full w-full object-cover
            transition-transform duration-500 ease-out
            group-hover:scale-[1.06]
          "
          loading="lazy"
        />

        {/* subtle gradient overlay (geen titel op de foto) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-90 transition-opacity duration-300" />
      </div>

      {/* Content (flex column zodat button altijd onderaan blijft) */}
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <h3 className="font-display uppercase tracking-widest text-[18px] md:text-[22px] text-mmText mb-3">
          {title}
        </h3>

        <p className="text-mmTextMuted text-[15px] md:text-[16px] leading-relaxed">
          {text}
        </p>

        {cta && to && (
          <div className="mt-auto pt-6">
            <Link to={to}>
              <button className="mm-btnPrimary h-[52px] px-6">{cta} →</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const StepCard = ({ step, title, text }) => {
  return (
    <div className="mm-card p-6 md:p-8">
      <div className="flex items-center gap-3 mb-3">
        <div className="h-9 w-9 rounded-full border border-mmBorderStrong flex items-center justify-center text-mmAccent font-semibold">
          {step}
        </div>
        <h3 className="font-display uppercase tracking-widest text-mmText text-sm md:text-base">
          {title}
        </h3>
      </div>
      <p className="text-mmTextMuted text-sm md:text-base leading-relaxed">
        {text}
      </p>
    </div>
  );
};

const Home = () => {
  const { ref, isVisible } = useInView();

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
    <div className="pt-20 md:pt-0 bg-mmPage">
      <Helmet>
        <title>Mission Movement | Voorbereiding op selectie & opleiding</title>
        <meta
          name="description"
          content="Fysieke en mentale voorbereiding voor Defensie (Mariniers, KCT, Luchtmobiel) en Veiligheidsdiensten (Politie, Marechaussee, Brandweer) — gericht op selectie, keuring en duurzame belastbaarheid."
        />
        <meta property="og:title" content="Mission Movement" />
        <meta
          property="og:description"
          content="Gestructureerde voorbereiding voor Defensie en Veiligheidsdiensten. Kies je route, bepaal je startniveau en train met opbouw + tracking richting selectie of opleiding."
        />
        <meta
          property="og:image"
          content="https://missionmovement.vercel.app/img/milprepcourse.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://missionmovement.vercel.app" />
      </Helmet>

      {/* HERO */}
      <header className="relative w-full h-screen md:h-[600px] overflow-hidden flex items-center justify-center">
        <img
          src="/img/royalmarines.webp"
          alt="Training onder druk"
          className="absolute inset-0 w-full h-full object-cover object-[center_left] md:object-bottom scale-[1.25] md:scale-100 transition-transform duration-300"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 mm-heroOverlay" />

        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center px-5 lg:px-0">
          <h1 className="h1-teko mb-4 text-white">
            Voorbereiding op selectie &amp; opleiding
          </h1>

          <div className="h-[3px] w-20 bg-mmAccent rounded-full my-4 opacity-90" />

          {/* Subtitle in dark surface (zoals op Veiligheidsdiensten) */}
          <div className="mt-3 w-full max-w-2xl">
            <div className="bg-black/65 border border-white/10 rounded-2xl px-6 py-5 shadow-sm">
              <p className="font-normal text-[15px] md:text-[18px] leading-relaxed text-white/95">
                Fysieke en mentale voorbereiding voor Defensie en
                Veiligheidsdiensten — gericht op selectie, keuring en duurzame
                belastbaarheid.
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row items-center gap-4 mt-6">
            <Link to="/pricing">
              <button className="mm-btnPrimary uppercase font-bold tracking-widest text-xl min-w-[200px] h-[60px]">
                Aanmelden
              </button>
            </Link>
          </div>

          {/* Scope chips */}
          <div className="mt-6 px-4 py-2 rounded-xl bg-black/35 border border-white/10 shadow-sm flex items-center gap-3 text-white/90 font-display uppercase tracking-widest text-xs md:text-sm">
            <span>Defensie</span>
            <span className="text-mmAccent">|</span>
            <span>Veiligheidsdiensten</span>
          </div>
        </div>
      </header>

      {/* VOOR WIE */}
      <section className="bg-mmPage py-14 md:py-16 px-6 md:px-10 lg:px-20">
        <div className="mm-container">
          <h2 className="mm-h2 text-center mb-8">Voor wie is dit?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tracks.map((track) => (
              <div key={track.title} className="mm-card p-6 md:p-8">
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

                {/* Optional CTA per card */}
                <div className="mt-6">
                  <Link
                    to={
                      track.title === "Defensie"
                        ? "/units/mariniers"
                        : "/units/veiligheidsdiensten"
                    }
                  >
                    <span className="text-mmAccent font-semibold hover:opacity-80 transition">
                      Bekijk {track.title.toLowerCase()} →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES BAR */}
      <section className="bg-mmSurface py-4 border-t border-b border-mmBorder w-full text-center">
        <div className="text-mmTextMuted font-display tracking-widest uppercase text-md md:text-lg flex flex-wrap justify-center gap-4 px-4">
          {coreValues.map((value, index) => (
            <React.Fragment key={value}>
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

      {/* HOE HET WERKT (screenshot 1 vibe) */}
      <section className="bg-mmPage py-16 md:py-20 px-6 md:px-10 lg:px-20">
        <div className="mm-container">
          <h2 className="mm-h2 text-center mb-10">Hoe het werkt</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StepCard
              step="1"
              title="Kies je route"
              text="Defensie of Veiligheidsdiensten — je traint gericht op de eisen van jouw selectie of opleiding."
            />
            <StepCard
              step="2"
              title="Intake + startniveau"
              text="We bepalen je doel, je huidige belastbaarheid en wat je nodig hebt om selectie-ready te worden."
            />
            <StepCard
              step="3"
              title="Train met structuur"
              text="Schema + opbouw + tracking. Minder giswerk, meer meetbare progressie."
            />
          </div>

          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
            <Link to="/program">
              <button className="mm-btnPrimary h-[56px] px-8 uppercase font-bold tracking-widest">
                Bekijk programma
              </button>
            </Link>

            <Link
              to="/contact#contact-form"
              className="font-semibold text-mmAccent hover:opacity-80 transition"
            >
              Plan gratis intake →
            </Link>
          </div>
        </div>
      </section>

      {/* WAT JE KRIJGT */}
      <section className="w-full bg-mmPage py-16 md:py-20 px-6 md:px-10 lg:px-20 flex flex-col items-center">
        <h2 className="mm-h2 text-center mb-12 border-b border-mmBorder pb-4 w-full max-w-4xl">
          Wat je krijgt
        </h2>
        <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl text-mmTextMuted font-normal text-sm md:text-base leading-relaxed">
          <div className="mm-card space-y-4 p-6">
            <h3 className="text-mmAccent font-display uppercase tracking-widest mb-2 text-sm md:text-base">
              Dit zit erin:
            </h3>
            <ul className="list-none space-y-2">
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span>
                Weekschema met kracht, conditie, mobiliteit en mentale
                weerbaarheid
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span>
                Watervertrouwen & zwemopbouw (waar relevant)
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span>
                Videobibliotheek voor techniek en uitvoering
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span>
                Tracking & voortgangsoverzicht (minder giswerk)
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span>
                Check-ins & structuur voor consistentie
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span>
                Praktijkgedreven: gebouwd op echte eisen, niet trends
              </li>
            </ul>
          </div>

          <div className="mm-card space-y-4 p-6">
            <h3 className="text-mmAccent font-display uppercase tracking-widest mb-2 text-sm md:text-base">
              Wat je eraan overhoudt:
            </h3>
            <ul className="list-none space-y-2">
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span>
                Betere belastbaarheid en minder blessure-ruis
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span>
                Sterkere mindset door structuur, druk en discipline
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span>
                Vertrouwen omdat je exact weet wat je doet (en waarom)
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span>
                Een fitter lichaam dat presteert onder vermoeidheid
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span>
                Helderheid: waar je staat, wat je mist, wat je volgende stap is
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span>
                Meer rust in je voorbereiding: je volgt een bewezen opbouw
              </li>
            </ul>
          </div>
        </div>
        {/* Subtle intake CTA (vervangt de Programma CTA) */}
        <div className="mt-12 w-full flex flex-col items-center text-center">
          <Link
            to="/contact#contact-form"
            className="font-semibold text-mmAccent hover:opacity-80 transition"
          >
            Plan gratis intake →
          </Link>

          <p className="text-mmTextMuted text-sm md:text-base mt-2 max-w-xl">
            Korte call om jouw route en startniveau scherp te krijgen.
          </p>
        </div>
      </section>

      {/* IMAGE CARDS (Optie A) */}
      <section className="bg-mmPage py-16 md:py-20 px-6 md:px-10 lg:px-20">
        <div className="mm-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ImageCard
              title="Over Mission Movement"
              imgSrc="/img/royalmarines.webp"
              text="Mission Movement is gebouwd voor kandidaten die serieus willen instromen bij Defensie of Veiligheidsdiensten. Geen hype, geen snelle fixes — maar structuur, progressie en begeleiding die je selectie-ready maakt: conditie, kracht, belastbaarheid en presteren onder druk."
              cta="Lees meer"
              to="/about"
            />

            <ImageCard
              title="Zij die het verdiend hebben"
              imgSrc="/img/eenheden/veiligheidsdiensten.jpg"
              text="Verhalen van kandidaten die kozen voor structuur. Geen ‘before/after’ sprookjes — maar meetbare progressie, betere belastbaarheid en meer vertrouwen richting selectie of opleiding."
              cta="Bekijk verhalen"
              to="/pricing"
            />

            <div className="md:col-span-2">
              <ImageCard
                title="Het Programma"
                imgSrc="/img/eenheden/veiligheidsdiensten.jpg"
                text="Eén systeem, aangepast aan jouw route en startniveau. We bouwen kracht, conditie, mobiliteit en mentale weerbaarheid op — met duidelijke opbouw, tracking en begeleiding. Gericht op selectie-eisen, zonder blessure-ruis."
                cta="Bekijk programma"
                to="/program"
              />
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <QuoteBlock
        quote="Je stijgt niet tot het niveau van je doelen. Je zakt tot het niveau van je training."
        author="Mission Movement"
      />

      {/* FINAL CTA */}
      <section className="h-[360px] md:h-[600px] w-full flex justify-center items-center px-6 md:px-10 lg:px-20 bg-mmPage border-t border-mmBorder">
        <div className="w-full flex flex-col justify-center items-center max-w-5xl mx-auto">
          <h2
            ref={ref}
            className={`mm-h1 text-mmText text-[34px] md:text-[70px] mb-3 text-center transition-all duration-700 ease-in-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            Dit is het pad. Jij kiest of je het bewandelt.
          </h2>

          <p className="text-mmTextMuted tracking-wider md:text-[18px] text-center leading-relaxed max-w-3xl">
            Dit is geen training. <br />
            Dit is voorbereiding op echte eisen: structuur, belastbaarheid en
            presteren onder druk. <br />
            Weinigen kiezen dit. Nog minder maken het af.
          </p>

          <Link to="/pricing">
            <button className="mm-btnPrimary my-7 md:my-10">Start</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
