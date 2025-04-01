import React, { useState, useEffect, useRef } from "react";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsedTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((ms % 60000) / 1000)
      .toString()
      .padStart(2, "0");
    const milliseconds = Math.floor((ms % 1000) / 10)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}.${milliseconds}`;
  };

  const handleStartStop = () => setIsRunning((prev) => !prev);
  const handleLap = () => {
    if (isRunning) setLaps((prev) => [elapsedTime, ...prev]);
  };
  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
    setLaps([]);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 py-6 bg-[#121212] text-white">
      <div className="w-full max-w-md bg-[#1E1E1E] border border-[#2A2A2A] rounded-lg shadow-md p-6 flex flex-col justify-between h-[550px]">
        <div>
          <h2 className="text-xl font-bold text-yellow text-center mb-4 uppercase tracking-widest">
            Stopwatch
          </h2>

          <div className="text-5xl md:text-6xl font-mono text-center mb-6 text-white">
            {formatTime(elapsedTime)}
          </div>

          <div className="flex justify-between gap-4 mb-6">
            <button
              onClick={handleLap}
              disabled={!isRunning}
              className="flex-1 py-3 rounded text-sm uppercase font-semibold border border-yellow text-yellow hover:bg-yellow hover:text-black transition disabled:opacity-50"
            >
              Round
            </button>

            <button
              onClick={handleStartStop}
              className={`flex-1 py-3 rounded text-sm uppercase font-bold tracking-wide transition ${
                isRunning
                  ? "bg-red-600 hover:bg-red-700 text-white"
                  : "bg-yellow hover:bg-yellow/90 text-black"
              }`}
            >
              {isRunning ? "Stop" : "Start"}
            </button>
          </div>

          {elapsedTime > 0 && !isRunning && (
            <button
              onClick={handleReset}
              className="w-full text-center text-sm text-gray-400 hover:text-white mb-4 underline"
            >
              Reset
            </button>
          )}
        </div>

        <div className="text-sm text-gray-300 space-y-1 max-h-48 overflow-y-auto pr-1 border-t border-[#2A2A2A] pt-4">
          {laps.map((lap, idx) => (
            <div key={idx} className="flex justify-between">
              <span className="text-brown">Round {laps.length - idx}</span>
              <span>{formatTime(lap)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
