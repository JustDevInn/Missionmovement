import React, { useEffect, useState, useRef } from "react";
import {
  collection,
  getDocs,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase";
import {
  FaPaperPlane,
  FaPaperclip,
  FaEdit,
  FaTrash,
  FaSave,
  FaTimes,
  FaArrowLeft,
} from "react-icons/fa";

const MessagesAdmin = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState("");
  const [editingMessageId, setEditingMessageId] = useState(null);
  const [editedText, setEditedText] = useState("");
  const [userNames, setUserNames] = useState({});
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchUserNames = async () => {
      const snapshot = await getDocs(collection(db, "users"));
      const namesMap = {};
      snapshot.forEach((doc) => {
        const data = doc.data();
        namesMap[doc.id] = data.displayName || data.email || doc.id;
      });
      setUserNames(namesMap);
    };

    const fetchUsers = async () => {
      const snapshot = await getDocs(collection(db, "messages"));
      setUsers(snapshot.docs.map((doc) => ({ id: doc.id })));
    };

    fetchUserNames();
    fetchUsers();
  }, []);

  useEffect(() => {
    if (!selectedUserId) return;
    const q = query(
      collection(db, `messages/${selectedUserId}/chat`),
      orderBy("createdAt")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setMessages(msgs);
      scrollToBottom();
    });
    return () => unsubscribe();
  }, [selectedUserId]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMsg.trim() || !selectedUserId) return;

    await addDoc(collection(db, `messages/${selectedUserId}/chat`), {
      text: newMsg,
      sender: "admin",
      createdAt: serverTimestamp(),
      edited: false,
      mediaUrl: "",
    });

    setNewMsg("");
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file || !selectedUserId) return;

    const fileRef = ref(storage, `chatUploads/admin/${file.name}`);
    await uploadBytes(fileRef, file);
    const fileURL = await getDownloadURL(fileRef);

    await addDoc(collection(db, `messages/${selectedUserId}/chat`), {
      text: "",
      sender: "admin",
      mediaUrl: fileURL,
      fileName: file.name,
      createdAt: serverTimestamp(),
      edited: false,
    });
  };

  const handleEditSave = async (id) => {
    await updateDoc(doc(db, `messages/${selectedUserId}/chat`, id), {
      text: editedText,
      edited: true,
    });
    setEditingMessageId(null);
    setEditedText("");
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this message?"
    );
    if (!confirm) return;
    await deleteDoc(doc(db, `messages/${selectedUserId}/chat`, id));
  };

  // Layout
  return (
    <div className="flex flex-col md:flex-row h-full min-h-full">
      {/* Sidebar */}
      <aside
        className={`md:w-64 border-r border-[#2A2A2A] p-4 bg-[#1E1E1E] ${
          selectedUserId && isMobileView ? "hidden" : "block"
        }`}
      >
        <h2 className="text-lg font-semibold mb-4 text-cyan-400">Users</h2>
        {users.map((u) => (
          <button
            key={u.id}
            onClick={() => setSelectedUserId(u.id)}
            className={`block w-full text-left px-3 py-2 mb-2 rounded text-sm ${
              selectedUserId === u.id
                ? "bg-cyan-600 text-white"
                : "bg-[#121212] hover:bg-[#2A2A2A] text-gray-300"
            }`}
          >
            {userNames[u.id] || u.id}
          </button>
        ))}
      </aside>

      {/* Chat Window */}
      {selectedUserId && (
        <div className="flex-1 flex flex-col h-[calc(100vh-5rem)] md:h-[calc(100vh-4rem)]">
          {/* Header */}
          <div className="p-4 border-b border-[#2A2A2A] bg-[#1E1E1E] flex items-center justify-between">
            <h2 className="text-lg font-semibold text-cyan-400">
              Chat with {userNames[selectedUserId] || "User"}
            </h2>
            {isMobileView && (
              <button
                onClick={() => setSelectedUserId(null)}
                className="text-white hover:text-cyan-400"
              >
                <FaArrowLeft /> Back
              </button>
            )}
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => {
              const isAdmin = msg.sender === "admin";
              const isEditing = editingMessageId === msg.id;

              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    isAdmin ? "items-end" : "items-start"
                  }`}
                >
                  <p className="text-xs mb-1 text-gray-400">
                    {isAdmin ? "You" : userNames[selectedUserId] || "User"}
                  </p>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm relative group ${
                      isAdmin
                        ? "bg-cyan-600 text-white"
                        : "bg-[#1E1E1E] border border-[#2A2A2A] text-gray-200"
                    }`}
                  >
                    {isEditing ? (
                      <>
                        <input
                          value={editedText}
                          onChange={(e) => setEditedText(e.target.value)}
                          className="bg-[#121212] border border-[#2A2A2A] text-white px-2 py-1 rounded w-full mb-2"
                        />
                        <div className="flex gap-2 justify-end">
                          <button onClick={() => handleEditSave(msg.id)}>
                            <FaSave />
                          </button>
                          <button
                            onClick={() => {
                              setEditingMessageId(null);
                              setEditedText("");
                            }}
                          >
                            <FaTimes />
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        {msg.text && <p>{msg.text}</p>}
                        {msg.mediaUrl && (
                          <a
                            href={msg.mediaUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-cyan-200"
                          >
                            📎 {msg.fileName || "Attachment"}
                          </a>
                        )}
                        <p className="text-xs text-gray-300 mt-2">
                          {msg.createdAt?.toDate().toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}{" "}
                          {msg.edited && (
                            <span className="italic ml-1">(edited)</span>
                          )}
                        </p>
                        {isAdmin && (
                          <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                            <button
                              onClick={() => {
                                setEditingMessageId(msg.id);
                                setEditedText(msg.text || "");
                              }}
                            >
                              <FaEdit />
                            </button>
                            <button onClick={() => handleDelete(msg.id)}>
                              <FaTrash />
                            </button>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Field */}
          <form
            onSubmit={handleSendMessage}
            className="bg-[#1E1E1E] p-4 border-t border-[#2A2A2A] flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Type a message..."
              value={newMsg}
              onChange={(e) => setNewMsg(e.target.value)}
              className="flex-1 bg-[#121212] border border-[#2A2A2A] px-3 py-2 rounded text-sm text-white placeholder-gray-400"
            />
            <input
              type="file"
              accept="image/*,.pdf,.doc,.docx"
              ref={fileInputRef}
              onChange={handleFileUpload}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current.click()}
              className="text-cyan-400 hover:text-white"
            >
              <FaPaperclip />
            </button>
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-2 rounded"
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MessagesAdmin;
