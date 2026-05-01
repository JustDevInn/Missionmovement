import React from "react";
import { FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-mmPage text-mmText border-t border-mmBorder">
      <div className="max-w-6xl mx-auto px-6 md:px-16 pt-16 pb-10">
        {/* CTA */}
        <div className="text-center mb-12">
          <h2 className="font-display uppercase tracking-[0.18em] text-[18px] md:text-[20px]">
            Neem contact op
          </h2>

          <p className="mt-4 text-mmTextMuted max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
            {`Wil je serieus richting Defensie, politie, brandweer of KMar werken?

Stuur me een bericht. Dan kijken we samen waar je nu staat, wat je doel is en welke voorbereiding daarbij past.`}
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-display uppercase tracking-[0.12em] text-[34px] md:text-[44px] leading-[1.05] text-mmAccent">
              Mission
              <br />
              Movement
            </h3>

            <p className="mt-5 text-mmTextMuted leading-relaxed max-w-sm mx-auto md:mx-0">
              Persoonlijke begeleiding en gestructureerde voorbereiding voor
              serieuze kandidaten richting Defensie de en veiligheidsdiensten.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-end">
            <div className="w-full max-w-sm space-y-2">
              <a
                href="tel:+31649171684"
                aria-label="telefoonnummer"
                className="flex items-center justify-center md:justify-end gap-3 text-mmTextMuted hover:text-mmAccent transition py-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-mmFocus"
              >
                <FaPhone className="text-mmAccent" />
                {/* <span>+31 6 49 17 16 84</span> */}
              </a>

              <a
                href="https://www.instagram.com/mission.movement"
                target="_blank"
                rel="noreferrer"
                aria-label="instagram"
                className="flex items-center justify-center md:justify-end gap-3 text-mmTextMuted hover:text-mmAccent transition py-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-mmFocus"
              >
                <FaInstagram className="text-mmAccent" />
                {/* <span>@mission.movement</span> */}
              </a>

              <a
                href="mailto:MissionMovement@gmail.com"
                aria-label="e-mail"
                className="flex items-center justify-center md:justify-end gap-3 text-mmTextMuted hover:text-mmAccent transition py-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-mmFocus"
              >
                <FaEnvelope className="text-mmAccent" />
                {/* <span>MissionMovement@gmail.com</span> */}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-mmBorder flex flex-col md:flex-row items-center justify-between gap-3 text-mmTextMuted text-sm">
          <p className="text-center md:text-left">
            © 2026 Mission Movement. Alle rechten voorbehouden.
          </p>
          <p className="text-center md:text-right">
            KVK: <span className="font-medium text-mmTextMuted">85486205</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
