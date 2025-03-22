// import React from "react";
// import { useAuth } from "../../context/AuthContext";

// const TrainingProgram = () => {
//   const { user } = useAuth();
//   const isPaidUser = true; // replace later with real check

//   if (!isPaidUser) {
//     return (
//       <div className="min-h-screen bg-white text-center py-20 px-4 text-[#22201F]">
//         <h1 className="text-3xl font-bold mb-4">Training Program</h1>
//         <p className="mb-6">This content is available for members only.</p>
//         <a
//           href="/pricing"
//           className="inline-block bg-yellow text-black px-6 py-2 rounded-md font-semibold hover:bg-transparent border-2 border-yellow hover:scale-105 transition"
//         >
//           Upgrade to Access
//         </a>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white text-[#22201F] px-6 py-12 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold mb-8">Your Training Program</h1>

//       {/* Weekly Overview */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//         {[
//           { day: "Monday", focus: "Upper Body Strength" },
//           { day: "Tuesday", focus: "Lower Body + Core" },
//           { day: "Wednesday", focus: "Active Recovery / Mobility" },
//           { day: "Thursday", focus: "Conditioning + Skills" },
//           { day: "Friday", focus: "Full Body Strength" },
//           { day: "Saturday", focus: "Endurance + Optional" },
//         ].map((session, index) => (
//           <div key={index} className="bg-[#F7F7F7] p-4 rounded shadow-sm border border-gray-200">
//             <h2 className="text-xl font-bold">{session.day}</h2>
//             <p className="text-sm mt-1 text-gray-600">{session.focus}</p>
//             <button className="mt-3 text-sm text-yellow underline hover:opacity-80">
//               View Details
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TrainingProgram;

// TrainingProgram.jsx
import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const TrainingProgram = () => {
  const { user, hasPaid } = useAuth();

  if (!user) return <Navigate to="/login" />;
  if (!hasPaid) return <Navigate to="/pricing" />;

  return (
    <div className="min-h-screen bg-white text-[#22201F] px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Your Training Program</h1>

      {/* Weekly Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          { day: "Monday", focus: "Upper Body Strength" },
          { day: "Tuesday", focus: "Lower Body + Core" },
          { day: "Wednesday", focus: "Active Recovery / Mobility" },
          { day: "Thursday", focus: "Conditioning + Skills" },
          { day: "Friday", focus: "Full Body Strength" },
          { day: "Saturday", focus: "Endurance + Optional" },
        ].map((session, index) => (
          <div key={index} className="bg-[#F7F7F7] p-4 rounded shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold">{session.day}</h2>
            <p className="text-sm mt-1 text-gray-600">{session.focus}</p>
            <button className="mt-3 text-sm text-yellow underline hover:opacity-80">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingProgram;