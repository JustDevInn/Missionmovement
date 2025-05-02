// PurchaseAccess.jsx
import React, { useState, lazy, Suspense } from "react";
import Reviews from "../components/Reviews";
import QuoteBlock from "../components/QuoteBlock";
import { useFadeIn } from "../Hooks/useFadeIn";
import { Helmet } from "react-helmet-async";

const PurchaseAccess = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { ref: enlistRef, visible: enlistVisible } = useFadeIn();
  const VideoPreview = lazy(() => import("../components/VideoPreview"));

  const handleCheckout = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:4242/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        setError("Er is iets fout gegaan, probeer het opnieuw.");
      }
    } catch (err) {
      console.error(err);
      setError("Verbinding met de betaaldienst mislukt.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>
          6-Weekse Militaire Voorbereidingsprogramma | Mission Movement
        </title>
        <meta
          name="description"
          content="Krijg toegang tot het volledige 6-weekse programma gericht op militaire voorbereiding. Kracht, mindset, zwemmen, herstel en meer — ontwikkeld door een voormalig marinier."
        />
        <meta
          property="og:title"
          content="6-Weekse Militaire Voorbereidingsprogramma | Mission Movement"
        />
        <meta
          property="og:description"
          content="Voorbereiding op elite-niveau. Fysieke, mentale en tactische training gebaseerd op echte militaire ervaring."
        />
        <meta
          property="og:image"
          content="https://missionmovement.vercel.app/img/mmvmtlogo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:url"
          content="https://missionmovement.vercel.app/pricing"
        />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Purchase Section */}
      <section className="min-h-[calc(100vh-80px)] bg-[#121212] pt-24 md:pt-3 px-6 md:px-10 flex flex-col items-center">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            {/* Headline + Summary */}
            <div className="space-y-4 ">
              <h1 className="h1 animate-fade-in">
                VOLLEDIG PROGRAMMA - 6 WEKEN
              </h1>
              <p className="text-white text-sm md:text-base font-normal max-w-md">
                Train met een doel. Deze 6-weekse cursus is ontworpen om je
                fysiek én mentaal voor te bereiden op de militaire selectie - of
                elke uitdaging die discipline, veerkracht en kracht vereist.
                Inclusief volledige strength & conditioning, zwemmen, hardlopen,
                mindsettraining en herstelprotocollen.
              </p>

              <p className="text-gray-400 text-xs uppercase tracking-wider">
                Eenmalige investering:{" "}
                <span className="text-yellow font-bold">€199,-</span>
              </p>
            </div>
            {/* Quote */}
            <div className="animate-slide-in-left">
              <p className="italic text-gray-300 text-sm md:text-lg font-normal max-w-md">
                "Dit was niet zomaar een programma - het heeft veranderd hoe ik
                train, denk en leef. Ik heb niet alleen mijn selectie gehaald.
                Ik ben onverzettelijk geworden."
              </p>
              <p className="text-yellow text-xs md:text-sm mt-2 tracking-wider uppercase">
                – Voormalige strijder
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center gap-6 animate-fade-in">
            <img
              src="/img/bundle.png"
              loading="lazy"
              alt="Military Preparation Program"
              className="w-[220px] md:w-[300px] rounded shadow-md"
            />
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="btn-lg md:w-[300px]"
            >
              {loading ? "Bezig met verwerken..." : "Start nu"}
            </button>

            {error && (
              <p className="text-red-400 font-secondary text-sm text-center">
                {error}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#101010] py-20 px-6 md:px-20 flex flex-col items-center">
        <h2 className="text-yellow text-2xl md:text-4xl font-secondary uppercase tracking-widest text-center mb-12 border-b border-yellow pb-4 w-full max-w-4xl">
          Wat je krijgt
        </h2>

        <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl text-white font-normal text-sm md:text-base">
          {/* Left Column - Program Overview */}
          <div className="space-y-4 bg-[#121212] rounded-lg p-6 border border-yellow/20 shadow-md">
            <h3 className="text-yellow font-semibold uppercase tracking-widest mb-2">
              Volledige toegang tot het programma
            </h3>
            <ul className="list-none space-y-2">
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span> Programma 01:
                Basisvereisten
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span> Programma 02:
                Fundamentele Kracht
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span> Programma 03:
                Zwemmen of Zinken
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span> Programma 04/05:
                Ondersteuning (Mobiliteit + Oefenbibliotheek)
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span> 6-Weeks
                Gestructureerd Trainingsplan Training Plan
              </li>
            </ul>
          </div>

          {/* Right Column - Web App Access */}
          <div className="space-y-4 bg-[#121212] rounded-lg p-6 border border-yellow/20 shadow-md">
            <h3 className="text-yellow font-semibold uppercase tracking-widest mb-2">
              In de app
            </h3>
            <ul className="list-none space-y-2">
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span> Dagelijkse structuur
                gericht op resultaat
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span> Verantwoording,
                zoals in het echt
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span> Downloadbare PDF’s
                van alle programma’s
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span> Beheersing van
                tactische bewegingen met video’s en uitleg
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span> Echte begeleiding,
                geen generieke schema’s
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span> Voedingsrichtlijnen
              </li>
            </ul>
          </div>
        </div>
      </section>
      <QuoteBlock
        quote="De meeste mensen zullen nooit voelen hoe het is om een plek te verdienen binnen iets groters. Jij wel."
        author="Mission Movement"
      />

      {/* Video Preview */}
      <section className="w-full bg-[#101010] py-20 px-4 flex flex-col items-center">
        <h2 className="text-yellow text-xl md:text-3xl font-secondary tracking-widest uppercase mb-6 text-center">
          Een glimp van de grind. Kijk goed waar je instapt.
        </h2>
        <div className="w-full flex justify-center">
          <div className="w-full flex justify-center">
            <div className="w-full max-w-3xl aspect-video rounded-lg overflow-hidden border border-yellow/20 shadow-xl bg-black">
              <Suspense
                fallback={
                  <div className="text-gray-500">Voorbeeld laden...</div>
                }
              >
                <VideoPreview videoId="YHffzTVE_9Q" />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Quote below video */}
      <p
        ref={enlistRef}
        className={`mt-16 mb-10 text-yellow text-center text-base md:text-lg tracking-wide font-secondary italic transition-all duration-1000 ease-out ${
          enlistVisible
            ? "opacity-100 translate-y-0 blur-0 scale-100"
            : "opacity-0 translate-y-4 blur-sm scale-95"
        }`}
      >
        “Meld je aan. De missie begint op het moment dat jij je toelegt.”
      </p>

      {/* Testimonials */}
      <Reviews />
    </>
  );
};

export default PurchaseAccess;
