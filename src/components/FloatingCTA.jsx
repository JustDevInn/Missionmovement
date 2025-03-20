import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa"; // Close icon

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null; // If dismissed, don’t render

  return (
    <div className="fixed bottom-5 right-5 bg-yellow text-black px-4 py-2 shadow-lg uppercase z-10 items-center gap-3 cursor-pointer hover:scale-105 transition hidden md:flex">
      <Link to="/program" className="font-bold tracking-wide">
        Join Now
      </Link>
      <button
        onClick={() => setIsVisible(false)} // Dismiss on click
        className="text-black hover:text-gray-700 transition"
      >
        <FaTimes size={14} />
      </button>
    </div>
  );
};

export default FloatingCTA;
