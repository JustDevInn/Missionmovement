import React, { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { FaPen, FaCheck } from "react-icons/fa";

const ManageTrainingProgram = () => {
  const [week, setWeek] = useState(1);
  const [expandedDays, setExpandedDays] = useState({});
  const [programData, setProgramData] = useState({});
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState({});
  const [saved, setSaved] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "trainingPrograms", "default");
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        const data = snap.data();
        setProgramData(data.weeks || {});
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const toggleDay = (day) => {
    setExpandedDays((prev) => ({ ...prev, [day]: !prev[day] }));
  };

  const handleEdit = (path) => {
    setEditing({ ...editing, [path]: true });
  };

  const handleSaveChange = async (path, value) => {
    const [weekKey, day, blockIdx, field, itemIdx] = path.split(".");
    const updatedData = { ...programData };

    if (field === "items") {
      updatedData[weekKey][day].blocks[blockIdx].items[itemIdx] = value;
    } else {
      updatedData[weekKey][day].blocks[blockIdx][field] = value;
    }

    setProgramData(updatedData);
    setEditing({ ...editing, [path]: false });

    const docRef = doc(db, "trainingPrograms", "default");
    await updateDoc(docRef, {
      [`weeks.${weekKey}.${day}.blocks`]: updatedData[weekKey][day].blocks,
    });

    setSaved((prev) => ({ ...prev, [path]: true }));
    setTimeout(() => {
      setSaved((prev) => ({ ...prev, [path]: false }));
    }, 1500);
  };

  const handleKeyDown = (e, path, currentValue) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSaveChange(path, e.target.value);
    }
  };

  if (loading) return <div className="p-6 text-gray-300">Loading training program...</div>;

  const currentWeek = programData[`week${week}`] || {};
  const days = Object.keys(currentWeek);

  return (
    <div className="min-h-screen bg-[#121212] text-gray-200 px-4 sm:px-6 py-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-cyan-400">Manage Training Program</h1>

      <div className="flex gap-2 mb-8 overflow-x-auto">
        {[1, 2, 3, 4, 5, 6].map((w) => (
          <button
            key={w}
            onClick={() => setWeek(w)}
            className={`px-4 py-2 rounded text-sm font-medium transition ${
              week === w
                ? "bg-cyan-400 text-white"
                : "bg-[#1E1E1E] text-gray-400 hover:bg-cyan-400 hover:text-white"
            }`}
          >
            Week {w}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {days.map((day) => {
          const session = currentWeek[day];
          const isOpen = expandedDays[day];
          return (
            <div key={day} className="border border-[#2A2A2A] rounded bg-[#1E1E1E]">
              <button
                className="w-full flex justify-between items-center p-4 text-left text-white hover:bg-[#2A2A2A]"
                onClick={() => toggleDay(day)}
              >
                <div>
                  <h2 className="text-xl font-bold capitalize">{day}</h2>
                  <p className="text-sm text-gray-400 uppercase tracking-wider">
                    {session.type || "Session"}
                  </p>
                </div>
                <span className="text-2xl font-bold text-gray-400">{isOpen ? "−" : "+"}</span>
              </button>

              {isOpen && (
                <div className="p-4 space-y-4">
                  {session.blocks.map((block, blockIdx) => (
                    <div key={blockIdx} className="bg-[#121212] border border-[#2A2A2A] rounded p-4">
                      {/* Block Title */}
                      <div className="flex items-center justify-between mb-1">
                        {editing[`week${week}.${day}.${blockIdx}.title`] ? (
                          <input
                            className="w-full bg-transparent border border-[#2A2A2A] text-white px-2 py-1 rounded mr-2"
                            defaultValue={block.title}
                            onKeyDown={(e) =>
                              handleKeyDown(e, `week${week}.${day}.${blockIdx}.title`, block.title)
                            }
                          />
                        ) : (
                          <h3 className="font-semibold text-lg text-white">
                            {block.title}
                          </h3>
                        )}
                        <span className="ml-2 text-green-400">
                          {saved[`week${week}.${day}.${blockIdx}.title`] && <FaCheck />}
                        </span>
                        <button
                          className="text-sm text-gray-400 hover:text-white ml-2"
                          onClick={() => handleEdit(`week${week}.${day}.${blockIdx}.title`)}
                        >
                          <FaPen />
                        </button>
                      </div>

                      {/* Items */}
                      <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 pl-4">
                        {block.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-center justify-between gap-2">
                            {editing[`week${week}.${day}.${blockIdx}.items.${itemIdx}`] ? (
                              <input
                                className="flex-1 bg-transparent border border-[#2A2A2A] text-white px-2 py-1 rounded"
                                defaultValue={item}
                                onKeyDown={(e) =>
                                  handleKeyDown(
                                    e,
                                    `week${week}.${day}.${blockIdx}.items.${itemIdx}`,
                                    item
                                  )
                                }
                              />
                            ) : (
                              <span>{item}</span>
                            )}
                            <span className="ml-2 text-green-400">
                              {saved[`week${week}.${day}.${blockIdx}.items.${itemIdx}`] && <FaCheck />}
                            </span>
                            <button
                              className="text-xs text-gray-400 hover:text-white ml-2"
                              onClick={() =>
                                handleEdit(
                                  `week${week}.${day}.${blockIdx}.items.${itemIdx}`
                                )
                              }
                            >
                              <FaPen />
                            </button>
                          </li>
                        ))}
                      </ul>

                      {/* Note */}
                      {block.note && (
                        <div className="mt-2 flex items-center justify-between">
                          {editing[`week${week}.${day}.${blockIdx}.note`] ? (
                            <textarea
                              className="w-full bg-transparent border border-[#2A2A2A] text-gray-300 px-2 py-1 rounded"
                              defaultValue={block.note}
                              onKeyDown={(e) =>
                                handleKeyDown(e, `week${week}.${day}.${blockIdx}.note`, block.note)
                              }
                            />
                          ) : (
                            <p className="italic text-sm text-gray-500">{block.note}</p>
                          )}
                          <span className="ml-2 text-green-400">
                            {saved[`week${week}.${day}.${blockIdx}.note`] && <FaCheck />}
                          </span>
                          <button
                            className="text-xs text-gray-400 hover:text-white ml-2"
                            onClick={() => handleEdit(`week${week}.${day}.${blockIdx}.note`)}
                          >
                            <FaPen />
                          </button>
                        </div>
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

export default ManageTrainingProgram;
