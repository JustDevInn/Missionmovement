import React, { useRef, useState } from "react";
import Spinner from "../components/Spinner";

const plans = [
  {
    id: "zelfstandig",
    title: "Zelfstandig Programma",
    price: "€89,-",
    description:
      "Voor kandidaten richting Defensie die zelfstandig willen trainen met een duidelijke 12-weekse structuur.",
    features: [
      "✓ 12-weeks militair voorbereidingsprogramma",
      "✓ Downloadbaar programma / PDF",
      "✓ Training voor kracht, conditie, mobiliteit en belastbaarheid",
      "✓ Geschikt voor zelfstandige uitvoering",
      "✕ Geen intake of persoonlijke aanpassingen",
      "✕ Geen coaching/contact",
    ],
  },
  {
    id: "persoonlijk",
    title: "Persoonlijk 12-Weeks Traject",
    price: "€189,-",
    description:
      "Voor kandidaten richting Defensie of veiligheidsdiensten die 12 weken persoonlijke richting, intake en aanpassing willen.",
    features: [
      "✓ 12-weeks persoonlijk traject",
      "✓ Intakegesprek",
      "✓ Assessment van startniveau",
      "✓ Programma aangepast op jouw doel",
      "✓ Geschikt voor Defensie, Politie, Brandweer en KMar",
      "✓ Follow-up/contact tijdens je voorbereiding",
      "✓ Persoonlijke correcties en advies",
    ],
  },
];

const PricingCarousel = ({ onCheckout, loading = false }) => {
  const mobileScrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMobileScroll = () => {
    const el = mobileScrollRef.current;
    if (!el) return;
    const firstItem = el.firstElementChild;
    if (!firstItem) return;
    const gap = parseFloat(window.getComputedStyle(el).columnGap) || 0;
    const itemWidth = firstItem.getBoundingClientRect().width + gap;
    if (itemWidth === 0) return;
    const nextIndex = Math.round(el.scrollLeft / itemWidth);
    setActiveIndex(Math.max(0, Math.min(plans.length - 1, nextIndex)));
  };

  return (
    <div className="relative w-full flex flex-col items-center py-24 md:py-20 px-6 bg-mmPage">
      {loading && (
        <div className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center">
          <Spinner color="border-mmAccent" />
        </div>
      )}

      <h2 className="mm-h2 text-center mb-16 text-mmText">Kies jouw aanpak</h2>
      <p className="max-w-3xl text-center text-mmTextMuted text-base md:text-lg leading-relaxed mb-12 -mt-8">
        Kies zelfstandig als je richting Defensie traint en zelf wilt uitvoeren.
        Kies persoonlijk als je begeleiding, intake en aanpassing nodig hebt —
        of als je richting Politie, Brandweer of KMar werkt.
      </p>

      {/* Desktop/Tablet */}
      <div className="hidden md:grid w-full max-w-5xl mx-auto grid-cols-2 gap-10 justify-items-center items-stretch">
        {plans.map((plan) => (
          <Card key={plan.id} data={plan} onCheckout={onCheckout} />
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden w-screen max-w-none mt-10 -mx-6">
        <p className="text-center text-xs uppercase tracking-widest text-mmTextMuted mb-4">
          Swipe om opties te vergelijken
        </p>
        <div
          ref={mobileScrollRef}
          onScroll={handleMobileScroll}
          className="flex w-full gap-4 overflow-x-auto snap-x snap-mandatory px-[7vw] pb-5 scroll-smooth touch-pan-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`shrink-0 basis-[84vw] max-w-[360px] flex justify-center snap-center transition-all duration-300 ${
                index === activeIndex
                  ? "scale-100 opacity-100"
                  : "scale-[0.96] opacity-80"
              }`}
            >
              <Card
                data={plan}
                onCheckout={onCheckout}
                highlighted={index === activeIndex}
                muted={index !== activeIndex}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          {plans.map((_, i) => (
            <span
              key={i}
              className={`w-2.5 h-2.5 rounded-full border border-mmBorder transition-all ${
                i === activeIndex
                  ? "bg-mmAccent border-mmAccent"
                  : "bg-transparent"
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
      className={`w-full max-w-[360px] h-full flex flex-col bg-mmSurface border border-mmBorder rounded-2xl shadow-sm px-6 py-8 transition-all duration-300 ${
        highlighted
          ? "border-mmBorder ring-1 ring-white/10 shadow-sm"
          : muted
            ? "opacity-90"
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
      <p className="text-mmTextMuted mt-3 mb-4 text-base md:text-lg">
        {description}
      </p>
      <ul className="text-mmTextMuted text-sm space-y-2 mb-4">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <p className="text-mmText font-semibold text-lg mt-auto mb-4">{price}</p>
      <button className="mm-btnPrimary w-full" onClick={() => onCheckout(id)}>
        {id === "zelfstandig" ? "Start zelfstandig" : "Start met begeleiding"}
      </button>
    </div>
  );
};

export default PricingCarousel;
