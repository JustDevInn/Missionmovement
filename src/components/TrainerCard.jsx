import React from "react";
import { FaCheck } from "react-icons/fa6";
const Trainer = "/img/profilepicturehd.png";

const TrainerCard = () => {
  return (
    <>
      {/* Trainer Section */}
      <section className="w-full bg-black py-12 min-h-screen flex flex-col justify-center">
        <h1 className="h1-teko text-yellow text-center mb-10">Trainers</h1>

        <div className="flex flex-col lg:flex-row gap-10 px-5 lg:px-20 max-w-screen-xl mx-auto">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-brown font-secondary text-[22px] md:text-[32px] lg:text-[40px] uppercase font-light leading-tight tracking-wide">
              Justin Peeters, Oprichter Mission Movement
            </h2>
            <p className="text-white font-light text-justify leading-relaxed text-sm md:text-base tracking-wide">
              Met een decennium aan elite-dienst in het Korps Mariniers,
              waaronder vier jaar in de gerespecteerde MARSOC-eenheden, brengt
              Justin bewezen expertise naar Mission Movement.
              <br />
              <br />
              Na zijn militaire carrière runde hij vijf jaar lang een eigen
              personal training gym, waar hij zijn vaardigheden verfijnde op het
              gebied van fysieke conditie en mentale weerbaarheid.
              <br />
              <br />
              Als ervaren coach met negen jaar op de teller, combineert Justin
              militaire precisie met coachingsvaardigheid. Zijn holistische
              aanpak omvat bergbeklimmen, surfen en gymsessies voor een complete
              fitnesservaring.
              <br />
              <br />
              Zijn toewijding aan blessurepreventie en duurzaamheid in
              veeleisende carrières vormt zijn drijfveer. Justin zorgt ervoor
              dat mensen zowel fysiek als mentaal voorbereid zijn — zodat ze op
              hun eigen voorwaarden kunnen stoppen, en niet door vermijdbare
              tegenslagen.
            </p>
          </div>

          {/* Image + Stats */}
          <div className="lg:w-1/2 flex flex-col items-center justify-center ">
            <img
              src={Trainer}
              alt="Justin Peeters"
              className="w-[240px] h-[320px] object-cover object-[center_23%] rounded-xl shadow-lg"
            />

            <div className="mt-6 w-full px-4">
              <h3 className="text-brown font-secondary text-[20px] md:text-[28px] uppercase mb-3">
                Statistieken
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 text-white text-sm font-light">
                {[
                  "10 jaar Korps Mariniers",
                  "4 jaar MARSOC",
                  "9 jaar ervaring als personal trainer",
                  "Bewezen in de praktijk",
                  "Toegewijd om anderen te versterken",
                  "Altijd bereid om te helpen",
                ].map((stat, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FaCheck className="text-yellow" />
                    <p>{stat}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrainerCard;
