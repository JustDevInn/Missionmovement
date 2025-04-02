import React from "react";

const Banners = () => {
  const bannerData = [
    {
      bg: "marsenopleiding",
      title: "MILITARY PROGRAM 01: BASIC REQUIREMENTS",
      text: "Whether you're looking to join the military, are already in the service, or need a physical and mental push — this program prepares you for all physical aspects of military service.",
    },
    {
      bg: "marsof",
      title: "MILITARY PROGRAM 02: FOUNDATIONAL STRENGTH",
      text: "Reach your full potential. Develop strength, grit, and mental clarity. Build the base required to thrive in the military — and in life.",
    },
    {
      bg: "spelioladder",
      title: "MILITARY PROGRAM 03: SWIM OR SINK",
      text: "A full-spectrum 6-week program focused on swimming, breath control, mobility, and confidence in the water. Structured and progressive.",
    },
    {
      bg: "hlo",
      title: "MILITARY PROGRAM 04/05: SUPPORT",
      text: "Support systems matter. This program focuses on injury prevention, mental health, and recovery strategies to build long-term resilience.",
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
              <h2 className="h2-teko text-yellow mb-4">{item.title}</h2>
              <p className="text-lg font-light tracking-wider text-white text-justify">
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
