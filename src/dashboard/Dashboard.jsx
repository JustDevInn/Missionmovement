import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { FaUserCircle, FaLock } from "react-icons/fa";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import LockedFeatureModal from "../components/LockedFeatureModal";

const featureCards = [
  {
    title: "Your Program",
    image: "/img/bootgroup_carry.webp",
    route: "/trainingprogram",
    locked: true,
    bgPosition: "top",
  },
  {
    title: "Training Schedule",
    image: "/img/profilepicture.png",
    route: "/trainingschedule",
    locked: true,
    bgPosition: "top",
  },
  {
    title: "Progress Overview",
    image: "/img/spelioladder.jpg",
    route: "/progress",
    locked: true,
    bgPosition: "bottom",
  },
  {
    title: "Schedule Check-In",
    image: "/img/barret.jpg",
    route: "/check-in",
    locked: true,
    bgPosition: "center",
  },
  {
    title: "Video Library",
    image: "/img/friscatnight.jpg",
    route: "/library",
    locked: true,
    bgPosition: "center",
  },
  {
    title: "Get Full Access",
    image: "/img/marines-sunset.jpg",
    route: "/pricing",
    locked: false,
    cta: "Unlock Now",
    bgPosition: "center",
  },
];

const Dashboard = () => {
  const { user, hasPaid } = useAuth();
  const [localLoading, setLocalLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchUsername = async () => {
      if (user?.uid) {
        const snap = await getDoc(doc(db, "users", user.uid));
        if (snap.exists()) {
          setUsername(snap.data()?.username || "");
        }
      }
    };

    fetchUsername();
    const timer = setTimeout(() => setLocalLoading(false), 500);
    return () => clearTimeout(timer);
  }, [user]);

  if (localLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#121212] text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-yellow border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] px-4 pt-8 pb-16 md:px-8 text-white max-w-7xl mx-auto font-primary">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
        <div>
          <h1 className="h1-header">
            Welcome, {username || user.displayName || user.email}!
          </h1>
          <p className="text-gray-400 font-light text-sm mt-1">
            {hasPaid
              ? "You said yes to discomfort, to resilience, to something greater."
              : "Your journey starts here. Let’s get to work."}
          </p>
        </div>
        <FaUserCircle className="text-5xl text-yellow self-start sm:self-center" />
      </div>

      {/* Grid of Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureCards
          .filter((card) => !(hasPaid && card.title === "Get Full Access"))
          .map((card, index) => {
            const isLocked = card.locked && !hasPaid;

            const content = (
              <>
                <div
                  className="h-40 md:h-44 bg-cover relative"
                  style={{
                    backgroundImage: `url('${card.image}')`,
                    backgroundPosition: card.bgPosition || "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <h3 className="text-white font-secondary text-lg md:text-xl uppercase tracking-widest text-center px-2">
                      {card.title}
                    </h3>
                  </div>
                </div>
                <div className="p-4 flex justify-between items-center">
                  {isLocked ? (
                    <span className="text-yellow flex items-center gap-2 font-semibold uppercase text-sm">
                      <FaLock /> Upgrade to Unlock
                    </span>
                  ) : card.cta ? (
                    <span className="text-yellow font-semibold uppercase text-sm hover:text-white transition">
                      {card.cta}
                    </span>
                  ) : (
                    <span className="text-yellow uppercase text-sm tracking-widest hover:text-white transition">
                      ➔ Go to {card.title}
                    </span>
                  )}
                </div>
              </>
            );

            return isLocked ? (
              <div
                key={index}
                onClick={() => setShowModal(true)}
                className="bg-[#1E1E1E] border border-[#2A2A2A] rounded-lg shadow overflow-hidden opacity-70 cursor-pointer hover:brightness-110 transition flex flex-col"
              >
                {content}
              </div>
            ) : (
              <Link
                key={index}
                to={card.route}
                className="bg-[#1E1E1E] border border-[#2A2A2A] rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col"
              >
                {content}
              </Link>
            );
          })}
      </div>

      {/* 🔐 Locked Feature Modal */}
      <LockedFeatureModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default Dashboard;
