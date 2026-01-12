import React, { useEffect, useMemo, useRef, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import { fadeIn } from "../utils/variants"; // Import animation
import { PhotoAlbum } from "react-photo-album";
import { galleryData } from "../data/data.js";

const SocialGallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const frameRef = useRef(null);
  const [frameWidth, setFrameWidth] = useState(0);
  const x = useMotionValue(0);

  // Map gallery images
  const slides = galleryData.images.map(({ original }) => original);

  // Handle next & prev navigation
  const nextIndex = useMemo(
    () => (index + 1) % slides.length,
    [index, slides.length]
  );
  const prevIndex = useMemo(
    () => (index - 1 + slides.length) % slides.length,
    [index, slides.length]
  );

  useEffect(() => {
    if (!open) return;
    const updateWidth = () => {
      const measured = frameRef.current?.offsetWidth;
      const fallback = Math.round(window.innerWidth * 0.8);
      setFrameWidth(measured || fallback);
    };
    const raf = requestAnimationFrame(updateWidth);
    window.addEventListener("resize", updateWidth);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", updateWidth);
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      setIsAnimating(false);
    }
  }, [open]);

  useEffect(() => {
    if (!frameWidth) return;
    x.set(-frameWidth);
  }, [frameWidth, x]);

  const animateToIndex = (dir) => {
    if (isAnimating) return;
    if (!frameWidth) {
      setIndex((prev) => (prev + dir + slides.length) % slides.length);
      return;
    }
    setIsAnimating(true);
    const target =
      dir > 0 ? -frameWidth * 2 : 0;
    animate(x, target, {
      type: "spring",
      stiffness: 260,
      damping: 30,
      onComplete: () => {
        setIndex((prev) => (prev + dir + slides.length) % slides.length);
        x.set(-frameWidth);
        setIsAnimating(false);
      },
    });
  };

  const nextImage = () => animateToIndex(1);
  const prevImage = () => animateToIndex(-1);

  return (
    <div className="w-screen">
      {/* Social Header */}
      <section className="px-10 flex flex-col justify-center items-center">
        <h1 className="mm-h1 text-mmText py-20 lg:pt-40 lg:pb-20">Social</h1>
        <motion.a
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          href="http://www.instagram.com/mission.movement"
          target="_blank"
          rel="noopener noreferrer"
          className="text-mmAccent w-full text-sm lg:text-lg text-center"
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
          <div
            className="relative w-[80vw] h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute -top-10 -right-10 text-mmTextMuted hover:text-mmAccent text-2xl border border-b border-mmBorder hover:border-mmAccent h-8 w-8 flex items-center justify-center bg-mmSurface/90"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            {/* Left Arrow */}
            <button
              className="absolute -left-10 text-mmTextMuted hover:text-mmAccent text-3xl"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              ❮
            </button>

            {/* Image Display */}
            <div
              ref={frameRef}
              className="relative w-full h-full overflow-hidden flex items-center justify-center"
            >
              <motion.div
                className="flex h-full"
                drag={frameWidth ? "x" : false}
                dragConstraints={{
                  left: frameWidth ? -frameWidth * 2 : 0,
                  right: 0,
                }}
                dragElastic={0.2}
                dragMomentum={false}
                style={{
                  x,
                  width: frameWidth ? frameWidth * 3 : "300%",
                  touchAction: "pan-y",
                }}
                onDragEnd={(e, info) => {
                  if (!frameWidth || isAnimating) return;
                  if (info.offset.x < -frameWidth / 4) {
                    nextImage();
                  } else if (info.offset.x > frameWidth / 4) {
                    prevImage();
                  } else {
                    animate(x, -frameWidth, {
                      type: "spring",
                      stiffness: 260,
                      damping: 30,
                    });
                  }
                }}
              >
                {[slides[prevIndex], slides[index], slides[nextIndex]].map(
                  (src, i) => (
                    <div
                      key={`${src}-${i}`}
                      className="flex items-center justify-center h-full"
                      style={{ width: frameWidth || "33.333%" }}
                    >
                      <img
                        src={src}
                        alt={`Slide ${index + (i - 1)}`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  )
                )}
              </motion.div>
            </div>

            {/* Right Arrow */}
            <button
              className="absolute -right-10 text-mmTextMuted hover:text-mmAccent text-3xl"
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
