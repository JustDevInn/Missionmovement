import React from "react";
import { Link } from "react-router-dom";
import FloatingCTA from "../components/FloatingCTA";

const About = () => {
  return (
    <div className="pt-10">
      {/* Hero Section: The Story */}
      <section
        className="relative section flex justify-center items-center bg-parajumping bg-bottom bg-no-repeat bg-cover"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 h-full w-full flex justify-center lg:justify-end items-center pt-32 px-5 lg:px-20">
          <div className="text-center lg:text-right">
            <h1 className="text-yellow font-primary text-[35px] md:text-[60px] font-medium uppercase tracking-wider">
              The Story
            </h1>
            <p className="text-white mt-2 font-secondary text-sm md:text-base tracking-widest">
              Behind every mission is a reason.
            </p>
          </div>
        </div>
      </section>

      <FloatingCTA />

      {/* Foundations Section */}
      <section className="w-full px-5 sm:px-10 lg:px-20 py-20 flex flex-col justify-center items-center text-left">
        <h1 className="h1-teko pb-10">Foundations</h1>
        <div className="max-w-5xl pt-5 text-justify">
          <h5 className="mb-5 text-yellow font-secondary text-[25px] md:text-[50px] font-light uppercase leading-[120%] tracking-wide">
            The story
          </h5>
          <p className="font-light tracking-wider text-white lg:text-xl leading-relaxed">
            With a foundation rooted in a decade of elite service within the{" "}
            <span className="text-yellow">Royal Marine Corps</span>, including
            four years in the esteemed{" "}
            <span className="text-yellow">MARSOC</span> units, Mission Movement
            brings battle-tested expertise to the forefront. Transitioning from
            military service, our team spent five years spearheading a{" "}
            <span className="text-yellow">personal training</span> gym, honing
            skills in physical conditioning and mental resilience.
            <br />
            <br />
            As seasoned coaches for nine years, our team amalgamates military
            precision with coaching finesse, advocating for a{" "}
            <span className="text-yellow">holistic</span> approach to fitness.
            Embracing mountain climbs, surfing, and gym sessions, we craft a
            comprehensive fitness experience.
            <br />
            <br />
            Our primary aim is to sculpt future military operators, equipping
            them with the essential support and tools needed for their journey.
            Insights derived from personal experiences underscore the necessity
            for proper physical preparation, particularly in demanding roles
            like special forces.
            <br />
            <br />
            <span className="text-yellow">At Mission Movement</span>, our focus
            prioritises sculpting resilient individuals for safe, enduring
            careers, empowering them to shape their future in the military
            forces.
          </p>
        </div>
      </section>

      {/* Inspirational Quote Divider */}
      <section className="relative bg-fixed bg-cover bg-center bg-heigendhert h-[300px] flex items-center justify-center">
        <div className="bg-black/60 p-6 rounded text-yellow text-center max-w-3xl">
          <h2 className="text-xl md:text-3xl font-secondary italic">
            “Discipline is the bridge between goals and accomplishment.”
          </h2>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="w-full px-5 sm:px-10 lg:px-20 py-20 flex flex-col justify-center items-center">
        <h1 className="h1-teko py-10">Mission & Values</h1>
        <div className="flex flex-col md:flex-row w-full max-w-6xl gap-10 text-justify">
          {/* Mission */}
          <div className="w-full md:w-1/3 p-5 bg-primary/10 rounded-xl">
            <h5 className="font-secondary text-yellow uppercase text-[22px] md:text-2xl mb-2">
              Mission:
            </h5>
            <p className="font-light tracking-wider text-white lg:text-xl leading-relaxed">
              At Mission Movement, our mission is clear: to sculpt future
              military operators by providing the necessary support and tools
              for their journey. We're committed to empowering individuals with
              the resilience and readiness required to excel in elite forces,
              ensuring safe, enduring careers.
            </p>
          </div>

          {/* Core Values */}
          <div className="w-full md:w-2/3 p-5 bg-primary/10 rounded-xl">
            <h5 className="font-secondary text-yellow text-[22px] md:text-2xl mb-2">
              Core Values:
            </h5>
            <div className="font-light tracking-wider text-white lg:text-xl space-y-4 leading-relaxed">
              <p>
                <span className="text-brown uppercase font-secondary">
                  Discipline:
                </span>{" "}
                We embody structured training, fostering mental resilience and
                cultivating habits crucial for military preparedness.
              </p>
              <p>
                <span className="text-brown uppercase font-secondary">
                  Commitment:
                </span>{" "}
                Our dedication extends beyond training; it signifies resilience
                amid challenges, staying devoted to the journey toward elite
                forces.
              </p>
              <p>
                <span className="text-brown uppercase font-secondary">
                  Determination:
                </span>{" "}
                We believe in an unwavering spirit to overcome obstacles, pursue
                goals, and push boundaries. This mindset fuels perseverance.
              </p>
              <p>
                These core values anchor our coaching philosophy, fostering a
                holistic and enduring approach to elite preparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Ending Section */}
      <section className="w-full py-20 text-center px-5 flex flex-col justify-center items-center">
        <h2 className="h2-teko text-yellow mb-5">Think you're ready?</h2>
        <p className="text-white font-light max-w-2xl mx-auto mb-8">
          Take the first step towards your transformation. Whether you're
          preparing for special forces or seeking personal growth, we’ve got the
          tools to guide your mission.
        </p>
        <Link to="/program">
          <button className="btn btn-lg min-w-[300px]">
            Explore the Program
          </button>
        </Link>
      </section>

      {/* Background Divider Image */}
      <section
        className="h-[250px] md:h-[450px] w-full bg-fixed bg-friscatnight bg-center bg-no-repeat bg-cover"
        aria-hidden="true"
      ></section>
    </div>
  );
};

export default About;
