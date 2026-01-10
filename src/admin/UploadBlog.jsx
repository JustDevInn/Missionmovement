// src/admin/UploadBlog.jsx
import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const UploadBlog = () => {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    author: "",
    summary: "",
    thumbnail: "",
    pinned: false,
    tags: "",
    content: {
      paragraphs: [""],
      images: [""],
      quote: "",
    },
  });
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleContentChange = (field, index, value) => {
    const updated = [...form.content[field]];
    updated[index] = value;
    setForm((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        [field]: updated,
      },
    }));
  };

  const addField = (field) => {
    setForm((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        [field]: [...prev.content[field], ""],
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const doc = {
        ...form,
        createdAt: serverTimestamp(),
        tags: form.tags.split(",").map((tag) => tag.trim()),
        slug: form.slug || form.title.toLowerCase().replace(/\s+/g, "-"),
      };
      await addDoc(collection(db, "blogs"), doc);
      setSuccessMessage("Blog uploaded successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
      setForm({
        title: "",
        slug: "",
        author: "",
        summary: "",
        thumbnail: "",
        pinned: false,
        tags: "",
        content: { paragraphs: [""], images: [""], quote: "" },
      });
    } catch (err) {
      console.error("Error uploading blog:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-6 md:p-10 bg-[#121212] min-h-screen text-white">
      <h1 className="text-3xl font-bold text-cyan-500 mb-6">
        Upload Blog Article
      </h1>

      <form onSubmit={handleSubmit} className="grid gap-4 max-w-3xl">
        <input
          value={form.title}
          onChange={(e) => handleChange("title", e.target.value)}
          placeholder="Title"
          className="input"
          required
        />
        <input
          value={form.slug}
          onChange={(e) => handleChange("slug", e.target.value)}
          placeholder="Slug (optional)"
          className="input"
        />
        <input
          value={form.author}
          onChange={(e) => handleChange("author", e.target.value)}
          placeholder="Author"
          className="input"
          required
        />
        <textarea
          value={form.summary}
          onChange={(e) => handleChange("summary", e.target.value)}
          placeholder="Summary"
          className="input"
          rows={3}
        />
        <input
          value={form.thumbnail}
          onChange={(e) => handleChange("thumbnail", e.target.value)}
          placeholder="Thumbnail URL"
          className="input"
        />
        <input
          value={form.tags}
          onChange={(e) => handleChange("tags", e.target.value)}
          placeholder="Tags (comma-separated)"
          className="input"
        />
        <label className="flex gap-2 items-center">
          <input
            type="checkbox"
            checked={form.pinned}
            onChange={(e) => handleChange("pinned", e.target.checked)}
          />
          <span>Feature this post</span>
        </label>

        <h3 className="text-cyan-500 font-semibold mt-6">Paragraphs</h3>
        {form.content.paragraphs.map((para, i) => (
          <textarea
            key={i}
            value={para}
            onChange={(e) =>
              handleContentChange("paragraphs", i, e.target.value)
            }
            placeholder={`Paragraph ${i + 1}`}
            className="input"
            rows={3}
          />
        ))}
        <button
          type="button"
          onClick={() => addField("paragraphs")}
          className="text-cyan-400 text-sm underline"
        >
          + Add Paragraph
        </button>

        <h3 className="text-cyan-500 font-semibold mt-6">Images (URLs)</h3>
        {form.content.images.map((img, i) => (
          <input
            key={i}
            value={img}
            onChange={(e) => handleContentChange("images", i, e.target.value)}
            placeholder={`Image ${i + 1}`}
            className="input"
          />
        ))}
        <button
          type="button"
          onClick={() => addField("images")}
          className="text-cyan-400 text-sm underline"
        >
          + Add Image
        </button>

        <h3 className="text-cyan-500 font-semibold mt-6">Quote</h3>
        <input
          value={form.content.quote}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              content: { ...prev.content, quote: e.target.value },
            }))
          }
          placeholder="Optional quote"
          className="input"
        />

        <button
          type="submit"
          disabled={submitting}
          className="mt-6 bg-cyan-500 px-4 py-2 rounded font-bold text-white hover:opacity-90"
        >
          {submitting ? "Uploading..." : "Submit Blog"}
        </button>
        {successMessage && (
          <p className="text-green-400 font-semibold mt-2">{successMessage}</p>
        )}
      </form>

      {/* Live Preview */}
      <div className="mt-12 border-t border-cyan-800 pt-6">
        <h2 className="text-2xl font-bold text-cyan-500 mb-4">Live Preview</h2>
        <h3 className="text-yellow text-3xl font-bold mb-2">{form.title}</h3>
        <p className="italic text-gray-400 mb-2 text-base md:text-lg">by {form.author}</p>
        {form.thumbnail && (
          <img
            src={form.thumbnail}
            alt="Preview"
            className="rounded-xl mb-4 max-h-[300px] object-cover"
          />
        )}
        {form.content.quote && (
          <blockquote className="italic text-lg border-l-4 border-yellow pl-4 mb-4">
            {form.content.quote}
          </blockquote>
        )}
        <div className="space-y-4">
          {form.content.paragraphs.map((p, i) => (
            <p key={i} className="text-white font-light leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UploadBlog;
