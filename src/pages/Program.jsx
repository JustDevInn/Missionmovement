import React, { useState } from "react";
// import icon
import { FaCheck } from "react-icons/fa6";
import { GrAchievement } from "react-icons/gr";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import banners
import Banners from "../components/Banners";
import MobileBanners from "../components/MobileBanners";
// Hooks
import { useGlowEffect } from "../Hooks/useGlowEffect";
// Importing FAQ and program details from data.js
import { faqData, programDetails } from "../data/data";
// Image Paths
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
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* hero */}
      <section className="section flex flex-col justify-center items-start">
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

      {/* details */}
      <section className="w-screen p-10 lg:px-20">
        <header className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 tracking-wider text-white">
          {/* program overview */}
          <div className="bg-primary py-6 md:p-10 rounded-lg shadow-lg">
            <h2 className="h2-teko text-yellow my-10">PROGRAM OVERVIEW</h2>
            <p className="text-sm lg:text-base font-thin text-white text-justify">
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
                className="my-4 bg-brown rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:bg-opacity-80"
              >
                {/* Clickable Title */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center p-4 text-left text-brown font-medium tracking-wider uppercase bg-primary hover:text-yellow transition duration-300"
                >
                  {item.title}
                  {openIndex === index ? (
                    <FaChevronUp className="text-yellow transition-transform duration-300" />
                  ) : (
                    <FaChevronDown className="text-yellow transition-transform duration-300" />
                  )}
                </button>

                {/* Expandable Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 
                  ${
                    openIndex === index
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

          {/* requirements & skills you'll learn*/}
          <div className="flex flex-col py-6 md:p-10">
            {/* requirements */}
            <div>
              <h1 className="h2-teko text-yellow mt-10 mb-5">Requirements</h1>
              <div className="grid grid-cols-2 gap-4 font-thin text-xs lg:text-base">
                <div className="flex flex-row gap-2 hover:opacity-70">
                  <FaCheck />
                  <p>Mindset and attitude</p>
                </div>
                <div className="flex flex-row gap-2 hover:opacity-70">
                  <FaCheck />
                  <p>Physical fitness baseline</p>
                </div>
                <div className="flex flex-row gap-2 hover:opacity-70">
                  <FaCheck />
                  <p>Access to training equipment</p>
                </div>
                <div className="flex flex-row gap-2 hover:opacity-70">
                  <FaCheck />
                  <p>Commitment level</p>
                </div>
                <div className="flex flex-row gap-2 hover:opacity-70">
                  <FaCheck />
                  <p>Time commitment</p>
                </div>
                <div className="flex flex-row gap-2 hover:opacity-70">
                  <FaCheck />
                  <p>No medical concerns</p>
                </div>
              </div>
            </div>
            {/* skills you'll learn */}
            <div className="flex flex-col">
              <h1 className="h2-teko text-yellow mt-10 mb-5">
                Skills you'll learn
              </h1>
              <div className="grid grid-cols-3 gap-4 text-white font-thin text-xs lg:text-base">
                <div className="flex flex-row gap-2 items-center hover:opacity-70">
                  <GrAchievement />
                  <p>Physical readiness</p>
                </div>
                <div className="flex flex-row gap-2 items-center hover:opacity-70">
                  <GrAchievement />
                  <p>Specialised techniques</p>
                </div>
                <div className="flex flex-row gap-2 items-center hover:opacity-70">
                  <GrAchievement />
                  <p>Mental resilience</p>
                </div>
                <div className="flex flex-row gap-2 items-center hover:opacity-70">
                  <GrAchievement />
                  <p>Discipline</p>
                </div>
                <div className="flex flex-row gap-2 items-center hover:opacity-70">
                  <GrAchievement />
                  <p>Adaptability</p>
                </div>
                <div className="flex flex-row gap-2 items-center hover:opacity-70">
                  <GrAchievement />
                  <p>grit</p>
                </div>
              </div>
            </div>
          </div>

          {/* what to know before joining */}
          <div className="flex flex-col bg-primary py-6 md:p-10 rounded-lg shadow-lg">
            <h1 className="h2-teko text-yellow text-center mb-4">
              What to Know Before Joining
            </h1>

            {/* Added Intro */}
            <p className="text-sm lg:text-base font-thin text-white mb-6 text-justify">
              Have questions? Here are the most common things people ask before
              signing up. If you need more details, feel free to reach out!
            </p>

            {faqData.map((faq, index) => (
              <div
                key={index}
                className="my-4 bg-brown rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:bg-opacity-80"
              >
                {/* Clickable Question */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center p-5 text-left text-brown font-medium tracking-wider uppercase bg-primary hover:text-yellow transition duration-300"
                >
                  {faq.question}
                  {openIndex === index ? (
                    <FaChevronUp className="text-yellow transition-transform duration-300" />
                  ) : (
                    <FaChevronDown className="text-yellow transition-transform duration-300" />
                  )}
                </button>

                {/* Answer Section (Smoother Expansion) */}
                <div
                  className={`overflow-hidden transition-all duration-700 ${
                    openIndex === index
                      ? "max-h-[100px] opacity-100 p-5"
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

          {/* button */}
          {/* image + button */}
          <div className="flex flex-col justify-center items-center">
            <img
              src={Bundle}
              alt="projectbundlecover"
              className="h-[400px] w-[250px]"
            />
            {/* button */}
            <div className="flex justify-center items-center mt-5">
              <Link to="/pricing">
                <button className="btn lg:btn-lg">Enroll</button>
              </Link>
            </div>
          </div>
        </header>
      </section>
      {/* course banners */}
      <div className="hidden lg:flex">
        <Banners />
      </div>
      <div className="lg:hidden">
        <MobileBanners />
      </div>

      {/* trainers */}
      <section className="w-screen">
        <h1 className="h1-teko text-yellow text-center p-20">Trainers</h1>
        <div className="flex flex-col lg:flex-row py-10">
          {/* text left side */}
          <div className="lg:w-1/2 px-10">
            <h2
              className="mb-6 text-brown font-secondary text-[25px] md:text-[50px]
      font-light uppercase leading-[120%] tracking-wide"
            >
              Justin Peeters, Founder of Mission Movement
            </h2>
            <p className="text-white font-light text-justify">
              With a decade of elite service in the Royal Marine Corps,
              including four years in the esteemed MARSOC units, Justin brings
              battle-tested expertise to Mission Movement. Transitioning from
              military service, Justin spent five years owning and running a
              personal training gym, honing skills in physical conditioning and
              mental resilience.
              <br />
              <br />
              As a seasoned coach for nine years, Justin amalgamates military
              precision with coaching finesse. His dedication extends beyond
              conventional training, advocating a holistic approach to fitness,
              integrating mountain climbs, surfing, and gym sessions for a
              well-rounded experience.
              <br />
              <br />
              Justin's commitment to preventing injuries and guiding individuals
              toward optimal fitness is remarkable. His insights, drawn from
              personal experiences, underscore the crucial need for proper
              physical preparation, particularly in demanding roles like special
              forces. He ensures individuals have the tools and training for
              safe, enduring careers, emphasising the value of departing on
              one's terms, not due to preventable injuries.
              <br />
              <br />
              This ethos drives Justin's focus on comprehensive and mindful
              training regimens at Mission Movement.
            </p>
          </div>
          {/* image right side */}
          <div className="lg:w-1/2 flex flex-col px-10 py-10 lg:py-0 justify-center items-center">
            {/* image and text div */}
            <div>
              <img
                src={Trainer}
                alt="profilepicture"
                className="lg:h-[350px] lg:w-[290px]"
              />
              <div className="mt-10">
                <h2 className="mb-2 text-brown font-secondary text-[25px] md:text-[50px] font-light uppercase leading-[120%] tracking-wide">
                  statistics
                </h2>
                <div className="grid grid-cols-2 gap-1 font-light">
                  <div className="flex flex-row gap-2 text-white">
                    <FaCheck />
                    <p>10 years Royal Marine corps</p>
                  </div>
                  <div className="flex flex-row gap-2 text-white pl-2">
                    <FaCheck />
                    <p>4 years MARSOC</p>
                  </div>
                  <div className="flex flex-row gap-2 text-white">
                    <FaCheck />
                    <p>9 years of personal training</p>
                  </div>
                  <div className="flex flex-row gap-2 text-white pl-2">
                    <FaCheck />
                    <p>Tested</p>
                  </div>
                  <div className="flex flex-row gap-2 text-white">
                    <FaCheck />
                    <p>Commitment to lift others</p>
                  </div>
                  <div className="flex flex-row gap-2 text-white pl-2">
                    <FaCheck />
                    <p>Always there to help out</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Reviews  */}
      <Reviews />

      {/* link to program */}
      <section
        className="w-screen
    flex flex-col lg:flex-row py-20 p-10
    justify-between items-center lg:items-start lg:mt-20
    "
      >
        {/* text */}
        <div className="md:w-1/2 flex flex-col font-light px-5 lg:px-28">
          <h5
            className="font-secondary text-[30px] lg:text-[50px]
      tracking-wider text-brown lg:text-left text-center"
          >
            <span className="text-yellow">Ready? </span>
            Sign up for our program and transform your mind and body into a
            powerful force to be reckoned with.
          </h5>
          {/* Sentence with word hover */}
          <div
            ref={elementRef}
            className={`font-secondary text-brown uppercase lg:py-20 pt-10 pb-20 text-center lg:text-left tracking-widest cursor-pointer
          ${animate ? "animate-light-sweep" : ""}`}
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
        {/* image + button */}
        <div className="flex flex-col justify-center items-center lg:w-1/2">
          <img
            src={Bundle}
            alt="projectbundlecover"
            className="h-[400px] w-[250px]"
          />
          {/* button */}
          <div className="flex justify-center items-center mt-5">
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
