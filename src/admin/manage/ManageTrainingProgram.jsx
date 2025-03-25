import React, { useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";


const ManageTrainingProgram = () => {
  const [week, setWeek] = useState(1);
  const [day, setDay] = useState("monday");
  const [program, setProgram] = useState([]);
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState("");
  const [title, setTitle] = useState("");
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    console.log("✅ ManageTrainingProgram mounted");
  }, []);

  // Fetch existing data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const docRef = doc(db, "trainingPrograms", "default");
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        const data = snap.data();
        const weekData = data.weeks?.[`week${week}`]?.[day]?.blocks || [];
        if (weekData.length > 0) {
          setTitle(weekData[0].title || "");
          setNote(weekData[0].note || "");
          setProgram(weekData[0].items || []);
        } else {
          setTitle("");
          setNote("");
          setProgram([]);
        }
      }
      setLoading(false);
    };

    fetchData();
  }, [week, day]);

  const handleSave = async () => {
    const newBlock = {
      title,
      note,
      items: program,
    };

    const docRef = doc(db, "trainingPrograms", "default");
    const snap = await getDoc(docRef);
    const existingData = snap.exists() ? snap.data() : {};

    const updatedWeeks = {
      ...existingData.weeks,
      [`week${week}`]: {
        ...existingData.weeks?.[`week${week}`],
        [day]: {
          blocks: [newBlock], // 👈 Overwrite current day's blocks (you can later allow multiple)
        },
      },
    };

    await setDoc(docRef, { weeks: updatedWeeks }, { merge: true });
    alert("Program saved!");
  };
  return (
    
    <div className="p-6 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Manage Training Program</h1>

      <div className="mb-4 flex gap-4">
        <select value={week} onChange={(e) => setWeek(Number(e.target.value))}>
          {[1, 2, 3, 4, 5, 6].map((w) => (
            <option key={w} value={w}>
              Week {w}
            </option>
          ))}
        </select>

        <select value={day} onChange={(e) => setDay(e.target.value)}>
          {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map((d) => (
            <option key={d} value={d}>
              {d.charAt(0).toUpperCase() + d.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <input
        className="w-full border px-3 py-2 mb-2 rounded"
        placeholder="Block Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full border px-3 py-2 mb-2 rounded"
        placeholder="Block Note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <ul className="mb-2">
        {program.map((item, i) => (
          <li key={i} className="flex justify-between mb-1">
            {item}
            <button
              onClick={() => {
                const updated = [...program];
                updated.splice(i, 1);
                setProgram(updated);
              }}
              className="text-red-500 text-xs"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 border px-3 py-2 rounded"
          placeholder="New item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button
          onClick={() => {
            if (newItem.trim()) {
              setProgram([...program, newItem.trim()]);
              setNewItem("");
            }
          }}
          className="bg-yellow px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <button
        onClick={handleSave}
        disabled={loading}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
      >
        Save Program
      </button>
    </div>
  );
};

export default ManageTrainingProgram;
