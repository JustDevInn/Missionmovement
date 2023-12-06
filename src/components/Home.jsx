import React from "react";
// linking
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
    {/* Hero */}
  <section className="section flex justify-center items-center bg-royalmarine bg-bottom bg-no-repeat bg-cover">
    <div className='w-full flex flex-col justify-center items-start pl-10 lg:pl-20'>
      <h1 className='h1 mb-2'>Join the elite foces</h1>
      <p className="text-white tracking-widest text-[25px] md:text-[40px]">Empowering excellence. <br />
        Your Mission Begins.</p>
    <Link className="mt-5 md:mt-10" to="/program">
        <p className="text-yellow tracking-widest md:text-[20px] uppercase hover:underline">
          Explore oportunities →
        </p>
    </Link>
    </div>
  </section>
{/* Program button */}
    <section className='semisection flex justify-center items-center'>
    <Link to="program">
      <button className='btn md:btn-lg'>program</button>
    </Link>
    </section>
{/* banner section */}
    <section className="">


{/* about mission movement */}
    <div className="lg:h-[500px] w-screen flex flex-col lg:flex-row">
      {/* image */}
      <div className="order-first lg:order-last w-full lg:w-1/2 bg-barret bg-bottom bg-cover lg:h-full h-[450px]"></div>
      {/* text */}
      <div className="w-full lg:w-1/2 px-10 lg:px-20 py-20 flex flex-col justify-center items-start text-left">
          <h2 className="h2-teko mb-5">About mission movement</h2>
          <p className="text-white text-lg font-thin tracking-wider">
            At Mission Movement, we're dedicated to sculpting the elite. Our coaching and training programs are meticulously
            designed to prepare you for the challenges of special military forces. We value efficiency and excellence, ensuring your
            time is maximised and your readiness unparalleled.
          </p>
          <div className="w-full flex justify-start">
          <Link to='about'>
            <button className="btn md:btn-lg my-5">about</button>
          </Link>
          </div>
      </div>
    </div>


{/* our program */}
    <div className="lg:h-[500px] w-screen flex flex-col lg:flex-row">
      {/* image */}
      <div className="order-first lg:order-first w-full lg:w-1/2 bg-marsof bg-bottom bg-cover lg:h-full h-[450px]"></div>
      {/* text */}
      <div className="w-full lg:w-1/2 px-10 lg:px-20 py-20 flex flex-col justify-center items-start text-left">
          <h2 className="h2-teko mb-5">Our Programs</h2>
          <p className="text-white text-lg font-thin tracking-wider">
            Experience an immersive journey toward elite forces. <br></br>Our 6-week coaching program covers every facet, from physical fitness to mental resilience.
            Step into a rigorous curriculum tailored to equip you with the skills and mindset for success.
          </p>
      </div>
    </div>
{/* success stories */}
<div className="lg:h-[500px] w-screen flex flex-col lg:flex-row">
      {/* image */}
      <div className="order-first lg:order-last w-full lg:w-1/2 bg-boatgroup bg-bottom bg-cover lg:h-full h-[450px]"></div>
      {/* text */}
      <div className="w-full lg:w-1/2 px-10 lg:px-20 py-20 flex flex-col justify-center items-start text-left">
          <h2 className="h2-teko mb-5">Success Stories</h2>
          <p className="text-white text-lg font-thin tracking-wider">
            Discover firsthand experiences from individuals who've transformed their lives with Mission Movement.
            Hear their stories, achievements, and the impact our programs had on their journey to elite forces.
          </p>
      </div>
    </div>
    </section>

    {/* Ready to rise? */}
    <section className="h-[350px] md:h-[600px] w-screen flex justify-center items-center px-10">
    <div className='w-full flex flex-col justify-center items-center'>
      <h2 className='h1-teko text-brown text-[40px] md:text-[70px]
      mb-2 text-center'>Ready to rise?</h2>
      <p className="text-white font-light tracking-wider md:text-[20px] text-center">
        Begin your path to the elite.<br></br><br></br>
        Join Mission Movement's program and embark on a transformative journey.<br></br> Dare to achieve greatness.</p>
      <button className="btn lg:btn-lg my-7 md:my-10">enrol</button>
    </div>
  </section>
    </div>
  );
};

export default Home;
