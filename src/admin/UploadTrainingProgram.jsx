import React, { useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { FaPlus, FaMinus } from "react-icons/fa";

const UploadTrainingProgram = () => {
  const [week, setWeek] = useState(1);
  const [day, setDay] = useState("monday");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [blocks, setBlocks] = useState([]);
  const [newItem, setNewItem] = useState({ text: "", note: "" });
  const [newBlock, setNewBlock] = useState({
    title: "",
    subHeader: "",
    blockNote: "",
    note: "",
    items: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const docRef = doc(db, "trainingPrograms", "default");
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        const data = snap.data();
        const weekData = data.weeks?.[`week${week}`]?.[day]?.blocks || [];
        setBlocks(weekData);
      } else {
        setBlocks([]);
      }
      setLoading(false);
    };
    fetchData();
  }, [week, day]);

  const handleAddItem = () => {
    if (newItem.text.trim()) {
      setNewBlock((prev) => ({
        ...prev,
        items: [
          ...prev.items,
          { text: newItem.text.trim(), note: newItem.note.trim() },
        ],
      }));
      setNewItem({ text: "", note: "" });
    }
  };

  const handleRemoveItem = (i) => {
    const updated = [...newBlock.items];
    updated.splice(i, 1);
    setNewBlock({ ...newBlock, items: updated });
  };

  const handleAddBlock = async () => {
    const itemTrimmed = newItem.text.trim();
    const finalItems = itemTrimmed
      ? [...newBlock.items, { text: itemTrimmed, note: newItem.note.trim() }]
      : [...newBlock.items];

    const blockToAdd = {
      title: newBlock.title.trim(),
      subHeader: newBlock.subHeader.trim(),
      blockNote: newBlock.blockNote.trim(),
      note: newBlock.note.trim(),
      items: finalItems,
    };

    const updatedBlocks = [...blocks, blockToAdd];
    setBlocks(updatedBlocks);
    setNewItem({ text: "", note: "" });
    setNewBlock({
      title: "",
      subHeader: "",
      blockNote: "",
      note: "",
      items: [],
    });

    const docRef = doc(db, "trainingPrograms", "default");
    const snap = await getDoc(docRef);
    const existingData = snap.exists() ? snap.data() : {};

    const updatedWeeks = {
      ...existingData.weeks,
      [`week${week}`]: {
        ...existingData.weeks?.[`week${week}`],
        [day]: {
          blocks: updatedBlocks,
        },
      },
    };

    await setDoc(docRef, { weeks: updatedWeeks }, { merge: true });
  };

  const handleSave = async () => {
    setSaving(true);
    const docRef = doc(db, "trainingPrograms", "default");
    const snap = await getDoc(docRef);
    const existingData = snap.exists() ? snap.data() : {};

    const updatedWeeks = {
      ...existingData.weeks,
      [`week${week}`]: {
        ...existingData.weeks?.[`week${week}`],
        [day]: {
          blocks,
        },
      },
    };

    await setDoc(docRef, { weeks: updatedWeeks }, { merge: true });
    setSaving(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="w-full max-w-4xl px-4 sm:px-6 py-6 mx-auto text-white overflow-x-hidden relative">
      {(loading || saving) && (
        <div className="fixed top-4 right-4 z-50">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-cyan-400 border-opacity-50"></div>
        </div>
      )}

      {showToast && (
        <div className="fixed top-4 right-16 bg-cyan-600 text-white px-4 py-2 rounded shadow-lg z-50 transition">
          ✅ Program saved successfully!
        </div>
      )}

      <h1 className="text-2xl font-bold mb-6 text-cyan-400">
        Upload Training Program
      </h1>

      <div className="mb-6 flex gap-4">
        <select
          value={week}
          onChange={(e) => setWeek(Number(e.target.value))}
          className="bg-[#1E1E1E] border border-[#2A2A2A] rounded px-3 py-2 text-white"
        >
          {[1, 2, 3, 4, 5, 6].map((w) => (
            <option key={w} value={w}>
              Week {w}
            </option>
          ))}
        </select>

        <select
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className="bg-[#1E1E1E] border border-[#2A2A2A] rounded px-3 py-2 text-white"
        >
          {[
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday",
            "sunday",
          ].map((d) => (
            <option key={d} value={d}>
              {d.charAt(0).toUpperCase() + d.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <input
        className="w-full bg-[#121212] border border-[#2A2A2A] px-3 py-2 mb-3 rounded placeholder-gray-400 text-white"
        placeholder="Block Title (e.g., Foundational Strength)"
        value={newBlock.title}
        onChange={(e) => setNewBlock({ ...newBlock, title: e.target.value })}
      />
      <input
        className="w-full bg-[#121212] border border-[#2A2A2A] px-3 py-2 mb-3 rounded placeholder-gray-400 text-white"
        placeholder="Block Sub-header (e.g., Strength / Conditioning)"
        value={newBlock.subHeader}
        onChange={(e) =>
          setNewBlock({ ...newBlock, subHeader: e.target.value })
        }
      />

      <input
        className="w-full bg-[#121212] border border-[#2A2A2A] px-3 py-2 mb-3 rounded placeholder-gray-400 text-white"
        placeholder="Items Note (e.g., general instructions before the list)"
        value={newBlock.blockNote}
        onChange={(e) =>
          setNewBlock({ ...newBlock, blockNote: e.target.value })
        }
      />

      <textarea
        className="w-full bg-[#121212] border border-[#2A2A2A] px-3 py-2 mb-3 rounded placeholder-gray-400 text-white resize-none overflow-hidden"
        placeholder="Block Note"
        value={newBlock.note}
        onChange={(e) => setNewBlock({ ...newBlock, note: e.target.value })}
        onInput={(e) => {
          e.target.style.height = "auto";
          e.target.style.height = `${e.target.scrollHeight}px`;
        }}
      />

      <ul className="mb-4 space-y-2">
        {newBlock.items.map((item, i) => (
          <li
            key={i}
            className="bg-[#1E1E1E] border border-[#2A2A2A] rounded p-3 text-sm"
          >
            <div className="flex justify-between items-center">
              <span className="text-gray-200">{item.text}</span>
              <button
                onClick={() => handleRemoveItem(i)}
                className="text-red-400 hover:text-white text-xs"
                title="Remove Item"
              >
                <FaMinus />
              </button>
            </div>
            {item.note && (
              <p className="text-gray-400 italic text-xs mt-1 ml-1">
                {item.note}
              </p>
            )}
          </li>
        ))}
      </ul>

      <div className="mb-6">
        <input
          className="w-full bg-[#121212] border border-[#2A2A2A] px-3 py-2 rounded text-white placeholder-gray-400 mb-2"
          placeholder="New item"
          value={newItem.text}
          onChange={(e) => setNewItem({ ...newItem, text: e.target.value })}
        />
        <input
          className="w-full bg-[#121212] border border-[#2A2A2A] px-3 py-2 rounded text-gray-300 placeholder-gray-500 italic text-sm"
          placeholder="Optional note (e.g., Complete 3 rounds, no rest)"
          value={newItem.note}
          onChange={(e) => setNewItem({ ...newItem, note: e.target.value })}
        />
        <button
          onClick={handleAddItem}
          className="mt-2 text-cyan-400 hover:text-white text-sm p-2"
          title="Add Item"
        >
          <FaPlus />
        </button>
      </div>

      <button
        onClick={handleAddBlock}
        className="mb-6 bg-cyan-600 text-white px-6 py-2 rounded hover:bg-cyan-700 transition"
      >
        Add Block
      </button>

      <div className="space-y-4 mb-6">
        {blocks.map((block, index) => (
          <div
            key={index}
            className="bg-[#1E1E1E] border border-[#2A2A2A] rounded p-4"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-white">{block.title}</h3>
                {block.subHeader && (
                  <p className="text-sm font-semibold text-cyan-400 mb-1">
                    {block.subHeader}
                  </p>
                )}
                {block.blockNote && (
                  <p className="text-sm text-white mb-2">{block.blockNote}</p>
                )}
                {block.note && (
                  <p className="text-sm text-gray-400 italic mb-2">
                    {block.note}
                  </p>
                )}

                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                  {block.items?.map((item, i) => (
                    <li key={i}>
                      {item.text}
                      {item.note && (
                        <p className="text-gray-400 italic text-xs ml-4 mt-1">
                          {item.note}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => {
                  const updated = [...blocks];
                  updated.splice(index, 1);
                  setBlocks(updated);
                }}
                className="text-red-400 hover:text-white text-sm"
                title="Remove Block"
              >
                <FaMinus />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleSave}
        disabled={loading || saving}
        className="bg-cyan-600 text-white px-6 py-2 rounded hover:bg-cyan-700 transition"
      >
        {saving ? "Saving..." : "Save Program"}
      </button>
    </div>
  );
};

export default UploadTrainingProgram;
