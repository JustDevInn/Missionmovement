import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Container from "../components/layout/Container";
import PublicHero from "../components/PublicHero";

const pageUrl =
  "https://missionmovement.vercel.app/programma-veiligheidsdiensten";
const heroImage = "/img/eenheden/veiligheidsdiensten.jpg";
const ogImage =
  "https://missionmovement.vercel.app/img/eenheden/veiligheidsdiensten.jpg";

const benefits = [
  {
    title: "Intake en startniveau",
    text: "We brengen je doel, ervaring, huidige niveau, beschikbare tijd, eventuele blessures en praktische situatie in kaart.",
  },
  {
    title: "Persoonlijk trainingsplan",
    text: "Je krijgt een plan dat past bij jouw richting, niveau, materiaal en belastbaarheid.",
  },
  {
    title: "Gerichte opbouw",
    text: "De focus ligt op kracht, conditie, mobiliteit, herstel, techniek en het vermogen om training vol te houden.",
  },
  {
    title: "Follow-ups en aanpassingen",
    text: "We houden contact tijdens het traject en passen bij waar nodig, zodat je niet blijft vastlopen op hetzelfde punt.",
  },
  {
    title: "Praktische begeleiding",
    text: "Geen onnodige complexiteit, maar duidelijke keuzes, heldere structuur en begeleiding die uitvoerbaar blijft.",
  },
];

const steps = [
  {
    title: "Intake",
    text: "We bepalen waar je nu staat, wat je doel is en welke eisen of verwachtingen daarbij horen.",
  },
  {
    title: "Plan",
    text: "Je krijgt een trainingsrichting die past bij jouw niveau, agenda en beschikbare middelen.",
  },
  {
    title: "Uitvoering",
    text: "Je werkt gericht aan kracht, conditie, belastbaarheid, techniek en discipline.",
  },
  {
    title: "Opvolging",
    text: "We houden contact, evalueren je voortgang en sturen bij waar nodig.",
  },
];

const linkCards = [
  {
    title: "Veiligheidsdiensten",
    path: "/units/veiligheidsdiensten",
    text: "Lees meer over politie, brandweer, KMar en andere veiligheidsroutes.",
  },
  {
    title: "Contact",
    path: "/contact",
    text: "Vertel kort welke richting je op wilt en waar je nu staat.",
  },
  {
    title: "Aanbod",
    path: "/pricing",
    text: "Bekijk de beschikbare mogelijkheden binnen Mission Movement.",
  },
];

const faqItems = [
  {
    question: "Is dit programma hetzelfde als het Defensie-programma?",
    answer:
      "Nee. Het Defensie-programma is meer gestructureerd rond militaire voorbereiding. Het traject voor veiligheidsdiensten is persoonlijker en wordt afgestemd op jouw richting, startniveau en doel.",
  },
  {
    question: "Voor welke veiligheidsdiensten is dit geschikt?",
    answer:
      "Het traject kan geschikt zijn voor kandidaten richting politie, brandweer, KMar, handhaving, beveiliging of andere functies waar fysieke en mentale voorbereiding belangrijk is.",
  },
  {
    question: "Krijg ik een vast handboek?",
    answer:
      "Nee. Voor veiligheidsdiensten ligt de nadruk op intake, persoonlijk trainingsplan, follow-ups en begeleiding tijdens je voorbereiding.",
  },
  {
    question: "Kan ik starten als ik nog niet fit genoeg ben?",
    answer:
      "Ja. Je hoeft nog niet op niveau te zijn om te starten. Het belangrijkste is dat je eerlijk kijkt naar waar je nu staat en bereid bent om gericht te werken aan wat nodig is.",
  },
];

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Programma Veiligheidsdiensten",
  url: pageUrl,
  inLanguage: "nl-NL",
  description:
    "Persoonlijke begeleiding en training voor kandidaten richting politie, brandweer, KMar en andere veiligheidsdiensten.",
  publisher: {
    "@type": "Organization",
    name: "Mission Movement",
    url: "https://missionmovement.vercel.app/",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Programma Veiligheidsdiensten",
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
  serviceType: "Persoonlijke training en begeleiding voor veiligheidsdiensten",
  audience: {
    "@type": "Audience",
    audienceType:
      "Kandidaten richting politie, brandweer, KMar, handhaving, beveiliging en veiligheidsdiensten",
  },
  description:
    "Mission Movement helpt kandidaten richting veiligheidsdiensten bouwen aan kracht, conditie, belastbaarheid, discipline en mentale voorbereiding met een persoonlijk trainingsplan en follow-ups.",
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

const ProgrammaVeiligheidsdiensten = () => {
  return (
    <main className="min-h-screen bg-mmPage text-mmText">
      <Helmet>
        <title>
          Programma Veiligheidsdiensten | Politie, Brandweer & KMar
          Voorbereiding
        </title>
        <meta
          name="description"
          content="Persoonlijke begeleiding en training voor kandidaten richting politie, brandweer, KMar en andere veiligheidsdiensten. Bouw aan kracht, conditie, belastbaarheid en discipline."
        />
        <meta
          property="og:title"
          content="Programma Veiligheidsdiensten | Mission Movement"
        />
        <meta
          property="og:description"
          content="Mission Movement begeleidt kandidaten richting politie, brandweer, KMar en veiligheidsdiensten met intake, persoonlijk trainingsplan en follow-ups."
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

      <PublicHero
        eyebrow="Mission Movement"
        title="Programma Veiligheidsdiensten"
        subtitle="Gerichte begeleiding voor kandidaten richting politie, brandweer, KMar en andere fysiek en mentaal veeleisende functies."
        button={{ label: "Neem contact op", to: "/contact" }}
        imageSrc={heroImage}
        imageAlt="Veiligheidsdiensten voorbereiding"
        imageClassName="object-center"
      />

      <section className="py-16 md:py-20 border-b border-mmBorder">
        <Container>
          <div className="max-w-4xl">
            <h2 className="mm-h2 mb-6">Voor wie is dit programma?</h2>
            <div className="space-y-6 text-mmTextMuted text-base md:text-lg leading-relaxed">
              <p>
                Het programma Veiligheidsdiensten is bedoeld voor mensen die
                serieus richting politie, brandweer, KMar of een andere fysiek en
                mentaal veeleisende functie willen werken.
              </p>
              <p>
                Niet iedere richting vraagt hetzelfde. De eisen, testen en
                dagelijkse belasting verschillen per functie. Daarom werkt dit
                traject niet met één vast handboek, maar met begeleiding die
                aansluit op jouw startniveau, doel en situatie.
              </p>
              <p>
                We kijken waar je nu staat, waar je naartoe wilt en wat er nodig
                is om daar gestructureerd aan te bouwen.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-mmSurface border-b border-mmBorder">
        <Container>
          <h2 className="mm-h2 mb-10">Wat krijg je?</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {benefits.map((item, index) => (
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

      <section className="py-16 md:py-20 border-b border-mmBorder">
        <Container>
          <div className="max-w-4xl">
            <h2 className="mm-h2 mb-6">
              Waarom maatwerk voor veiligheidsdiensten?
            </h2>
            <div className="space-y-6 text-mmTextMuted text-base md:text-lg leading-relaxed">
              <p>
                Voorbereiding op veiligheidsdiensten vraagt om een brede basis.
                Je moet fit genoeg zijn om testen aan te kunnen, maar ook
                belastbaar genoeg zijn om training, werkdruk, onregelmatigheid en
                herhaling vol te houden.
              </p>
              <p>
                Omdat de route naar politie, brandweer, KMar of andere
                veiligheidsfuncties per persoon kan verschillen, is maatwerk hier
                vaak logischer dan een vast programma. De basis blijft hetzelfde:
                sterker worden, conditie opbouwen, blessures beperken, beter
                herstellen en leren werken met structuur.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-mmSurface border-b border-mmBorder">
        <Container>
          <h2 className="mm-h2 mb-10">De aanpak</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <article key={step.title} className="mm-card p-6">
                <span className="font-display text-mmAccent text-3xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display uppercase tracking-widest text-mmText text-lg mt-4 mb-3">
                  {step.title}
                </h3>
                <p className="text-mmTextMuted text-sm md:text-base leading-relaxed">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 border-b border-mmBorder">
        <Container>
          <div className="max-w-4xl">
            <h2 className="mm-h2 mb-6">Voor welke richtingen?</h2>
            <p className="text-mmTextMuted text-base md:text-lg leading-relaxed">
              Dit traject kan worden ingezet voor kandidaten richting politie,
              brandweer, Koninklijke Marechaussee, handhaving, beveiliging of
              andere functies waar fysieke en mentale voorbereiding belangrijk
              is.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3 mt-10">
            {linkCards.map((item) => (
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
                  Bekijk
                </span>
              </Link>
            ))}
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
            <h2 className="mm-h2 mb-5">
              Wil je weten welke voorbereiding bij jou past?
            </h2>
            <p className="text-mmTextMuted text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Stuur een bericht en vertel kort welke richting je op wilt. Dan
              kijken we samen waar je nu staat en welke aanpak logisch is voor
              jouw doel.
            </p>
            <div className="mt-8">
              <Link to="/contact">
                <button className="mm-btnPrimary uppercase font-bold tracking-widest h-[56px] px-8">
                  Neem contact op
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default ProgrammaVeiligheidsdiensten;
