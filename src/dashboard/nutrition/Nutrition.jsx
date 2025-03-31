import React from "react";
import { FaLeaf } from "react-icons/fa";

const Nutrition = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center px-4">
      <div className="text-center max-w-md space-y-6">
        <FaLeaf className="text-cyan-400 text-5xl mx-auto animate-bounce" />
        <h1 className="text-3xl font-bold">Nutrition Hub Coming Soon</h1>
        <p className="text-gray-400 text-sm">
          This section will soon include personalized nutrition guides, sample
          meal plans, and practical advice for fueling your training.
        </p>
        <p className="text-gray-500 text-xs italic">
          Stay tuned. You're going to love what's cooking. 🍽️
        </p>
      </div>
    </div>
  );
};

export default Nutrition;
