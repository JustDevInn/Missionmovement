import React, { useState, useEffect } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { FaClipboard } from "react-icons/fa";

const UploadVideo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [tags, setTags] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showCopied, setShowCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      "https://img.youtube.com/vi/string/hqdefault.jpg"
    );
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  useEffect(() => {
    const match = videoUrl.match(/v=([^&]+)/);
    if (match && match[1]) {
      setThumbnail(`https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`);
    }
  }, [videoUrl]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!title || !videoUrl) {
      setError("Title and Video URL are required.");
      return;
    }

    try {
      await addDoc(collection(db, "videos"), {
        title,
        description,
        videoUrl,
        thumbnail,
        tags: tags.split(",").map((tag) => tag.trim().toLowerCase()),
        createdAt: serverTimestamp(),
      });
      setSuccess(true);
      setTitle("");
      setDescription("");
      setVideoUrl("");
      setThumbnail("");
      setTags("");
    } catch (err) {
      setError("Failed to upload video. Try again.");
      console.error("Upload error:", err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto min-h-screen text-gray-300">
      <h1 className="text-3xl font-bold mb-6"> Upload Video</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-3 bg-[#121212] border border-[#2A2A2A] rounded placeholder-gray-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="w-full p-3 bg-[#121212] border border-[#2A2A2A] rounded placeholder-gray-400"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="YouTube Video URL"
          className="w-full p-3 bg-[#121212] border border-[#2A2A2A] rounded placeholder-gray-400"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Thumbnail URL"
          className="w-full p-3 bg-[#121212] border border-[#2A2A2A] rounded placeholder-gray-400"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        />
        <div className="relative inline-block mt-2">
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-2 text-xs hover:underline text-gray-400 hover:text-blue-400"
          >
            <FaClipboard />
            https://img.youtube.com/vi/string/hqdefault.jpg
          </button>
          {showCopied && (
            <span className="absolute top-full left-0 mt-1 text-xs text-green-400 bg-[#1E1E1E] px-2 py-1 border border-green-600 rounded shadow-sm">
              Copied!
            </span>
          )}
        </div>
        <input
          type="text"
          placeholder="Tags (comma-separated)"
          className="w-full p-3 bg-[#121212] border border-[#2A2A2A] rounded placeholder-gray-400"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <button
          type="submit"
          className="bg-cyan-500 text-white font-semibold px-4 py-2 rounded hover:brightness-110 transition"
        >
          Upload
        </button>
        {error && <p className="text-red-400 text-sm">{error}</p>}
        {success && (
          <p className="text-green-400 text-sm">Video uploaded successfully!</p>
        )}
      </form>
    </div>
  );
};

export default UploadVideo;
