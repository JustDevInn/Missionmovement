import React from "react";

const MobileBanners = () => {
  return (
    <div>
      {[
        {
          bg: "bg-marsen",
          title: "MILITARY PROGRAM 01: BASIC REQUIREMENTS",
          text: "Whether you are looking to join the military, are already in the service or looking for a physical and mental push, our program is designed to help you meet the physical challenges of the job. We cover all physical aspects of military service.",
        },
        {
          bg: "bg-marsof",
          title: "MILITARY PROGRAM 02: FOUNDATIONAL STRENGTH",
          text: "Our mission is to help you reach your full potential and achieve your dreams of serving in the military. We provide the tools and training you need to succeed, physically and mentally.",
        },
        {
          bg: "bg-spelioladder",
          title: "MILITARY PROGRAM 03: SWIM OR SINK",
          text: "Efficient, expertly designed training. 6-week program covering military basics, fitness, nutrition, mental health. Personalised reviews ensure optimal prep. Sessions include key subjects like mobility, breath work, and more for comprehensive preparation.",
        },
        {
          bg: "bg-hlo",
          title: "MILITARY PROGRAM 04/05: SUPPORT",
          text: "Our mission is to help you reach your full potential and achieve your dreams of serving in the military. By providing the tools and training you need to succeed, we help you physically and mentally become the best version of yourself.",
        },
      ].map((item, index) => (
        <section key={index} className="relative h-screen w-screen my-10">
          {/* Background Image */}
          <div className={`absolute inset-0 ${item.bg} bg-cover bg-center bg-fixed`} />

          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-end text-left px-10 pb-20 text-white">
            <h2 className="h2-teko text-yellow mb-5">{item.title}</h2>
            <p className="text-lg font-light tracking-wider max-w-2xl text-justify">{item.text}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default MobileBanners;
