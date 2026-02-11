import React from "react";

const HeroSection = ({ hero, theme }) => {
  return (
    <section className="serviceHero relative h-[400px] md:h-[500px] w-full">
      <img
        src={hero.imageSrc}
        alt={hero.imageAlt}
        className="absolute inset-0 w-full h-full object-cover object-center scale-110 z-0"
      />
      <div className={`absolute inset-0 z-10 ${theme.heroOverlay}`} />
      <div className="serviceHeroContent relative z-20 h-full w-full flex flex-col justify-center items-center text-center px-6">
        <h1
          className={`${theme.heroTitle} text-[32px] md:text-[54px] font-display uppercase tracking-[0.08em]`}
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.55)" }}
        >
          {hero.title}
        </h1>
        <div
          className={`h-[3px] w-12 ${theme.accentLine} rounded-full mt-4 opacity-90`}
        />
        <div className="serviceHeroSubtitle">
          <p className="leading-relaxed font-medium text-[15px] md:text-lg">
            {hero.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
