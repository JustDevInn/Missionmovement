import React, { useState, useEffect, useRef } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const AutoExpandingTextarea = ({
  value,
  onSave,
  isEditing,
  onEdit,
  placeholder,
}) => {
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
      className={`w-full italic text-sm text-red-400 bg-transparent px-3 py-2 rounded resize-none overflow-hidden ${
        isEditing ? "border border-[#2A2A2A]" : "border-none"
      }`}
      placeholder={placeholder || "Note (optional)"}
      defaultValue={value}
      rows={1}
      onFocus={onEdit}
      onBlur={(e) => onSave(e.target.value)}
      onInput={(e) => {
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          e.target.blur();
        }
      }}
    />
  );
};

const ManageTrainingProgram = () => {
  const [week, setWeek] = useState(1);
  const [expandedDays, setExpandedDays] = useState({});
  const [programData, setProgramData] = useState({});
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState({});
  const [saving, setSaving] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const normalizeProgramData = (data) => {
    const normalized = { ...data };
    for (const weekKey in normalized) {
      for (const day in normalized[weekKey]) {
        normalized[weekKey][day].blocks.forEach((block) => {
          block.items = block.items.map((item) =>
            typeof item === "string" ? { text: item, note: "" } : item
          );
        });
      }
    }
    return normalized;
  };

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "trainingPrograms", "default");
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        const data = snap.data();
        const normalized = normalizeProgramData(data.weeks || {});
        setProgramData(normalized);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const toggleDay = (day) => {
    setExpandedDays((prev) => ({ ...prev, [day]: !prev[day] }));
  };

  const handleEdit = (path) => {
    setEditing((prev) => ({ ...prev, [path]: true }));
  };

  const handleSaveChange = async (path, value) => {
    const [weekKey, day, blockIdx, field, itemIdx, subField] = path.split(".");
    const updatedData = { ...programData };

    if (field === "items") {
      if (subField === "note") {
        updatedData[weekKey][day].blocks[blockIdx].items[itemIdx].note = value;
      } else {
        updatedData[weekKey][day].blocks[blockIdx].items[itemIdx].text = value;
      }
    } else {
      updatedData[weekKey][day].blocks[blockIdx][field] = value;
    }

    setProgramData(updatedData);
    setEditing((prev) => ({ ...prev, [path]: false }));
    setSaving(true);

    try {
      const docRef = doc(db, "trainingPrograms", "default");
      await updateDoc(docRef, {
        [`weeks.${weekKey}.${day}.blocks`]: updatedData[weekKey][day].blocks,
      });
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (error) {
      console.error("Error saving update:", error);
    } finally {
      setSaving(false);
    }
  };

  const handleAddItem = (week, day, blockIdx) => {
    const weekKey = `week${week}`;
    const updatedData = { ...programData };
    updatedData[weekKey][day].blocks[blockIdx].items.push({
      text: "",
      note: "",
    });
    setProgramData(updatedData);
  };

  const handleRemoveItem = async (week, day, blockIdx, itemIdx) => {
    const weekKey = `week${week}`;
    const updatedData = { ...programData };
    updatedData[weekKey][day].blocks[blockIdx].items.splice(itemIdx, 1);
    setProgramData(updatedData);

    try {
      await updateDoc(doc(db, "trainingPrograms", "default"), {
        [`weeks.${weekKey}.${day}.blocks`]: updatedData[weekKey][day].blocks,
      });
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  if (loading)
    return <div className="p-6 text-gray-300">Loading training program...</div>;

  const currentWeek = programData[`week${week}`] || {};
  const weekdayOrder = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  const days = Object.keys(currentWeek).sort(
    (a, b) =>
      weekdayOrder.indexOf(a.toLowerCase()) -
      weekdayOrder.indexOf(b.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#121212] text-gray-200 py-10 max-w-5xl mx-auto px-0 sm:px-0">
      {saving && (
        <div className="fixed top-4 right-4 z-50">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-cyan-400 border-opacity-50"></div>
        </div>
      )}
      {showToast && (
        <div className="fixed top-4 right-16 bg-cyan-600 text-white px-4 py-2 rounded shadow-lg z-50 transition">
          ✅ Program updated successfully!
        </div>
      )}

      <h1 className="text-3xl font-bold mb-6 text-cyan-400">
        Manage Training Program
      </h1>

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
                  <p className="text-sm text-gray-400 uppercase tracking-wider">
                    {session.type || "Session"}
                  </p>
                </div>
                <span className="text-2xl font-bold text-gray-400">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="p-4 space-y-4">
                  {session.blocks.map((block, blockIdx) => (
                    <div
                      key={blockIdx}
                      className="bg-[#121212] border border-[#2A2A2A] rounded p-4 space-y-2"
                    >
                      <input
                        className={`w-full font-bold text-lg text-white bg-transparent px-3 py-2 rounded ${
                          editing[`week${week}.${day}.${blockIdx}.title`]
                            ? "border border-[#2A2A2A]"
                            : "border-none"
                        }`}
                        defaultValue={block.title}
                        onFocus={() =>
                          handleEdit(`week${week}.${day}.${blockIdx}.title`)
                        }
                        onBlur={(e) =>
                          handleSaveChange(
                            `week${week}.${day}.${blockIdx}.title`,
                            e.target.value
                          )
                        }
                      />
                      <input
                        className={`w-full italic text-sm text-gray-300 bg-transparent px-3 py-2 rounded ${
                          editing[`week${week}.${day}.${blockIdx}.subHeader`]
                            ? "border border-[#2A2A2A]"
                            : "border-none"
                        }`}
                        placeholder="Block Sub-header"
                        defaultValue={block.subHeader || ""}
                        onFocus={() =>
                          handleEdit(`week${week}.${day}.${blockIdx}.subHeader`)
                        }
                        onBlur={(e) =>
                          handleSaveChange(
                            `week${week}.${day}.${blockIdx}.subHeader`,
                            e.target.value
                          )
                        }
                      />
                      <AutoExpandingTextarea
                        value={block.blockNote}
                        placeholder="Items Note (e.g., general instructions before the list)"
                        onSave={(val) =>
                          handleSaveChange(
                            `week${week}.${day}.${blockIdx}.blockNote`,
                            val
                          )
                        }
                        isEditing={
                          editing[`week${week}.${day}.${blockIdx}.blockNote`]
                        }
                        onEdit={() =>
                          handleEdit(`week${week}.${day}.${blockIdx}.blockNote`)
                        }
                        className="text-white"
                      />

                      <AutoExpandingTextarea
                        value={block.note}
                        placeholder="Block footer note (gray italic)"
                        onSave={(val) =>
                          handleSaveChange(
                            `week${week}.${day}.${blockIdx}.note`,
                            val
                          )
                        }
                        isEditing={
                          editing[`week${week}.${day}.${blockIdx}.note`]
                        }
                        onEdit={() =>
                          handleEdit(`week${week}.${day}.${blockIdx}.note`)
                        }
                      />

                      <ul className="list-none text-sm space-y-4">
                        {block.items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <div className="flex items-center gap-2">
                              <input
                                className={`flex-1 bg-transparent text-white px-2 py-1 rounded ${
                                  editing[
                                    `week${week}.${day}.${blockIdx}.items.${itemIdx}.text`
                                  ]
                                    ? "border border-[#2A2A2A]"
                                    : "border-none"
                                }`}
                                defaultValue={item.text}
                                onFocus={() =>
                                  handleEdit(
                                    `week${week}.${day}.${blockIdx}.items.${itemIdx}.text`
                                  )
                                }
                                onBlur={(e) =>
                                  handleSaveChange(
                                    `week${week}.${day}.${blockIdx}.items.${itemIdx}.text`,
                                    e.target.value
                                  )
                                }
                              />
                              <div className="flex space-x-2">
                                <button
                                  onClick={() =>
                                    handleAddItem(week, day, blockIdx)
                                  }
                                  className="text-xs text-cyan-400 hover:text-white"
                                  title="Add Item"
                                >
                                  +
                                </button>
                                <button
                                  onClick={() =>
                                    handleRemoveItem(
                                      week,
                                      day,
                                      blockIdx,
                                      itemIdx
                                    )
                                  }
                                  className="text-xs text-red-400 hover:text-white"
                                  title="Remove Item"
                                >
                                  −
                                </button>
                              </div>
                            </div>

                            <AutoExpandingTextarea
                              value={item.note}
                              placeholder="Item subnote (optional)"
                              onSave={(val) =>
                                handleSaveChange(
                                  `week${week}.${day}.${blockIdx}.items.${itemIdx}.note`,
                                  val
                                )
                              }
                              isEditing={
                                editing[
                                  `week${week}.${day}.${blockIdx}.items.${itemIdx}.note`
                                ]
                              }
                              onEdit={() =>
                                handleEdit(
                                  `week${week}.${day}.${blockIdx}.items.${itemIdx}.note`
                                )
                              }
                            />
                          </li>
                        ))}
                      </ul>
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
