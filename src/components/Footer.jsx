import React from "react";
import { FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#F7F9FC] text-[#0B1220] border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 md:px-16 pt-16 pb-10">
        {/* CTA */}
        <div className="text-center mb-12">
          <h2 className="font-display uppercase tracking-[0.18em] text-[18px] md:text-[20px]">
            Neem contact op
          </h2>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto leading-relaxed">
            Klaar om serieus aan de slag te gaan?{" "}
            <span className="whitespace-nowrap">
              Stuur een bericht — ik help je op weg.
            </span>
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-display uppercase tracking-[0.12em] text-[34px] md:text-[44px] leading-[1.05]">
              Mission
              <br />
              Movement
            </h3>

            <p className="mt-5 text-slate-600 leading-relaxed max-w-sm mx-auto md:mx-0">
              Persoonlijke begeleiding voor serieuze kandidaten richting
              defensie, politie en brandweer.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-end">
            <div className="w-full max-w-sm space-y-2">
              <a
                href="tel:+31649171684"
                aria-label="telefoonnummer"
                className="flex items-center justify-center md:justify-end gap-3 text-slate-700 hover:text-[#1f6feb] transition py-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1f6feb]/30"
              >
                <FaPhone className="text-[#1f6feb]" />
                <span>+31 6 49 17 16 84</span>
              </a>

              <a
                href="https://www.instagram.com/mission.movement"
                target="_blank"
                rel="noreferrer"
                aria-label="instagram"
                className="flex items-center justify-center md:justify-end gap-3 text-slate-700 hover:text-[#1f6feb] transition py-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1f6feb]/30"
              >
                <FaInstagram className="text-[#1f6feb]" />
                <span>@mission.movement</span>
              </a>

              <a
                href="mailto:MissionMovement@gmail.com"
                aria-label="e-mail"
                className="flex items-center justify-center md:justify-end gap-3 text-slate-700 hover:text-[#1f6feb] transition py-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1f6feb]/30"
              >
                <FaEnvelope className="text-[#1f6feb]" />
                <span>MissionMovement@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-3 text-slate-500 text-sm">
          <p className="text-center md:text-left">
            © 2024 Mission Movement. Alle rechten voorbehouden.
          </p>
          <p className="text-center md:text-right">
            KVK:{" "}
            <span className="font-medium text-slate-600">
              Justin Peeters Coaching 85486205
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
