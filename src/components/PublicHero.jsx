import React from "react";
import { Link } from "react-router-dom";
import Container from "./layout/Container";

const PublicHero = ({
  eyebrow,
  title,
  subtitle,
  button,
  imageSrc,
  imageAlt = "",
  imageClassName = "object-center",
  backgroundClass = "",
}) => {
  return (
    <section
      className={`relative min-h-[520px] md:min-h-[620px] flex items-center overflow-hidden border-b border-mmBorder ${
        imageSrc ? "" : backgroundClass
      }`}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`absolute inset-0 h-full w-full object-cover ${imageClassName}`}
          loading="eager"
          fetchPriority="high"
        />
      )}
      <div className="absolute inset-0 mm-heroOverlay" />
      <div className="absolute inset-0 bg-black/25 md:bg-black/10" />

      <Container className="relative z-10 py-16 md:py-20">
        <div className="w-full max-w-4xl">
          {eyebrow && (
            <p className="font-display uppercase tracking-[0.18em] text-mmAccent text-sm md:text-base mb-4">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display uppercase tracking-[0.08em] sm:tracking-widest text-white text-[34px] sm:text-[42px] md:text-[76px] leading-[0.98] break-words max-w-full">
            {title}
          </h1>
          <div className="h-[3px] w-20 bg-mmAccent rounded-full my-6" />
          {subtitle && (
            <p className="text-white/90 text-base md:text-xl leading-relaxed max-w-3xl whitespace-pre-line">
              {subtitle}
            </p>
          )}
          {button && (
            <div className="mt-8">
              <Link to={button.to}>
                <button className="mm-btnPrimary uppercase font-bold tracking-widest h-[56px] px-8">
                  {button.label}
                </button>
              </Link>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default PublicHero;
