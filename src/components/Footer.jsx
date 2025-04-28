import React from "react";
import { FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full px-6 md:px-16 pt-20 pb-12 bg-[#101010] text-white">
      {/* CTA Sectie */}
      <div className="text-center mb-10">
        <h2 className="h2-teko text-yellow tracking-widest">Neem Contact Op</h2>
        <p className="mt-4 md:text-lg font-normal max-w-xl mx-auto">
          Klaar om serieus aan de slag te gaan? <br />
          Stuur een bericht - ik help je op weg.
        </p>
      </div>

      {/* Footer Inhoud */}
      <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start gap-10 md:gap-20 h-[250px]">
        {/* Branding */}
        <div className="text-center md:text-left md:h-full md:flex md:items-end">
          <h1 className="text-yellow font-primary text-[32px] md:text-[60px] lg:text-[80px] font-medium uppercase leading-[100%] tracking-wider">
            Mission
            <br />
            Movement
          </h1>
        </div>

        {/* Contactgegevens */}
        <div className="flex flex-col items-center md:items-start gap-6 text-sm md:text-lg text-center md:text-left w-full md:w-auto">
          {/* E-mail */}
          <div>
            <h5 className="text-yellow font-semibold uppercase tracking-wider mb-1">
              E-mail
            </h5>
            <a
              href="mailto:MissionMovement@gmail.com"
              aria-label="e-mail"
              className="flex justify-center md:justify-start items-center gap-2 text-gray-400 hover:text-yellow transition"
            >
              <FaEnvelope /> MissionMovement@gmail.com
            </a>
          </div>

          {/* Telefoon */}
          <div>
            <h5 className="text-yellow font-semibold uppercase tracking-wider mb-1">
              Telefoon
            </h5>
            <a
              href="tel:+36125183459"
              aria-label="telefoonnummer"
              className="flex justify-center md:justify-start items-center gap-2 text-gray-400 hover:text-yellow transition"
            >
              <FaPhone /> +31 6 25 18 34 59
            </a>
          </div>

          {/* Socials */}
          <div>
            <h5 className="text-yellow font-semibold uppercase tracking-wider mb-1">
              Instagram
            </h5>
            <a
              href="https://www.instagram.com/mission.movement"
              target="_blank"
              rel="noreferrer"
              aria-label="instagram"
              className="flex justify-center md:justify-start items-center gap-2 text-gray-400 hover:text-yellow transition"
            >
              <FaInstagram /> @missionmovement
            </a>
          </div>
        </div>
      </div>

      {/* Onderbalk */}
      <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs tracking-widest border-t border-[#222] pt-6">
        <p>© 2024 Mission Movement. Alle rechten voorbehouden.</p>
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
