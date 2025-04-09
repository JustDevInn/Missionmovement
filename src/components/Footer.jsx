import React from "react";
import { FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full px-6 md:px-16 pt-20 pb-12 bg-[#101010] text-white">
      {/* CTA Section */}
      <div className="text-center pb-10">
        <h2 className="h2-teko text-yellow tracking-widest">Get in Touch</h2>
        <p className="mt-4 md:text-lg font-light max-w-xl mx-auto">
          Ready to take the next step? Reach out, and we'll help you get there.
        </p>
      </div>

      {/* Footer Content */}
      <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start gap-10 md:gap-20">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h1 className="text-yellow font-primary text-[32px] md:text-[60px] lg:text-[80px] font-medium uppercase leading-[100%] tracking-wider">
            Mission
            <br />
            Movement
          </h1>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col items-center md:items-start gap-6 text-sm md:text-lg text-center md:text-left w-full md:w-auto">
          {/* Email */}
          <div>
            <h5 className="text-yellow font-semibold uppercase tracking-wider mb-1">
              Email
            </h5>
            <a
              href="mailto:MissionMovement@gmail.com"
              className="flex justify-center md:justify-start items-center gap-2 text-gray-400 hover:text-yellow transition"
            >
              <FaEnvelope /> MissionMovement@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div>
            <h5 className="text-yellow font-semibold uppercase tracking-wider mb-1">
              Phone
            </h5>
            <a
              href="tel:+36125183459"
              className="flex justify-center md:justify-start items-center gap-2 text-gray-400 hover:text-yellow transition"
            >
              <FaPhone /> +36 1 25 18 34 59
            </a>
          </div>

          {/* Social */}
          <div>
            <h5 className="text-yellow font-semibold uppercase tracking-wider mb-1">
              Social
            </h5>
            <a
              href="https://www.instagram.com/mission.movement"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center md:justify-start items-center gap-2 text-gray-400 hover:text-yellow transition"
            >
              <FaInstagram /> @missionmovement
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs tracking-widest border-t border-[#222] pt-6">
        <p>© 2024 Mission Movement. All rights reserved.</p>
        <p>
          KVK:{" "}
          <span className="font-medium">
            Justin Peeters Coaching 89798690899
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
