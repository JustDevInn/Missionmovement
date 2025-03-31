import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { doc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Spinner from "../../components/Spinner";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Progress = () => {
  const { user, hasPaid } = useAuth();
  const [loading, setLoading] = useState(true);
  const [progressData, setProgressData] = useState({});
  const [startingScores, setStartingScores] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [scoresDraft, setScoresDraft] = useState({});
  const [savedAt, setSavedAt] = useState(null);
  const [showSaved, setShowSaved] = useState(false);
  const [totalBlocks, setTotalBlocks] = useState(0);
  const [totalReflections, setTotalReflections] = useState(0);
  const [chartData, setChartData] = useState({});
  const [streak, setStreak] = useState(0);
  const [savingScores, setSavingScores] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const userRef = doc(db, "users", user.uid);
      const snap = await getDoc(userRef);
      if (snap.exists()) {
        const data = snap.data();
        const training = data.trainingProgress || {};
        const scores = data.startingScores || {};
        const timestamp = data.startingScoresUpdatedAt;

        let blockCount = 0;
        let reflections = 0;
        const chartPoints = {};
        let streakCount = 0;
        let streakBroken = false;

        if (training && typeof training === "object") {
          Object.entries(training).forEach(([weekKey, weekVal]) => {
            if (!weekVal || typeof weekVal !== "object") return;

            let weekTotal = 0;
            Object.entries(weekVal).forEach(([dayKey, dayData]) => {
              if (dayKey === "reflection") return;
              const completedBlocks = Object.values(
                dayData?.blocksCompleted || {}
              );
              const completedCount = completedBlocks.filter(Boolean).length;
              if (completedCount > 0 && !streakBroken) {
                streakCount += 1;
              } else if (!completedCount.length && !streakBroken) {
                streakBroken = true;
              }
              weekTotal += completedCount;
            });

            blockCount += weekTotal;
            chartPoints[weekKey] = weekTotal;

            if (weekVal.reflection && weekVal.reflection.trim() !== "") {
              reflections += 1;
            }
          });
        }

        setProgressData(training);
        setStartingScores(scores);
        setScoresDraft(scores);
        setSavedAt(timestamp?.toDate());
        setTotalBlocks(blockCount);
        setTotalReflections(reflections);
        setStreak(streakCount);

        setChartData({
          labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
          datasets: [
            {
              label: "Completed Blocks",
              data: [
                chartPoints.week1 || 0,
                chartPoints.week2 || 0,
                chartPoints.week3 || 0,
                chartPoints.week4 || 0,
                chartPoints.week5 || 0,
                chartPoints.week6 || 0,
              ],
              backgroundColor: "rgba(34,211,238,0.7)",
            },
          ],
        });
      }
      setLoading(false);
    };

    if (user?.uid) fetchData();
  }, [user]);

  const handleScoreChange = (field, value) => {
    setScoresDraft((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const saveScores = async () => {
    setSavingScores(true);
    const userRef = doc(db, "users", user.uid);
    const now = new Date();

    await updateDoc(userRef, {
      startingScores: scoresDraft,
      startingScoresUpdatedAt: serverTimestamp(),
    });

    setStartingScores(scoresDraft);
    setEditMode(false);
    setShowSaved(true);
    setSavedAt(now);
    setSavingScores(false);
    setTimeout(() => setShowSaved(false), 3000);
  };

  if (!user) return <Navigate to="/login" />;
  if (!hasPaid) return <Navigate to="/pricing" />;
  if (loading) return <Spinner />;

  return (
    <div className="min-h-screen bg-[#121212] text-white px-4 sm:px-6 py-10 max-w-5xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold mb-4">Progress Overview</h1>

      {/* Starting Scores */}
      <div className="bg-[#1E1E1E] p-4 rounded border border-[#2A2A2A] relative">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">Starting Scores</h2>
          {!editMode && (
            <button
              onClick={() => setEditMode(true)}
              className="text-sm text-gray-400 hover:text-cyan-400"
              title="Edit"
            >
              ✏️
            </button>
          )}
        </div>

        {!editMode ? (
          <ul className="text-sm text-gray-300 space-y-1">
            <li>Pull-ups: {startingScores.pullUps || "N/A"}</li>
            <li>Push-ups: {startingScores.pushUps || "N/A"}</li>
            <li>Sit-ups: {startingScores.sitUps || "N/A"}</li>
            <li>5K Run Time: {startingScores.run5k || "N/A"}</li>
            {savedAt && (
              <p className="text-xs text-gray-500 italic mt-2">
                Last saved: {savedAt.toLocaleString()}
              </p>
            )}
            {showSaved && (
              <p className="text-green-400 text-sm mt-1">✅ Saved!</p>
            )}
          </ul>
        ) : (
          <div className="space-y-2">
            {["pullUps", "pushUps", "sitUps", "run5k"].map((field) => (
              <input
                key={field}
                type="text"
                value={scoresDraft[field] || ""}
                onChange={(e) => handleScoreChange(field, e.target.value)}
                placeholder={field}
                className="w-full bg-[#121212] border border-[#2A2A2A] rounded px-3 py-2 text-sm text-white"
              />
            ))}
            <button
              onClick={saveScores}
              disabled={savingScores}
              className="mt-2 px-4 py-1 text-sm rounded bg-cyan-500 hover:bg-cyan-600 text-white disabled:opacity-50 flex items-center gap-2"
            >
              {savingScores && (
                <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-white border-opacity-50" />
              )}
              {savingScores ? "Saving..." : "Save Scores"}
            </button>
          </div>
        )}
      </div>

      {/* Stats Summary */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="bg-[#1E1E1E] p-4 rounded border border-[#2A2A2A] text-center">
          <p className="text-2xl font-bold">{totalBlocks}</p>
          <p className="text-sm text-gray-400">Total Blocks Completed</p>
        </div>
        <div className="bg-[#1E1E1E] p-4 rounded border border-[#2A2A2A] text-center">
          <p className="text-2xl font-bold">{totalReflections}</p>
          <p className="text-sm text-gray-400">Reflections Written</p>
        </div>
        <div className="bg-[#1E1E1E] p-4 rounded border border-[#2A2A2A] text-center">
          <p className="text-2xl font-bold">{streak}</p>
          <p className="text-sm text-gray-400">Current Streak</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-[#1E1E1E] p-4 rounded border border-[#2A2A2A]">
        <h2 className="text-xl font-semibold mb-4">Weekly Progress</h2>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                max: 13,
              },
            },
            plugins: {
              legend: { display: false },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Progress;
