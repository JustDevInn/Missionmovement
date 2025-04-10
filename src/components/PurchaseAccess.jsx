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
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to connect to payment service.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>6-Week Military Prep Program | Mission Movement</title>
        <meta
          name="description"
          content="Access the complete 6-week program designed for military preparation. Strength, mindset, swimming, recovery, and more — built by a former Royal Marine."
        />
        <meta
          property="og:title"
          content="6-Week Military Prep Program | Mission Movement"
        />
        <meta
          property="og:description"
          content="Elite-level preparation. Physical, mental, and tactical training based on real military experience."
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
                FULL PROGRAM ACCESS — 6 WEEKS
              </h1>
              <p className="text-white text-sm md:text-base font-light max-w-md">
                Train with purpose. This 6-week course is built to prepare you
                physically and mentally for military selection — or any
                challenge that demands discipline, resilience, and strength.
                Includes complete strength & conditioning, swimming, running,
                mindset work, and recovery protocols.
              </p>

              <p className="text-gray-400 text-xs uppercase tracking-wider">
                One-time investment:{" "}
                <span className="text-yellow font-bold">€199,-</span>
              </p>
            </div>
            {/* Quote */}
            <div className="animate-slide-in-left">
              <p className="italic text-gray-500 text-sm md:text-lg font-light max-w-md">
                "This wasn’t just a program — it rewired how I train, think, and
                live. I didn’t just pass my selection. I became unshakable."
              </p>
              <p className="text-yellow text-xs md:text-sm mt-2 tracking-wider uppercase">
                – Former Marine Prep Client
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
              className="btn-lg w-full md:w-auto"
            >
              {loading ? "Processing..." : "Purchase"}
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
          What You Get
        </h2>

        <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl text-white font-light text-sm md:text-base">
          {/* Left Column - Program Overview */}
          <div className="space-y-4 bg-[#121212] rounded-lg p-6 border border-yellow/20 shadow-md">
            <h3 className="text-yellow font-semibold uppercase tracking-wider mb-2">
              Full Program Access
            </h3>
            <ul className="list-none space-y-2">
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span> Program 01: Basic
                Requirements
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span> Program 02:
                Foundational Strength
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span> Program 03: Swim or
                Sink
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span> Program 04/05:
                Support (Mobility + Exercise Library)
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span> 6-Week Structured
                Training Plan
              </li>
            </ul>
          </div>

          {/* Right Column - Web App Access */}
          <div className="space-y-4 bg-[#121212] rounded-lg p-6 border border-yellow/20 shadow-md">
            <h3 className="text-yellow font-semibold uppercase tracking-wider mb-2">
              Inside the Web App
            </h3>
            <ul className="list-none space-y-2">
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span> Daily structure
                built for results
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span> Accountability, just
                like the real thing
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span> Downloadable PDFs of
                all programs
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span> Tactical movement
                mastery with videos & descriptions
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span> Real guidance, not
                generic plans
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span> Nutrition guidance
              </li>
            </ul>
          </div>
        </div>
      </section>
      <QuoteBlock
        quote="Most never feel what it's like to earn a place in something greater. You can."
        author="Mission Movement"
      />

      {/* Video Preview */}
      <section className="w-full bg-[#101010] py-20 px-4 flex flex-col items-center">
        <h2 className="text-yellow text-xl md:text-3xl font-secondary tracking-widest uppercase mb-6 text-center">
          A glimpse into the grind. Watch what you're stepping into.
        </h2>
        <div className="w-full flex justify-center">
          <div className="w-full flex justify-center">
            <div className="w-full max-w-3xl aspect-video rounded-lg overflow-hidden border border-yellow/20 shadow-xl bg-black">
              <Suspense
                fallback={
                  <div className="text-gray-500">Loading preview...</div>
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
        “Enlist now. The mission begins the moment you commit.”
      </p>

      {/* Testimonials */}
      <Reviews />
    </>
  );
};

export default PurchaseAccess;
