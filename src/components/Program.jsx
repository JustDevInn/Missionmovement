import React from "react";
// import icon
import { FaCheck } from "react-icons/fa6";
import { GrAchievement } from "react-icons/gr";



const Program = () => {
  return (
  <div>
  {/* hero */}
    <section className="section flex flex-col justify-center items-start">
    <div className='flex flex-col justify-start items-start pl-20 lg:pl-60'>
      <p className='h2'>The</p>
      <h1 className='text-yellow font-primary text-[35px] md:text-[100px] font-medium uppercase leading-[120%] tracking-wider'>military</h1>
      <h1 className='text-yellow font-primary text-[35px] md:text-[100px] font-medium uppercase leading-[120%] tracking-wider'>preparation</h1>
      <p className='h2'>program</p>
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
      <div>
        <h2 className="h2-teko text-yellow my-10">PROGRAM OVERVIEW</h2>
        <p className="text-sm lg:text-base font-thin">Mission Movement's elite military preparation program, honed from 20+ years of elite service, goes beyond.
          It's for those seeking a higher purpose, aiming for the special operator lifestyle in the military forces.
          <br /><br />
          Our program consists of 5 sub programs.</p>
        <div className="mt-10 mb-4">
          <h5 className="uppercase leading-[120%] font-medium">Military Coaching Guide: </h5>
          <p className="font-thin leading-[120%]">Overview, crucial insights for special forces.</p>
        </div>
        <div className="my-4">
          <h5 className="uppercase leading-[120%] font-medium">01 Basic Requirements: </h5>
          <p className="font-thin leading-[120%]">Progressive strength & endurance training tailored for military selection.</p>
        </div>
        <div className="my-4">
          <h5 className="uppercase leading-[120%] font-medium">02 Foundational Strength: </h5>
          <p className="font-thin leading-[120%]">Sustained readiness during service.</p>
        </div>
        <div className="my-4">
          <h5 className="uppercase leading-[120%] font-medium">02 Foundational Strength: </h5>
          <p className="font-thin leading-[120%]">Sustained readiness during service.</p>
        </div>
        <div className="my-4">
          <h5 className="uppercase leading-[120%] font-medium">03 Swimming Practice: </h5>
          <p className="font-thin leading-[120%]">Mastery in key strokes, optimised techniques for selection tests.</p>
        </div>
        <div className="my-4">
          <h5 className="uppercase leading-[120%] font-medium">04/05 Support: </h5>
          <p className="font-thin leading-[120%]">Exercise library, mobility guides for comprehensive readiness.</p>
        </div>
        <div className="my-4">
          <h5 className="uppercase leading-[120%] font-bold text-brown">Including <span className="text-yellow">REMOTE COACHING:</span></h5>
          <p className="font-thin leading-[120%]">We will review your exercises and questions to help you stay on track.</p>
        </div>
      </div>
      {/* requirements & skills you'll learn*/}
      <div className="flex flex-col">
      {/* requirements */}
      <div>
      <h1 className="h2-teko text-yellow mt-10 mb-5">Requirements</h1>
        <div className="grid grid-cols-2 gap-4 font-thin text-xs lg:text-base">
          <div className="flex flex-row gap-2">
          <FaCheck />
            <p>Mindset and attitude</p>
          </div>
          <div className="flex flex-row gap-2">
            <FaCheck />
            <p>Physical fitness baseline</p>
          </div>
          <div className="flex flex-row gap-2">
            <FaCheck />
            <p>Access to training equipment</p>
          </div>
          <div className="flex flex-row gap-2">
            <FaCheck />
            <p>Commitment level</p>
          </div>
          <div className="flex flex-row gap-2">
            <FaCheck />
            <p>Time commitment</p>
          </div>
          <div className="flex flex-row gap-2">
            <FaCheck />
            <p>No medical concerns</p>
          </div>
        </div>
      </div>
       {/* skills you'll learn */}
       <div className="flex flex-col">
          <h1 className="h2-teko text-yellow mt-10 mb-5">Skills you'll learn</h1>
          <div className="grid grid-cols-3 gap-4 text-white font-thin text-xs lg:text-base">
          <div className="flex flex-row gap-2 items-center">
            <GrAchievement/>
            <p>Physical readiness</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <GrAchievement/>
            <p>Specialised techniques</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <GrAchievement/>
            <p>Mental resilience</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <GrAchievement/>
            <p>Discipline</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <GrAchievement/>
            <p>Adaptability</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <GrAchievement/>
            <p>grit</p>
          </div>
          </div>
       </div>
      </div>
{/* what to know before joining */}
      <div className="flex flex-col">
        <h1 className="h2-teko text-yellow mt-10 mb-5">what to know before joining</h1>
        <p className="text-sm lg:text-base font-thin">
          Here are some things you might want to
          know before you take the next step.<br></br>
          You can always reach out to us via the contact form for more specific details.
          </p>
        <div className="mt-10 mb-4">
          <h5 className="uppercase leading-[120%] font-medium underline">What can I do if I don't meet the eligibility requirements to join?</h5>
          <p className="font-thin leading-[120%]">Overview, crucial insights for special forces.</p>
        </div>
        <div className="my-4">
          <h5 className="uppercase leading-[120%] font-medium underline">Can I get a refund after purchase?</h5>
          <p className="font-thin leading-[120%]">Overview, crucial insights for special forces.</p>
        </div>
        <div className="my-4">
          <h5 className="uppercase leading-[120%] font-medium underline">How does the remote coaching work?</h5>
          <p className="font-thin leading-[120%]">Overview, crucial insights for special forces.</p>
        </div>
        <div className="my-4">
          <h5 className="uppercase leading-[120%] font-medium underline">How many hours per week is the program?</h5>
          <p className="font-thin leading-[120%]">Overview, crucial insights for special forces.</p>
        </div>
      </div>

    {/* button */}
      <div className="flex justify-center items-center">
        <button className="btn lg:btn-lg">enrol</button>
      </div>
    </header>
  </section>

  </div>
  );
};

export default Program;
