import React, {useState} from 'react';
// import data
import {galleryData} from '../data';
// import photo album & lightbox
import {PhotoAlbum} from 'react-photo-album';
import {Lightbox} from 'yet-another-react-lightbox';
// import css
import 'yet-another-react-lightbox/styles.css'
// import motion
import {motion} from 'framer-motion';
// import fadeIn
import {fadeIn} from '../variants';
// slides
const slides = galleryData.images.map(({original, width,
  height}) => ({
   src: original,
   width,
   height,
}))

const Resources = () => {
    // index state
    const [index, setIndex] = useState(-1);
      // destructure gallery data
  const {images} = galleryData;
  
  return (
  <div>
    {/* The story */}
  <section className="section flex justify-center items-center bg-hlo bg-center bg-no-repeat bg-cover">
    <div className='h-full w-full flex justify-end items-start pt-20 pr-5 lg:pr-20'>
      <h1 className='text-yellow font-primary text-[35px] md:text-[60px] font-medium
      uppercase tracking-wider'>
      Resources
      </h1>
    </div>
  </section>
    {/* FAQ's */}
  <section className="w-screen px-10 py-20 lg:py-40 flex flex-col justify-center items-center">
    <h1 className="text-yellow font-secondary text-[30px] md:text-[60px] lg:text-[90px]
    font-light uppercase leading-[120%] tracking-wide">
    Frequently asked questions</h1>
  </section>
      {/* FAQ container */}
  <section className="w-screen p-10 lg:px-20">
    <header className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 tracking-wider text-white">
    {/* FAQ containers */}
      <div>
        <h2 className="h2-teko text-yellow my-10">WHAT TO KNOW BEFORE YOU JOIN</h2>
        <p className="text-sm lg:text-base font-thin">Here are some things you might want to know before you take the next step.
        <br />
        You can always reach out to us via the contact form for more specific details.</p>
        <div className="mt-10 mb-4">
          <h5 className="uppercase leading-[120%] font-medium underline">What can I do if I don't meet the eligibility requirements to join?</h5>
          <p className="font-thin leading-[120%]">Overview, crucial insights for special forces.</p>
        </div>
        <div className="my-4">
          <h5 className="uppercase leading-[120%] font-medium underline">Can I get a refund after purchase?</h5>
          <p className="font-thin leading-[120%]">Progressive strength & endurance training tailored for military selection.</p>
        </div>
        <div className="my-4">
          <h5 className="uppercase leading-[120%] font-medium underline">How does the remote coaching work?</h5>
          <p className="font-thin leading-[120%]">Sustained readiness during service.</p>
        </div>
        <div className="my-4">
          <h5 className="uppercase leading-[120%] font-medium underline">How many hours per week is the program?</h5>
          <p className="font-thin leading-[120%]">Sustained readiness during service.</p>
        </div>
      </div>
{/* program overview */}
      <div className="flex flex-col justify-end items-start">
        <div className="mt-10 mb-4">
          <h5 className="uppercase leading-[120%] font-medium underline">What can I do if I don't meet the eligibility requirements to join?</h5>
          <p className="font-thin leading-[120%]">Overview, crucial insights for special forces.</p>
        </div>
        <div className="my-4">
          <h5 className="uppercase leading-[120%] font-medium underline">Can I get a refund after purchase?</h5>
          <p className="font-thin leading-[120%]">Progressive strength & endurance training tailored for military selection.</p>
        </div>
        <div className="my-4">
          <h5 className="uppercase leading-[120%] font-medium underline">How does the remote coaching work?</h5>
          <p className="font-thin leading-[120%]">Sustained readiness during service.</p>
        </div>
        <div className="my-4">
          <h5 className="uppercase leading-[120%] font-medium underline">How many hours per week is the program?</h5>
          <p className="font-thin leading-[120%]">Sustained readiness during service.</p>
        </div>
      </div>
    </header>
  </section>
      {/* ARTICLES's */}
  <section className="w-screen px-10 py-20 lg:py-40 flex flex-col justify-center items-center">
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
      <h5 className="mt-5 text-white uppercase leading-[120%] font-medium underline">Read more ...</h5>
    </div>
    <div className="lg:p-10 py-10 lg:w-4/5">
      <h2 className="mb-5 text-brown font-secondary text-[25px] md:text-[60px] font-light uppercase leading-[120%] tracking-wide">
      General physical preparedness</h2>
      <p className="mb-5 text-white text-xs lg:text-lg font-thin tracking-wider">
      Here are some things you might want to know before you take the next step.
      You can always reach out to us via the contact form for more specific details.
      </p>
      <h5 className="mt-5 text-white uppercase leading-[120%] font-medium underline">Read more ...</h5>
    </div>
    <div className="lg:p-10 py-10 lg:w-4/5">
      <h2 className="mb-5 text-brown font-secondary text-[25px] md:text-[60px] font-light uppercase leading-[120%] tracking-wide">
      Mental fortitude</h2>
      <p className="mb-5 text-white text-xs lg:text-lg font-thin tracking-wider">
      Here are some things you might want to know before you take the next step.
      You can always reach out to us via the contact form for more specific details.
      </p>
      <h5 className="mt-5 text-white uppercase leading-[120%] font-medium underline">Read more ...</h5>
    </div>
    <div className="lg:p-10 py-10 lg:w-4/5">
      <h2 className="mb-5 text-brown font-secondary text-[25px] md:text-[60px] font-light uppercase leading-[120%] tracking-wide">
      Nutritional values</h2>
      <p className="mb-5 text-white text-xs lg:text-lg font-thin tracking-wider">
      Here are some things you might want to know before you take the next step.
      You can always reach out to us via the contact form for more specific details.
      </p>
      <h5 className="mt-5 text-white uppercase leading-[120%] font-medium underline">Read more ...</h5>
    </div>
    </div>
  </section>
   {/* SOCIAL */}
   <section className="w-screen px-10 flex flex-col justify-center items-center">
    <h1 className="h1-teko py-20 lg:py-40">
      Social
    </h1>
    <a href="http://www.instagram.com/mission.movement" className="text-yellow w-full text-sm lg:text-lg">
    @mission.movement
    </a>
  </section>
  {/* instagram lightroom */}
  <section className="w-screen relative my-20 px-10">
  {/* photo album */}
  <motion.div
      variants={fadeIn('up')}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.2}}
    className='mb-8 lg:mb-20'>
      <PhotoAlbum
      onClick={(index)=> setIndex(index)}
      layout='rows'
      photos={images}
      />
      <Lightbox
      slides={slides}
      styles={{container: {backgroundColor: 'rgba(0,0,0,.9'}}}
      open={index >= 0}
      index={index}
      close={()=> setIndex(-1)}
      />
    </motion.div>
  </section>
  </div>
  );
};

export default Resources;
