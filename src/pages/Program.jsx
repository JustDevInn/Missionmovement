import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { GrAchievement } from "react-icons/gr";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Banners from "../components/Banners";
import MobileBanners from "../components/MobileBanners";
import { useGlowEffect } from "../Hooks/useGlowEffect";
import { faqData, programDetails } from "../data/data";
import Reviews from "../components/Reviews";
import { Link } from "react-router-dom";

const Trainer = "/img/profilepicture.png";
const Bundle = "/img/bundle.png";

const wordDefinitions = {
  Discipline:
    "The practice of training people to obey rules or a code of behavior, using punishment to correct disobedience.",
  Commitment:
    "The state or quality of being dedicated to a cause, activity, or purpose.",
  Determination:
    "Firmness of purpose; resoluteness. The quality of being determined to do or achieve something.",
};

const Program = () => {
  const { animate, elementRef } = useGlowEffect();
  const [hoveredWord, setHoveredWord] = useState(null);
  const [openProgramIndex, setOpenProgramIndex] = useState(null);
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const toggleProgram = (index) => {
    setOpenProgramIndex(openProgramIndex === index ? null : index);
  };

  const toggleFAQ = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <div className="pt-10">
      {/* Hero section (unchanged) */}
      <section className="section flex flex-col justify-center items-start md:mb-20">
        <div className="flex flex-col justify-start items-start pl-20 lg:pl-60">
          <p className="h2 animate-fade-in">The</p>
          <h1 className="text-yellow font-primary text-[35px] md:text-[100px] font-medium uppercase leading-[120%] tracking-wider animate-slide-in-left">
            military
          </h1>
          <h1 className="text-yellow font-primary text-[35px] md:text-[100px] font-medium uppercase leading-[120%] tracking-wider animate-slide-in-left">
            preparation
          </h1>
          <p className="h2 animate-fade-in">program</p>
        </div>
        <div className="w-full flex flex-row justify-center mt-10 lg:mt-20 text-xs lg:text-2xl tracking-widest">
          <p className="text-brown px-2 lg:px-5">discipline</p>
          <p className="text-brown">|</p>
          <p className="text-brown px-2 lg:px-5">commitment</p>
          <p className="text-brown">|</p>
          <p className="text-brown px-2 lg:px-5">determination</p>
        </div>
      </section>

      {/* Program Content */}
      <section className="w-full px-5 sm:px-10 lg:px-20">
        <header className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 tracking-wider text-white max-w-7xl mx-auto">
          {/* Overview */}
          <div className="bg-primary p-6 md:p-10 rounded-xl shadow-lg">
            <h2 className="h2-teko text-yellow mb-5 text-center">
              PROGRAM OVERVIEW
            </h2>
            <p className="text-sm lg:text-base font-thin text-white text-justify mb-4">
              Mission Movement's elite military preparation program, honed from
              20+ years of elite service, goes beyond. It's for those seeking a
              higher purpose, aiming for the special operator lifestyle in the
              military forces.
              <br />
              <br />
              Our program consists of 5 sub-programs.
            </p>
            {programDetails.map((item, index) => (
              <div
                key={index}
                className="mb-4 bg-brown rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:bg-opacity-80"
              >
                <button
                  onClick={() => toggleProgram(index)}
                  className="w-full flex justify-between items-center p-4 text-left text-brown font-medium tracking-wider uppercase bg-primary hover:text-yellow transition duration-300"
                  aria-expanded={openProgramIndex === index}
                >
                  {item.title}
                  {openProgramIndex === index ? (
                    <FaChevronUp className="text-yellow" />
                  ) : (
                    <FaChevronDown className="text-yellow" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openProgramIndex === index
                      ? "max-h-40 opacity-100 p-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-white text-sm leading-[160%]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Requirements + Skills */}
          <div className="flex flex-col p-6 md:p-10">
            <div className="mb-10">
              <h1 className="h2-teko text-yellow mb-4">Requirements</h1>
              <ul className="grid grid-cols-2 gap-3 text-sm lg:text-base font-thin">
                {[
                  "Mindset and attitude",
                  "Physical fitness baseline",
                  "Access to training equipment",
                  "Commitment level",
                  "Time commitment",
                  "No medical concerns",
                ].map((req, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheck />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h1 className="h2-teko text-yellow mb-4">Skills You'll Learn</h1>
              <ul className="grid grid-cols-2 gap-3 text-sm lg:text-base font-thin">
                {[
                  "Physical readiness",
                  "Specialised techniques",
                  "Mental resilience",
                  "Discipline",
                  "Adaptability",
                  "Grit",
                ].map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <GrAchievement />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-primary p-6 md:p-10 rounded-xl shadow-lg mb-10">
            <h2 className="h2-teko text-yellow text-center mb-6">
              What to Know Before Joining
            </h2>
            <p className="text-sm lg:text-base font-thin text-white mb-6 text-justify">
              Have questions? Here are the most common things people ask before
              signing up. If you need more details, feel free to reach out!
            </p>

            {faqData.map((faq, index) => (
              <div
                key={index}
                className="mb-4 bg-brown rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:bg-opacity-80"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-4 text-left text-brown font-medium tracking-wider uppercase bg-primary hover:text-yellow"
                  aria-expanded={openFAQIndex === index}
                >
                  {faq.question}
                  {openFAQIndex === index ? (
                    <FaChevronUp className="text-yellow" />
                  ) : (
                    <FaChevronDown className="text-yellow" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-700 ${
                    openFAQIndex === index
                      ? "max-h-[100px] opacity-100 p-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-white text-sm leading-[160%]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image + Enroll Button */}
          <div className="flex flex-col justify-center items-center py-10">
            <img
              src={Bundle}
              alt="program bundle"
              className="h-[400px] w-[250px] rounded-lg shadow-lg hover:scale-[1.03] transition-transform"
            />
            <Link to="/pricing">
              <button className="btn lg:btn-lg mt-8">Enroll</button>
            </Link>
          </div>
        </header>
      </section>

      {/* Banners */}
      <div className="hidden lg:flex">
        <Banners />
      </div>
      <div className="lg:hidden">
        <MobileBanners />
      </div>

      {/* trainers */}
      {/* Trainer Section */}
      <section className="w-full bg-black py-20">
        <h1 className="h1-teko text-yellow text-center mb-16">Trainers</h1>

        <div className="flex flex-col lg:flex-row gap-10 px-5 lg:px-20 max-w-screen-xl mx-auto">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-brown font-secondary text-[26px] md:text-[40px] lg:text-[50px] uppercase font-light leading-tight tracking-wide">
              Justin Peeters, Founder of Mission Movement
            </h2>
            <p className="text-white font-light text-justify leading-relaxed lg:text-lg tracking-wide">
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
          <div className="lg:w-1/2 flex flex-col items-center">
            <img
              src={Trainer}
              alt="Justin Peeters"
              className="w-[260px] h-[340px] object-cover rounded-xl shadow-lg"
            />

            <div className="mt-10 w-full px-4">
              <h3 className="text-brown font-secondary text-[22px] md:text-[32px] uppercase mb-4">
                Stats
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 text-white text-sm lg:text-base font-light">
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

      <Reviews />

      <section className="w-screen flex flex-col lg:flex-row py-20 p-10 justify-between items-center lg:items-start lg:mt-20">
        <div className="md:w-1/2 flex flex-col font-light px-5 lg:px-28">
          <h5 className="font-secondary text-[30px] lg:text-[50px] tracking-wider text-brown lg:text-left text-center">
            <span className="text-yellow">Ready? </span>
            Sign up for our program and transform your mind and body into a
            powerful force to be reckoned with.
          </h5>
          <div
            ref={elementRef}
            className={`font-secondary text-brown uppercase lg:py-20 pt-10 pb-20 text-center lg:text-left tracking-widest cursor-pointer ${
              animate ? "animate-light-sweep" : ""
            }`}
          >
            {["Discipline", "|", "Commitment", "|", "Determination"].map(
              (word, index) => (
                <span
                  key={index}
                  onMouseEnter={() => word !== "|" && setHoveredWord(word)}
                  onMouseLeave={() => setHoveredWord(null)}
                  className="relative inline-block px-2 transition duration-200 hover:text-yellow"
                >
                  {word}
                  {hoveredWord === word && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-10 bg-black text-white text-sm rounded-md px-4 py-3 shadow-md w-[220px] transition-opacity duration-300">
                      {wordDefinitions[word]}
                    </div>
                  )}
                </span>
              )
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:w-1/2">
          <img
            src={Bundle}
            alt="projectbundlecover"
            className="h-[400px] w-[250px]"
          />
          <div className="flex justify-center items-center mt-10">
            <Link to="/pricing">
              <button className="btn lg:btn-lg">Enroll</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Program;
