import React from "react";
import Spinner from "../components/Spinner";

const plans = [
  {
    id: "basic",
    title: "Zelfstandig Traject",
    price: "€39,-",
    features: [
      "✓ 12-weekse structuur",
      "✓ Downloadbare PDF",
      "✕ Geen coaching of extra modules",
    ],
    description:
      "Voor zelfdiscipline zonder afleiding. Alleen toegang tot het 12-weekse trainingsschema als PDF.",
  },
  /*
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
  */
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

      {/* Desktop/Tablet */}
      <div className="hidden md:grid w-full max-w-5xl mx-auto grid-cols-2 gap-10 justify-items-center items-stretch">
        {plans.map((plan) => (
          <Card key={plan.id} data={plan} onCheckout={onCheckout} />
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden w-full mt-10">
        <div className="flex w-full gap-6 overflow-x-auto snap-x snap-mandatory px-4 -mx-4 pb-4 scroll-smooth touch-pan-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {plans.map((plan) => (
            <div key={plan.id} className="min-w-full flex justify-center snap-center">
              <Card data={plan} onCheckout={onCheckout} />
            </div>
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
          ? "border-mmAccent ring-1 ring-mmAccent/20"
          : muted
          ? "opacity-70"
          : ""
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
