import React from "react";
// import icon
import { FaCheck } from "react-icons/fa6";
import { GrAchievement } from "react-icons/gr";
// import banners
import Banners from '../components/Banners';
import MobileBanners from '../components/MobileBanners';
// import images
import Trainer from '../img/profilepicture.png';
import Bundle from '../img/bundle.png';

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
      <h2 className="mb-6 text-brown font-secondary text-[25px] md:text-[50px]
      font-light uppercase leading-[120%] tracking-wide">
      Justin Peeters, Founder of Mission Movement
      </h2>
      <p className="text-white font-light">
      With a decade of elite service in the Royal Marine Corps, including four years in the esteemed MARSOC units, Justin brings battle-tested expertise to Mission Movement.
      Transitioning from military service, Justin spent five years owning and running a personal training gym, honing skills in physical conditioning and mental resilience.
<br /><br />
As a seasoned coach for nine years, Justin amalgamates military precision with coaching finesse. His dedication extends beyond conventional training, advocating a holistic approach to fitness,
integrating mountain climbs, surfing, and gym sessions for a well-rounded experience.
<br /><br />
Justin's commitment to preventing injuries and guiding individuals toward optimal fitness is remarkable. His insights, drawn from personal experiences, underscore the crucial need for proper
physical preparation, particularly in demanding roles like special forces.
He ensures individuals have the tools and training for safe, enduring careers, emphasising the value of departing on one's terms, not due to preventable injuries.
<br /><br />
This ethos drives Justin's focus on comprehensive and mindful training regimens at Mission Movement.
      </p>
      </div>
        {/* image right side */}
      <div className="lg:w-1/2 flex flex-col px-10 py-10 lg:py-0 justify-center items-center">
        {/* image and text div */}
        <div>
          <img src={Trainer} alt="profilepicture" className="lg:h-[350px] lg:w-[290px]"/>
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
{/* Success stories */}
<section className=" w-screen flex justify-center items-center p-10">
<div>
  <h2 className="h1-teko text-center py-20">SUCCESS STORIES</h2>
  <div className="flex flex-col md:flex-row py-10">
  {/* Hendriks */}
    <div className="lg:px-10 py-5 px-1">
      <h2 className="h2-teko mb-2">Hendriks, J</h2>
      <p className="text-white font-light tracking-wider">
      As a seasoned coach for nine years, Justin amalgamates military precision with coaching  beyond conventional training,
      advocating a holistic approach to fitness, integrating mountain climbs, surfing, and gym sessions for a well-rounded experience.
      <br /><br />
      years, Justin amalgamates military precision with coaching  advocating a  approach to fitness, integrating mountain climbs, surfing,
      and gym sessions for a well-rounded experience.
      </p>
    </div>
    {/* Van der werf */}
    <div className="lg:px-10 py-5 px-1">
      <h2 className="h2-teko mb-2">Van der werf, J</h2>
      <p className="text-white font-light tracking-wider">
      As a seasoned coach for nine years, Justin amalgamates military precision with coaching  beyond conventional training, advocating a holistic
      approach to fitness, integrating mountain climbs, surfing, and gym sessions for a well-rounded experience.
      <br /><br />
      years, Justin amalgamates military precision with coaching  advocating a  approach to fitness, integrating mountain climbs, surfing, and gym
      sessions for a well-rounded experience.
      </p>
    </div>
    {/* Trommels */}
    <div className="lg:px-10 py-5 px-1">
      <h2 className="h2-teko mb-2">Trommels, E</h2>
      <p className="text-white font-light tracking-wider">
      As a seasoned coach for nine years, Justin amalgamates military precision with coaching  beyond conventional training, advocating a holistic approach
      to fitness, integrating mountain climbs, surfing, and gym sessions for a well-rounded experience.
      <br /><br />
      years, Justin amalgamates military precision with coaching  advocating a  approach to fitness, integrating mountain climbs, surfing, and gym sessions
      for a well-rounded experience.


      </p>
    </div>
  </div>
</div>
</section>
{/* link to program */}
    <section className="w-screen
    flex flex-col lg:flex-row py-20 p-10
    justify-between items-center lg:items-start lg:mt-20
    ">
    {/* text */}
    <div className="md:w-1/2 flex flex-col font-light px-5 lg:px-28">
      <h5 className="font-secondary text-[30px] lg:text-[50px]
      tracking-wider text-brown lg:text-left text-center">
      <span className="text-yellow">
      Ready? </span>
      Sign up for our program and transform your mind and body into a powerful force to be reckoned with.
      </h5>
      <p className="font-secondary text-brown uppercase lg:py-20 pt-10 pb-20 text-center lg:text-left">
      Discipline | Commitment | Determination</p>
    </div>
    {/* image + button */}
    <div className="flex flex-col justify-center items-center lg:w-1/2">
      <img src={Bundle} alt="" className="h-[400px] w-[250px]"/>
      <button className="btn btn-lg my-10">Enrol</button>
    </div>
    </section>
</div>
  );
};

export default Program;
