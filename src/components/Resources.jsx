import React, { useState } from 'react';
// import data
import { galleryData } from '../data';
// import photo album & lightbox
import { PhotoAlbum } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
// import motion
import { motion } from 'framer-motion';
// import fadeIn
import { fadeIn } from '../variants';

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

  // State for FAQ toggle
  const [openFAQ, setOpenFAQ] = useState(null);

  // FAQ Data
  const faqData = [
    {
      id: 1,
      question: "What can I do if I don't meet the eligibility requirements to join?",
      answer: "An area to run, basic equipment like a barbell or dumbbells (these can be swapped with anything, as long as it gives a constant resistant over the axis. Aka; bands do not work.). Access to a swimming location. Preferably a climbing rope, but this can also be substituted by a tower and a pull-up bar."
    },
    {
      id: 2,
      question: "Can I get a refund after purchase?",
      answer: "Once paid, the payment is not refundable under any circumstance."
    },
    {
      id: 3,
      question: "How does the remote coaching work?",
      answer: "Through online coaching, you have the opportunity to send us daily inquiries about your training. To maximise the benefits of online coaching, we strongly encourage our clients to submit video recordings to ensure correct form and alignment. Incorrect positioning during exercises may hinder desired results. Therefore, we encourage everyone to record their initial training sessions for form and technique evaluations."
    },
    {
      id: 4,
      question: "How many hours per week is the program?",
      answer: "The program demands you to train for at least 2 hours per day. This is excluding preparation travel time to a gym/pool/running location."
    },
    {
      id: 5,
      question: "What is the process like when I enroll in the program?",
      answer: "Once you make a purchase, you will promptly receive a welcome letter with in-depth information about the program. Shortly after, you will gain access to a link where you'll be able to download the program from."
    }
  ];

  return (
    <div>
      {/* Resources */}
      <section className="section flex justify-center items-center bg-hlo bg-center bg-no-repeat bg-cover">
        <div className='h-full w-full flex justify-end items-start pt-20 pr-5 lg:pr-20'>
          <h1 className='text-yellow font-primary text-[35px] md:text-[60px] font-medium uppercase tracking-wider'>
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

          {/* FAQ containers */}
<div>
  <h2 className="h2-teko text-yellow my-10">WHAT TO KNOW BEFORE YOU JOIN</h2>
  <p className="text-sm lg:text-base font-thin">
    Here are some things you might want to know before you take the next step.
    <br />
    You can always reach out to us via the contact form for more specific details.
  </p>

  {/* Map through the FAQ data */}
  {faqData.map(({ id, question, answer }) => (
    <div key={id} className="my-4 border-b border-gray-500 pb-2">
      <h5
        className="leading-[120%] font-medium cursor-pointer"
        onClick={() => setOpenFAQ(openFAQ === id ? null : id)}
      >
        {question}
      </h5>
      <div className={`transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden ${openFAQ === id ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="font-thin leading-[120%] mt-2">{answer}</p>
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
  <section className="w-screen p-10">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
    <div className="lg:p-10 py-10 lg:w-4/5">
      <h2 className="mb-5 text-brown font-secondary text-[25px] md:text-[60px] font-light uppercase leading-[120%] tracking-wide">
      Article about training</h2>
      <p className="mb-5 text-white text-xs lg:text-lg font-thin tracking-wider">
      Here are some things you might want to know before you take the next step.
      You can always reach out to us via the contact form for more specific details.
      </p>
      <a href='/' className="mt-5 text-white uppercase leading-[120%] font-medium underline">Read more ...</a>
    </div>
    <div className="lg:p-10 py-10 lg:w-4/5">
      <h2 className="mb-5 text-brown font-secondary text-[25px] md:text-[60px] font-light uppercase leading-[120%] tracking-wide">
      General physical preparedness</h2>
      <p className="mb-5 text-white text-xs lg:text-lg font-thin tracking-wider">
      Here are some things you might want to know before you take the next step.
      You can always reach out to us via the contact form for more specific details.
      </p>
      <a href='/' className="mt-5 text-white uppercase leading-[120%] font-medium underline">Read more ...</a>
    </div>
    <div className="lg:p-10 py-10 lg:w-4/5">
      <h2 className="mb-5 text-brown font-secondary text-[25px] md:text-[60px] font-light uppercase leading-[120%] tracking-wide">
      Mental fortitude</h2>
      <p className="mb-5 text-white text-xs lg:text-lg font-thin tracking-wider">
      Here are some things you might want to know before you take the next step.
      You can always reach out to us via the contact form for more specific details.
      </p>
      <a href='/' className="mt-5 text-white uppercase leading-[120%] font-medium underline">Read more ...</a>
    </div>
    <div className="lg:p-10 py-10 lg:w-4/5">
      <h2 className="mb-5 text-brown font-secondary text-[25px] md:text-[60px] font-light uppercase leading-[120%] tracking-wide">
      Nutritional values</h2>
      <p className="mb-5 text-white text-xs lg:text-lg font-thin tracking-wider">
      Here are some things you might want to know before you take the next step.
      You can always reach out to us via the contact form for more specific details.
      </p>
      <a href='/' className="mt-5 text-white uppercase leading-[120%] font-medium underline">Read more ...</a>
    </div>
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
      <section className="w-screen relative my-20 px-20">
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
  controller={{ closeOnBackdropClick: true }} // Ensures clicking outside closes the Lightbox
  on={{ view: ({ index }) => setIndex(index) }}
  render={{
    buttonClose: () => (
      <button
        className="absolute top-5 right-5 text-white text-3xl z-50"
        onClick={() => setOpen(false)}
      >
        ✕
      </button>
    ),
  }}
  styles={{
    container: { backgroundColor: 'rgba(0, 0, 0, 0.9)' }, // Dark overlay
    slide: { maxWidth: '70vw', maxHeight: '70vh' }, // Image fills 70% of screen
    navigationNext: { color: 'white' },
    navigationPrev: { color: 'white' },
  }}
/>



     {/* btn */}
     <motion.div
      variants={fadeIn('up')}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.2}}
    className='flex justify-center'>
      <button className='btn btn-lg'>
        INSTAGRAM
      </button>
    </motion.div>
  </section>
  </div>
  );
};

export default Resources;
