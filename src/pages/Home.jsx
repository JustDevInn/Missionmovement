import React from "react";
import { Link } from "react-router-dom";
import FloatingCTA from "../components/FloatingCTA";
import { useInView } from "../Hooks/useGlowEffect";

const Home = () => {
  const { ref, isVisible } = useInView();

  return (
    <div className="">
      {/* Hero */}
      <header
        className="section flex justify-center items-center bg-royalmarine bg-bottom bg-no-repeat bg-cover relative"
        role="img"
        aria-label="Royal Marine in action"
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center px-5 lg:px-0">
          <h1 className="h1 mb-4 transition-opacity duration-700 ease-in-out opacity-100">
            Join the Elite Forces
          </h1>

          <div className="flex flex-col-reverse md:flex-row items-center gap-4 mt-6">
            <Link
              to="/program"
              role="button"
              className="text-yellow tracking-widest lowercase text-lg md:text-xl hover:underline"
            >
              Explore Opportunities
            </Link>
            <Link to="/program">
              <button className="btn py-4 px-8 h-[60px] min-w-[200px] flex items-center justify-center uppercase font-bold tracking-widest bg-yellow text-black hover:bg-transparent hover:text-yellow border border-yellow duration-300 text-xl">
                Join Now
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Program tagline */}
      <section className="semisection flex justify-center items-center p-10">
        <p className="font-secondary text-brown tracking-widest text-[25px] md:text-[40px]">
          Empowering excellence. Your Mission Begins.
        </p>
      </section>

      <main>
        {/* About Mission Movement */}
        <article
          id="about"
          className="lg:h-[500px] w-screen flex flex-col lg:flex-row relative"
        >
          <div
            className="order-first lg:order-last w-full lg:w-1/2 bg-fixed bg-barret bg-bottom bg-cover lg:h-full h-[450px]"
            role="img"
            aria-label="Military barret background image"
          ></div>

          <div className="w-full lg:w-1/2 px-10 lg:px-20 py-20 flex flex-col justify-center items-start text-left relative">
            <h2 className="h2-teko mb-5">About mission movement</h2>
            <p className="text-white text-lg font-thin tracking-wider text-justify">
              At Mission Movement, we're dedicated to sculpting the elite. Our
              coaching and training programs are meticulously designed to
              prepare you for the challenges of special military forces. We
              value efficiency and excellence, ensuring your time is maximised
              and your readiness unparalleled.
            </p>
            <div className="w-full flex justify-start">
              <Link to="about">
                <button className="btn md:btn-lg my-5">about</button>
              </Link>
            </div>
          </div>
        </article>

        {/* Our Program */}
        <article
          id="programs"
          className="lg:h-[500px] w-screen flex flex-col lg:flex-row"
        >
          <div
            className="order-first lg:order-first w-full lg:w-1/2 bg-fixed bg-marsof bg-bottom bg-cover lg:h-full h-[450px]"
            role="img"
            aria-label="Marsof background image"
          ></div>

          <div className="w-full lg:w-1/2 px-10 lg:px-20 py-20 flex flex-col justify-center items-start text-left">
            <h2 className="h2-teko mb-5">Our Programs</h2>
            <p className="text-white text-lg font-thin tracking-wider text-justify">
              Experience an immersive journey toward elite forces. <br />
              Our 6-week coaching program covers every facet, from physical
              fitness to mental resilience. Step into a rigorous curriculum
              tailored to equip you with the skills and mindset for success.
            </p>
          </div>
        </article>

        {/* Success Stories */}
        <article
          id="success"
          className="lg:h-[500px] w-screen flex flex-col lg:flex-row"
        >
          <div
            className="order-first lg:order-last w-full lg:w-1/2 bg-fixed bg-boatgroup bg-bottom bg-cover lg:h-full h-[450px]"
            role="img"
            aria-label="Group in military boat during mission"
          ></div>

          <div className="w-full lg:w-1/2 px-10 lg:px-20 py-20 flex flex-col justify-center items-start text-left">
            <h2 className="h2-teko mb-5">Success Stories</h2>
            <p className="text-white text-lg font-thin tracking-wider text-justify">
              Discover firsthand experiences from individuals who've transformed
              their lives with Mission Movement. Hear their stories,
              achievements, and the impact our programs had on their journey to
              elite forces.
            </p>
          </div>
        </article>

        {/* Floating CTA placed after context */}
        <FloatingCTA />

        {/* Final CTA: Ready to Rise */}
        <section className="h-[350px] md:h-[600px] w-screen flex justify-center items-center px-10">
          <div className="w-full flex flex-col justify-center items-center">
            <h2
              ref={ref}
              className={`h1-teko text-brown text-[40px] md:text-[70px] mb-2 text-center transition-all duration-700 ease-in-out ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              Ready to rise?
            </h2>
            <p className="text-white font-light tracking-wider md:text-[20px] text-center">
              Begin your path to the elite.
              <br />
              <br />
              Join Mission Movement's program and embark on a transformative
              journey. <br />
              Dare to achieve greatness.
            </p>
            <Link to="/program">
              <button className="btn lg:btn-lg my-7 md:my-10">enrol</button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
