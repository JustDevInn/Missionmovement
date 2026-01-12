import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaTimesCircle } from "react-icons/fa";

const Cancel = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/pricing");
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-[calc(100vh-90px)] bg-mmPage flex flex-col items-center justify-center text-center px-6 py-16">
      <div className="bg-mmSurface border border-red-500 px-8 py-10 rounded-2xl shadow-sm max-w-md w-full">
        <div className="flex justify-center mb-4">
          <FaTimesCircle className="text-red-500 text-5xl" />
        </div>
        <h1 className="text-mmText text-2xl font-display uppercase tracking-widest mb-4">
          Betaling Geannuleerd
        </h1>
        <p className="text-mmTextMuted leading-relaxed mb-6 text-base md:text-lg">
          Geen zorgen, je kunt altijd terugkomen om je aankoop af te ronden
          wanneer je er klaar voor bent.
        </p>

        <Link
          to="/pricing"
          className="inline-flex items-center justify-center gap-2 bg-mmAccent text-white font-semibold px-6 py-3 rounded-md hover:bg-mmAccentHover transition mb-4"
        >
          <FaArrowLeft />
          Terug naar Prijzen
        </Link>

        <p className="text-mmTextMuted text-xs">
          Je wordt doorgestuurd naar de prijzenpagina over{" "}
          <span className="text-mmAccent font-semibold">{countdown}</span>{" "}
          seconden...
        </p>
      </div>
    </div>
  );
};

export default Cancel;
