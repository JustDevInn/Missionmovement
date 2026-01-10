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
  const [savedBadge, setSavedBadge] = useState({});
  const [expanded, setExpanded] = useState({});

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
    const timestamp = new Date().toISOString();

    try {
      await updateDoc(userRef, {
        [`trainingProgress.${weekKey}.reflection`]: reflectionValue,
        [`trainingProgress.${weekKey}.lastSavedAt`]: timestamp,
      });

      setProgressData((prev) => ({
        ...prev,
        [weekKey]: {
          ...prev[weekKey],
          reflection: reflectionValue,
          lastSavedAt: timestamp,
        },
      }));

      setSavedBadge((prev) => ({ ...prev, [weekKey]: true }));
      setTimeout(() => {
        setSavedBadge((prev) => ({ ...prev, [weekKey]: false }));
      }, 2500);
    } catch (err) {
      console.error("Error saving reflection:", err);
    } finally {
      setSavingWeek(null);
    }
  };

  const formatTimestamp = (iso) => {
    if (!iso) return "";
    const date = new Date(iso);
    return `Last saved: ${date.toLocaleString("default", {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  };

  if (!user) return <Navigate to="/login" />;
  if (!hasPaid) return <Navigate to="/pricing" />;
  if (loading) return <div className="p-6 text-gray-300">Loading...</div>;

  return (
    <div className="min-h-screen bg-[#121212] text-white px-4 sm:px-6 py-10 max-w-5xl mx-auto">
      <h1 className="h1 mb-8">Check-In & Reflection</h1>

      {progressData &&
        typeof progressData === "object" &&
        Object.entries(progressData).map(([weekKey, week]) => {
          if (!week || typeof week !== "object") return null;

          const reflection = week.reflection || "";
          const lastSaved = week.lastSavedAt || null;
          const days = Object.keys(week).filter(
            (k) => k !== "reflection" && k !== "lastSavedAt"
          );

          const blocksCompleted = days.reduce((acc, day) => {
            const blockData = week[day]?.blocksCompleted || {};
            const completedCount =
              Object.values(blockData).filter(Boolean).length;
            return acc + completedCount;
          }, 0);

          const isExpanded = expanded[weekKey];
          const preview =
            reflection.length > 60
              ? reflection.slice(0, 60) + "..."
              : reflection;

          return (
            <div
              key={weekKey}
              className="bg-[#1E1E1E] border border-[#2A2A2A] rounded p-5 mb-8"
            >
              <div
                className="cursor-pointer flex justify-between items-center"
                onClick={() =>
                  setExpanded((prev) => ({
                    ...prev,
                    [weekKey]: !prev[weekKey],
                  }))
                }
              >
                <div>
                  <h2 className="text-xl font-semibold text-yellow capitalize">
                    {weekKey}
                  </h2>
                  <p className="text-brown tracking-wider text-base md:text-lg">
                    Completed blocks: {blocksCompleted}
                  </p>
                  {!isExpanded && (
                    <p className="italic text-gray-300 mt-1 text-base md:text-lg">
                      {preview || "No reflection yet..."}
                    </p>
                  )}
                  {lastSaved && !isExpanded && (
                    <p className="text-xs text-gray-500">
                      {formatTimestamp(lastSaved)}
                    </p>
                  )}
                </div>

                {savedBadge[weekKey] && (
                  <span className="text-green-400 text-xl font-bold">✅</span>
                )}
              </div>

              {isExpanded && (
                <div className="mt-4 space-y-3">
                  <AutoExpandingTextarea
                    value={reflectionDrafts[weekKey] ?? reflection}
                    onChange={(e) =>
                      handleReflectionChange(weekKey, e.target.value)
                    }
                    placeholder="Write your thoughts or summary for this week..."
                  />
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => saveReflection(weekKey)}
                      disabled={savingWeek === weekKey}
                      className="btn text-sm px-6 py-2 h-[40px] min-w-[150px] hover:scale-105 transition"
                    >
                      {savingWeek === weekKey ? "Saving..." : "Save Reflection"}
                    </button>
                    <span className="text-xs text-gray-500">
                      {formatTimestamp(lastSaved)}
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default CheckIn;
