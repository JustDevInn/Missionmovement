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
    {/* Resources */}
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
          <h5 className="uppercase leading-[120%] font-medium underline cursor-pointer">What can I do if I don't meet the eligibility requirements to join?</h5>
        <p className="font-thin leading-[120%]">
          An area to run, basic equipment like a barbell or dumbbells (these can be swapped with anything, as long as it gives a constant resistant over the axis. Aka; bands do not work.). Access to a swimming location. Preferable a climbing rope, but this can also be substituted by a tower and a pull up bar.
        </p>
        </div>
        <div className="my-4">
          <h5 className="uppercase leading-[120%] font-medium underline cursor-pointer">Can I get a refund after purchase?</h5>
          <p className="font-thin leading-[120%]">Once paid, the payment is not refundable under any circumstance</p>
        </div>
        <div className="my-4">
          <h5 className="uppercase leading-[120%] font-medium underline cursor-pointer">How does the remote coaching work?</h5>
          <p className="font-thin leading-[120%]">Through online coaching, you have the opportunity to send us daily inquiries about your training. To maximise the benefits of online coaching, we strongly encourage our clie possible. The concept behind this approach is that the more you comprehend your actions and goals, the better the outcomes will be. It is recommended to submit video recordings to ensure correct form and alignment, as incorrect positioning during exercises may hinder desired results. Therefore, we encourage everyone to record their initial training sessions for form and technique evaluations. Please remain open to resubmitting your work until it meets the required standards.
          </p>
        </div>
        <div className="my-4">
          <h5 className="uppercase leading-[120%] font-medium underline cursor-pointer">How many hours per week is the program?</h5>
          <p className="font-thin leading-[120%]">The program demands you to train for at least 2 hours per day. This is excluding preparation travel time to a gym/pool/running location.</p>
        </div>
      </div>
{/* program overview */}
      <div className="flex flex-col justify-end items-start">
        <div className="mt-10 mb-4">
          <h5 className="uppercase leading-[120%] font-medium underline cursor-pointer">What is the process like when I enrol in the program?</h5>
          <p className="font-thin leading-[120%]">Once you make a purchase, you will promptly receive a welcome letter with in dept information about the program. Shortly after you will gain access to a link were you'll be able to download the program from.</p>
        </div>
        <div className="my-4">
          <h5 className="uppercase leading-[120%] font-medium underline cursor-pointer">What do I receive when enrolling in the program?</h5>
          <p className="font-thin leading-[120%]">You'll receive the program itself which has 5 sub categories of bundles categories. Each as important. You'll receive the training program on easy to print material, prepared for you to make following the program and taking notes convenient.</p>
        </div>
        <div className="my-4">
          <h5 className="uppercase leading-[120%] font-medium underline cursor-pointer">What equipment do I need for the program?</h5>
          <p className="font-thin leading-[120%]">An area to run, basic equipment like a barbell or dumbbells (these can be swapped with anything, as long as it gives a constant resistant over the axis. Aka; bands do not work.). Access to a swimming location. Preferable a climbing rope, but this can also be substituted by a tower and a pull up bar.
        </p>
        </div>
        <div className="my-4">
          <h5 className="uppercase leading-[120%] font-medium underline cursor-pointer">I'm not sure if im ready for the program.</h5>
          <p className="font-thin leading-[120%]">You have to walk the walk in order to become part of the elite or special forces. It's perfectly normal to not feel ready because one can only prepare their body and mind to be. It requires training. If you feel you're at a too low level at this moment to start the program, feel free to open up the contact page and send us a message. We provide customised online programming and coaching as well.</p>
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
    <h1 className="h1-teko py-20 lg:py-40">
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
  onClick={(index) => {
    setIndex(index);
  }}
  layout="rows"
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
     {/* btn */}
     <motion.div
      variants={fadeIn('up')}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.2}}
    className='flex justify-center'>
      <button className='btn btn-lg'>
        ISTAGRAM
      </button>
    </motion.div>
  </section>
  </div>
  );
};

export default Resources;
