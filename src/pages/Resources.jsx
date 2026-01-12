import React, { useState } from "react";
// import photo album & lightbox
import SocialGallery from "../components/SocialGallergy.jsx";
import { faqDataNL } from "../data/data.js";
// Icons
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
          <h1 className="font-display text-mmAccent text-[35px] md:text-[60px] uppercase tracking-widest text-center lg:text-right">
            Voorbereiden met een doel
          </h1>
        </div>
      </section>
      <FloatingCTA />

      {/* FAQ Section */}
      <section className="w-screen px-10 py-20 lg:pt-40 lg:pb-20 flex flex-col justify-center items-center">
        <h1 className="mm-h1 text-mmText">
          Wat je moet weten.
        </h1>
      </section>

      {/* FAQ container */}
      <section className="px-4 md:px-10 max-w-5xl mx-auto py-16 space-y-4 border-t border-mmBorder">
        <h2 className="mm-h2 text-mmText mb-6">
          Veelgestelde Vragen
        </h2>

        {faqDataNL.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`border border-mmBorder rounded-2xl transition-all duration-300 ${
                isOpen ? "bg-mmSurface border-mmAccent" : "bg-mmSurface"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <span className="text-mmAccent font-display text-base md:text-lg tracking-widest uppercase">
                  {faq.vraag}
                </span>
                <span className="text-mmAccent text-xl">{isOpen ? "−" : "+"}</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-[1000px] py-4 px-6" : "max-h-0"
                }`}
              >
                <p className="whitespace-pre-line text-mmTextMuted leading-relaxed text-base md:text-lg">
                  {faq.antwoord}
                </p>
              </div>
            </div>
          );
        })}
      </section>

      {/* ARTICLES's */}
      <section className="w-screen px-10 py-20 lg:pt-40 lg:pb-20 flex flex-col justify-center items-center">
        <h1 className="mm-h1 text-mmText">Artikelen</h1>
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
                "Je stijgt niet tot het moment. Je zakt naar het niveau van je training. Laten we dat niveau verhogen.",
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
              className="bg-mmSurface border border-mmBorder rounded-2xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={blog.thumbnail}
                alt={blog.title}
                loading="lazy"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h2 className="text-mmText text-lg font-display uppercase tracking-widest">
                  {blog.title}
                </h2>
                <p className="italic text-mmTextMuted text-base md:text-lg">
                  by {blog.author} • {blog.date}
                </p>
                <p className="text-mmTextMuted text-base md:text-lg">{blog.summary}</p>
                <a
                  href={`/blogs/${blog.slug}`}
                  className="inline-block mt-3 mm-btnPrimary text-sm"
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
      <h2 className="mm-h2 text-mmText mb-10 text-center">
        Echte mensen. Echte progressie.
      </h2>
    </div>
  );
};

export default Resources;
