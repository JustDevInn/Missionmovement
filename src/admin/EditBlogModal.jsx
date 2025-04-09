import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import Spinner from "../components/Spinner";

const EditBlogModal = ({ blog, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: blog.title || "",
    author: blog.author || "",
    summary: blog.summary || "",
    slug: blog.slug || "",
    pinned: blog.pinned || false,
    tags: blog.tags?.join(", ") || "",
    thumbnail: blog.thumbnail || "",
    quote: blog.content?.quote || "",
    paragraphs: blog.content?.paragraphs || [],
    images: blog.content?.images || [],
  });

  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleArrayChange = (e, index, field) => {
    const updated = [...formData[field]];
    updated[index] = e.target.value;
    setFormData((prev) => ({ ...prev, [field]: updated }));
  };

  const addField = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }));
  };

  const removeField = (field, index) => {
    const updated = [...formData[field]];
    updated.splice(index, 1);
    setFormData((prev) => ({ ...prev, [field]: updated }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const blogRef = doc(db, "blogs", blog.id);
      await updateDoc(blogRef, {
        title: formData.title,
        author: formData.author,
        summary: formData.summary,
        slug: formData.slug,
        pinned: formData.pinned,
        tags: formData.tags.split(",").map((tag) => tag.trim()),
        thumbnail: formData.thumbnail,
        content: {
          quote: formData.quote,
          paragraphs: formData.paragraphs,
          images: formData.images,
        },
      });
      onSave();
    } catch (err) {
      console.error("Error updating blog:", err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center overflow-y-auto p-4">
      <div className="bg-[#1a1a1a] rounded-lg p-6 max-w-3xl w-full text-white relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-cyan-400 text-xl font-bold"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Edit Blog</h2>

        <div className="space-y-3 max-h-[80vh] overflow-y-auto pr-2">
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full p-2 rounded bg-black border border-cyan-600"
          />
          <input
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Author"
            className="w-full p-2 rounded bg-black border border-cyan-600"
          />
          <input
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            placeholder="Slug"
            className="w-full p-2 rounded bg-black border border-cyan-600"
          />
          <input
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            placeholder="Summary"
            className="w-full p-2 rounded bg-black border border-cyan-600"
          />
          <input
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleChange}
            placeholder="Thumbnail URL"
            className="w-full p-2 rounded bg-black border border-cyan-600"
          />
          <input
            name="quote"
            value={formData.quote}
            onChange={handleChange}
            placeholder="Quote"
            className="w-full p-2 rounded bg-black border border-cyan-600"
          />
          <input
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="Tags (comma-separated)"
            className="w-full p-2 rounded bg-black border border-cyan-600"
          />

          <label className="flex items-center gap-2 text-sm mt-1">
            <input
              type="checkbox"
              name="pinned"
              checked={formData.pinned}
              onChange={handleChange}
            />
            Feature this post
          </label>

          {/* Paragraphs */}
          <h4 className="text-cyan-500 mt-4 font-semibold">Paragraphs</h4>
          {formData.paragraphs.map((para, i) => (
            <div key={i} className="relative">
              <textarea
                value={para}
                onChange={(e) => handleArrayChange(e, i, "paragraphs")}
                className="w-full p-2 rounded bg-black border border-cyan-600 mb-1"
                rows={3}
              />
              <button
                type="button"
                onClick={() => removeField("paragraphs", i)}
                className="text-red-400 text-sm absolute top-1 right-1"
              >
                ✕
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addField("paragraphs")}
            className="text-cyan-400 text-sm underline"
          >
            + Add Paragraph
          </button>

          {/* Images */}
          <h4 className="text-cyan-500 mt-4 font-semibold">Images (URLs)</h4>
          {formData.images.map((img, i) => (
            <div key={i} className="relative">
              <input
                value={img}
                onChange={(e) => handleArrayChange(e, i, "images")}
                className="w-full p-2 rounded bg-black border border-cyan-600 mb-1"
              />
              <button
                type="button"
                onClick={() => removeField("images", i)}
                className="text-red-400 text-sm absolute top-1 right-1"
              >
                ✕
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addField("images")}
            className="text-cyan-400 text-sm underline"
          >
            + Add Image
          </button>
        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className="mt-6 bg-cyan-500 px-5 py-2 rounded text-black font-semibold hover:bg-cyan-400"
        >
          {saving ? <Spinner /> : "Save Changes"}
        </button>
      </div>
    </div>
  );
};

export default EditBlogModal;
