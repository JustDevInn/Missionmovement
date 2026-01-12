import React from "react";

const Banners = () => {
  const bannerData = [
    {
      bg: "marsenopleiding",
      title: "MILITAIR PROGRAMMA 01: BASISVEREISTEN",
      text: "Of je nu het leger in wilt, al in dienst bent, of een fysieke en mentale boost nodig hebt - dit programma bereidt je voor op alle fysieke aspecten van militaire dienst.",
    },
    {
      bg: "marsof",
      title: "MILITAIR PROGRAMMA 02: FUNDAMENTELE KRACHT",
      text: "Bereik je volledige potentieel. Ontwikkel kracht, doorzettingsvermogen en mentale helderheid. Bouw de basis die nodig is om sterk te staan in het leger - en in het leven.",
    },
    {
      bg: "spelioladder",
      title: "MILITAIR PROGRAMMA 03: ZWEMMEN OF ZINKEN",
      text: "Een volledig 6-weeks programma gericht op zwemmen, ademcontrole, mobiliteit en zelfvertrouwen in het water. Gestructureerd en progressief.",
    },
    {
      bg: "hlo",
      title: "MILITAIR PROGRAMMA 04/05: ONDERSTEUNING",
      text: "Ondersteunende systemen zijn essentieel. Dit programma richt zich op blessurepreventie, mentale gezondheid en herstelstrategieën voor langdurige weerbaarheid.",
    },
  ];

  return (
    <div>
      {bannerData.map((item, index) => (
        <section key={index} className="relative w-screen">
          <div
            style={{ backgroundImage: `url('/img/${item.bg}.jpg')` }}
            className="h-[500px] sm:h-[600px] w-full bg-fixed bg-cover bg-center flex flex-col justify-center items-start px-6 sm:px-10 lg:px-20 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="font-display uppercase tracking-widest text-mmAccent text-2xl md:text-3xl mb-4">
                {item.title}
              </h2>
              <p className="text-lg font-normal text-white/90 leading-relaxed text-justify">
                {item.text}
              </p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Banners;
