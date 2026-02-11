import React from "react";
import PrimaryLinkButton from "../ui/PrimaryLinkButton";

const CtaSection = ({ cta, theme }) => {
  return (
    <section className={`${theme.section} border-t ${theme.border} py-16 md:py-20`}>
      <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-20">
        <div className="bg-mmSurface rounded-2xl border border-mmBorder shadow-sm p-8 md:p-10 text-center">
          <h3
            className={`${theme.textPrimary} text-2xl md:text-3xl font-display uppercase tracking-widest`}
          >
            {cta.heading}
          </h3>
          <div
            className={`h-[3px] w-16 ${theme.accentLine} rounded-full my-4 opacity-90 mx-auto`}
          />
          <p className="text-[16px] md:text-[18px] leading-[1.8] text-mmTextMuted mb-6">
            {cta.body}
          </p>
          <PrimaryLinkButton to={cta.buttonLink}>
            {cta.buttonText}
          </PrimaryLinkButton>
          <p className="mt-6 text-sm md:text-base text-mmTextMuted">
            {cta.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
