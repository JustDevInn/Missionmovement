import React, { useEffect, useRef, useState } from "react";
import FloatingCTA from "../components/FloatingCTA";
import Spinner from "../components/Spinner";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [captchaReady, setCaptchaReady] = useState(false);
  const captchaRef = useRef(null);

  const CAPTCHA_PROVIDER = process.env.REACT_APP_CAPTCHA_PROVIDER || "hcaptcha";
  const CAPTCHA_SITE_KEY = process.env.REACT_APP_CAPTCHA_SITE_KEY;
  const CONTACT_ENDPOINT = process.env.REACT_APP_CONTACT_ENDPOINT;

  useEffect(() => {
    if (!CAPTCHA_SITE_KEY) {
      return;
    }

    const renderWidget = () => {
      if (!captchaRef.current) return;

      if (CAPTCHA_PROVIDER === "recaptcha" && window.grecaptcha) {
        window.grecaptcha.render(captchaRef.current, {
          sitekey: CAPTCHA_SITE_KEY,
          callback: (token) => setCaptchaToken(token),
          "expired-callback": () => setCaptchaToken(""),
        });
        setCaptchaReady(true);
        return;
      }

      if (window.hcaptcha) {
        window.hcaptcha.render(captchaRef.current, {
          sitekey: CAPTCHA_SITE_KEY,
          theme: "light",
          callback: (token) => setCaptchaToken(token),
          "expired-callback": () => setCaptchaToken(""),
        });
        setCaptchaReady(true);
      }
    };

    const scriptId = `captcha-script-${CAPTCHA_PROVIDER}`;
    if (document.getElementById(scriptId)) {
      renderWidget();
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.async = true;
    script.defer = true;
    script.src =
      CAPTCHA_PROVIDER === "recaptcha"
        ? "https://www.google.com/recaptcha/api.js?render=explicit"
        : "https://js.hcaptcha.com/1/api.js?render=explicit";
    script.onload = renderWidget;
    document.body.appendChild(script);
  }, [CAPTCHA_PROVIDER, CAPTCHA_SITE_KEY]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!CONTACT_ENDPOINT) {
      setError("Contact endpoint is niet geconfigureerd.");
      return;
    }

    if (!CAPTCHA_SITE_KEY) {
      setError("CAPTCHA site key ontbreekt.");
      return;
    }

    if (!captchaToken) {
      setError("Bevestig eerst de CAPTCHA.");
      return;
    }

    setLoading(true);
    const formData = new FormData(event.currentTarget);
    const payload = {
      intentie: formData.get("intentie"),
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      captchaToken,
    };

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.message || "Versturen mislukt.");
      }

      setSuccess("Bedankt! Je bericht is verstuurd.");
      event.currentTarget.reset();
      setCaptchaToken("");
    } catch (err) {
      setError(err.message || "Versturen mislukt.");
    } finally {
      setLoading(false);
    }
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
          <h1 className="font-display text-mmAccent text-[35px] md:text-[60px] uppercase tracking-widest text-center">
            Vragen?
          </h1>
        </div>
      </section>

      <FloatingCTA />

      {/* Introtekst */}
      <section className="w-full px-5 sm:px-10 lg:px-20 py-20 flex flex-col justify-center items-center">
        <h1 className="mm-h1 text-mmText mb-6 text-center">
          Jouw Eerste Stap
        </h1>
        <p className="text-mmTextMuted font-normal uppercase tracking-widest md:text-lg text-center max-w-2xl text-base">
          Klaar om het serieus aan te pakken? Laat je gegevens achter. Wij
          nemen contact op.
        </p>
      </section>

      {/* Contactformulier */}
      <section
        id="contact-form"
        className="w-full px-5 py-20 lg:py-32 flex justify-center items-center"
      >
        <div className="w-full max-w-2xl bg-mmSurface border border-mmBorder p-6 md:p-10 rounded-2xl shadow-sm animate-fade-in">
          <h2 className="mm-h2 text-mmText text-center mb-10">
            Verstuur Je Bericht
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-6"
            autoComplete="off"
          >
            {/* Intentie */}
            <select
              name="intentie"
              required
              className="bg-transparent border-b border-mmBorder rounded-md h-[50px] outline-none font-normal text-mmText px-3 placeholder:text-mmTextMuted focus:border-mmAccent focus:ring-1 focus:ring-mmFocus transition duration-200"
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
                className="bg-transparent border-b border-mmBorder rounded-md h-[50px] outline-none font-normal w-full px-3 placeholder:text-mmTextMuted text-mmText focus:border-mmAccent focus:ring-1 focus:ring-mmFocus transition duration-200"
              />
              <input
                type="email"
                name="email"
                placeholder="E-mailadres"
                required
                className="bg-transparent border-b border-mmBorder rounded-md h-[50px] outline-none font-normal w-full px-3 placeholder:text-mmTextMuted text-mmText focus:border-mmAccent focus:ring-1 focus:ring-mmFocus transition duration-200"
              />
            </div>

            {/* Onderwerp */}
            <input
              type="text"
              name="subject"
              placeholder="Onderwerp"
              required
              className="bg-transparent border-b border-mmBorder rounded-md h-[50px] outline-none font-normal w-full px-3 placeholder:text-mmTextMuted text-mmText focus:border-mmAccent focus:ring-1 focus:ring-mmFocus transition duration-200"
            />

            {/* Bericht */}
            <textarea
              name="message"
              placeholder="Typ je bericht..."
              required
              className="bg-transparent border-b border-mmBorder rounded-md h-[150px] outline-none font-normal w-full px-3 placeholder:text-mmTextMuted text-mmText focus:border-mmAccent focus:ring-1 focus:ring-mmFocus transition duration-200 resize-none"
            />

            <div className="flex flex-col gap-2">
              {!CAPTCHA_SITE_KEY && (
                <p className="text-xs text-red-400">
                  CAPTCHA is nog niet geconfigureerd.
                </p>
              )}
              <div ref={captchaRef} />
              {CAPTCHA_SITE_KEY && !captchaReady && (
                <p className="text-xs text-gray-400">CAPTCHA wordt geladen...</p>
              )}
            </div>

            {error && <p className="text-red-500 text-base md:text-lg">{error}</p>}
            {success && <p className="text-green-600 text-base md:text-lg">{success}</p>}

            {/* Verstuur */}
            <button
              type="submit"
              disabled={loading}
              className="mm-btnPrimary mx-auto my-[15px] flex items-center justify-center gap-2 disabled:opacity-50 relative overflow-hidden"
            >
              {loading ? (
                <div className="w-6 h-6 flex items-center justify-center">
                  <Spinner color="border-mmAccent" />
                </div>
              ) : (
                "Verstuur"
              )}
            </button>
          </form>

          <p className="text-center text-xs text-mmTextMuted mt-6">
            Geen spam. Geen automatisering. Je krijgt een echt antwoord van ons.
          </p>

          {/* WhatsApp CTA */}
          <div className="text-center mt-10">
            <p className="text-mmTextMuted mb-2 text-base md:text-lg">
              Liever direct contact? Stuur ons gerust een WhatsApp-bericht.
            </p>
            <a
              href="https://wa.me/31649171684"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 border border-mmAccent text-mmAccent hover:bg-mmAccent hover:text-white rounded transition-all"
            >
              Stuur een WhatsApp
            </a>
          </div>
        </div>
      </section>
      {/* Floating WhatsApp knop (alleen mobiel) */}
      <a
        href="https://wa.me/31649171684"
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
