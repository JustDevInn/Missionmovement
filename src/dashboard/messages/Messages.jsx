import React from "react";
import { FaComments } from "react-icons/fa";

const Messages = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white px-4 sm:px-6 py-10 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <FaComments className="text-3xl text-cyan-400" />
        <h1 className="text-2xl font-bold">Messages</h1>
      </div>

      <div className="bg-[#1E1E1E] border border-[#2A2A2A] rounded-lg p-6 text-gray-300 space-y-4">
        <p className="text-sm text-gray-400">
          This section will soon allow you to send check-in messages, receive
          feedback, and stay connected with your coach.
        </p>

        <div className="border border-[#2A2A2A] p-4 rounded text-center italic text-gray-500">
          Messaging features are coming soon. Stay tuned!
        </div>
      </div>
    </div>
  );
};

export default Messages;
