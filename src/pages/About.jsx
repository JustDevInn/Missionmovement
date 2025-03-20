import React from "react";
import FloatingCTA from "../components/FloatingCTA";

const About = () => {
  return (
  <div className="">
  {/* The story */}
  <section className="section flex justify-center items-center bg-parajumping bg-bottom bg-no-repeat bg-cover bg-fixed">
    <div className="relative h-full w-full flex justify-center lg:justify-end items-center pt-20 px-5 lg:px-20">
      <h1 className="text-yellow font-primary text-[35px] md:text-[60px] font-medium uppercase tracking-wider text-center lg:text-right">
      The Story
      </h1>
    </div>
  </section>
  <FloatingCTA />
  {/* foundation */}
  <section className="w-screen p-10 py-20 flex flex-col justify-center items-center text-left">
    <h1 className="h1-teko pb-10">Foundations</h1>
    <div className="lg:px-20 pt-5 text-justify">
      <h5 className="mb-5 text-yellow font-secondary text-[25px] md:text-[50px] font-light uppercase leading-[120%] tracking-wide">The story</h5>
      <p className="font-light tracking-wider text-white lg:text-xl">
      With a foundation rooted in a decade of elite service within the <span className="text-yellow">Royal Marine Corps</span>,
      including four years in the esteemed <span className="text-yellow">MARSOC</span> units, Mission Movement brings battle-tested
      expertise to the forefront. Transitioning from military service, our team spent five years spearheading a <span className="text-yellow">personal training </span>
      gym, honing skills in physical conditioning and mental resilience.
      <br /><br />
      As seasoned coaches for nine years, our team amalgamates military precision with coaching finesse, advocating for a <span className="text-yellow">holistic</span> approach to fitness. Embracing mountain climbs, surfing, and gym sessions, we craft a comprehensive fitness experience.
      <br /><br />
      Our primary aim is to sculpt future military operators, equipping them with the essential support and tools needed for their journey. Insights derived from personal experiences underscore the necessity for proper physical preparation, particularly in demanding roles like special forces.
      <br /><br />
      <span className="text-yellow">At Mission Movement</span>, our focus prioritises sculpting resilient individuals for safe, enduring careers, empowering them to shape their future in the military forces.
      </p>
    </div>
  </section>
  {/* image */}
  <section className="h-[250px] md:h-[450px] w-screen bg-fixed
  bg-heigendhert bg-bottom bg-no-repeat bg-cover">
  </section>
  
  {/* Mission & values */}
<section className="w-screen md:p-10 lg:px-20 flex flex-col justify-center items-center">
  <h1 className="h1-teko py-20">Mission & Values</h1>

  {/* Mission & Core Values Container */}
  <div className="flex flex-col md:flex-row w-full gap-10 text-justify">
    
    {/* Mission (1/3 width) */}
    <div className="w-full md:w-1/3 p-10">
      <h5 className="font-secondary text-yellow uppercase text-2xl mb-2">Mission:</h5>
      <p className="font-light tracking-wider text-white lg:text-xl">
        At Mission Movement, our mission is clear: to sculpt future military operators by providing the necessary support and tools for their journey. We're committed to empowering individuals with the resilience
        and readiness required to excel in elite forces, ensuring safe, enduring careers.
      </p>
    </div>

    {/* Core Values (2/3 width) */}
    <div className="w-full md:w-2/3 p-10">
      <h5 className="font-secondary text-yellow text-2xl mb-2">Core Values:</h5>
      <div className="font-light tracking-wider text-white lg:text-xl">
        
        <p className="mb-3">
          <span className="text-brown uppercase font-secondary">Discipline:</span>
          We embody structured training, fostering mental resilience and cultivating habits crucial for military preparedness. It's about adherence to a rigorous regimen that breeds excellence in every
          aspect of preparation.
        </p>
        
        <p className="mb-3">
          <span className="text-brown uppercase font-secondary">Commitment:</span>
          Our dedication extends beyond training; it signifies resilience amid challenges, staying devoted to the journey toward elite forces, and fostering a growth-oriented mindset.
        </p>
        
        <p className="mb-3">
          <span className="text-brown uppercase font-secondary">Determination:</span>
          We believe in an unwavering spirit to overcome obstacles, relentless pursuit of goals, and the courage to push boundaries. It signifies a mindset that fuels perseverance,
          essential for success in demanding roles.
        </p>

        <p>
          These core values anchor our coaching philosophy, fostering a holistic and enduring approach to preparing individuals for elite forces. At Mission Movement,
          our dedication lies in sculpting resilient individuals with the mindset and capabilities to excel in demanding roles.
        </p>

      </div>
    </div>

  </div>
</section>


    {/* image */}
    <section className="h-[250px] md:h-[450px] w-screen
  bg-friscatnight bg-center bg-no-repeat bg-cover bg-fixed">
  </section>
  </div>
  );
};

export default About;
