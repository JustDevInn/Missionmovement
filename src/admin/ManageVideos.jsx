import React, { useEffect, useState, useRef } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrash, FaEdit, FaThumbtack } from "react-icons/fa";

const ManageVideos = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [editForm, setEditForm] = useState({
    title: "",
    description: "",
    tags: "",
    videoUrl: "",
    thumbnail: "",
  });
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState(null);
  const modalRef = useRef();

  useEffect(() => {
    const fetchVideos = async () => {
      const querySnapshot = await getDocs(collection(db, "videos"));
      const videoList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setVideos(videoList);
    };
    fetchVideos();
  }, []);

  const handleDelete = async (videoId) => {
    const confirm = window.confirm("Are you sure you want to delete this video?");
    if (!confirm) return;
    await deleteDoc(doc(db, "videos", videoId));
    setVideos((prev) => prev.filter((video) => video.id !== videoId));
  };

  const handleEditClick = (video) => {
    setSelectedVideo(video);
    setEditForm({
      title: video.title,
      description: video.description,
      tags: video.tags.join(", "),
      videoUrl: video.videoUrl,
      thumbnail: video.thumbnail || "",
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSave = async () => {
    const tagsArray = editForm.tags.split(",").map((tag) => tag.trim()).filter(Boolean);
    await updateDoc(doc(db, "videos", selectedVideo.id), {
      ...editForm,
      tags: tagsArray,
    });
    setVideos((prev) =>
      prev.map((vid) =>
        vid.id === selectedVideo.id ? { ...vid, ...editForm, tags: tagsArray } : vid
      )
    );
    setSelectedVideo(null);
  };

  const handleTogglePin = async (video) => {
    const updated = { ...video, pinned: !video.pinned };
    await updateDoc(doc(db, "videos", video.id), {
      pinned: updated.pinned,
    });
    setVideos((prev) =>
      prev.map((v) => (v.id === video.id ? { ...v, pinned: updated.pinned } : v))
    );
  };

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setSelectedVideo(null);
    }
  };

  useEffect(() => {
    if (selectedVideo) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectedVideo]);

  const filterText = search.toLowerCase();
  const filteredVideos = videos.filter((video) => {
    const matchesSearch =
      video.title.toLowerCase().includes(filterText) ||
      video.tags?.some((tag) => tag.toLowerCase().includes(filterText));
    const matchesTag = activeTag ? video.tags?.includes(activeTag) : true;
    return matchesSearch && matchesTag;
  });

  const allTags = [...new Set(videos.flatMap((vid) => vid.tags))];

  return (
    <div className="min-h-screen text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Manage Videos</h1>

      <input
        type="text"
        placeholder="Search by title or tag..."
        className="w-full p-3 border border-[#2A2A2A] rounded mb-6 bg-[#1E1E1E] text-gray-200 placeholder-gray-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {activeTag && (
        <div className="mb-4 text-sm">
          <span className="mr-2">Filtering by tag:</span>
          <span className="bg-yellow px-2 py-1 rounded text-black font-semibold">
            #{activeTag}
          </span>
          <button
            onClick={() => setActiveTag(null)}
            className="ml-3 text-sm text-red-400 hover:underline"
          >
            Clear
          </button>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-6">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className="text-xs bg-[#2A2A2A] hover:bg-yellow px-2 py-1 rounded text-gray-300 hover:text-black"
          >
            #{tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="bg-[#1E1E1E] p-4 border border-[#2A2A2A] rounded shadow-sm flex flex-col justify-between h-[430px]"
          >
            {video.thumbnail && (
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-40 object-cover rounded mb-3"
              />
            )}
            <h2 className="text-lg font-semibold mb-1 line-clamp-2 text-gray-100">
              {video.title}
            </h2>
            <p className="text-gray-400 line-clamp-2 text-base md:text-lg">
              {video.description}
            </p>
            <div className="text-xs text-gray-500 my-2 min-h-[2rem]">
              {video.tags.map((tag, i) => (
                <span
                  key={i}
                  className="inline-block bg-[#2A2A2A] px-2 py-1 rounded mr-1 mb-1 text-gray-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#2A2A2A]">
              <div className="flex gap-3">
                <button
                  onClick={() => handleEditClick(video)}
                  className="flex items-center text-blue-400 hover:underline text-sm"
                >
                  <FaEdit className="mr-1" /> Edit
                </button>
                <button
                  onClick={() => handleDelete(video.id)}
                  className="flex items-center text-red-400 hover:underline text-sm"
                >
                  <FaTrash className="mr-1" /> Delete
                </button>
              </div>
              <button
                onClick={() => handleTogglePin(video)}
                className={`text-sm ${video.pinned ? "text-yellow" : "text-gray-500"}`}
              >
                <FaThumbtack />
              </button>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#1E1E1E] text-gray-200 rounded-lg p-6 max-w-lg w-full shadow-xl relative"
              ref={modalRef}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-2 right-4 text-gray-400 text-xl hover:text-white"
              >
                &times;
              </button>
              <h2 className="text-xl font-bold mb-4">Edit Video</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="title"
                  value={editForm.title}
                  onChange={handleEditChange}
                  placeholder="Title"
                  className="w-full border border-[#2A2A2A] rounded p-2 bg-[#121212] text-gray-300 placeholder-gray-500"
                />
                <textarea
                  name="description"
                  value={editForm.description}
                  onChange={handleEditChange}
                  placeholder="Description"
                  rows={3}
                  className="w-full border border-[#2A2A2A] rounded p-2 bg-[#121212] text-gray-300 placeholder-gray-500"
                ></textarea>
                <input
                  type="text"
                  name="tags"
                  value={editForm.tags}
                  onChange={handleEditChange}
                  placeholder="Tags (comma separated)"
                  className="w-full border border-[#2A2A2A] rounded p-2 bg-[#121212] text-gray-300 placeholder-gray-500"
                />
                <input
                  type="text"
                  name="videoUrl"
                  value={editForm.videoUrl}
                  onChange={handleEditChange}
                  placeholder="YouTube Video URL"
                  className="w-full border border-[#2A2A2A] rounded p-2 bg-[#121212] text-gray-300 placeholder-gray-500"
                />
                <input
                  type="text"
                  name="thumbnail"
                  value={editForm.thumbnail}
                  onChange={handleEditChange}
                  placeholder="Thumbnail URL"
                  className="w-full border border-[#2A2A2A] rounded p-2 bg-[#121212] text-gray-300 placeholder-gray-500"
                />
                <button
                  onClick={handleEditSave}
                  className="bg-yellow text-black font-semibold px-4 py-2 rounded hover:bg-black hover:text-white transition"
                >
                  Save Changes
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ManageVideos;