import React from "react";

const QuoteBlock = ({ quote, author }) => {
  return (
    <div className="relative border-l-4 border-yellow pl-6 md:pl-10 my-20 pr-4 py-6 bg-[#121212] rounded-md shadow-md transition-all hover:scale-[1.015] hover:shadow-yellow/20 duration-300 max-w-4xl mx-auto group">
      <p className="text-white font-light text-base md:text-lg italic leading-relaxed">
        “{quote}”
      </p>
      <p className="text-yellow text-sm md:text-base font-secondary tracking-wider mt-4 text-right group-hover:translate-x-1 transition-transform duration-300">
        — {author}
      </p>

      {/* Glowing accent */}
      <span className="absolute top-0 left-0 w-1 h-full bg-yellow animate-pulse shadow-lg" />
    </div>
  );
};

export default QuoteBlock;

{
  /* <section className="py-20 bg-[#101010]">
  <h2 className="text-yellow text-center text-2xl md:text-4xl font-secondary uppercase mb-10">
    Words to Live By
  </h2>
  <div className="space-y-16">
    <QuoteBlock
      quote="The only easy day was yesterday."
      author="Navy SEAL Motto"
    />
     <QuoteBlock
      quote="Hard times don’t build character. They reveal it."
      author="Justin Peeters"
    />
    <QuoteBlock
      quote="Discipline is choosing between what you want now and what you want most."
      author="Abraham Lincoln"
    />
    <QuoteBlock
      quote="Courage is not the absence of fear, but the triumph over it."
      author="Nelson Mandela"
    />
  </div>
</section> */
}
