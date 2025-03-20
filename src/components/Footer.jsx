import React from "react";
import { FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa"; // Icons for better UI

const Footer = () => {
  return (
    <footer className="w-full px-8 md:px-16 py-12 bg-[#101010] text-white">
      {/* Get in Touch Section */}
      <div className="text-center pb-10">
        <h2 className="h2-teko text-yellow tracking-widest">Get in Touch</h2>
        <p className="mt-4 md:text-lg font-light">
          Ready to take the next step? <br className="hidden md:block" /> Reach out, and we'll help you get there.
        </p>
      </div>

      {/* Details Section */}
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Brand Name */}
        <h1 className="text-yellow font-primary text-[30px] md:text-[70px] lg:text-[90px] font-medium uppercase leading-[120%] tracking-wider text-center md:text-left">
          Mission Movement
        </h1>

        {/* Contact Information */}
        <div className="mt-8 md:mt-0 flex flex-col md:flex-row gap-6 md:gap-16 text-sm md:text-lg">
          {/* Email */}
          <div>
            <h5 className="font-bold uppercase tracking-widest md:hidden">Email</h5>
            <a href="mailto:MissionMovement@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-yellow transition">
              <FaEnvelope /> <span className="md:hidden">MissionMovement@gmail.com</span>
            </a>
          </div>

          {/* Phone */}
          <div>
            <h5 className="font-bold uppercase tracking-widest md:hidden">Phone</h5>
            <a href="tel:+36125183459" className="flex items-center gap-2 text-gray-400 hover:text-yellow transition">
              <FaPhone /> <span className="md:hidden">+361 25 18 34 59</span>
            </a>
          </div>

          {/* Social Media */}
          <div>
            <h5 className="font-bold uppercase tracking-widest md:hidden">Social</h5>
            <a href="http://www.instagram.com/mission.movement" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-yellow transition">
              <FaInstagram /> <span className="md:hidden">@missionmovement</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright & KVK */}
      <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs tracking-widest">
        <p>© 2024 Mission Movement. All rights reserved.</p>
        <p>KVK: <span className="font-medium">Justin Peeters Coaching 89798690899</span></p>
      </div>
    </footer>
  );
};

export default Footer;
