import React, { useEffect, useState, useRef } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

const AutoExpandingTextarea = ({ value, onChange, placeholder }) => {
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
      placeholder={placeholder}
      className="w-full italic text-sm text-white bg-transparent border border-[#2A2A2A] px-3 py-2 rounded resize-none overflow-hidden"
      rows={1}
      onInput={(e) => {
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;
      }}
    />
  );
};

const CheckIn = () => {
  const { user, hasPaid } = useAuth();
  const [progressData, setProgressData] = useState({});
  const [loading, setLoading] = useState(true);
  const [reflectionDrafts, setReflectionDrafts] = useState({});
  const [savingWeek, setSavingWeek] = useState(null);

  useEffect(() => {
    const fetchProgress = async () => {
      const snap = await getDoc(doc(db, "users", user.uid));
      if (snap.exists()) {
        setProgressData(snap.data().trainingProgress || {});
      }
      setLoading(false);
    };

    if (user?.uid) {
      fetchProgress();
    }
  }, [user]);

  const handleReflectionChange = (weekKey, value) => {
    setReflectionDrafts((prev) => ({ ...prev, [weekKey]: value }));
  };

  const saveReflection = async (weekKey) => {
    setSavingWeek(weekKey);
    const userRef = doc(db, "users", user.uid);
    const reflectionValue = reflectionDrafts[weekKey] || "";

    try {
      await updateDoc(userRef, {
        [`trainingProgress.${weekKey}.reflection`]: reflectionValue,
      });

      setProgressData((prev) => ({
        ...prev,
        [weekKey]: {
          ...prev[weekKey],
          reflection: reflectionValue,
        },
      }));
    } catch (err) {
      console.error("Error saving reflection:", err);
    } finally {
      setSavingWeek(null);
    }
  };

  const getWeekSummary = (weekKey, weekData) => {
    const days = Object.keys(weekData).filter((k) => k !== "reflection");
    const totalBlocks = days.reduce((acc, day) => {
      const blockData = weekData[day]?.blocksCompleted || {};
      return acc + Object.keys(blockData).length;
    }, 0);

    const completedBlocks = days.reduce((acc, day) => {
      const blockData = weekData[day]?.blocksCompleted || {};
      return acc + Object.values(blockData).filter(Boolean).length;
    }, 0);

    const hasReflection = !!weekData.reflection;

    return {
      totalBlocks,
      completedBlocks,
      hasReflection,
    };
  };

  if (!user) return <Navigate to="/login" />;
  if (!hasPaid) return <Navigate to="/pricing" />;
  if (loading) return <div className="p-6 text-gray-300">Loading...</div>;

  return (
    <div className="min-h-screen bg-[#121212] text-white px-4 sm:px-6 py-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-white">
        Check-In & Reflection
      </h1>

      {/* ✅ Visual Summary Section */}
      <div className="mb-8 space-y-2">
        {Object.entries(progressData).map(([weekKey, weekData]) => {
          if (!weekData || typeof weekData !== "object") return null;
          const summary = getWeekSummary(weekKey, weekData);

          return (
            <div
              key={weekKey}
              className="flex items-center justify-between bg-[#1E1E1E] border border-[#2A2A2A] px-4 py-2 rounded"
            >
              <span className="font-semibold text-white">
                {weekKey.toUpperCase()}
              </span>
              <div className="text-sm text-gray-400 space-x-2">
                <span>
                  {summary.completedBlocks}/{summary.totalBlocks} blocks
                  completed
                </span>
                <span>
                  {summary.hasReflection
                    ? "📝 Reflection saved"
                    : "✏️ No reflection"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 📝 Weekly Reflections */}
      {progressData &&
        typeof progressData === "object" &&
        Object.keys(progressData || {}).length > 0 &&
        Object.entries(progressData).map(([weekKey, week]) => {
          if (!week || typeof week !== "object") return null;

          const reflection = week.reflection || "";

          return (
            <div
              key={weekKey}
              className="bg-[#1E1E1E] border border-[#2A2A2A] rounded p-4 mb-6 space-y-4"
            >
              <h2 className="text-xl font-semibold text-cyan-400 capitalize">
                {weekKey}
              </h2>

              <AutoExpandingTextarea
                value={reflectionDrafts[weekKey] ?? reflection}
                onChange={(e) =>
                  handleReflectionChange(weekKey, e.target.value)
                }
                placeholder="Write your thoughts or summary for this week..."
              />

              <button
                onClick={() => saveReflection(weekKey)}
                disabled={savingWeek === weekKey}
                className="mt-2 px-4 py-1 text-sm rounded bg-cyan-500 hover:bg-cyan-600 text-white disabled:opacity-50"
              >
                {savingWeek === weekKey ? "Saving..." : "Save Reflection"}
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default CheckIn;
