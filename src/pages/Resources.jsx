import React, { useState } from 'react';
// import data
import { galleryData } from '../data/data.js';
// import photo album & lightbox
import { PhotoAlbum } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
// import motion
import { motion } from 'framer-motion';
// import fadeIn
import { fadeIn } from '../utils/variants';
import {faqData} from '../data/data.js'
// Icons
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// slides
const slides = galleryData.images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));

const Resources = () => {
  // index state for image gallery
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Resources */}
      <section className="section flex justify-center items-center bg-hlo bg-center bg-no-repeat bg-cover relative bg-fixed">
  {/* Background Overlay for Better Readability */}
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
  <div className="relative h-full w-full flex justify-center lg:justify-end items-center pt-20 px-5 lg:px-20">
    <h1 className="text-yellow font-primary text-[35px] md:text-[60px] font-medium uppercase tracking-wider text-center lg:text-right">
      Resources
    </h1>
  </div>
</section>


      {/* FAQ Section */}
      <section className="w-screen px-10 pt-20 pb-10 lg:pt-40 lg:pb-20 flex flex-col justify-center items-center">
        <h1 className="text-yellow font-secondary text-[30px] md:text-[60px] lg:text-[90px] font-light uppercase leading-[120%] tracking-wide">
          Frequently Asked Questions
        </h1>
      </section>

      {/* FAQ container */}
      <section className="w-screen p-10 lg:px-20">
        <header className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 tracking-wider text-white">

        <div className="flex flex-col bg-primary py-6 md:p-10 rounded-lg shadow-lg">
  <h1 className="h2-teko text-yellow text-center mb-4">What to Know Before Joining</h1>

  {/* Added Intro */}
  <p className="text-sm lg:text-base font-thin text-white text-center mb-6 text-justify">
    Have questions? Here are the most common things people ask before signing up.  
    If you need more details, feel free to reach out!
  </p>

  {faqData.map((faq, index) => (
    <div
      key={index}
      className="my-4 bg-brown rounded-lg overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:bg-opacity-80"
    >
      {/* Clickable Question */}
      <button
        onClick={() => toggle(index)}
        className="w-full flex justify-between items-center p-5 text-left text-brown font-medium tracking-wider capitalize bg-primary hover:text-yellow transition duration-300"
      >
        {faq.question}
        {openIndex === index ? (
          <FaChevronUp className="text-yellow transition-transform duration-300" />
        ) : (
          <FaChevronDown className="text-yellow transition-transform duration-300" />
        )}
      </button>

      {/* Answer Section (Smoother Expansion) */}
      <div
        className={`overflow-hidden transition-all duration-700 delay-150 ${
          openIndex === index ? "max-h-[150px] opacity-100 p-5" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-white text-sm leading-[160%]">{faq.answer}</p>
      </div>
    </div>
  ))}
</div>



        </header>
      </section>
      {/* ARTICLES's */}
  <section className="w-screen px-10 pt-20 pb-10 lg:pt-40 lg:pb-20 flex flex-col justify-center items-center">
    <h1 className="h1-teko">
    Articles</h1>
  </section>
  {/* article container */}
 {/* Article Container */}
<section className="w-screen p-10">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
    {[
      { title: "Article about training", desc: "Here are some things you might want to know before you take the next step.", link: "/" },
      { title: "General physical preparedness", desc: "You can always reach out to us via the contact form for more specific details.", link: "/" },
      { title: "Mental fortitude", desc: "Developing mental strength for high-performance challenges.", link: "/" },
      { title: "Nutritional values", desc: "Optimizing your nutrition for peak military performance.", link: "/" },
    ].map((article, index) => (
      <div key={index} className="p-6 bg-primary rounded-lg shadow-lg hover:scale-[1.02] transition-all duration-300">
        <h2 className="mb-3 text-brown font-secondary text-[25px] md:text-[40px] font-light uppercase leading-[120%] tracking-wide">
          {article.title}
        </h2>
        <p className="text-white text-sm lg:text-lg font-thin tracking-wider mb-5">
          {article.desc}
        </p>
        <a href={article.link} className="inline-block mt-5 bg-yellow text-black px-4 py-2 text-sm font-bold uppercase tracking-wider hover:bg-transparent hover:text-yellow border border-yellow transition duration-300">
          Read More
        </a>
      </div>
    ))}
  </div>
</section>


   {/* SOCIAL */}
   <section className="w-screen px-10 flex flex-col justify-center items-center">
    <h1 className="h1-teko pt-20 pb-10 lg:pt-40 lg:pb-20">
      Social
    </h1> 
    <motion.a
      variants={fadeIn('up')}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.6}}
      href="http://www.instagram.com/mission.movement"
      target='blank'
      className="text-yellow w-full text-sm lg:text-lg">
      @mission.movement
      </motion.a>

  </section>
      {/* Instagram Lightbox */}
      <section className="w-screen relative my-20 px-2 md:px-20">
        {/* Photo Album */}
        <motion.div
          variants={fadeIn('up')}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className='mb-8 lg:mb-20'
        >
          <PhotoAlbum
            photos={slides}
            layout="rows"
            onClick={({ index }) => {
              setIndex(index);
              setOpen(true);
            }}
          />
        </motion.div>

        {open && (
  <div
    className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-90 z-50"
    onClick={() => setOpen(false)}
  />
)}
<Lightbox
  open={open}
  close={() => setOpen(false)}
  index={index}
  slides={slides}
  controller={{ closeOnBackdropClick: false }} // Prevents accidental closing
  on={{ view: ({ index }) => setIndex(index) }}
  render={{
    buttonClose: () => (
      <button
        className="absolute top-5 right-5 text-white text-sm z-50"
        onClick={() => setOpen(false)}
      >
        ✕ Close
      </button>
    ),
  }}
  styles={{
    container: { backgroundColor: 'rgba(0, 0, 0, 0.9)' }, // Dark overlay
    slide: { maxWidth: '75vw', maxHeight: '75vh', margin: '10px' }, // Added spacing
    navigationNext: { color: 'white' },
    navigationPrev: { color: 'white' },
  }}
/>




   {/* Instagram Button */}
<motion.div
  variants={fadeIn('up')}
  initial='hidden'
  whileInView={'show'}
  viewport={{ once: false, amount: 0.2 }}
  className="flex justify-center mt-10 mb-20"
>
  <a 
    href="http://www.instagram.com/mission.movement"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 text-sm lg:text-base font-bold uppercase tracking-widest bg-yellow text-black hover:bg-transparent hover:text-yellow border border-yellow transition duration-300"
  >
    Instagram
  </a>
</motion.div>

  </section>
  </div>
  );
};

export default Resources;
