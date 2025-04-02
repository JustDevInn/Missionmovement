import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaArrowRight } from "react-icons/fa";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Slide in after a slight delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 transition-all duration-500 ease-in-out transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } hidden md:flex items-center bg-yellow text-black rounded-full px-5 py-3 shadow-lg gap-3 backdrop-blur-sm`}
    >
      <Link
        to="/program"
        className="flex items-center gap-2 font-bold tracking-wider uppercase hover:underline"
      >
        Join Now <FaArrowRight className="text-black" size={12} />
      </Link>
      <button
        onClick={() => setDismissed(true)}
        className="ml-2 text-black hover:text-gray-700 transition"
        aria-label="Dismiss CTA"
      >
        <FaTimes size={14} />
      </button>
    </div>
  );
};

export default FloatingCTA;
