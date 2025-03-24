import React, { useEffect, useState, useRef } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { format } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingUser, setEditingUser] = useState(null);
  const [newRole, setNewRole] = useState("");


  const modalRef = useRef();

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const userList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(userList);
    };
    fetchUsers();
  }, []);

  const handleDeleteUser = async (id) => {
    await deleteDoc(doc(db, "users", id));
    setUsers((prev) => prev.filter((user) => user.id !== id));
    setConfirmDeleteId(null);
  };

  const handleToggleField = async (id, field) => {
    const userRef = doc(db, "users", id);
    const user = users.find((u) => u.id === id);
    const updatedValue = !user[field];
    await updateDoc(userRef, { [field]: updatedValue });
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, [field]: updatedValue } : u))
    );
  };

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setConfirmDeleteId(null);
    }
  };

  useEffect(() => {
    if (confirmDeleteId) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [confirmDeleteId]);

  const filteredUsers = users.filter((user) => {
    const term = searchTerm.toLowerCase();
    return (
      user.email?.toLowerCase().includes(term) ||
      user.displayName?.toLowerCase().includes(term)
    );
  });

  
  return (
    
    <div className="min-h-screen text-[#22201F] px-2 sm:px-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Manage Users</h1>
      <div className="mb-4">
  <input
    type="text"
    placeholder="Search by email or username"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full sm:w-1/2 px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring"
  />
</div>

      {/* 🖥️ Table View for Desktop */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="min-w-full border text-sm">
          <thead className="bg-gray-100 text-left font-semibold">
            <tr>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Username</th>
              <th className="p-3 border">Created</th>
              <th className="p-3 border">Paid</th>
              <th className="p-3 border">Role</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
          {filteredUsers.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="p-3">{user.email || "-"}</td>
                <td className="p-3">{user.displayName || "-"}</td>
                <td className="p-3">
                  {user.createdAt
                    ? format(new Date(user.createdAt.seconds * 1000), "dd MMM yyyy")
                    : "Invalid Date"}
                </td>
                <td className="p-3">
                  <button
                    onClick={() => handleToggleField(user.id, "hasPaid")}
                    className={`px-3 py-1 rounded text-xs font-semibold transition ${
                      user.hasPaid ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"
                    }`}
                  >
                    {user.hasPaid ? "Yes" : "No"}
                  </button>
                </td>
                <td className="p-3">
                <span className="px-3 py-1 rounded text-xs font-semibold bg-gray-100 text-gray-700">
  {user.role || "user"}
</span>

                </td>
                <td className="p-3">
                <button
  onClick={() => {
    setEditingUser(user);
    setNewRole(user.role || "user");
  }}
  className="text-blue-500 hover:underline text-sm mr-2"
>
  Edit
</button>
                  <button
                    onClick={() => setConfirmDeleteId(user.id)}
                    className="text-red-500 hover:underline text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  <div className="mb-4">
</div>

      {/* 📱 Card View for Mobile */}
      <div className="flex flex-col gap-4 sm:hidden">
      {filteredUsers.map((user) => (
          <div key={user.id} className="border rounded-lg p-4 shadow bg-white">
            <p className="text-sm">
              <span className="font-semibold">Email:</span> {user.email || "-"}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Username:</span> {user.displayName || "-"}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Created:</span>{" "}
              {user.createdAt
                ? format(new Date(user.createdAt.seconds * 1000), "dd MMM yyyy")
                : "Invalid Date"}
            </p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleToggleField(user.id, "hasPaid")}
                className={`px-3 py-1 rounded text-xs font-semibold transition ${
                  user.hasPaid ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"
                }`}
              >
                {user.hasPaid ? "Paid" : "Not Paid"}
              </button>
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded font-semibold">
  {user.role || "user"}
</span>


              <button
  onClick={() => {
    setEditingUser(user);
    setNewRole(user.role || "user");
  }}
  className="text-blue-500 hover:underline text-sm mr-2"
>
  Edit
</button>
              <button
                onClick={() => setConfirmDeleteId(user.id)}
                className="text-red-500 hover:underline text-xs ml-auto"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
  
      {/* Confirm Delete Modal */}
      <AnimatePresence>
        {confirmDeleteId && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-sm p-6 rounded-lg shadow-lg text-center"
            >
              <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
              <p className="text-sm text-gray-600 mb-6">
                Are you sure you want to delete this user? This action cannot be undone.
              </p>
              <div className="flex justify-center gap-3 flex-wrap">
                <button
                  onClick={() => setConfirmDeleteId(null)}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDeleteUser(confirmDeleteId)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Edit Role Modal */}
<AnimatePresence>
  {editingUser && (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        ref={modalRef}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white w-full max-w-sm p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Edit User Role</h2>

        {/* Role Selector */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
          <select
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="coach">Coach</option>
          </select>
        </div>

        {/* Optional Payment Info */}
        {editingUser.paymentInfo && (
          <div className="text-sm text-gray-700 bg-gray-50 p-3 rounded mb-4">
            <p><strong>Payment Method:</strong> {editingUser.paymentInfo.method}</p>
            <p><strong>Amount:</strong> €{editingUser.paymentInfo.amount}</p>
            <p><strong>Date:</strong> {editingUser.paymentInfo.date?.seconds
              ? format(new Date(editingUser.paymentInfo.date.seconds * 1000), "dd MMM yyyy")
              : "N/A"}</p>
          </div>
        )}

        <div className="flex justify-center gap-3 mt-4">
          <button
            onClick={() => setEditingUser(null)}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={async () => {
              await updateDoc(doc(db, "users", editingUser.id), { role: newRole });
              setUsers((prev) =>
                prev.map((u) => (u.id === editingUser.id ? { ...u, role: newRole } : u))
              );
              setEditingUser(null);
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
  
  
};

export default ManageUsers;