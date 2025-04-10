import React, { useState } from "react";
import FloatingCTA from "../components/FloatingCTA";
import Spinner from "../components/Spinner";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true); // Just show spinner while submitting
  };

  return (
    <div className="pt-10">
      <Helmet>
        <title>Contact | Mission Movement</title>
        <meta
          name="description"
          content="Reach out to Mission Movement. Ask questions, get support, and take the first step toward elite-level preparation."
        />
        <meta property="og:title" content="Contact Mission Movement" />
        <meta
          property="og:description"
          content="Report in. We’re here to support your mission."
        />
        <meta
          property="og:image"
          content="https://missionmovement.vercel.app/img/contactus.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:url"
          content="https://missionmovement.vercel.app/contact"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="section flex justify-center items-center bg-takethestep bg-center bg-no-repeat bg-cover relative bg-fixed">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 w-full flex justify-center items-center pt-20 px-5 lg:px-20">
          <h1 className="text-yellow font-primary text-[35px] md:text-[60px] font-medium uppercase tracking-wider text-center">
            Report In
          </h1>
        </div>
      </section>

      <FloatingCTA />

      {/* Step Section */}
      <section className="w-full px-5 sm:px-10 lg:px-20 py-20 flex flex-col justify-center items-center">
        <h1 className="text-yellow font-secondary text-[35px] md:text-[70px] uppercase leading-[120%] tracking-wide font-extralight mb-6 text-center">
          This Is the First Move
        </h1>
        <p className="text-brown font-light uppercase tracking-widest text-sm md:text-lg text-center max-w-2xl">
          Ready to step up? Drop your details — we’ll take it from there.
        </p>
      </section>

      {/* Contact Form */}
      <section className="w-full px-5 py-20 lg:py-32 flex justify-center items-center">
        <div className="w-full max-w-2xl bg-primary p-6 md:p-10 rounded-xl shadow-lg animate-fade-in">
          <h2 className="h2-teko text-yellow text-center mb-10">
            Send Your Signal
          </h2>

          <form
            action="https://getform.io/f/19890081-7383-4319-832f-c7a6294b1408"
            method="POST"
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-6"
            autoComplete="off"
          >
            {/* Name & Email */}
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="bg-transparent border-b border-b-brown rounded-md h-[50px] outline-none font-light w-full px-3 placeholder:text-brown text-white focus:border-yellow focus:ring-1 focus:ring-yellow transition duration-200 autofill:!bg-black autofill:!text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
                className="bg-transparent border-b border-b-brown rounded-md h-[50px] outline-none font-light w-full px-3 placeholder:text-brown text-white focus:border-yellow focus:ring-1 focus:ring-yellow transition duration-200 autofill:!bg-black autofill:!text-white"
              />
            </div>

            {/* Subject */}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="bg-transparent border-b border-b-brown rounded-md h-[50px] outline-none font-light w-full px-3 placeholder:text-brown text-white focus:border-yellow focus:ring-1 focus:ring-yellow transition duration-200 autofill:!bg-black autofill:!text-white"
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Type your message..."
              required
              className="bg-transparent border-b border-b-brown rounded-md h-[150px] outline-none font-light w-full px-3 placeholder:text-brown text-white focus:border-yellow focus:ring-1 focus:ring-yellow transition duration-200 resize-none autofill:!bg-black autofill:!text-white"
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn md:btn-lg mx-auto my-[15px] flex items-center justify-center gap-2 disabled:opacity-50 relative overflow-hidden"
            >
              {loading ? (
                <div className="w-6 h-6 flex items-center justify-center">
                  <Spinner />
                </div>
              ) : (
                "Send"
              )}
            </button>
          </form>

          <p className="text-center text-xs text-gray-500 mt-6">
            No spam. No automation. Just a real response from our team.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
