import React, { useState, lazy, Suspense } from "react";
import Reviews from "../components/Reviews";
import QuoteBlock from "../components/QuoteBlock";
import { useFadeIn } from "../Hooks/useFadeIn";
import { Helmet } from "react-helmet-async";
import PricingCarousel from "./PricingCarousel";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const VideoPreview = lazy(() => import("../components/VideoPreview"));

const Aanbod = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { ref: enlistRef, visible: enlistVisible } = useFadeIn();
  const { user, loading: authLoading } = useAuth();

  const handleCheckout = async (productId) => {
    setError("");

    if (authLoading) {
      setError("Even geduld terwijl we je status controleren...");
      return;
    }

    if (!user) {
      setError(
        "Maak een account aan of log in om dit product te kopen. Je account geeft je toegang tot de backoffice waar je het programma kunt volgen."
      );
      navigate("/signup");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:4242/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
          email: user.email,
        }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        setError("Er is iets fout gegaan, probeer het opnieuw.");
      }
    } catch (err) {
      setError("Verbinding met de betaaldienst mislukt.");
    } finally {
      setIsLoading(false);
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
          content="Krijg toegang tot het volledige 6-weekse programma gericht op militaire voorbereiding. Kracht, mindset, zwemmen, herstel en meer, ontwikkeld door een voormalig marinier."
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

      <PricingCarousel onCheckout={handleCheckout} loading={isLoading} />

      {error && (
        <p className="text-red-500 text-center mt-4 font-medium">{error}</p>
      )}

      <section className="w-full bg-mmPage py-20 px-6 md:px-20 flex flex-col items-center">
        <h2 className="mm-h2 text-center mb-12 border-b border-mmBorder pb-4 w-full max-w-4xl text-mmText">
          Wat je krijgt
        </h2>

        <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl text-mmTextMuted text-sm md:text-base">
          <div className="mm-card space-y-4 p-6">
            <h3 className="font-display uppercase tracking-widest text-mmAccent mb-2">
              Volledige toegang tot het programma
            </h3>
            <ul className="list-none space-y-2">
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span> Programma 01:
                Basisvereisten
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span> Programma 02:
                Fundamentele Kracht
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span> Programma 03:
                Zwemmen of Zinken
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span> Programma 04/05:
                Ondersteuning (Mobiliteit + Oefenbibliotheek)
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span> 6-Weeks
                Gestructureerd Trainingsplan
              </li>
            </ul>
          </div>

          <div className="mm-card space-y-4 p-6">
            <h3 className="font-display uppercase tracking-widest text-mmAccent mb-2">
              In de app
            </h3>
            <ul className="list-none space-y-2">
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span> Dagelijkse structuur
                gericht op resultaat
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span> Verantwoording,
                zoals in het echt
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span> Downloadbare PDF’s
                van alle programma’s
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span> Beheersing van
                tactische bewegingen met video’s en uitleg
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span> Echte begeleiding,
                geen generieke schema’s
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-mmAccent mt-1">•</span> Voedingsrichtlijnen
              </li>
            </ul>
          </div>
        </div>
      </section>

      <QuoteBlock
        quote="De meeste mensen zullen nooit voelen hoe het is om een plek te verdienen binnen iets groters. Jij wel."
        author="Mission Movement"
      />

      <section className="w-full bg-mmPage py-20 px-4 flex flex-col items-center">
        <h2 className="mm-h2 text-mmText text-center text-xl md:text-3xl mb-6">
          Een glimp van de grind. Kijk goed waar je instapt.
        </h2>
        <div className="w-full flex justify-center">
          <div className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden border border-mmBorder shadow-sm bg-black">
            <Suspense
              fallback={<div className="text-gray-500">Voorbeeld laden...</div>}
            >
              <VideoPreview videoId="YHffzTVE_9Q" />
            </Suspense>
          </div>
        </div>
      </section>

      <p
        ref={enlistRef}
        className={`mt-16 mb-10 text-mmAccent text-center text-base md:text-lg tracking-wide italic transition-all duration-1000 ease-out ${
          enlistVisible
            ? "opacity-100 translate-y-0 blur-0 scale-100"
            : "opacity-0 translate-y-4 blur-sm scale-95"
        }`}
      >
        “Meld je aan. De missie begint op het moment dat jij je toelegt.”
      </p>

      <Reviews />
    </>
  );
};

export default Aanbod;
