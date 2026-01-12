import React, { useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { reviews } from "../data/data"; // Import reviews data

const Reviews = () => {
  const scrollRef = useRef(null);

  // Swiping settings for smooth horizontal scrolling
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
    },
    onSwipedRight: () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
      }
    },
  });

  // Ensure scrollbar remains visible
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.style.overflowX = "scroll"; // Ensures horizontal scroll
      scrollRef.current.style.scrollbarGutter = "stable"; // Keeps space for scrollbar
    }
  }, []);

  return (
    <section className="w-screen flex flex-col justify-center items-center p-10 text-justify">
      <h2 className="mm-h1 text-mmText text-center py-20 tracking-widest">
        Zij Die Het Verdiend Hebben
      </h2>

      {/* Swipeable Scrollable Reviews */}
      <div
        {...handlers}
        ref={scrollRef}
        className="w-full flex overflow-x-auto scrollbar-visible snap-x snap-mandatory space-x-5 p-5"
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full md:w-[48%] lg:w-[45%] p-5 border border-mmBorder shadow-sm bg-mmSurface rounded-2xl snap-center"
          >
            <h2 className="font-display uppercase tracking-widest text-mmText mb-2">
              {review.name}
            </h2>
            <p className="text-mmTextMuted">
              {review.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
