import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { db } from "../../firebase";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import {
  reauthenticateWithCredential,
  EmailAuthProvider,
  updatePassword,
  sendPasswordResetEmail,
  deleteUser,
  getAuth,
} from "firebase/auth";
import { toast } from "react-hot-toast";

const Settings = () => {
  const { user, logout } = useAuth();
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [usernameSaved, setUsernameSaved] = useState(false);
  const [savingUsername, setSavingUsername] = useState(false);

  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [pwSuccess, setPwSuccess] = useState("");
  const [pwError, setPwError] = useState("");
  const [savingPassword, setSavingPassword] = useState(false);

  const [resetEmailSent, setResetEmailSent] = useState(false);

  const [deleteConfirmed, setDeleteConfirmed] = useState(false);
  const [deletePw, setDeletePw] = useState("");
  const [deleteError, setDeleteError] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const fetchUsername = async () => {
      const userRef = doc(db, "users", user.uid);
      const snap = await getDoc(userRef);
      if (snap.exists()) {
        const data = snap.data();
        setUsername(data.username || "");
        setNewUsername(data.username || "");
      }
    };
    if (user?.uid) fetchUsername();
  }, [user]);

  const handleUsernameSave = async () => {
    setSavingUsername(true);
    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, { username: newUsername });
    setUsername(newUsername);
    setUsernameSaved(true);
    setSavingUsername(false);
    setTimeout(() => setUsernameSaved(false), 2000);
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setSavingPassword(true);
    try {
      const credential = EmailAuthProvider.credential(user.email, currentPw);
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPw);
      setPwSuccess("✅ Password updated!");
      setPwError("");
      setCurrentPw("");
      setNewPw("");
      setTimeout(() => setPwSuccess(""), 3000);
    } catch (err) {
      setPwError("❌ Incorrect current password or error updating password.");
      setPwSuccess("");
    }
    setSavingPassword(false);
  };

  const handleSendResetEmail = async () => {
    try {
      await sendPasswordResetEmail(getAuth(), user.email);
      toast.success("Reset email sent!");
      setResetEmailSent(true);
    } catch (err) {
      console.error("Error sending reset email:", err);
      toast.error("Could not send reset email.");
    }
  };

  const handleDeleteAccount = async (e) => {
    e.preventDefault();
    if (!deleteConfirmed || !deletePw) return;
    setDeleting(true);
    try {
      const credential = EmailAuthProvider.credential(user.email, deletePw);
      await reauthenticateWithCredential(user, credential);
      await deleteDoc(doc(db, "users", user.uid));
      await deleteUser(user);
      logout();
    } catch (err) {
      console.error(err);
      setDeleteError("❌ Incorrect password or failed to delete account.");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white px-4 sm:px-6 py-10 max-w-2xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold">Settings</h1>

      {/* Username */}
      <div className="bg-[#1E1E1E] border border-[#2A2A2A] p-4 rounded space-y-2">
        <h2 className="text-xl font-semibold">Change Username</h2>
        <label htmlFor="username" className="sr-only">
          Username
        </label>
        <input
          id="username"
          type="text"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          className="w-full bg-[#121212] border border-[#2A2A2A] rounded px-3 py-2 text-sm text-white"
        />
        <button
          onClick={handleUsernameSave}
          className="px-4 py-1 bg-cyan-500 hover:bg-cyan-600 text-white text-sm rounded flex items-center gap-2"
        >
          {savingUsername && (
            <span className="animate-spin h-4 w-4 border-t-2 border-white border-opacity-50 rounded-full" />
          )}
          {savingUsername ? "Saving..." : "Save Username"}
        </button>
        {usernameSaved && (
          <p className="text-green-400 text-sm mt-1">✅ Saved!</p>
        )}
      </div>

      {/* Change Password */}
      <form
        onSubmit={handleChangePassword}
        className="bg-[#1E1E1E] border border-[#2A2A2A] p-4 rounded space-y-2"
      >
        <input
          type="text"
          name="username"
          autoComplete="username"
          value={user.email}
          readOnly
          className="sr-only"
        />
        <h2 className="text-xl font-semibold">Change Password</h2>
        <input
          type="password"
          placeholder="Current Password"
          autoComplete="current-password"
          value={currentPw}
          onChange={(e) => setCurrentPw(e.target.value)}
          className="w-full bg-[#121212] border border-[#2A2A2A] rounded px-3 py-2 text-sm text-white"
        />
        <input
          type="password"
          placeholder="New Password"
          autoComplete="new-password"
          value={newPw}
          onChange={(e) => setNewPw(e.target.value)}
          className="w-full bg-[#121212] border border-[#2A2A2A] rounded px-3 py-2 text-sm text-white"
        />
        <button
          type="submit"
          className="px-4 py-1 bg-cyan-500 hover:bg-cyan-600 text-white text-sm rounded flex items-center gap-2"
        >
          {savingPassword && (
            <span className="animate-spin h-4 w-4 border-t-2 border-white border-opacity-50 rounded-full" />
          )}
          {savingPassword ? "Saving..." : "Update Password"}
        </button>
        {pwSuccess && <p className="text-green-400 text-sm">{pwSuccess}</p>}
        {pwError && <p className="text-red-400 text-sm">{pwError}</p>}
      </form>

      {/* Password Reset */}
      <div className="bg-[#1E1E1E] border border-[#2A2A2A] p-4 rounded space-y-2">
        <h2 className="text-xl font-semibold">Forgot Password?</h2>
        <p className="text-sm text-gray-400">
          Send yourself a password reset email
        </p>
        <button
          onClick={handleSendResetEmail}
          className="mt-2 px-4 py-1 text-sm rounded bg-cyan-500 hover:bg-cyan-600 text-white"
        >
          Send Password Reset Email
        </button>
        {resetEmailSent && (
          <p className="text-green-400 text-sm mt-1">✅ Email sent!</p>
        )}
      </div>

      {/* Delete Account */}
      <form
        onSubmit={handleDeleteAccount}
        className="bg-[#1E1E1E] border border-red-800 p-4 rounded space-y-2"
      >
        <input
          type="text"
          name="username"
          autoComplete="username"
          value={user.email}
          readOnly
          className="sr-only"
        />
        <h2 className="text-xl font-semibold text-red-500">
          Danger Zone: Delete Account
        </h2>
        <p className="text-sm text-red-400">
          This action is permanent and cannot be undone.
        </p>
        <label className="flex items-center space-x-2 text-sm text-gray-300">
          <input
            type="checkbox"
            checked={deleteConfirmed}
            onChange={() => setDeleteConfirmed(!deleteConfirmed)}
          />
          <span>I understand this will permanently delete my account</span>
        </label>
        <input
          type="password"
          placeholder="Confirm your password"
          autoComplete="current-password"
          value={deletePw}
          onChange={(e) => setDeletePw(e.target.value)}
          className="w-full bg-[#121212] border border-[#2A2A2A] rounded px-3 py-2 text-sm text-white mt-2"
        />
        <button
          type="submit"
          disabled={!deleteConfirmed || deleting}
          className="px-4 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded disabled:opacity-50 flex items-center gap-2"
        >
          {deleting && (
            <span className="animate-spin h-4 w-4 border-t-2 border-white border-opacity-50 rounded-full" />
          )}
          {deleting ? "Deleting..." : "Delete My Account"}
        </button>
        {deleteError && (
          <p className="text-red-400 text-sm mt-1">{deleteError}</p>
        )}
      </form>
    </div>
  );
};

export default Settings;
