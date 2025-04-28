import React, { useState } from "react";
import FloatingCTA from "../components/FloatingCTA";
import Spinner from "../components/Spinner";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
  };

  return (
    <div className="pt-10">
      <Helmet>
        <title>Contact | Mission Movement</title>
        <meta
          name="description"
          content="Wil je serieus voorbereid starten aan een militaire carrière? Neem contact op met Mission Movement."
        />
        <meta property="og:title" content="Contact | Mission Movement" />
        <meta
          property="og:description"
          content="Meld je aan voor voorbereiding op Mariniers, Luchtmobiel of KCT. Ik help je doelgericht op weg."
        />
        <meta
          property="og:image"
          content="https://missionmovement.vercel.app/img/contactus.png"
        />
        <meta
          property="og:url"
          content="https://missionmovement.vercel.app/contact"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="section flex justify-center items-center bg-takethestep bg-center bg-no-repeat bg-cover relative bg-fixed">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 w-full flex justify-center items-center pt-20 px-5 lg:px-20">
          <h1 className="text-yellow font-primary text-[35px] md:text-[60px] font-medium uppercase tracking-wider text-center">
            Vragen?
          </h1>
        </div>
      </section>

      <FloatingCTA />

      {/* Introtekst */}
      <section className="w-full px-5 sm:px-10 lg:px-20 py-20 flex flex-col justify-center items-center">
        <h1 className="text-yellow font-secondary text-[35px] md:text-[70px] uppercase leading-[120%] tracking-wide font-extralight mb-6 text-center">
          Jouw Eerste Stap
        </h1>
        <p className="text-brown font-normal uppercase tracking-widest text-sm md:text-lg text-center max-w-2xl">
          Klaar om het serieus aan te pakken? Laat je gegevens achter — wij
          nemen contact op.
        </p>
      </section>

      {/* Contactformulier */}
      <section className="w-full px-5 py-20 lg:py-32 flex justify-center items-center">
        <div className="w-full max-w-2xl bg-primary p-6 md:p-10 rounded-xl shadow-lg animate-fade-in">
          <h2 className="h2-teko text-yellow text-center mb-10">
            Verstuur Je Bericht
          </h2>

          <form
            action="https://getform.io/f/19890081-7383-4319-832f-c7a6294b1408"
            method="POST"
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-6"
            autoComplete="off"
          >
            {/* Intentie */}
            <select
              name="intentie"
              required
              className="bg-transparent border-b border-b-brown rounded-md h-[50px] outline-none font-normal text-gray-300 px-3 placeholder:text-brown focus:border-yellow focus:ring-1 focus:ring-yellow transition duration-200"
            >
              <option value="">Waarvoor neem je contact op?</option>
              <option value="Voorbereiding Mariniers">
                Voorbereiding Mariniers
              </option>
              <option value="Voorbereiding Luchtmobiel">
                Voorbereiding Luchtmobiel
              </option>
              <option value="Voorbereiding KCT">Voorbereiding KCT</option>
              <option value="Algemene vraag / intake">
                Algemene vraag / intake
              </option>
            </select>

            {/* Naam & E-mail */}
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                name="name"
                placeholder="Naam"
                required
                className="bg-transparent border-b border-b-brown rounded-md h-[50px] outline-none font-normal w-full px-3 placeholder:text-brown text-white focus:border-yellow focus:ring-1 focus:ring-yellow transition duration-200"
              />
              <input
                type="email"
                name="email"
                placeholder="E-mailadres"
                required
                className="bg-transparent border-b border-b-brown rounded-md h-[50px] outline-none font-normal w-full px-3 placeholder:text-brown text-white focus:border-yellow focus:ring-1 focus:ring-yellow transition duration-200"
              />
            </div>

            {/* Onderwerp */}
            <input
              type="text"
              name="subject"
              placeholder="Onderwerp"
              required
              className="bg-transparent border-b border-b-brown rounded-md h-[50px] outline-none font-normal w-full px-3 placeholder:text-brown text-white focus:border-yellow focus:ring-1 focus:ring-yellow transition duration-200"
            />

            {/* Bericht */}
            <textarea
              name="message"
              placeholder="Typ je bericht..."
              required
              className="bg-transparent border-b border-b-brown rounded-md h-[150px] outline-none font-normal w-full px-3 placeholder:text-brown text-white focus:border-yellow focus:ring-1 focus:ring-yellow transition duration-200 resize-none"
            />

            {/* Verstuur */}
            <button
              type="submit"
              disabled={loading}
              className="btn md:btn-lg mx-auto my-[15px] flex items-center justify-center gap-2 disabled:opacity-50 relative overflow-hidden"
            >
              {loading ? (
                <div className="w-6 h-6 flex items-center justify-center">
                  <Spinner />
                </div>
              ) : (
                "Verstuur"
              )}
            </button>
          </form>

          <p className="text-center text-xs text-gray-500 mt-6">
            Geen spam. Geen automatisering. Je krijgt een echt antwoord van ons.
          </p>

          {/* WhatsApp CTA */}
          <div className="text-center mt-10">
            <p className="text-gray-300 text-sm mb-2">
              Liever direct contact? Stuur ons gerust een WhatsApp-bericht.
            </p>
            <a
              href="https://wa.me/31625183459"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 border border-yellow text-yellow hover:bg-yellow hover:text-black rounded transition-all"
            >
              Stuur een WhatsApp
            </a>
          </div>
        </div>
      </section>
      {/* Floating WhatsApp knop (alleen mobiel) */}
      <a
        href="https://wa.me/31625183459"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 transition-all"
        aria-label="WhatsApp contact"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 .01 5.36.01 12c0 2.11.55 4.17 1.6 6L0 24l6.25-1.64a12.02 12.02 0 0 0 5.75 1.46H12c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52zM12 21.54a9.6 9.6 0 0 1-4.87-1.31l-.35-.2-3.71.98.99-3.62-.22-.37a9.59 9.59 0 0 1-1.48-5.02c0-5.3 4.3-9.6 9.6-9.6a9.59 9.59 0 0 1 6.81 2.82 9.6 9.6 0 0 1 2.8 6.78c0 5.3-4.3 9.6-9.6 9.6zm5.31-7.16c-.29-.15-1.7-.84-1.97-.93-.26-.1-.45-.15-.64.14-.19.29-.73.93-.9 1.12-.17.19-.33.21-.62.07a7.86 7.86 0 0 1-2.3-1.42 8.59 8.59 0 0 1-1.58-1.96c-.17-.29-.02-.45.13-.6.14-.14.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.03-.5-.08-.14-.64-1.54-.88-2.12-.23-.56-.47-.49-.65-.5l-.55-.01c-.19 0-.5.07-.77.36s-1 1-1 2.42c0 1.42 1.02 2.79 1.16 2.98.14.19 2 3.08 4.83 4.32.67.29 1.19.46 1.6.59.67.21 1.27.18 1.75.11.54-.08 1.7-.7 1.94-1.36.24-.66.24-1.23.17-1.35-.07-.11-.26-.18-.55-.32z" />
        </svg>
      </a>
    </div>
  );
};

export default Contact;
