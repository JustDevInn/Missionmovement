import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { FaUserCircle, FaLock } from "react-icons/fa";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

// Feature cards
const featureCards = [
  {
    title: "Your Program",
    description: "Click to view your program",
    image: "/img/bootgroup_carry.jpg",
    route: "/trainingprogram",
    locked: true,
    bgPosition: "top",
    bgSize: "cover",
    bgRepeat: "no-repeat",
  },
  {
    title: "Training Schedule",
    description: "View your workouts",
    image: "/img/profilepicture.png",
    route: "/trainingschedule",
    bgPosition: "top",
    bgSize: "cover",
    bgRepeat: "no-repeat",
  },
  {
    title: "Progress Overview",
    description: "View your gains",
    image: "/img/spelioladder.jpg",
    route: "/progress",
    bgPosition: "top",
    bgSize: "cover",
    bgRepeat: "no-repeat",
  },
  {
    title: "Schedule Check-In",
    description: "Book a call",
    image: "/img/barret.jpg",
    route: "/check-in",
    locked: true,
    bgPosition: "center",
    bgSize: "cover",
    bgRepeat: "no-repeat",
  },
  {
    title: "Video Library",
    description: "Explore resources",
    image: "/img/friscatnight.jpg",
    route: "/library",
    locked: true,
    bgPosition: "center",
    bgSize: "cover",
    bgRepeat: "no-repeat",
  },
];

const Dashboard = () => {
  const { user, hasPaid } = useAuth();
  const [localLoading, setLocalLoading] = useState(true);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUsername = async () => {
      if (user?.uid) {
        const userRef = doc(db, "users", user.uid);
        const snap = await getDoc(userRef);
        if (snap.exists()) {
          const data = snap.data();
          setUsername(data.username || "");
        }
      }
    };

    fetchUsername();

    const timer = setTimeout(() => setLocalLoading(false), 500);
    return () => clearTimeout(timer);
  }, [user]);

  if (localLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#121212] text-gray-200">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-cyan-500 border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="px-4 pt-6 pb-10 md:p-6 text-gray-200 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Welcome, {username || user.displayName || user.email}!
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Your journey starts here. Let’s get to work.
          </p>
        </div>
        <FaUserCircle className="text-4xl text-cyan-500 self-start sm:self-center" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureCards.map((card, index) => {
          const isLocked = card.locked && !hasPaid;

          const CardContent = (
            <>
              <div
                className="h-32 bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('${card.image}')`,
                  backgroundPosition: card.bgPosition,
                  backgroundSize: card.bgSize,
                  backgroundRepeat: card.bgRepeat,
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h3 className="text-white text-lg font-bold text-center px-2">
                    {card.title}
                  </h3>
                </div>
              </div>
              <div className="p-4 flex flex-col justify-between flex-1">
                <p className="text-sm text-gray-300 mb-3">{card.description}</p>
                {isLocked ? (
                  <div className="flex items-center gap-2 text-yellow-400 text-sm font-semibold">
                    <FaLock /> Upgrade to unlock
                  </div>
                ) : (
                  <span className="text-sm text-cyan-400 hover:text-white transition">
                    Go to {card.title}
                  </span>
                )}
              </div>
            </>
          );

          return isLocked ? (
            <div
              key={index}
              className="bg-[#1E1E1E] border border-[#2A2A2A] rounded-lg shadow flex flex-col overflow-hidden opacity-70 cursor-not-allowed"
            >
              {CardContent}
            </div>
          ) : (
            <Link
              key={index}
              to={card.route}
              className="bg-[#1E1E1E] border border-[#2A2A2A] rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              {CardContent}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
