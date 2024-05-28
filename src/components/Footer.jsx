import React from "react";

const Footer = () => {
  return (
  <footer className="section flex flex-col px-10 justify-evenly">
  {/* get in touch */}
    <div className="flex flex-col items-center my-10">
      <div>
        <h2 className="h2-teko text-yellow tracking-widest">
          Get in touch
        </h2>
        <p className="text-white my-5 md:text-xl">
          Ready to take the next step? <br></br>Reach out and we'll help you get there.
        </p>
      </div>
    </div>
  {/* details */}
  <div className="w-full flex flex-row justify-between md:flex-col mt-10">
      <h1 className="text-yellow font-primary text-[25px] md:text-[70px] lg:text-[90px] font-medium uppercase leading-[120%] tracking-wider
      flex justify-center my-0 md:mb-10">
      mission movement
      </h1>
    <div className="lg:px-10 flex flex-col justify-start md:justify-between md:flex-row text-xs md:text-lg text-white">
      <div className="mb-2">
        <h5 className="font-bold uppercase tracking-widest">Email</h5>
        <a
        href="mailto:MissionMovement@gmail.com"
        className="font-thin">Click to mail.</a>
      </div>
      <div className="mb-2">
        <h5 className="font-bold uppercase tracking-widest">Phone</h5>
        <p className="font-thin">+361 25 18 34 59</p>
      </div>
      <div className="mb-2">
        <h5 className="font-bold uppercase tracking-widest">Social</h5>
        <a
        href="http://www.instagram.com/mission.movement"
        target="blank"
        className="font-thin">@missionmovement</a>
      </div>
    </div>
  </div>
    {/* copyright + kvk */}
    <div className="mt-10 w-full flex flex-row justify-between text-white font-thin text-[8px] lg:text-[10px] tracking-widest">
      <p className="">Copyright 2023 all rights reserved.</p>
      <p>KVK: <span className="font-medium">Justin Peeters Coaching 89798690899</span></p>
    </div>
  </footer>
  );
};

export default Footer;
