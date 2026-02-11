import React from "react";

const IntroSection = ({ intro, theme }) => {
  const bodyParts = intro.body.split("\n\n");
  const primaryBody = bodyParts[0] || "";
  const secondaryBody = bodyParts.slice(1).join("\n\n");

  return (
    <section className={theme.section}>
      <div className="max-w-5xl mx-auto py-16 px-6 md:px-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="flex-shrink-0 flex items-center justify-center h-[160px] md:h-[220px]">
          <img
            src={intro.emblemSrc}
            alt={intro.emblemAlt}
            className="h-full w-auto object-contain"
            onError={(event) => {
              event.currentTarget.classList.add("hidden");
              const fallback = event.currentTarget.nextSibling;
              if (fallback) fallback.classList.remove("hidden");
            }}
          />
          <div className="hidden h-full w-[160px] md:w-[220px] items-center justify-center">
            <span
              className={`${theme.accentText} font-display text-3xl md:text-5xl tracking-[0.18em]`}
            >
              VD
            </span>
          </div>
        </div>

        <div className={`border-l-[3px] ${theme.accentBorder} pl-6`}>
          <h2
            className={`${theme.textPrimary} text-2xl md:text-4xl font-display uppercase tracking-widest mb-4`}
          >
            {intro.heading}
          </h2>

          <p className="sectionLead">
            {primaryBody}
            <br className="hidden md:block" />
            <br />
            {secondaryBody}
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
