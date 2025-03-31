import React, { useEffect, useState, useRef, useCallback } from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { motion, AnimatePresence } from "framer-motion";
import Spinner from "../../components/Spinner";

const Library = () => {
  const { user, hasPaid } = useAuth();
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [activeTag, setActiveTag] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(null);
  const [loading, setLoading] = useState(true); // ← added
  const modalRef = useRef();
  const [allTags, setAllTags] = useState([]);

  const handleThumbnailClick = (video) => {
    setScrollY(window.scrollY);
    setSelectedVideo(video);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = useCallback(() => {
    setSelectedVideo(null);
    document.body.style.overflow = "auto";
    window.scrollTo({ top: scrollY });
  }, [scrollY]);

  useEffect(() => {
    const fetchVideos = async () => {
      const querySnapshot = await getDocs(collection(db, "videos"));
      const videoList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setVideos(videoList);

      const tagsSet = new Set();
      videoList.forEach((video) => {
        video.tags?.forEach((tag) => tagsSet.add(tag));
      });
      setAllTags([...tagsSet]);

      setLoading(false); // ← done loading
    };
    fetchVideos();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleCloseModal();
      }
    };
    if (selectedVideo)
      document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectedVideo, handleCloseModal]);

  if (!user) return <Navigate to="/login" />;
  if (!hasPaid) return <Navigate to="/pricing" />;
  if (loading) return <Spinner />; // ← show cyan spinner while loading

  const filterText = search.toLowerCase();
  const filteredVideos = videos.filter((video) => {
    const matchesSearch =
      video.title.toLowerCase().includes(filterText) ||
      video.tags?.some((tag) => tag.toLowerCase().includes(filterText));
    const matchesTag = activeTag ? video.tags?.includes(activeTag) : true;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen px-4 sm:px-6 py-8 max-w-6xl mx-auto text-gray-200">
      <h1 className="text-2xl font-bold mb-6 text-cyan-400">Video Library</h1>

      <input
        type="text"
        placeholder="Search by title or tag..."
        className="w-full p-3 bg-[#121212] border border-[#2A2A2A] rounded mb-6 text-white placeholder-gray-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="flex flex-wrap gap-2 mb-6">
        {allTags.map((tag, i) => (
          <button
            key={i}
            onClick={() => setActiveTag(tag)}
            className={`px-3 py-1 text-xs rounded font-semibold transition ${
              activeTag === tag
                ? "bg-yellow text-black"
                : "bg-[#1E1E1E] text-gray-400 border border-[#2A2A2A] hover:bg-[#2A2A2A] hover:text-white"
            }`}
          >
            #{tag}
          </button>
        ))}
      </div>

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="border border-[#2A2A2A] rounded bg-[#1E1E1E] p-4 transition-all duration-300 flex flex-col justify-between h-[370px] relative shadow"
          >
            {video.thumbnail && (
              <img
                src={video.thumbnail}
                alt={video.title}
                onClick={() => handleThumbnailClick(video)}
                className="w-full h-48 object-cover rounded mb-3 cursor-pointer hover:scale-105 hover:shadow-lg transition-transform duration-300"
              />
            )}
            <h2 className="text-lg font-semibold mb-1 text-white">
              {video.title}
            </h2>
            <div className="text-sm text-gray-400 mb-2 min-h-[2rem]">
              {video.tags?.map((tag, i) => (
                <button
                  key={i}
                  className="inline-block mr-2 mb-1 px-2 py-1 bg-[#2A2A2A] text-gray-300 rounded text-xs hover:bg-yellow hover:text-black transition"
                  onClick={() => setActiveTag(tag)}
                >
                  #{tag}
                </button>
              ))}
            </div>
            <button
              onClick={() =>
                setDetailsOpen(detailsOpen === video.id ? null : video.id)
              }
              className="text-sm text-yellow font-semibold focus:outline-none hover:underline"
            >
              ▸ Details
            </button>

            <AnimatePresence>
              {detailsOpen === video.id && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute z-40 top-full mt-2 left-0 right-0 bg-[#1E1E1E] border border-[#2A2A2A] shadow-lg p-3 rounded text-sm text-gray-300"
                >
                  <p>{video.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#1E1E1E] border border-[#2A2A2A] rounded-lg p-4 w-full max-w-3xl relative shadow-lg"
              ref={modalRef}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-4 text-gray-400 text-2xl hover:text-white"
              >
                &times;
              </button>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.youtube.com/embed/${
                    selectedVideo.videoUrl.split("v=")[1]
                  }`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-96 rounded"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Library;
