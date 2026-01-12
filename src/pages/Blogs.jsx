import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Spinner from "../components/Spinner";
import { format } from "date-fns";
import { MdKeyboardArrowDown } from "react-icons/md";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allTags, setAllTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("newest");

  const blogsPerPage = 4;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        const blogData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const sorted = blogData.sort(
          (a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0)
        );
        setBlogs(sorted);

        const tags = [
          "all",
          ...new Set(sorted.flatMap((blog) => blog.tags || [])),
        ];
        setAllTags(tags);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = blogs
    .filter((blog) => {
      const matchesTag =
        selectedTag === "all" || blog.tags?.includes(selectedTag);
      const matchesSearch =
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.summary.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesTag && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "newest") {
        return b.createdAt?.seconds - a.createdAt?.seconds;
      }
      if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const indexOfLast = currentPage * blogsPerPage;
  const indexOfFirst = indexOfLast - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirst, indexOfLast);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, selectedTag, searchTerm, sortBy]);

  return (
    <div className="pt-20 px-6 md:px-10 lg:px-20 bg-mmPage min-h-screen">
      <Helmet>
        <title>Artikelen | Mission Movement</title>
        <meta
          name="description"
          content="Explore tactical training articles, real-world lessons, and expert insights from Mission Movement."
        />
      </Helmet>

      <h1 className="mm-h1 text-mmText text-center mb-10">
        Mission Artikelen
      </h1>

      {/* Search & Sort */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Zoek artikelen..."
          className="w-full md:max-w-sm px-4 py-2 text-sm rounded border border-mmBorder bg-mmSurface text-mmText placeholder:text-mmTextMuted"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none px-4 py-2 pr-6 bg-mmSurface border border-mmBorder text-mmText rounded text-sm w-full"
          >
            <option value="newest">Sorteer: Nieuwste</option>
            <option value="title">Sorteer: Titel (A-Z)</option>
          </select>

          {/* Custom arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-mmAccent text-sm">
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>

      {/* Tag Filter */}
      <div className="overflow-x-auto whitespace-nowrap hide-scrollbar mb-10 pb-2 border-b border-mmBorder">
        <div className="inline-flex gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setSelectedTag(tag);
                setCurrentPage(1);
              }}
              className={`uppercase px-4 py-1 text-xs md:text-sm border rounded-full transition-all whitespace-nowrap ${
                selectedTag === tag
                  ? "bg-mmAccent text-white font-bold border-mmAccent"
                  : "border-mmBorder text-mmTextMuted hover:border-mmAccent hover:text-mmText"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Cards */}
      {loading ? (
        <div className="flex justify-center py-20">
          <Spinner color="border-mmAccent" />
        </div>
      ) : currentBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {currentBlogs.map((blog) => (
            <Link
              to={`/blogs/${blog.slug}`}
              key={blog.id}
              className="group bg-mmSurface border border-mmBorder rounded-2xl shadow-sm hover:scale-[1.02] transition-transform flex flex-col"
            >
              <img
                src={blog.thumbnail}
                alt={blog.title}
                loading="lazy"
                className="rounded-t-xl h-48 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-mmText text-xl font-display uppercase tracking-widest">
                    {blog.title}
                  </h2>
                  {blog.pinned && (
                    <span className="text-xs text-white bg-mmAccent px-2 py-1 rounded-full font-bold uppercase">
                      aanbevolen
                    </span>
                  )}
                </div>

                <p className="text-mmTextMuted italic mb-2 text-base md:text-lg">
                  door {blog.author} •{" "}
                  {blog.createdAt?.seconds &&
                    format(
                      new Date(blog.createdAt.seconds * 1000),
                      "dd MMM yyyy"
                    )}
                </p>

                <p className="text-mmTextMuted leading-relaxed line-clamp-3 mb-6 text-base md:text-lg">
                  {blog.summary}
                </p>

                <div className="mt-auto">
                  <div className="text-sm text-white bg-mmAccent font-bold tracking-wide px-4 py-2 w-max uppercase border border-mmAccent transition-all group-hover:bg-transparent group-hover:text-mmAccent">
                    Lees meer →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-mmTextMuted text-center mt-10">Geen artikelen gevonden.</p>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-12 gap-2">
          {[...Array(totalPages).keys()].map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num + 1)}
              className={`w-10 h-10 rounded-full border border-mmBorder text-sm transition ${
                currentPage === num + 1
                  ? "bg-mmAccent text-white font-bold border-mmAccent"
                  : "text-mmTextMuted hover:border-mmAccent hover:text-mmText"
              }`}
            >
              {num + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
