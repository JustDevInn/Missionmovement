import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase";
import { Helmet } from "react-helmet-async";
import Spinner from "../../components/Spinner";
import { format } from "date-fns";

const SingleBlog = () => {
  const { slug } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        const blogList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setBlogs(blogList);

        const current = blogList.find((b) => b.slug === slug);
        setBlog(current || null);
      } catch (error) {
        console.error("Error loading blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  const getReadingTime = () => {
    const words = blog?.content?.paragraphs?.join(" ").split(" ").length || 0;
    return `${Math.ceil(words / 200)} min lezen`;
  };

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator
        .share({
          title: blog.title,
          text: blog.summary,
          url,
        })
        .catch((err) => console.error("Share failed:", err));
    } else {
      navigator.clipboard.writeText(url);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    }
  };

  const currentIndex = blogs.findIndex((b) => b.slug === slug);
  const prevBlog = blogs[currentIndex + 1];
  const nextBlog = blogs[currentIndex - 1];

  if (loading || !blog) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#0b0b0b]">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-5 md:px-10 bg-[#0b0b0b] text-white animate-fadein">
      <Helmet>
        <title>{blog.title} | Mission Movement</title>
        <meta name="description" content={blog.summary} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.summary} />
        <meta
          property="og:image"
          content={`https://missionmovement.vercel.app${blog.thumbnail}`}
        />
        <meta
          property="og:url"
          content={`https://missionmovement.vercel.app/blogs/${blog.slug}`}
        />
      </Helmet>

      <div className="max-w-3xl mx-auto">
        <Link
          to="/blogs"
          className="text-yellow text-sm font-semibold uppercase tracking-wide hover:underline mb-6 inline-block"
        >
          ← Terug
        </Link>

        <h1 className="h1-teko text-yellow text-4xl md:text-6xl mb-4">
          {blog.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
          <span>Door {blog.author}</span>
          <span>•</span>
          <span>
            {blog.createdAt?.seconds &&
              format(new Date(blog.createdAt.seconds * 1000), "dd MMM yyyy")}
          </span>
          <span>•</span>
          <span>{getReadingTime()}</span>
          <button
            onClick={handleShare}
            className="ml-auto text-yellow text-xs border border-yellow px-3 py-1 rounded hover:bg-yellow hover:text-black transition"
          >
            Deel dit artikel
          </button>
        </div>

        {blog.tags?.length > 0 && (
          <div className="flex gap-2 flex-wrap mt-2 mb-4">
            {blog.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-yellow text-black text-xs px-2 py-1 rounded-full font-semibold uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <img
          src={blog.thumbnail}
          alt={blog.title}
          className="w-full rounded-xl max-h-[500px] object-cover mb-10 shadow-md"
        />

        {blog.content?.quote && (
          <blockquote className="bg-[#1a1a1a] border-l-4 border-yellow p-6 italic text-lg font-light mb-10 rounded-lg text-gray-200 shadow">
            “{blog.content.quote}”
          </blockquote>
        )}

        <div className="space-y-6 text-white font-light leading-relaxed md:px-4 bg-[#101010] border border-yellow/10 rounded-lg p-5 shadow-md">
          {blog.content?.paragraphs?.map((para, index) => (
            <div key={index} className=" text-sm md:text-base">
              <p>{para}</p>
            </div>
          ))}
        </div>

        {blog.content?.images?.length > 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {blog.content.images.slice(1).map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Visual ${i + 2}`}
                className="rounded-lg shadow-md"
              />
            ))}
          </div>
        )}

        <div className="flex justify-between items-center mt-16">
          {prevBlog ? (
            <Link
              to={`/blogs/${prevBlog.slug}`}
              className="text-yellow text-sm hover:underline"
            >
              ← {prevBlog.title}
            </Link>
          ) : (
            <span />
          )}
          {nextBlog && (
            <Link
              to={`/blogs/${nextBlog.slug}`}
              className="text-yellow text-sm hover:underline ml-auto"
            >
              {nextBlog.title} →
            </Link>
          )}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-yellow text-2xl font-secondary uppercase tracking-widest mb-3">
            Vond je dit interessant?
          </h2>
          <p className="text-gray-400 mb-6 text-base md:text-lg">
            Ontdek meer training inzichten of bekijk onze programma’s die zijn
            ontworpen om jouw veerkracht naar een elitair niveau te tillen.
          </p>
          <Link
            to="/program"
            className="mb-16 inline-block bg-yellow text-black font-bold px-6 py-3 uppercase tracking-wider hover:bg-transparent hover:text-yellow border border-yellow transition"
          >
            Bekijk Trainingsprogramma →
          </Link>
        </div>

        {showToast && (
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-yellow text-black px-4 py-2 rounded shadow-lg text-sm font-bold z-50 animate-fadein">
            Link gekopieerd naar klembord!
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleBlog;
