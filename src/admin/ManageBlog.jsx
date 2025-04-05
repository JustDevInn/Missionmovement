import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import EditBlogModal from "./EditBlogModal";
import Spinner from "../components/Spinner";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("newest");

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const snapshot = await getDocs(collection(db, "blogs"));
      const blogList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogList);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "blogs", id));
      fetchBlogs();
    } catch (error) {
      console.error("Error deleting blog:", error);
    } finally {
      setDeleteTarget(null); // Close modal
    }
  };

  const handleEditClick = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Filtered + Sorted
  const filteredBlogs = blogs
    .filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "newest") {
        return b.createdAt?.toMillis?.() - a.createdAt?.toMillis?.();
      } else if (sortOption === "oldest") {
        return a.createdAt?.toMillis?.() - b.createdAt?.toMillis?.();
      } else {
        return 0;
      }
    });

  return (
    <div className="p-6 md:p-10 text-white">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">Manage Blogs</h1>

      {/* Controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-[#1c1c1c] text-white border border-cyan-500 px-4 py-2 rounded w-full md:max-w-md"
        />
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="bg-[#1c1c1c] text-white border border-cyan-500 px-4 py-2 rounded w-full md:w-48"
        >
          <option value="newest">Sort: Newest</option>
          <option value="oldest">Sort: Oldest</option>
        </select>
      </div>

      {loading ? (
        <Spinner />
      ) : filteredBlogs.length === 0 ? (
        <p>No blogs match your search.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-primary rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={blog.thumbnail}
                alt={blog.title}
                className="w-full h-40 object-cover rounded-t"
              />
              <div className="p-4 space-y-2">
                <h2 className="text-white font-bold text-lg">{blog.title}</h2>
                <p className="text-gray-400 text-sm italic">{blog.author}</p>
                <p className="text-white text-sm">{blog.summary}</p>
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => handleEditClick(blog)}
                    className="bg-cyan-500 text-white font-bold px-4 py-2 rounded hover:bg-cyan-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => setDeleteTarget(blog.id)}
                    className="bg-red-600 text-white font-bold px-4 py-2 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit Modal */}
      {showModal && selectedBlog && (
        <EditBlogModal
          blog={selectedBlog}
          onClose={() => setShowModal(false)}
          onSave={() => {
            setShowModal(false);
            fetchBlogs();
          }}
        />
      )}
      {deleteTarget && (
        <ConfirmDeleteModal
          onConfirm={() => handleDelete(deleteTarget)}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
    </div>
  );
};

export default ManageBlogs;
