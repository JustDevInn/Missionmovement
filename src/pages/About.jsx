import React from "react";
import { Link } from "react-router-dom";
import FloatingCTA from "../components/FloatingCTA";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="pt-10">
      <Helmet>
        <title>About | Mission Movement</title>
        <meta
          name="description"
          content="Discover the story behind Mission Movement and the journey from elite forces to elite coaching."
        />
        <meta property="og:title" content="About Mission Movement" />
        <meta
          property="og:description"
          content="From the Royal Marines to the modern warrior — this is our story."
        />
        <meta
          property="og:image"
          content="https://missionmovement.vercel.app/img/thestory.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:url"
          content="https://missionmovement.vercel.app/about"
        />
      </Helmet>
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
              Every mission starts with why. This one started with experience
              earned the hard way.
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
            Built on a decade of elite service in the Royal Marine Corps,
            including four years in MARSOC, Mission Movement delivers real-world
            preparation from those who’ve lived it. After leaving the military,
            we ran a private training facility for five years — not just
            training bodies, but building unbreakable mindsets.
            <br />
            <br />
            With nine years of coaching experience, our team blends military
            precision with real-world coaching. Whether it’s preparing for
            military selections, mountain climbs, , or gym sessions— we’ve lived
            every rep we teach.
            <br />
            <br />
            Our mission is simple: prepare future operators. From fitness to
            mindset, we equip you with the tools we wish we had — especially for
            elite units where failure isn’t an option.
            <br />
            <br />
            Mission Movement exists to forge resilient humans — not just for the
            military, but for life. If you’re ready to commit, we’re ready to
            lead.
          </p>
        </div>
      </section>

      {/* Inspirational Quote Divider */}
      <section className="relative bg-fixed bg-cover bg-center bg-heigendhert h-[300px] flex items-center justify-center">
        <div className="bg-black/70 px-6 py-4 border-l-4 border-yellow max-w-4xl">
          <h2 className="text-yellow text-lg md:text-2xl uppercase tracking-widest font-secondary text-center">
            Discipline is the bridge between goals and accomplishment.
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
              Our Mission:
            </h5>
            <p className="font-light tracking-wider text-white lg:text-xl space-y-4 leading-relaxed">
              We're here to sculpt future military operators. That means
              preparing bodies, sharpening minds, and instilling a level of
              discipline most people never reach. If you want to serve — truly
              serve — this is where it begins.
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
                Not motivation. Habit. Structure. Relentless self-respect.
              </p>
              <p>
                <span className="text-brown uppercase font-secondary">
                  Commitment:
                </span>{" "}
                We show up. Every day. Especially when it’s hard.
              </p>
              <p>
                <span className="text-brown uppercase font-secondary">
                  Determination:
                </span>{" "}
                We don’t hope for progress — we fight for it. One rep at a time.
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
        <h2 className="h2-teko text-yellow mb-5">
          You’ve read the story. Now decide your role in it.
        </h2>
        <p className="text-white font-light max-w-2xl mx-auto mb-8">
          Most talk about change. Few do what it takes. Whether you're chasing
          the uniform or your potential, we’ll show you the way — and push you
          through it.
        </p>
        <Link to="/program">
          <button className="btn btn-lg min-w-[300px]">Enrol & Earn It</button>
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
