import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import Spinner from "../components/Spinner";

const plans = [
  {
    id: "basic",
    title: "Zelfstandig Traject",
    price: "€39,-",
    features: [
      "✓ 6-weekse structuur",
      "✓ Downloadbare PDF",
      "✕ Geen coaching of extra modules",
    ],
    description:
      "Voor zelfdiscipline zonder afleiding. Alleen toegang tot het 6-weekse trainingsschema als PDF.",
  },
  {
    id: "standard",
    title: "Volledig Programma",
    price: "€79,-",
    features: [
      "✓ Alle 6 modules",
      "✓ App-toegang + video’s",
      "✓ PDF downloads",
      "✕ Geen persoonlijke begeleiding",
    ],
    description:
      "De complete voorbereiding met kracht, mindset, herstel en meer. Perfect voor zelfstartende strijders.",
  },
  {
    id: "coaching",
    title: "Met Coaching",
    price: "€149,-",
    features: [
      "✓ Alles van Volledig Programma",
      "✓ WhatsApp support",
      "✓ 2x videobel sessie",
      "✓ Persoonlijke correcties",
    ],
    description:
      "Inclusief directe begeleiding. Voor wie écht alles uit zichzelf wil halen met mijn ondersteuning.",
  },
];

const PricingCarousel = ({ onCheckout, loading = false }) => {
  const [index, setIndex] = useState(1);

  const next = () => setIndex((prev) => (prev + 1) % plans.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + plans.length) % plans.length);

  const getPlan = (offset) =>
    plans[(index + offset + plans.length) % plans.length];

  const handlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    trackTouch: true,
    preventScrollOnSwipe: true,
  });

  return (
    <div className="relative w-full flex flex-col items-center py-24 md:py-20 px-6 bg-mmPage">
      {loading && (
        <div className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center">
          <Spinner color="border-mmAccent" />
        </div>
      )}

      <h2 className="mm-h2 text-center mb-16 text-mmText">
        Kies jouw aanpak
      </h2>

      {/* Desktop */}
      <div className="relative hidden md:flex items-center justify-center w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0.3, scale: 0.85, x: "-100%" }}
          animate={{ opacity: 0.4, scale: 0.85, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={prev}
          className="absolute left-0 cursor-pointer hover:opacity-80 transition-all z-10"
        >
          <Card data={getPlan(-1)} muted onCheckout={onCheckout} />
        </motion.div>

        <motion.div
          key={getPlan(0).id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="z-20"
        >
          <Card data={getPlan(0)} highlighted onCheckout={onCheckout} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.3, scale: 0.85, x: "100%" }}
          animate={{ opacity: 0.4, scale: 0.85, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={next}
          className="absolute right-0 cursor-pointer hover:opacity-80 transition-all z-10"
        >
          <Card data={getPlan(1)} muted onCheckout={onCheckout} />
        </motion.div>
      </div>

      {/* Mobile */}
      <div
        className="md:hidden w-full max-w-xs flex flex-col items-center mt-10"
        {...handlers}
      >
        <Card data={getPlan(0)} highlighted onCheckout={onCheckout} />

        {/* Bullet indicators */}
        <div className="flex justify-center mt-10 space-x-2">
          {plans.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full border border-mmBorder transition-all ${
                i === index ? "bg-mmAccent border-mmAccent" : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ data, highlighted, muted, onCheckout }) => {
  const { title, description, price, features, id } = data;

  return (
    <div
      className={`w-[280px] md:w-[360px] bg-mmSurface border border-mmBorder rounded-2xl shadow-sm px-6 py-8 transition-all duration-300 ${
        highlighted
          ? "border-mmAccent ring-1 ring-mmAccent/20 scale-[1.03] z-20"
          : "opacity-70 scale-95"
      }`}
    >
      <h3
        className={`text-lg md:text-xl font-display uppercase tracking-widest ${
          highlighted ? "text-mmAccent" : "text-mmText"
        }`}
      >
        {title}
      </h3>
      <p className="text-mmTextMuted mt-3 mb-4 text-base md:text-lg">{description}</p>
      <ul className="text-mmTextMuted text-sm space-y-2 mb-4">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <p className="text-mmText font-semibold text-lg mb-4">{price}</p>
      <button className="mm-btnPrimary w-full" onClick={() => onCheckout(id)}>
        {id === "basic"
          ? "Start dit traject"
          : id === "standard"
          ? "Volledig starten"
          : "Begeleid starten"}
      </button>
    </div>
  );
};

export default PricingCarousel;
