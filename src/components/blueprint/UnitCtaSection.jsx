import React from "react";
import PrimaryLinkButton from "../ui/PrimaryLinkButton";

const UnitCtaSection = ({ cta, ButtonComponent = PrimaryLinkButton }) => {
  const bodyParts = cta.body.split("\n\n");
  const primaryBody = bodyParts[0] || "";
  const secondaryBody = bodyParts.slice(1).join("\n\n");

  return (
    <section className="relative bg-mmSurface border border-mmBorder text-mmText py-12 my-10 px-6 text-center shadow-sm overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <p className="uppercase text-xs tracking-widest mb-2 font-bold text-mmTextMuted">
          {cta.eyebrow}
        </p>
        <h3 className="text-3xl md:text-4xl font-bold tracking-wide mb-3">
          {cta.heading}
        </h3>
        <p className="text-base md:text-lg mb-6 text-mmTextMuted">
          {primaryBody}
          {secondaryBody ? (
            <>
              <br className="hidden md:block" />
              <br />
              {secondaryBody}
            </>
          ) : null}
        </p>
        <div className="flex justify-center items-center">
          <ButtonComponent to={cta.buttonTo} className="text-base md:text-lg">
            {cta.buttonText}
          </ButtonComponent>
        </div>
      </div>
    </section>
  );
};

export default UnitCtaSection;
