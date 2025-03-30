import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

// Auto-expanding textarea for day notes
const DayNoteTextarea = ({ value, onChange }) => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height = `${ref.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <textarea
      ref={ref}
      value={value}
      onChange={onChange}
      placeholder="Add a note for this training day..."
      className="w-full italic text-sm text-white bg-transparent border border-[#2A2A2A] px-3 py-2 rounded resize-none overflow-hidden"
      rows={1}
      onInput={(e) => {
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;
      }}
    />
  );
};

const TrainingSchedule = () => {
  const { user, hasPaid } = useAuth();
  const [activeWeek, setActiveWeek] = useState(
    parseInt(localStorage.getItem("activeWeek")) || 1
  );
  const [expandedDays, setExpandedDays] = useState({});
  const [programData, setProgramData] = useState({});
  const [userProgress, setUserProgress] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("activeWeek", activeWeek);
  }, [activeWeek]);

  useEffect(() => {
    const fetchProgramAndProgress = async () => {
      const programSnap = await getDoc(doc(db, "trainingPrograms", "default"));
      const userSnap = await getDoc(doc(db, "users", user.uid));

      if (programSnap.exists()) {
        const data = programSnap.data();
        setProgramData(data.weeks || {});
      }

      if (userSnap.exists()) {
        const progressData = userSnap.data().trainingProgress || {};
        setUserProgress(progressData);
      }

      setLoading(false);
    };

    fetchProgramAndProgress();
  }, [user]);

  const handleNoteChange = async (dayKey, newNote) => {
    const updatedProgress = {
      ...userProgress,
      [`week${activeWeek}`]: {
        ...userProgress[`week${activeWeek}`],
        [dayKey]: {
          ...(userProgress[`week${activeWeek}`]?.[dayKey] || {}),
          note: newNote,
        },
      },
    };

    setUserProgress(updatedProgress);

    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, {
      [`trainingProgress.week${activeWeek}.${dayKey}.note`]: newNote,
    });
  };

  const handleBlockCheckbox = async (dayKey, blockIdx) => {
    const prevState =
      userProgress?.[`week${activeWeek}`]?.[dayKey]?.blocksCompleted?.[
        blockIdx
      ] || false;

    const updatedProgress = {
      ...userProgress,
      [`week${activeWeek}`]: {
        ...userProgress[`week${activeWeek}`],
        [dayKey]: {
          ...(userProgress[`week${activeWeek}`]?.[dayKey] || {}),
          blocksCompleted: {
            ...(userProgress[`week${activeWeek}`]?.[dayKey]?.blocksCompleted ||
              {}),
            [blockIdx]: !prevState,
          },
        },
      },
    };

    setUserProgress(updatedProgress);

    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, {
      [`trainingProgress.week${activeWeek}.${dayKey}.blocksCompleted.${blockIdx}`]:
        !prevState,
    });
  };

  if (!user) return <Navigate to="/login" />;
  if (!hasPaid) return <Navigate to="/pricing" />;
  if (loading)
    return <div className="p-6 text-gray-300">Loading training program...</div>;

  const weekTabs = [1, 2, 3, 4, 5, 6];
  const currentWeek = programData[`week${activeWeek}`];
  const days = currentWeek ? Object.keys(currentWeek) : [];

  const toggleDay = (day) => {
    setExpandedDays((prev) => ({ ...prev, [day]: !prev[day] }));
  };

  const weekdayOrder = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  const daysSorted = days.sort(
    (a, b) =>
      weekdayOrder.indexOf(a.toLowerCase()) -
      weekdayOrder.indexOf(b.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#121212] text-gray-200 px-4 sm:px-6 py-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-white">
        Your Training Program
      </h1>

      {/* Week Tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto">
        {weekTabs.map((week) => (
          <button
            key={week}
            onClick={() => setActiveWeek(week)}
            className={`px-4 py-2 rounded text-sm tracking-wider font-medium whitespace-nowrap transition-all duration-200 ${
              activeWeek === week
                ? "bg-cyan-400 text-white"
                : "bg-[#1E1E1E] text-gray-400 border-[#2A2A2A] hover:bg-cyan-400 hover:text-white"
            }`}
          >
            Week {week}
          </button>
        ))}
      </div>

      {/* Daily Sessions */}
      <div className="space-y-4">
        {daysSorted.map((day) => {
          const session = currentWeek[day];
          const isOpen = expandedDays[day];
          const userDayData = userProgress[`week${activeWeek}`]?.[day] || {};
          const dayNote = userDayData.note || {};
          const blocksCompleted = userDayData.blocksCompleted || {};

          return (
            <div
              key={day}
              className="border border-[#2A2A2A] rounded bg-[#1E1E1E]"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left text-white hover:bg-[#2A2A2A]"
                onClick={() => toggleDay(day)}
              >
                <div>
                  <h2 className="text-xl font-bold capitalize">{day}</h2>
                  <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                    {session.type}
                  </p>
                </div>
                <span className="text-2xl font-bold text-gray-400">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="p-4 space-y-4">
                  {session.blocks.map((block, idx) => {
                    const isCompleted = blocksCompleted[idx] || false;

                    return (
                      <div
                        key={idx}
                        className={`bg-[#121212] border border-[#2A2A2A] rounded p-4 space-y-2 transition-opacity ${
                          isCompleted ? "opacity-70" : "opacity-100"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg text-white">
                            {block.title}
                          </h3>
                          <label className="flex items-center gap-2 text-sm text-gray-400">
                            <input
                              type="checkbox"
                              checked={isCompleted}
                              onChange={() => handleBlockCheckbox(day, idx)}
                              className="form-checkbox h-4 w-4 text-cyan-400"
                            />
                            Mark complete
                          </label>
                        </div>

                        {block.subHeader && (
                          <p className="text-sm text-cyan-400 font-medium mb-2">
                            {block.subHeader}
                          </p>
                        )}

                        {block.blockNote && (
                          <p className="text-white text-sm mb-2">
                            {block.blockNote}
                          </p>
                        )}

                        <ul className="text-sm text-gray-300 space-y-2 list-inside">
                          {block.items.map((item, i) => {
                            const text =
                              typeof item === "string" ? item : item.text;
                            return (
                              <li key={i} className="list-disc ml-2">
                                {text}
                              </li>
                            );
                          })}
                        </ul>

                        {block.note && (
                          <p className="mt-2 italic text-sm text-gray-500">
                            {block.note}
                          </p>
                        )}
                      </div>
                    );
                  })}

                  {/* One day-level note input field */}
                  <DayNoteTextarea
                    value={dayNote}
                    onChange={(e) => handleNoteChange(day, e.target.value)}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrainingSchedule;
