import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import { fetchTrainingProgram } from "../../utils/firebase/getTrainingProgram";


const TrainingProgram = () => {
  const { user, hasPaid } = useAuth();
  const [activeWeek, setActiveWeek] = useState(
    parseInt(localStorage.getItem("activeWeek")) || 1
  );

  const [expandedDays, setExpandedDays] = useState({});
  const [programData, setProgramData] = useState({});
  const [loading, setLoading] = useState(true);

  // Store activeWeek in localStorage
  useEffect(() => {
    localStorage.setItem("activeWeek", activeWeek);
  }, [activeWeek]);

  // Fetch program from Firestore
useEffect(() => {
  const fetchProgram = async () => {
    const data = await fetchTrainingProgram();
    if (data) {
      setProgramData(data || {});
    }
    setLoading(false);
  };

  fetchProgram();
}, []);


  if (!user) return <Navigate to="/login" />;
  if (!hasPaid) return <Navigate to="/pricing" />;
  if (loading) return <div className="p-6">Loading training program...</div>;

  const weekTabs = [1, 2, 3, 4, 5, 6];
  const currentWeek = programData[`week${activeWeek}`];

  const days = currentWeek ? Object.keys(currentWeek) : [];


  const toggleDay = (day) => {
    setExpandedDays((prev) => ({ ...prev, [day]: !prev[day] }));
  };

  return (
    <div className="min-h-screen bg-white text-[#22201F] px-4 sm:px-6 py-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 font-secondary">Your Training Program</h1>

      {/* Week Tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto font-secondary">
        {weekTabs.map((week) => (
          <button
            key={week}
            onClick={() => setActiveWeek(week)}
            className={`px-4 py-2 rounded border tracking-wider whitespace-nowrap ${
              activeWeek === week
                ? "bg-yellow text-black"
                : "bg-gray-100 hover:bg-yellow hover:text-black"
            }`}
          >
            Week {week}
          </button>
        ))}
      </div>

      {/* Daily Sessions */}
      <div className="space-y-4 font-secondary">
        {days.map((day) => {
          const session = currentWeek[day];
          const isOpen = expandedDays[day];

          return (
            <div key={day} className="border border-gray-300 rounded bg-[#F7F7F7]">
              <button
                className="w-full flex justify-between items-center p-4 text-left"
                onClick={() => toggleDay(day)}
              >
                <div>
                  <h2 className="text-2xl font-bold">{day}</h2>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                    {session.type}
                  </p>
                </div>
                <span className="text-2xl font-bold text-gray-500">{isOpen ? "−" : "+"}</span>
              </button>

              {isOpen && (
                <div className="p-4 space-y-4">
                  {session.blocks.map((block, idx) => (
                    <div key={idx} className="bg-white rounded border p-4 shadow-sm">
                      <h3 className="font-semibold text-lg mb-1 tracking-wide">{block.title}</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 tracking-wider">
                        {block.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      {block.note && (
                        <p className="mt-2 italic text-sm text-gray-500 tracking-wider">{block.note}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrainingProgram;
