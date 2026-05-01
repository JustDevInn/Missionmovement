import React, { useRef } from "react";
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

  return (
    <section className="w-screen flex flex-col justify-center items-center p-10 text-justify">
      <h2 className="mm-h1 text-mmText text-center py-20 tracking-widest">
        Zij Die Het Verdiend Hebben
      </h2>

      {/* Swipeable Scrollable Reviews */}
      <div
        {...handlers}
        ref={scrollRef}
        className="reviews-scroll w-full flex overflow-x-auto snap-x snap-mandatory gap-5 p-5 pb-7 scroll-smooth touch-pan-x"
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
      <p className="mt-3 text-center text-xs md:text-sm uppercase tracking-widest text-mmTextMuted">
        Swipe om meer ervaringen te bekijken{" "}
        <span className="text-mmAccent">→</span>
      </p>
    </section>
  );
};

export default Reviews;
