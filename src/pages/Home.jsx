import React from "react";
import { Link } from "react-router-dom";
import FloatingCTA from "../components/FloatingCTA";
import { useInView } from "../Hooks/useGlowEffect";
import QuoteBlock from "../components/QuoteBlock";
import VideoPreview from "../components/VideoPreview";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const { ref, isVisible } = useInView();

  const coreValues = [
    "Discipline",
    "Brotherhood",
    "Purpose",
    "Honor",
    "Structure",
  ];

  return (
    <div className="pt-20 md:pt-0">
      <Helmet>
        <title>Mission Movement | Elite Military Prep Training</title>
        <meta
          name="description"
          content="Train with structure, discipline, and purpose. Mission Movement prepares you for the world of elite forces — physically, mentally, and emotionally."
        />
        <meta property="og:title" content="Mission Movement" />
        <meta
          property="og:description"
          content="A complete system to forge your body, sharpen your mind, and prepare for the life few dare to lead."
        />
        <meta
          property="og:image"
          content="https://missionmovement.vercel.app/img/milprepcourse.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://missionmovement.vercel.app" />
      </Helmet>

      {/* Hero */}
      <header
        className="section flex justify-center items-center bg-royalmarine bg-bottom bg-no-repeat bg-cover relative "
        role="img"
        aria-label="Royal Marine in action"
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center px-5 lg:px-0">
          <h1 className="h1 mb-4 text-yellow font-bold uppercase tracking-wider">
            Military Preparation Course
          </h1>
          <p className="text-gray-300 font-light text-lg md:text-xl max-w-xl">
            A complete 6-week system to prepare your body, sharpen your mind,
            and earn your place.
          </p>

          <div className="flex flex-col-reverse md:flex-row items-center gap-4 mt-6">
            <Link
              to="/program"
              role="button"
              className="text-yellow tracking-widest lowercase text-lg md:text-xl hover:underline"
            >
              Explore the program
            </Link>
            <Link to="/pricing">
              <button className="btn py-4 px-8 h-[60px] min-w-[200px] flex items-center justify-center uppercase font-bold tracking-widest bg-yellow text-black hover:bg-transparent hover:text-yellow border border-yellow duration-300 text-xl">
                Enlist Now
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Core Values Strip */}
      <section className="bg-[#121212] py-4 border-t border-b border-yellow w-full text-center">
        <div className="text-brown font-secondary tracking-widest uppercase text-xs md:text-sm flex flex-wrap justify-center gap-4 px-4">
          {coreValues.map((value, index) => (
            <React.Fragment key={index}>
              <span className="px-1 hover:text-yellow transition duration-200">
                {value}
              </span>

              {index < coreValues.length - 1 && (
                <span className="text-yellow">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      <section className="w-full bg-[#101010] py-20 px-6 md:px-20 flex flex-col items-center">
        <h2 className="text-yellow text-2xl md:text-4xl font-secondary uppercase tracking-widest text-center mb-12 border-b border-yellow pb-4 w-full max-w-4xl">
          What You Get
        </h2>

        <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl text-white font-light text-sm md:text-base">
          {/* Left Column - What You’ll Get */}
          <div className="space-y-4 bg-[#121212] rounded-lg p-6 border border-yellow/20 shadow-md">
            <h3 className="text-yellow font-semibold uppercase tracking-wider mb-2">
              You’ll Get:
            </h3>
            <ul className="list-none space-y-2">
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span>A complete weekly
                schedule covering strength, conditioning, mobility, and mental
                toughness
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span>
                Swimming & water confidence drills to match special forces
                standards
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span>A video library to
                ensure perfect technique and execution
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span>A progress tracker to
                measure performance and growth
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span>
                Support through structured check-ins and weekly reflection
                prompts
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span>
                Built by a former Royal Marine — this isn’t theory. It’s what
                works.
              </li>
            </ul>
          </div>

          {/* Right Column - What You’ll Walk Away With */}
          <div className="space-y-4 bg-[#121212] rounded-lg p-6 border border-yellow/20 shadow-md">
            <h3 className="text-yellow font-semibold uppercase tracking-wider mb-2">
              What You’ll Walk Away With:
            </h3>
            <ul className="list-none space-y-2">
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span>
                Physical and mental resilience that sets you apart from the
                average civilian
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span>A hardened mindset
                forged through structure, suffering, and purpose
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span>
                Deep-rooted confidence — because you know you’ve earned it
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span>A life of discipline,
                adrenaline, and challenge few ever dare to pursue
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span>A brotherhood and
                bond that lasts beyond the program — this is about belonging
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-yellow mt-1">•</span>
                Clarity, direction, and a sense of identity few will ever
                understand
              </li>
            </ul>
          </div>
        </div>
        {/* CTA */}
        <div className="mt-16">
          <a
            href="/pricing"
            className="text-yellow text-sm md:text-base font-semibold tracking-wide hover:underline transition"
          >
            Ready to start? Purchase the course now →
          </a>
        </div>
      </section>

      {/* <section className="semisection flex justify-center items-center px-10 py-20 md:py-14">
        <p className="font-secondary text-brown tracking-widest text-[25px] md:text-[40px] text-center leading-snug">
          — not for everyone, <br className="md:hidden" /> but for those willing
          to earn it.
        </p>
      </section>


      <section className="flex flex-col items-center justify-center px-6 md:px-10 text-center space-y-6 pb-10">
        <h3 className="text-yellow font-secondary text-sm md:text-base tracking-widest uppercase">
          This is not fitness. This is preparation.
        </h3>

        <p className="text-white font-light text-base md:text-lg max-w-3xl text-justify leading-relaxed">
          This isn’t just training — it’s entry into a world few will ever
          experience.
          <br className="hidden md:block" />
          A life driven by adrenaline, forged by discipline, and bound by
          unbreakable loyalty.
          <br className="hidden md:block" />
          Most will never feel what it’s like to earn a place in something
          greater. You can.
        </p>
      </section> */}

      <main>
        {/* About Mission Movement */}
        <article
          id="about"
          className="lg:h-[500px] w-screen flex flex-col lg:flex-row relative pt-10 md:pt-24"
        >
          <div
            className="order-first lg:order-last w-full lg:w-1/2 bg-fixed bg-barret bg-bottom bg-cover lg:h-full h-[450px]"
            role="img"
            aria-label="Military barret background image"
          ></div>

          <div className="w-full lg:w-1/2 px-10 lg:px-20 py-20 flex flex-col justify-center items-start text-left relative">
            <h2 className="h2-teko mb-5">About mission movement</h2>
            <p className="text-white text-lg font-thin tracking-wider text-justify">
              We don’t just train — we transform. Mission Movement prepares you
              for a life of purpose, pressure, and elite performance. This is
              your entry into a world of structure, grit, and unbreakable
              brotherhood. Civilian life ends here. Your mission begins.
            </p>
            <div className="w-full flex justify-start">
              <Link to="about">
                <button className="btn md:btn-lg my-5">More..</button>
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
            <h2 className="h2-teko mb-5">Our Program</h2>
            <p className="text-white text-lg font-thin tracking-wider text-justify">
              Step into a 6-week transformation designed for elite readiness —
              military or beyond.
              <br />
              Our 6-week coaching program covers every facet, from physical
              fitness to mental resilience. Step into a rigorous curriculum
              tailored to equip you with the skills and mindset for success.
            </p>
            <div className="w-full flex justify-start">
              <Link to="program">
                <button className="btn md:btn-lg my-5">Program</button>
              </Link>
            </div>
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
            <h2 className="h2-teko mb-5">Those Who’ve Earned It</h2>
            <p className="text-white text-lg font-thin tracking-wider text-justify">
              Discover firsthand experiences from individuals who've transformed
              their lives with Mission Movement. Hear their stories,
              achievements, and the impact our programs had on their journey to
              elite forces.
            </p>
          </div>
        </article>

        {/* Inspirational Quote */}
        <QuoteBlock
          quote="You don’t rise to the level of your goals. You fall to the level of your training"
          author="Mission Movement"
        />

        {/* Video Preview Section */}
        <section className="py-16 px-4 md:px-10 lg:px-20 flex justify-center items-center bg-[#0f0f0f] border-t border-yellow">
          <VideoPreview videoId="YHffzTVE_9Q" />
        </section>

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
              This Is the Path. Choose to Walk It.
            </h2>
            <p className="text-white font-light tracking-wider md:text-[20px] text-center">
              This isn’t just training. <br />
              It’s the gateway to a life of adrenaline, purpose, and unshakable
              bonds. <br />
              Few get to live this. Fewer still earn it.
            </p>

            <Link to="/pricing">
              <button className="btn lg:btn-lg my-7 md:my-10">enrol</button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
