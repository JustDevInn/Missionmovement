import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { Helmet } from "react-helmet-async";
import Spinner from "../../components/Spinner";
import { format } from "date-fns";

const SingleBlog = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const q = query(collection(db, "blogs"), where("slug", "==", slug));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          setBlog(snapshot.docs[0].data());
        }
      } catch (error) {
        console.error("Error loading blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading || !blog) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#0b0b0b]">
        <Spinner />
      </div>
    );
  }
  const getReadingTime = () => {
    const words = blog.content?.paragraphs?.join(" ").split(" ").length || 0;
    const time = Math.ceil(words / 200); // avg reading speed ~200wpm
    return `${time} min read`;
  };

  return (
    <div className="min-h-screen pt-20 px-5 md:px-10 lg:px-20 bg-[#0b0b0b] text-white animate-fadein">
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
      <Link
        to="/blogs"
        className="text-yellow text-sm font-semibold uppercase tracking-wide hover:underline mb-6 inline-block"
      >
        ← Back to Blog
      </Link>

      <h1 className="h1-teko text-yellow text-4xl md:text-6xl mb-6">
        {blog.title}
      </h1>

      <p className="italic text-sm text-gray-400 mb-4">
        by {blog.author} •{" "}
        {blog.createdAt?.seconds &&
          format(new Date(blog.createdAt.seconds * 1000), "dd MMM yyyy")}{" "}
        • {getReadingTime()}
      </p>

      <img
        src={blog.thumbnail}
        alt={blog.title}
        className="w-full rounded-xl max-h-[500px] object-cover mb-10"
      />

      {/* Optional quote */}
      {blog.content?.quote && (
        <blockquote className="border-l-4 border-yellow pl-4 italic text-lg font-light mb-8">
          {blog.content.quote}
        </blockquote>
      )}

      {/* Blog paragraphs */}
      <div className="space-y-6 text-white font-light leading-relaxed">
        {blog.content?.paragraphs?.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>

      {/* Optional additional images */}
      {blog.content?.images?.length > 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {blog.content.images.slice(1).map((img, i) => (
            <img key={i} src={img} alt="Blog visual" className="rounded-lg" />
          ))}
        </div>
      )}
    </div>
  );
};

export default SingleBlog;
