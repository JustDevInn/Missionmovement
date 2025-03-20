import React from "react";

const Banners = () => {
  return (
    <div>
      {[
        {
          bg: "marsenopleiding",
          title: "MILITARY PROGRAM 01: BASIC REQUIREMENTS",
          text: "Whether you are looking to join the military, are already in the service or looking for a physical and mental push, our program is designed to help you meet the physical challenges of the job. We cover all physical aspects of military service.",
        },
        {
          bg: "marsof",
          title: "MILITARY PROGRAM 02: FOUNDATIONAL STRENGTH",
          text: "Our mission is to help you reach your full potential and achieve your dreams of serving in the military. We provide the tools and training you need to succeed, physically and mentally.",
        },
        {
          bg: "spelioladder",
          title: "MILITARY PROGRAM 03: SWIM OR SINK",
          text: "Efficient, expertly designed training. 6-week program covering military basics, fitness, nutrition, mental health. Personalised reviews ensure optimal prep. Sessions include key subjects like mobility, breath work, and more for comprehensive preparation.",
        },
        {
          bg: "hlo",
          title: "MILITARY PROGRAM 04/05: SUPPORT",
          text: "Our mission is to help you reach your full potential and achieve your dreams of serving in the military. By providing the tools and training you need to succeed, we help you physically and mentally become the best version of yourself.",
        },
      ].map((item, index) => (
        <section key={index} className="relative h-screen w-screen">
          {/* Background Image & Text Container Combined */}
          <div 
            style={{ backgroundImage: `url('/img/${item.bg}.jpg')` }} 
            className="h-[600px] w-screen bg-fixed bg-cover bg-center flex flex-col justify-center items-start px-10 lg:px-20 text-white relative"
          >
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

            {/* Content (Text must be inside the div with the background) */}
            <div className="relative z-10 max-w-2xl">
              <h2 className="h2-teko text-yellow mb-5">{item.title}</h2>
              <p className="text-lg font-light tracking-wider text-justify">{item.text}</p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Banners;
