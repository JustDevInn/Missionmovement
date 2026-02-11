import React from "react";

const UnitIntroSection = ({ intro }) => {
  const bodyParts = intro.body.split("\n\n");
  const primaryBody = bodyParts[0] || "";
  const secondaryBody = bodyParts.slice(1).join("\n\n");

  return (
    <section className="bg-mmPage py-16 px-6 md:px-10 lg:px-20 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="flex-shrink-0 flex items-center justify-center h-[160px] md:h-[220px]">
          <img
            src={intro.emblemSrc}
            alt={intro.emblemAlt}
            className="h-full w-auto object-contain"
            onError={(event) => {
              if (!intro.fallbackText) return;
              event.currentTarget.classList.add("hidden");
              const fallback = event.currentTarget.nextSibling;
              if (fallback) fallback.classList.remove("hidden");
            }}
          />
          {intro.fallbackText ? (
            <div className="hidden h-full w-[160px] md:w-[220px] items-center justify-center">
              <span className="text-mmAccent font-display text-3xl md:text-5xl tracking-[0.18em]">
                {intro.fallbackText}
              </span>
            </div>
          ) : null}
        </div>

        <div className={`border-l-[3px] ${intro.accentBorder} pl-6`}>
          <h2 className="text-mmText text-2xl md:text-4xl font-display uppercase tracking-widest mb-4">
            {intro.heading}
          </h2>
          <p className="text-mmTextMuted leading-relaxed text-base md:text-lg">
            {primaryBody}
            {secondaryBody ? (
              <>
                <br className="hidden md:block" />
                <br />
                {secondaryBody}
              </>
            ) : null}
          </p>
        </div>
      </div>
    </section>
  );
};

export default UnitIntroSection;
