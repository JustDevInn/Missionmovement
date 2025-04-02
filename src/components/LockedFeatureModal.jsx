import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLock, FaTimes } from "react-icons/fa";

const LockedFeatureModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 px-4"
      onClick={onClose} // ✅ close on background click
    >
      <div
        className="relative bg-[#1A1A1A] border border-yellow rounded-xl shadow-xl p-8 max-w-md w-full text-center transform transition-all duration-300 scale-100 opacity-100 animate-fade-in"
        onClick={(e) => e.stopPropagation()} // ✅ prevent closing when clicking modal
      >
        {/* ❌ Close icon top right */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-yellow hover:text-white transition text-lg"
          aria-label="Close"
        >
          <FaTimes />
        </button>

        <div className="flex justify-center mb-4">
          <FaLock className="text-yellow text-4xl" />
        </div>
        <h2 className="text-yellow text-2xl font-secondary uppercase tracking-widest mb-4">
          Premium Feature
        </h2>
        <p className="text-gray-300 font-light text-sm leading-relaxed mb-6">
          This section is part of the full program. Purchase access to unlock
          all features and begin your transformation.
        </p>

        <Link
          to="/pricing"
          onClick={onClose}
          className="inline-block bg-yellow text-black font-semibold px-6 py-3 rounded-md hover:bg-opacity-90 transition"
        >
          Buy the Program
        </Link>

        <div className="mt-4">
          <button
            onClick={onClose}
            className="text-sm text-gray-400 hover:underline"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
};

export default LockedFeatureModal;
