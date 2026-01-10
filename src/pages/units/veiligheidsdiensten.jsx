import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SubNav from "../../components/SubNav";

const theme = {
  page: "bg-[#F7F9FC] text-[#0B1220]",
  section: "bg-transparent",
  card: "bg-white text-[#0B1220]",
  surface: "bg-white",
  border: "border-slate-200",
  borderStrong: "border-slate-300",
  accentText: "text-[#1f6feb]",
  accentBorder: "border-[#1f6feb]",
  accentBg: "bg-[#1f6feb]",
  accentLine: "bg-[#1f6feb]",
  accentHover: "hover:bg-[#1a5bd6]",
  accentRing: "focus:ring-[#1f6feb]/30",
  textPrimary: "text-[#0B1220]",
  textSecondary: "text-slate-600",
  textMuted: "text-slate-500",
  heroTitle: "text-white",
  heroSubtitle: "text-slate-200",
  heroOverlay:
    "bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-900/70",
};

const veiligheidsdienstenSections = [
  {
    title: "Politie",
    logo: "/img/eenheden/politie-7.svg",
    intro:
      "Voor wie serieus richting Politie wil: instroomroutes, mogelijke rollen en waar je in je voorbereiding prioriteit aan moet geven — fysiek én mentaal.",
    instroom: [
      "MBO-route (Politieagent): praktijkgerichte instroom richting basispolitiezorg",
      "HBO/WO instroom: Politiebachelor (richting o.a. Rechercheur / Wijkagent / Politieagent / Politieleider)",
      "Zij-instroom / specialistische instroom (afhankelijk van profiel en mogelijkheden)",
    ],
    rollen: [
      "Basispolitiezorg: noodhulp & wijkagent (fundament voor je eerste jaren)",
      "Opsporing: recherche (incl. specialistische opsporing)",
      "ME (Mobiele Eenheid)",
      "Verkeer (o.a. motor/handhaving verkeer)",
      "Hondengeleider",
      "Arrestatieteam / DSI-richting (sterk selectief, meestal pas na opbouw/ervaring)",
    ],
    helpt: [
      "Keuring-ready: conditie, kracht en belastbaarheid opbouwen (zonder blessure-ruis)",
      "Structuur in leefstijl: slaap, voeding, routine en herstel — zodat je dit volhoudt",
      "Dagelijkse begeleiding via chatkanaal: bijsturen, vragen, accountability",
      "Mentale weerbaarheid trainen: omgaan met stress, druk en onregelmatigheid",
    ],
  },
  {
    title: "Brandweer",
    logo: "/img/eenheden/brandweer-1.svg",
    intro:
      "Voor wie richting Brandweer wil: instroommogelijkheden, doorgroei en specialistische rollen — plus hoe je fysiek en mentaal voorbereid start.",
    instroom: [
      "Vrijwilliger: selectie en basisopleiding naast werk/leven",
      "Beroeps: zwaarder traject met selectie, keuring en opleiding (via veiligheidsregio)",
      "Doorstroom: groeien via ervaring, opleidingen en specialismen",
    ],
    rollen: [
      "Manschap → Bevelvoerder (klassieke doorgroei)",
      "Specialismen: duiker (waterongevallen / inzet onder water)",
      "Specialismen: bediener hoogwerker / redvoertuig",
      "Specialismen: verkenner / (advies) gevaarlijke stoffen (incidenten met chemie/rook/lekken)",
      "Richtingen: preventie / inspectie (afhankelijk van regio/organisatie)",
    ],
    helpt: [
      "Keuring-ready: kracht, grip, work capacity en uithoudingsvermogen opbouwen",
      "Praktische opbouw: trainen richting ‘werk-eisen’ (tillen, dragen, trapwerk, tempo onder stress)",
      "Dagelijkse begeleiding via chatkanaal: ritme, feedback en consistentie",
      "Herstel & blessurevrij: mobiliteit, load-management en slimme progressie",
    ],
  },
  {
    title: "Koninklijke Marechaussee",
    logo: "/img/eenheden/Kmar-2.svg",
    // Fix voor optisch “klein” logo door whitespace in SVG
    logoClassName: "scale-150 md:scale-[1.7]",
    intro:
      "Voor wie richting KMar wil: routes en rollen binnen grenspolitietaken, bewaken & beveiligen en opsporing — met een realistisch beeld van wat opleiding en werk vragen.",
    instroom: [
      "Marechaussee (militair): instroom via Defensie-opleiding/vacature",
      "Marechaussee Beveiliger: aparte instroom/opleiding binnen KMar",
      "Herintreder (als je eerder hebt gediend of terugkeert binnen Defensie/KMar)",
    ],
    rollen: [
      "Grenspolitietaak & toezicht (o.a. grenspassages/luchthavens)",
      "Bewaken & beveiligen (objecten, personen, transporten – afhankelijk van inzet)",
      "Opsporingstaken (binnen het KMar-domein)",
      "BSB (Brigade Speciale Beveiligingsopdrachten) als mogelijke richting (selectief, na opbouw/ervaring)",
    ],
    helpt: [
      "Keuring-ready: kracht/conditie op defensie-niveau brengen met slimme opbouw",
      "Duurzaam trainen: blessurepreventie, mobiliteit en herstel als vaste pijlers",
      "Dagelijkse begeleiding via chatkanaal: korte lijnen, bijsturen, consistentie",
      "Belastbaarheid & discipline: routine bouwen die matcht met het leven dat je ambieert",
    ],
  },
];

const Veiligheidsdiensten = () => {
  return (
    <div className={`min-h-screen pt-20 font-['Inter'] ${theme.page}`}>
      <Helmet>
        <title>Veiligheidsdiensten | Politie, KMar & Brandweer</title>
        <meta
          name="description"
          content="Voorbereiding op selectie en opleiding voor Politie, Koninklijke Marechaussee en Brandweer."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#0B1220]/50 before:via-[#0B1220]/65 before:to-[#0B1220]/80 before:z-10">
        <img
          src="/img/eenheden/veiligheidsdiensten.jpg"
          alt="Veiligheidsdiensten"
          className="absolute inset-0 w-full h-full object-cover object-center scale-110"
        />
        <div className="relative z-20 h-full w-full flex flex-col justify-center items-center text-center px-6">
          <h1
            className={`${theme.heroTitle} text-[32px] md:text-[54px] font-secondary uppercase tracking-[0.08em]`}
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.55)" }}
          >
            VEILIGHEIDSDIENSTEN
          </h1>
          <div
            className="h-[3px] w-12 bg-blue-500 rounded-full my-4 opacity-90"
          />
          <div className="bg-black/35 backdrop-blur-sm rounded-md px-4 py-2">
            <p
              className="text-slate-100/90 leading-relaxed max-w-xl font-medium text-[15px] md:text-lg"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.55)" }}
            >
              Politie, Koninklijke Marechaussee en Brandweer — routes, rollen en
              voorbereiding
            </p>
          </div>
        </div>
      </section>

      <div className="relative shadow-sm">
        <SubNav variant="light" scrollable />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-white/90 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-white/90 to-transparent" />
      </div>
      <div className="md:hidden text-center text-[11px] uppercase tracking-[0.25em] text-slate-500 mt-2 leading-none">
        Swipe →
      </div>

      {/* Intro (KCT-style) */}
      <section className={theme.section}>
        <div className="max-w-5xl mx-auto py-16 px-6 md:px-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* Embleem links van de tekst (groot, geen card/border) */}
          <div className="flex-shrink-0 flex items-center justify-center h-[160px] md:h-[220px]">
            <img
              src="/img/eenheden/veiligheidsdiensten-3.svg"
              alt="Veiligheidsdiensten embleem"
              className="h-full w-auto object-contain"
              onError={(e) => {
                e.currentTarget.classList.add("hidden");
                const fallback = e.currentTarget.nextSibling;
                if (fallback) fallback.classList.remove("hidden");
              }}
            />
            <div className="hidden h-full w-[160px] md:w-[220px] items-center justify-center">
              <span
                className={`${theme.accentText} font-secondary text-3xl md:text-5xl tracking-[0.18em]`}
              >
                VD
              </span>
            </div>
          </div>

          {/* Accentlijn + content */}
          <div className={`border-l-[3px] ${theme.accentBorder} pl-6`}>
            <h2
              className={`${theme.textPrimary} text-2xl md:text-4xl font-secondary uppercase tracking-widest mb-4`}
            >
              Wat zijn veiligheidsdiensten?
            </h2>

            <p className="text-slate-600 leading-relaxed font-light text-base md:text-lg">
              Onder veiligheidsdiensten vallen functies waarbij je dagelijks
              werkt aan orde, veiligheid en hulpverlening — vaak onder druk, met
              duidelijke standaarden en stevige opleidingen. Deze pagina is er
              voor kandidaten die serieus willen instromen bij de Politie, de
              Koninklijke Marechaussee of de Brandweer.
              <br className="hidden md:block" />
              <br />
              Je krijgt per onderdeel een helder overzicht van instroomroutes,
              rollen en doorgroeimogelijkheden — zodat je weet wat je kunt
              verwachten én waar je in je voorbereiding prioriteit aan moet
              geven: fysieke basis, belastbaarheid, herstel en mentale
              weerbaarheid.
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className={`${theme.section} py-12 md:py-16`}>
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-20 space-y-8">
          {veiligheidsdienstenSections.map((section) => (
            <div
              key={section.title}
              className={`${theme.card} rounded-2xl border ${theme.border} shadow-sm p-6 md:p-8`}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0 flex items-center justify-center h-[120px] md:h-[160px] w-[120px] md:w-[160px]">
                  <div
                    className={`h-full w-full rounded-xl border ${theme.border} ${theme.surface} flex items-center justify-center`}
                  >
                    <img
                      src={section.logo}
                      alt={`${section.title} logo`}
                      className={`h-16 w-16 md:h-20 md:w-20 object-contain ${
                        section.logoClassName || ""
                      }`}
                      onLoad={(event) => {
                        const fallback = event.currentTarget.nextSibling;
                        if (fallback) {
                          fallback.classList.add("hidden");
                        }
                      }}
                      onError={(event) => {
                        event.currentTarget.classList.add("hidden");
                        const fallback = event.currentTarget.nextSibling;
                        if (fallback) {
                          fallback.classList.remove("hidden");
                        }
                      }}
                    />
                    <span
                      className={`hidden text-[10px] uppercase tracking-[0.2em] ${theme.accentText} text-center px-2`}
                    >
                      {section.title}
                    </span>
                  </div>
                </div>

                <div className={`border-l-[3px] ${theme.accentBorder} pl-6`}>
                  <h3
                    className={`${theme.textPrimary} text-xl md:text-3xl font-secondary uppercase tracking-widest mb-3`}
                  >
                    {section.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-light text-base md:text-lg max-w-2xl">
                    {section.intro}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div
                  className={`border ${theme.border} rounded-xl bg-white p-4 md:p-5`}
                >
                  <h4
                    className={`${theme.accentText} font-secondary text-sm md:text-base tracking-widest uppercase mb-3`}
                  >
                    Instroomroutes
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700 leading-relaxed marker:text-slate-400 font-light text-sm md:text-base">
                    {section.instroom.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`border ${theme.border} rounded-xl bg-white p-4 md:p-5`}
                >
                  <h4
                    className={`${theme.accentText} font-secondary text-sm md:text-base tracking-widest uppercase mb-3`}
                  >
                    Rollen & doorgroei
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700 leading-relaxed marker:text-slate-400 font-light text-sm md:text-base">
                    {section.rollen.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`border ${theme.border} rounded-xl bg-white p-4 md:p-5 md:col-span-2`}
                >
                  <h4
                    className={`${theme.accentText} font-secondary text-sm md:text-base tracking-widest uppercase mb-3`}
                  >
                    Waar Mission Movement bij helpt
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700 leading-relaxed marker:text-slate-400 font-light text-sm md:text-base">
                    {section.helpt.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <Link to="/contact#contact-form">
                  <button
                    className={`${theme.accentBg} text-white ${theme.accentHover} px-6 py-3 rounded-xl font-semibold text-sm ring-2 ring-transparent ${theme.accentRing} border border-transparent transition`}
                  >
                    Plan gratis intake
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={`${theme.section} border-t ${theme.border}`}>
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-20 py-12 text-center">
          <h3
            className={`${theme.textPrimary} text-2xl md:text-3xl font-secondary uppercase tracking-widest`}
          >
            Plan je gratis intake
          </h3>
          <div
            className={`h-[3px] w-16 ${theme.accentLine} rounded-full my-4 opacity-90 mx-auto`}
          />
          <p className="text-slate-600 leading-relaxed font-light text-base md:text-lg mb-6">
            We bespreken je doel, je startniveau en wat er nodig is voor jouw
            selectie of opleiding.
          </p>
          <Link to="/contact#contact-form">
            <button
              className={`${theme.accentBg} text-white ${theme.accentHover} px-6 py-3 rounded-xl font-semibold text-sm ring-2 ring-transparent ${theme.accentRing} border border-transparent transition`}
            >
              Plan gratis intake
            </button>
          </Link>
        </div>
      </section>

      <section className={theme.page}>
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-20 pb-16 pt-6">
          <p className="text-xs md:text-sm text-slate-500 text-center">
            Mission Movement is een onafhankelijke coachingdienst en niet
            verbonden aan Defensie, Politie of Brandweer.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Veiligheidsdiensten;
