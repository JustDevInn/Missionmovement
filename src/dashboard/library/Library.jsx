import React, { useEffect, useState, useRef } from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { motion, AnimatePresence } from "framer-motion";

const Library = () => {
  const { user, hasPaid } = useAuth();
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [activeTag, setActiveTag] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(null);
  const modalRef = useRef();
  const [allTags, setAllTags] = useState([]);


  useEffect(() => {
    const fetchVideos = async () => {
      const querySnapshot = await getDocs(collection(db, "videos"));
      const videoList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setVideos(videoList);
  
      // Collect all unique tags from the video list
      const tagsSet = new Set();
      videoList.forEach(video => {
        video.tags?.forEach(tag => tagsSet.add(tag));
      });
      setAllTags([...tagsSet]);
    };
    fetchVideos();
  }, []);
  

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleCloseModal();
      }
    };
    if (selectedVideo) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectedVideo]);

  if (!user) return <Navigate to="/login" />;
  if (!hasPaid) return <Navigate to="/pricing" />;

  const handleThumbnailClick = (video) => {
    setScrollY(window.scrollY);
    setSelectedVideo(video);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = "auto";
    window.scrollTo({ top: scrollY });
  };

  const filterText = search.toLowerCase();
  const filteredVideos = videos.filter((video) => {
    const matchesSearch =
      video.title.toLowerCase().includes(filterText) ||
      video.tags?.some((tag) => tag.toLowerCase().includes(filterText));
    const matchesTag = activeTag ? video.tags?.includes(activeTag) : true;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-white text-[#22201F] p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Library</h1>

      <input
        type="text"
        placeholder="Search by title or tag..."
        className="w-full p-3 border border-gray-300 rounded mb-6"
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
            : "bg-gray-100 text-gray-700 hover:bg-yellow hover:text-black"
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
            className="ml-3 text-sm text-red-500 hover:underline"
          >
            Clear
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="border border-gray-200 rounded shadow-sm p-4 bg-white transition-all duration-300 flex flex-col justify-between h-[370px] relative"
          >
            {video.thumbnail && (
              <img
                src={video.thumbnail}
                alt={video.title}
                onClick={() => handleThumbnailClick(video)}
                className="w-full h-48 object-cover rounded mb-3 cursor-pointer hover:scale-105 hover:shadow-lg transition-transform duration-300"
              />
            )}
            <h2 className="text-lg font-semibold mb-1">{video.title}</h2>
            <div className="text-sm text-gray-500 mb-2 min-h-[2rem]">
              {video.tags?.map((tag, i) => (
                <button
                  key={i}
                  className="inline-block mr-2 mb-1 px-2 py-1 bg-gray-100 rounded text-xs hover:bg-yellow hover:text-black transition"
                  onClick={() => setActiveTag(tag)}
                >
                  #{tag}
                </button>
              ))}
            </div>
            <button
              onClick={() => setDetailsOpen(detailsOpen === video.id ? null : video.id)}
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
                  className="absolute z-40 top-full mt-2 left-0 right-0 bg-white border border-gray-300 shadow-lg p-3 rounded"
                >
                  <p className="text-sm text-gray-700">{video.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Modal for video playback */}
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
              className="bg-white rounded-lg p-4 w-full max-w-3xl relative shadow-lg"
              ref={modalRef}
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-4 text-gray-500 text-2xl hover:text-black"
              >
                &times;
              </button>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.videoUrl.split("v=")[1]}`}
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