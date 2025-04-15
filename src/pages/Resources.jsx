import React, { useState } from "react";
// import photo album & lightbox
import SocialGallery from "../components/SocialGallergy.jsx";
import { faqDataNL } from "../data/data.js";
// Icons
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import FloatingCTA from "../components/FloatingCTA.jsx";
import { Helmet } from "react-helmet-async";

const Resources = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-10">
      <Helmet>
        <title>Bronnen | Mission Movement</title>
        <meta
          name="description"
          content="Ontdek deskundige begeleiding, trainingsartikelen en bronnen die je voorbereiden op de echte wereld."
        />
        <meta property="og:title" content="Mission Movement Bronnen" />
        <meta
          property="og:description"
          content="Versterk jezelf met zorgvuldig geselecteerde kennis, veelgestelde vragen en tactische inzichten uit het veld."
        />
        <meta
          property="og:image"
          content="https://missionmovement.vercel.app/img/preparewithpurpose.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:url"
          content="https://missionmovement.vercel.app/resources"
        />
      </Helmet>

      {/* Resources */}
      <section className="section flex justify-center items-center bg-hlo bg-center bg-no-repeat bg-cover relative bg-fixed">
        {/* Background Overlay for Better Readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative h-full w-full flex justify-center lg:justify-end items-center pt-20 px-5 lg:px-20">
          <h1 className="text-yellow font-primary text-[35px] md:text-[60px] font-medium uppercase tracking-wider text-center lg:text-right">
            Voorbereiden met een doel.
          </h1>
        </div>
      </section>
      <FloatingCTA />

      {/* FAQ Section */}
      <section className="w-screen px-10 py-20 lg:pt-40 lg:pb-20 flex flex-col justify-center items-center">
        <h1 className="text-yellow font-secondary text-[30px] md:text-[60px] lg:text-[90px] font-light uppercase leading-[120%] tracking-wide">
          Wat je moet weten.
        </h1>
      </section>

      {/* FAQ container */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-20">
        <header className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 tracking-wider text-white">
          {/* FAQ Content */}
          <div className="flex flex-col bg-primary px-4 py-6 md:p-10 rounded-lg shadow-lg">
            <h1 className="h2-teko text-yellow text-center mb-4">
              Geen gedoe, gewoon feiten.
            </h1>

            {/* Added Intro */}
            <p className="text-sm lg:text-base font-thin text-white text-justify mb-6">
              Je staat er niet alleen voor. Dit zijn de vragen die de meeste
              mensen stellen voordat ze zich toewijden aan de Missie. Meer
              weten? Neem gerust contact op — geen verkooppraatjes, alleen de
              feiten.
            </p>

            {faqDataNL.map((faq, index) => (
              <div
                key={index}
                className="md:my-4 my-2 bg-brown rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:bg-opacity-80"
              >
                {/* Clickable Question */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center p-5 text-left text-brown font-medium tracking-wider capitalize bg-primary hover:text-yellow transition duration-300"
                >
                  {faq.vraag}
                  {openIndex === index ? (
                    <FaChevronUp className="text-yellow transition-transform duration-300" />
                  ) : (
                    <FaChevronDown className="text-yellow transition-transform duration-300" />
                  )}
                </button>

                {/* Answer Section (Smoother Expansion) */}
                <div
                  className={`overflow-hidden transition-all duration-700 delay-150 ${
                    openIndex === index
                      ? "max-h-[250px] opacity-100 px-5 pb-5 pt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-white text-sm leading-[160%]">
                    {faq.antwoord}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Matching Image */}
          <div className="relative w-full h-full rounded-lg shadow-lg overflow-hidden">
            <img
              src="/img/toepad120.jpg"
              alt="Training Footage"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
        </header>
      </section>

      {/* ARTICLES's */}
      <section className="w-screen px-10 py-20 lg:pt-40 lg:pb-20 flex flex-col justify-center items-center">
        <h1 className="h1-teko">Artikelen</h1>
      </section>
      {/* Article Container */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Training die Telt",
              summary:
                "Hoe je inspanning omzet in operationele paraatheid. Gestructureerde progressie voor echte prestaties.",
              author: "Justin P",
              date: "05 Apr 2025",
              slug: "training-that-translates",
              pinned: false,
              thumbnail: "/img/blog-thumbnails/training-translates.jpg",
            },
            {
              title: "GPP: Algemene Fysieke Paraatheid",
              summary:
                "Waarom fundamentele kracht belangrijker is dan showoefeningen. Bouw de basis vóór het gevecht.",
              author: "Justin P",
              date: "05 Apr 2025",
              slug: "gpp-general-physical-preparedness",
              pinned: true,
              thumbnail: "/img/blog-thumbnails/gpp.jpg",
            },
            {
              title: "Mentale Weerbaarheid Onder Druk",
              summary:
                "Je stijgt niet tot het moment — je zakt naar het niveau van je training. Laten we dat niveau verhogen.",
              author: "Justin P",
              date: "06 Apr 2025",
              slug: "mental-fortitude-under-fire",
              pinned: false,
              thumbnail: "/img/blog-thumbnails/mental-fortitude.jpg",
            },
            {
              title: "Eet om te Doorstaan",
              summary:
                "Je kunt slechte voeding niet wegtrainen. Bouw een vechtklaar lichaam van binnenuit.",
              author: "Justin P",
              date: "05 Apr 2025",
              slug: "eat-to-endure",
              pinned: false,
              thumbnail: "/img/blog-thumbnails/eat-to-endure.jpg",
            },
          ].map((blog, index) => (
            <div
              key={index}
              className="bg-primary rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={blog.thumbnail}
                alt={blog.title}
                loading="lazy"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h2 className="text-yellow text-lg font-bold uppercase">
                  {blog.title}
                </h2>
                <p className="text-sm italic text-gray-400">
                  by {blog.author} • {blog.date}
                </p>
                <p className="text-white text-sm">{blog.summary}</p>
                <a
                  href={`/blogs/${blog.slug}`}
                  className="inline-block mt-3 bg-yellow text-black font-bold text-sm px-4 py-2 uppercase tracking-wide hover:bg-transparent hover:text-yellow border border-yellow transition-all"
                >
                  Lees meer →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social */}
      <SocialGallery />
      <h2 className="text-yellow text-xl md:text-3xl font-secondary uppercase tracking-widest mb-10 text-center">
        Real People. Real Progress.
      </h2>
      <p className="text-sm text-white italic text-center mb-4">
        See what’s possible when commitment meets the right tools.
      </p>
    </div>
  );
};

export default Resources;
