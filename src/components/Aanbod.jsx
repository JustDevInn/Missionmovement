import React, { useState, useEffect, lazy, Suspense } from "react";
import Reviews from "../components/Reviews";
import QuoteBlock from "../components/QuoteBlock";
import { useFadeIn } from "../Hooks/useFadeIn";
import { Helmet } from "react-helmet-async";
import PricingCarousel from "./PricingCarousel";

const VideoPreview = lazy(() => import("../components/VideoPreview"));

const Aanbod = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const { ref: enlistRef, visible: enlistVisible } = useFadeIn();

  const openPaymentModal = () => setIsPaymentModalOpen(true);
  const closePaymentModal = () => setIsPaymentModalOpen(false);

  useEffect(() => {
    if (!isPaymentModalOpen) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closePaymentModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPaymentModalOpen]);

  return (
    <>
      <Helmet>
        <title>
          12-Weekse Militaire Voorbereidingsprogramma | Mission Movement
        </title>
        <meta
          name="description"
          content="Krijg toegang tot het volledige 12-weekse programma gericht op militaire voorbereiding. Kracht, mindset, zwemmen, herstel en meer, ontwikkeld door een voormalig marinier."
        />
        <meta
          property="og:title"
          content="12-Weekse Militaire Voorbereidingsprogramma | Mission Movement"
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
        <link
          rel="canonical"
          href="https://missionmovement.vercel.app/pricing"
        />
      </Helmet>

      <PricingCarousel onCheckout={openPaymentModal} />

      {isPaymentModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={closePaymentModal}
          />
          <div
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-xl bg-mmSurface border border-mmBorder rounded-2xl shadow-lg p-6 md:p-8 text-mmText"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-4 right-4 mm-btn"
              onClick={closePaymentModal}
              aria-label="Sluiten"
            >
              Sluiten
            </button>
            <h3 className="mm-h3 text-mmAccent mb-4">
              Betaling tijdelijk niet beschikbaar
            </h3>
            <p className="text-mmTextMuted mb-4">
              De online betaaldienst is op dit moment tijdelijk niet
              beschikbaar.
            </p>
            <p className="text-mmTextMuted mb-4">
              Wil je starten met het traject? Neem dan direct contact op met
              Justin Peeters via:
            </p>
            <div className="space-y-2 text-mmText">
              <p>
                E-mail:{" "}
                <a
                  href="mailto:Peeters.justin@yahoo.com"
                  className="text-mmAccent underline underline-offset-4"
                >
                  Peeters.justin@yahoo.com
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/31649171684"
                  className="text-mmAccent underline underline-offset-4"
                  target="_blank"
                  rel="noreferrer"
                >
                  +31649171684
                </a>
              </p>
            </div>
            <p className="text-mmTextMuted mt-4">
              Je ontvangt dan persoonlijk verdere instructies om te starten.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:Peeters.justin@yahoo.com"
                className="mm-btnPrimary w-full text-center"
              >
                E-mail sturen
              </a>
              <a
                href="https://wa.me/31649171684"
                className="mm-btn w-full text-center"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
              <button
                type="button"
                className="mm-btn w-full"
                onClick={closePaymentModal}
              >
                Sluiten
              </button>
            </div>
          </div>
        </div>
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
                <span className="text-mmAccent mt-1">•</span> 12-Weeks
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
                <span className="text-mmAccent mt-1">•</span> Dagelijkse
                structuur gericht op resultaat
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
                <span className="text-mmAccent mt-1">•</span>{" "}
                Voedingsrichtlijnen
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
