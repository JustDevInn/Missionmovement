import React from "react";
import PrimaryLinkButton from "../ui/PrimaryLinkButton";

const ServiceSectionCard = ({ section, theme }) => {
  return (
    <div
      className={`${theme.card} rounded-2xl border ${theme.border} shadow-sm p-6 md:p-8`}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="flex-shrink-0 flex items-center justify-center h-[120px] md:h-[160px] w-[120px] md:w-[160px]">
          <div
            className={`h-full w-full rounded-xl border ${theme.border} ${theme.surface} flex items-center justify-center`}
          >
            <img
              src={section.logo}
              alt={`${section.title} logo`}
              className={`h-16 w-16 md:h-20 md:w-20 object-contain ${
                section.logoClassName || ""
              }`}
              onLoad={(event) => {
                const fallback = event.currentTarget.nextSibling;
                if (fallback) {
                  fallback.classList.add("hidden");
                }
              }}
              onError={(event) => {
                event.currentTarget.classList.add("hidden");
                const fallback = event.currentTarget.nextSibling;
                if (fallback) {
                  fallback.classList.remove("hidden");
                }
              }}
            />
            <span
              className={`hidden text-[10px] uppercase tracking-[0.2em] ${theme.accentText} text-center px-2 font-display`}
            >
              {section.title}
            </span>
          </div>
        </div>

        <div className={`border-l-[3px] ${theme.accentBorder} pl-6`}>
          <h3
            className={`${theme.textPrimary} text-xl md:text-3xl font-display uppercase tracking-widest mb-3`}
          >
            {section.title}
          </h3>
          <p className="sectionLead max-w-2xl">{section.intro}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div
          className={`border ${theme.border} rounded-xl ${theme.surface} p-4 md:p-5`}
        >
          <h4
            className={`${theme.accentText} font-display text-sm md:text-base uppercase mb-3 cardTitle`}
          >
            Instroomroutes
          </h4>
          <ul className="list-disc pl-5 space-y-2 marker:text-mmTextMuted">
            {section.instroom.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div
          className={`border ${theme.border} rounded-xl ${theme.surface} p-4 md:p-5`}
        >
          <h4
            className={`${theme.accentText} font-display text-sm md:text-base uppercase mb-3 cardTitle`}
          >
            Rollen & doorgroei
          </h4>
          <ul className="list-disc pl-5 space-y-2 marker:text-mmTextMuted">
            {section.rollen.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div
          className={`border ${theme.border} rounded-xl ${theme.surface} p-4 md:p-5 md:col-span-2`}
        >
          <h4
            className={`${theme.accentText} font-display text-sm md:text-base uppercase mb-3 cardTitle`}
          >
            Waar Mission Movement bij helpt
          </h4>
          <ul className="list-disc pl-5 space-y-2 marker:text-mmTextMuted">
            {section.helpt.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <PrimaryLinkButton to="/contact#contact-form">
          Plan gratis intake
        </PrimaryLinkButton>
      </div>
    </div>
  );
};

export default ServiceSectionCard;
