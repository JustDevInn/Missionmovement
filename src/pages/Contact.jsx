import React from "react";
import FloatingCTA from "../components/FloatingCTA";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="section flex justify-center items-center bg-takethestep bg-center bg-no-repeat bg-cover relative bg-fixed">
        <div className="absolute inset-0 bg-black/50"></div> {/* Subtle dark overlay */}
        <div className="relative z-10 w-full flex justify-end items-start pt-20 pr-5 lg:pr-20">
          <h1 className="text-yellow font-primary text-[35px] md:text-[60px] font-medium uppercase tracking-wider text-center lg:text-right">
            Contact Us
          </h1>
        </div>
      </section>
      <FloatingCTA />
      {/* Take the First Step Section */}
      <section className="w-screen flex flex-col justify-center items-center px-10 lg:px-20 py-20">
        <h1 className="text-yellow font-secondary text-[35px] md:text-[80px] uppercase leading-[120%] tracking-wide font-extralight mb-8 text-center">
          Take the First Step
        </h1>
        <p className="text-brown font-light uppercase tracking-widest text-sm lg:text-lg text-center max-w-2xl">
          Fill out the form below to start your journey toward the future you want.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="w-screen flex justify-center items-center px-5 py-20 lg:py-40">
        <div className="flex flex-col justify-center items-center w-full max-w-2xl">
          <h1 className="h1 mb-10 text-center">Get in Touch</h1>

          {/* Form */}
          <form
            action="https://getform.io/f/19890081-7383-4319-832f-c7a6294b1408"
            method="POST"
            className="flex flex-col w-full gap-y-6 bg-primary p-6 md:p-10 rounded-lg shadow-lg"
          >
            {/* Name & Email */}
            <div className="flex flex-col md:flex-row gap-6">
              <input
                className="bg-transparent border-b border-b-brown h-[50px] outline-none font-light w-full px-3 placeholder:text-brown text-white focus:border-yellow transition"
                type="text"
                name="name"
                placeholder="Your name"
              />
              <input
                className="bg-transparent border-b border-b-brown h-[50px] outline-none font-light w-full px-3 placeholder:text-brown text-white focus:border-yellow transition"
                type="email"
                name="email"
                placeholder="Email address"
                required
              />
            </div>

            {/* Subject */}
            <input
              className="bg-transparent border-b border-b-brown h-[50px] outline-none font-light w-full px-3 placeholder:text-brown text-white focus:border-yellow transition"
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />

            {/* Message */}
            <textarea
              className="bg-transparent border-b border-b-brown h-[150px] outline-none font-light w-full px-3 placeholder:text-brown text-white focus:border-yellow transition"
              name="message"
              placeholder="Type your message..."
              required
            />

            {/* Submit Button */}
            <button type="submit" className="btn md:btn-lg mx-auto mt-[30px]">
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;

