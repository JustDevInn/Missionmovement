import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const TrainingProgram = () => {
  const { user, hasPaid } = useAuth();
  const [activeWeek, setActiveWeek] = useState(
    parseInt(localStorage.getItem("activeWeek")) || 1
  );
  const [expandedDays, setExpandedDays] = useState({});

  useEffect(() => {
    localStorage.setItem("activeWeek", activeWeek);
  }, [activeWeek]);

  if (!user) return <Navigate to="/login" />;
  if (!hasPaid) return <Navigate to="/pricing" />;

  const weekTabs = [1, 2, 3, 4, 5, 6];

  const mockWeekData = {
    1: {
      Monday: {
        type: "Basic Requirements",
        blocks: [
          {
            title: "Pull-up & Push-up - Tempo 21X1",
            items: ["A1 Pull-up x3 tempo 21X1", "A2 Push-up x10 tempo 21X1"],
            note: "Complete 3 rounds of A1 & A2, rest 60 seconds between rounds."
          },
          {
            title: "Core & Squat",
            items: ["B1 Sit-up 15 reps", "B2 Squat 15 reps"],
            note: "Complete 3 rounds of B1 & B2, no rest."
          },
          {
            title: "Running",
            items: ["1km run at a moderate comfortable pace"],
            note: "Do not confuse running with jogging."
          },
          {
            title: "Ruck Walk",
            items: ["4km + 10kg ruck walk at 6km/h"]
          }
        ]
      },
      Tuesday: {
        type: "Foundational Strength",
        blocks: [
          {
            title: "Strength Block",
            items: [
              "12-15 Deadlifts",
              "12-15 Barbell bent over rows",
              "12-15 Shoulder press"
            ],
            note: "Use one weight. Perform as a circuit. Rest 60–90s."
          },
          {
            title: "Conditioning Block (AMRAP 10)",
            items: [
              "10 Dumbbell ground to shoulder",
              "10 Box step-ups with dumbbell",
              "10 KB swings overhead"
            ]
          },
          {
            title: "Swimming Practice",
            items: [
              "200m warm-up freestyle",
              "4 x 50m sprints (20s rest)",
              "4 x 15–25m underwater swim (60s rest)",
              "200m cooldown"
            ]
          }
        ]
      }
    }
  };

  const days = Object.keys(mockWeekData[activeWeek]);

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
            className={`px-4 py-2 rounded border  tracking-wider whitespace-nowrap ${
              activeWeek === week ? "bg-yellow text-black" : "bg-gray-100 hover:bg-yellow hover:text-black"
            }`}
          >
            Week {week}
          </button>
        ))}
      </div>

      {/* Daily Sessions */}
      <div className="space-y-4 font-secondary">
        {days.map((day) => {
          const session = mockWeekData[activeWeek][day];
          const isOpen = expandedDays[day];
          return (
            <div key={day} className="border border-gray-300 rounded bg-[#F7F7F7]">
              <button
                className="w-full flex justify-between items-center p-4 text-left"
                onClick={() => toggleDay(day)}
              >
                <div>
                  <h2 className="text-2xl font-bold">{day}</h2>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">{session.type}</p>
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
