import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../firebase";

const StatCard = ({ title, value }) => (
  <div className="bg-[#1E1E1E] p-6 rounded-xl border border-[#2A2A2A] text-center">
    <h3 className="text-sm text-gray-400 mb-2">{title}</h3>
    <p className="text-2xl font-bold text-white">{value}</p>
  </div>
);

const RecentCard = ({ title, items, emptyMessage }) => (
  <div className="bg-[#1E1E1E] p-6 rounded-xl border border-[#2A2A2A]">
    <h3 className="text-lg font-semibold text-cyan-400 mb-4">{title}</h3>
    {items.length === 0 ? (
      <p className="text-sm text-gray-400">{emptyMessage}</p>
    ) : (
      <ul className="space-y-3 text-sm text-gray-300">
        {items.map((item, idx) => (
          <li key={idx} className="border-b border-[#2A2A2A] pb-2">
            {item}
          </li>
        ))}
      </ul>
    )}
  </div>
);

const AdminHome = () => {
  const [loading, setLoading] = useState(true);
  const [totalUsers, setTotalUsers] = useState(0);
  const [videoCount, setVideoCount] = useState(0);
  const [unreadCount, setUnreadCount] = useState(0);
  const [recentUsers, setRecentUsers] = useState([]);
  const [recentMessages, setRecentMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        // Users
        const usersSnap = await getDocs(collection(db, "users"));
        setTotalUsers(usersSnap.size);

        const sortedUsersQuery = query(
          collection(db, "users"),
          orderBy("createdAt", "desc"),
          limit(5)
        );
        const recentUserSnap = await getDocs(sortedUsersQuery);
        const recentUserList = recentUserSnap.docs.map((doc) => {
          const data = doc.data();
          const name = data.displayName || data.email || "Unnamed User";
          const date =
            data.createdAt?.toDate().toLocaleDateString() || "Unknown date";
          return `${name} — ${date}`;
        });
        setRecentUsers(recentUserList);

        // Videos
        const videosSnap = await getDocs(collection(db, "videos"));
        setVideoCount(videosSnap.size);

        // Messages
        const messagesSnap = await getDocs(collection(db, "messages"));
        let unread = 0;
        let recentMsgs = [];

        for (const docRef of messagesSnap.docs) {
          const userId = docRef.id;
          const chatSnap = await getDocs(
            query(
              collection(db, `messages/${userId}/chat`),
              orderBy("createdAt", "desc"),
              limit(1)
            )
          );

          for (const msgDoc of chatSnap.docs) {
            const data = msgDoc.data();
            const isUnread = !data.read && data.sender !== "admin";
            if (isUnread) unread++;

            const preview = data.text?.slice(0, 60) || "[Media]";
            const timestamp =
              data.createdAt?.toDate().toLocaleString() || "Unknown time";

            recentMsgs.push(
              <Link
                to={`/admin/messagesadmin?user=${userId}`}
                key={userId + msgDoc.id}
                className="hover:underline text-cyan-300 block"
              >
                {preview} — {timestamp}
                {isUnread && (
                  <span className="ml-2 text-yellow-400">(unread)</span>
                )}
              </Link>
            );
          }
        }

        setUnreadCount(unread);
        setRecentMessages(recentMsgs.slice(0, 5));
      } catch (error) {
        console.error("Error fetching admin home data:", error);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="text-white space-y-10 relative">
      {/* Subtle top-corner spinner (left on mobile) */}
      {loading && (
        <div className="fixed z-50 top-4 right-4 md:right-4 md:left-auto left-4 md:top-4">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-cyan-400 border-opacity-50" />
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <StatCard title="Total Users" value={totalUsers} />
        <StatCard title="Uploaded Videos" value={videoCount} />
        <StatCard title="Unread Messages" value={unreadCount} />
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RecentCard
          title="Recent Sign-ups"
          items={recentUsers}
          emptyMessage="No recent users found."
        />
        <RecentCard
          title="Recent Messages"
          items={recentMessages}
          emptyMessage="No messages yet."
        />
      </div>
    </div>
  );
};

export default AdminHome;
