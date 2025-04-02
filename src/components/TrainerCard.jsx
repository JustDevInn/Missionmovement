import React from "react";
import { FaCheck } from "react-icons/fa6";
const Trainer = "/img/profilepicture.png";

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
              Justin Peeters, Founder of Mission Movement
            </h2>
            <p className="text-white font-light text-justify leading-relaxed text-sm md:text-base tracking-wide">
              With a decade of elite service in the Royal Marine Corps,
              including four years in the esteemed MARSOC units, Justin brings
              battle-tested expertise to Mission Movement.
              <br />
              <br />
              Transitioning from military service, he spent five years owning
              and running a personal training gym, honing skills in physical
              conditioning and mental resilience.
              <br />
              <br />
              As a seasoned coach for nine years, Justin blends military
              precision with coaching finesse. His holistic approach integrates
              mountain climbs, surfing, and gym sessions for a well-rounded
              fitness journey.
              <br />
              <br />
              His commitment to injury prevention and longevity in high-demand
              careers drives his mission. Justin ensures individuals are
              prepared both physically and mentally, leaving on their terms —
              not due to avoidable setbacks.
            </p>
          </div>

          {/* Image + Stats */}
          <div className="lg:w-1/2 flex flex-col items-center justify-center">
            <img
              src={Trainer}
              alt="Justin Peeters"
              className="w-[240px] h-[320px] object-cover rounded-xl shadow-lg"
            />

            <div className="mt-6 w-full px-4">
              <h3 className="text-brown font-secondary text-[20px] md:text-[28px] uppercase mb-3">
                Stats
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 text-white text-sm font-light">
                {[
                  "10 years Royal Marine Corps",
                  "4 years MARSOC",
                  "9 years of personal training",
                  "Tested",
                  "Commitment to lift others",
                  "Always there to help out",
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
