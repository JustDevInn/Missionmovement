import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants"; // Import animation
import { PhotoAlbum } from "react-photo-album";
import { galleryData } from "../data/data.js";

const SocialGallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Map gallery images
  const slides = galleryData.images.map(({ original }) => original);

  // Handle next & prev navigation
  const nextImage = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevImage = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-screen">
      {/* Social Header */}
      <section className="px-10 flex flex-col justify-center items-center">
        <h1 className="h1-teko pt-20 pb-10 lg:pt-40 lg:pb-20">Social</h1>
        <motion.a
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          href="http://www.instagram.com/mission.movement"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow w-full text-sm lg:text-lg text-center"
        >
          @mission.movement
        </motion.a>
      </section>

      {/* Instagram Gallery */}
      <section className="relative my-20 px-2 md:px-20">
        {/* Photo Album */}
        <motion.div
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="mb-8 lg:mb-20"
        >
          <PhotoAlbum
  photos={galleryData.images}
  layout="rows"
  renderPhoto={({ photo, imageProps }) => (
    <img
      {...imageProps}
      className="w-full h-full object-cover bg-center"
      alt="photoalbum"
    />
  )}
  onClick={({ index }) => {
    setIndex(index);
    setOpen(true);
  }}
/>

        </motion.div>
      </section>

      {/* Custom Lightbox Modal */}
      {open && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setOpen(false)} // Close modal on outside click
        >
          <div className="relative w-[80vw] h-[80vh] flex items-center justify-center">
            {/* Close Button */}
            <button
              className="absolute -top-10 -right-10 text-brown hover:text-yellow text-2xl border border-b border-brown hover:border-yellow 
              h-8 w-8 flex items-center justify-center"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            {/* Left Arrow */}
            <button
              className="absolute -left-10 text-brown hover:text-yellow text-3xl"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              ❮
            </button>

            {/* Image Display */}
            <img
              src={slides[index]}
              alt={`Slide ${index}`}
              className="max-w-full max-h-full object-contain"
            />

            {/* Right Arrow */}
            <button
              className="absolute -right-10 text-brown hover:text-yellow text-3xl"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              ❯
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialGallery;
