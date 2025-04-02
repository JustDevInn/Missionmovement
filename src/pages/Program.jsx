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
import TrainerCard from "../components/TrainerCard";
import QuoteBlock from "../components/QuoteBlock";

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
          <div className="bg-primary p-4 md:p-6 lg:p-8 rounded-xl shadow-lg">
            <h1 className="text-yellow text-xl md:text-4xl font-secondary uppercase mb-4 text-center border-b border-yellow pb-2">
              Program Overview
            </h1>
            <p className="text-xs md:text-sm font-light text-white text-justify leading-relaxed mb-4">
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
                className="mb-3 bg-brown rounded-md overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:bg-opacity-80"
              >
                <button
                  onClick={() => toggleProgram(index)}
                  className="w-full flex justify-between items-center px-3 py-2 text-left text-brown text-xs md:text-sm font-medium uppercase bg-primary hover:text-yellow transition duration-300"
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
                      ? "max-h-40 opacity-100 px-3 py-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-white text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Requirements + Skills + Who It's For (fit in one screen) */}
          <div className="flex flex-col p-4 md:p-6 lg:p-8 gap-8 lg:gap-10">
            {/* Requirements */}
            <div>
              <h1 className="text-yellow font-secondary text-xl md:text-2xl uppercase mb-3">
                Requirements
              </h1>
              <ul className="grid grid-cols-2 gap-2 text-xs md:text-sm font-light">
                {[
                  "Mindset and attitude",
                  "Physical fitness baseline",
                  "Access to training equipment",
                  "Commitment level",
                  "Time commitment",
                  "No medical concerns",
                ].map((req, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheck className="text-yellow text-sm" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills You'll Learn */}
            <div>
              <h1 className="text-yellow font-secondary text-xl md:text-2xl uppercase mb-3">
                Skills You'll Learn
              </h1>
              <ul className="grid grid-cols-2 gap-2 text-xs md:text-sm font-light">
                {[
                  "Physical readiness",
                  "Specialised techniques",
                  "Mental resilience",
                  "Discipline",
                  "Adaptability",
                  "Grit",
                ].map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <GrAchievement className="text-yellow text-sm" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Who It's For */}
            <div>
              <h1 className="text-yellow font-secondary text-xl md:text-2xl uppercase mb-3">
                Who It's For
              </h1>
              <ul className="grid grid-cols-2 gap-2 text-xs md:text-sm font-light">
                {[
                  "Aspiring military candidates preparing for selection",
                  "Active service members needing structured reset",
                  "Athletes seeking elite conditioning",
                  "Fitness-minded individuals craving challenge",
                  "Anyone committed to growth through discipline",
                  "People seeking physical & mental resilience",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheck className="text-yellow text-sm" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-primary p-6 md:p-10 rounded-xl shadow-lg mb-10 min-h-[350px] md:h-full w-full flex flex-col justify-start">
            <h2 className="text-yellow font-secondary text-xl md:text-2xl lg:text-3xl uppercase text-center mb-4 border-b border-yellow pb-2 tracking-widest">
              What to Know Before Joining
            </h2>
            <p className="text-xs md:text-sm font-light text-white mb-6 text-justify leading-relaxed max-w-xl mx-auto">
              Have questions? Here are the most common things people ask before
              signing up. If you need more details, feel free to reach out!
            </p>

            <div className="space-y-3">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-brown rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:bg-opacity-90"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center p-3 text-left text-brown font-medium tracking-wide uppercase bg-primary hover:text-yellow text-xs md:text-sm"
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
                    className={`overflow-hidden transition-all duration-500 ${
                      openFAQIndex === index
                        ? "max-h-[200px] opacity-100 px-4 pb-4"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-white text-sm font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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

      <QuoteBlock
        quote="My mission is to build unshakable humans — physically capable and
              mentally stable. This program is the guidance I wish I had when I
              started."
        author="Justin Peeters"
      />

      {/* Banners */}
      <div className="hidden lg:flex">
        <Banners />
      </div>
      <div className="lg:hidden">
        <MobileBanners />
      </div>

      {/* Trainer Section */}
      <TrainerCard />

      {/* Reviews */}
      <Reviews />

      <QuoteBlock
        quote="Hard times don’t build character. They reveal it."
        author="Justin Peeters"
      />
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
