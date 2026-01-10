import React, { useEffect, useState, useRef } from "react";
import { db, storage } from "../../firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useAuth } from "../../context/AuthContext";
import {
  FaPaperPlane,
  FaPaperclip,
  FaEdit,
  FaTrash,
  FaSave,
  FaTimes,
} from "react-icons/fa";

const Messages = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [editingMessageId, setEditingMessageId] = useState(null);
  const [editedText, setEditedText] = useState("");
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const userId = user?.uid;

  // Scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Load messages in real time
  useEffect(() => {
    if (!userId) return;
    const q = query(
      collection(db, `messages/${userId}/chat`),
      orderBy("createdAt")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setMessages(msgs);
      scrollToBottom();
    });
    return () => unsubscribe();
  }, [userId]);

  // Typing indicator
  useEffect(() => {
    setIsTyping(!!newMsg.trim());
  }, [newMsg]);

  // Send message
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMsg.trim()) return;

    await addDoc(collection(db, `messages/${userId}/chat`), {
      text: newMsg,
      sender: "user",
      createdAt: serverTimestamp(),
      edited: false,
      mediaUrl: "",
    });

    setNewMsg("");
    setIsTyping(false);
  };

  // Upload file
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileRef = ref(storage, `chatUploads/${userId}/${file.name}`);
    await uploadBytes(fileRef, file);
    const fileURL = await getDownloadURL(fileRef);

    await addDoc(collection(db, `messages/${userId}/chat`), {
      text: "",
      sender: "user",
      mediaUrl: fileURL,
      fileName: file.name,
      createdAt: serverTimestamp(),
      edited: false,
    });
  };

  // Handle inline edit
  const handleEditSave = async (id) => {
    const msgRef = doc(db, `messages/${userId}/chat`, id);
    await updateDoc(msgRef, {
      text: editedText,
      edited: true,
    });
    setEditingMessageId(null);
    setEditedText("");
  };

  // Handle delete
  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this message?"
    );
    if (!confirm) return;
    await deleteDoc(doc(db, `messages/${userId}/chat`, id));
  };

  return (
    <div className="min-h-[80vh] max-h-[85vh] mt-10 flex flex-col bg-[#121212] text-white max-w-3xl mx-auto border border-[#2A2A2A] rounded-lg shadow overflow-hidden">
      {/* Header */}
      <div className="bg-[#1E1E1E] px-4 py-3 border-b border-[#2A2A2A]">
        <h2 className="h2-teko text-yellow text-xl tracking-wider">
          Chat with your Coach
        </h2>
        {isTyping && <p className="text-gray-400 text-base md:text-lg">You’re typing...</p>}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-4">
        {messages.map((msg) => {
          const isUser = msg.sender === "user";
          const isEditing = editingMessageId === msg.id;

          return (
            <div
              key={msg.id}
              className={`flex flex-col ${
                isUser ? "items-end" : "items-start"
              }`}
            >
              <p
                className={`text-xs mb-1 ${
                  isUser ? "text-gray-400" : "text-brown"
                }`}
              >
                {isUser ? "You" : "Coach"}
              </p>

              <div
                className={`max-w-[80%] p-3 rounded-lg text-sm relative group transition ${
                  isUser
                    ? "bg-brown text-white"
                    : "bg-[#1E1E1E] border border-[#2A2A2A] text-gray-200"
                }`}
              >
                {isEditing ? (
                  <div className="flex flex-col gap-2">
                    <input
                      value={editedText}
                      onChange={(e) => setEditedText(e.target.value)}
                      className="bg-[#121212] border border-[#2A2A2A] text-white px-2 py-1 rounded"
                    />
                    <div className="flex gap-2 justify-end">
                      <button
                        onClick={() => handleEditSave(msg.id)}
                        className="text-cyan-300 hover:text-white"
                        title="Save"
                      >
                        <FaSave />
                      </button>
                      <button
                        onClick={() => {
                          setEditingMessageId(null);
                          setEditedText("");
                        }}
                        className="text-red-400 hover:text-white"
                        title="Cancel"
                      >
                        <FaTimes />
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    {msg.text && <p>{msg.text}</p>}
                    {msg.mediaUrl && (
                      <a
                        href={msg.mediaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-cyan-200 hover:text-yellow transition"
                      >
                        📎 {msg.fileName || "Attachment"}
                      </a>
                    )}
                    <p className="text-xs text-gray-400 mt-2">
                      {msg.createdAt?.toDate().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}{" "}
                      {msg.edited && (
                        <span className="italic ml-1">(edited)</span>
                      )}
                    </p>

                    {isUser && (
                      <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                        <button
                          onClick={() => {
                            setEditingMessageId(msg.id);
                            setEditedText(msg.text || "");
                          }}
                          title="Edit"
                          className="text-black hover:text-brown"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(msg.id)}
                          title="Delete"
                          className="text-black hover:text-red-500"
                        >
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

      {/* Input */}
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
          className="text-brown hover:text-yellow transition"
          title="Attach file"
        >
          <FaPaperclip />
        </button>
        <button
          type="submit"
          className="bg-yellow hover:bg-transparent hover:text-yellow text-black border border-yellow px-3 py-2 rounded font-bold tracking-widest transition"
        >
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
};

export default Messages;
