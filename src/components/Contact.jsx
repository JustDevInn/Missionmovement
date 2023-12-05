import React from "react";

const Contact = () => {
  return (
  <div>
  {/* img hero */}
  <section className="section flex justify-center items-center bg-takethestep bg-center bg-no-repeat bg-cover">
    <div className='h-full w-full flex justify-end items-start pt-20 pr-5 lg:pr-20'>
    </div>
  </section>
  {/* Take the first step */}
    <section className="w-screen flex flex-col justify-center items-center p-10 lg:p-20 py-20">
      <h1 className="text-yellow font-secondary text-[35px] md:text-[80px] uppercase leading-[120%] tracking-wide
       font-extralight mb-10">Take the first step</h1>
      <p className="text-brown font-light uppercase tracking-widest text-xs lg:text-xl text-center">Fill out the form below to take the first steps working towards <br />the future you want.</p>
    </section>
    {/* GET IN TOUCH form*/}
    <section className="w-screen flex justify-center items-center px-10 py-20 lg:py-40">
      <div className="flex flex-col justify-center items-center">
      <h1 className="h1 mb-10 text-center">
        Contact
      </h1>
        {/* form */}
        <form
            action="https://getform.io/f/19890081-7383-4319-832f-c7a6294b1408"
            method="POST"
            className='flex flex-col gap-y-4'>
            <div className='flex gap-x-10'>
            <input
              className="outline=none border-b
              border-b-brown h-[60px] bg-transparent
               font-light w-full pl-3
               placeholder:text-brown text-white"
              type="text"
              name="name"
              placeholder='Your name'/>
            <input
               className="outline=none border-b
              border-b-brown h-[60px] bg-transparent
               font-light w-full pl-3
               placeholder:text-brown text-white"
              type="text"
              name="email"
              placeholder='Email address'
              required
              />
            </div>
            <input
            className="outline=none border-b
              border-b-brown h-[60px] bg-transparent
               font-light w-full pl-3
               placeholder:text-brown text-white"
              type="text"
              name="subject"
              placeholder='Subject'
              required
              />
            <textarea
            className="outline=none border-b
              border-b-brown h-[150px] bg-transparent
               font-light w-full pl-3 text-white
               placeholder:text-brown "
              type="text"
              name="message"
              placeholder='Type your message ...'
              required
              />
              <button
              type="submit" className='btn md:btn-lg mt-[30px] mx-auto
              '>
                Send
              </button>
          </form>
      </div>
    </section>
    </div>
  );
};

export default Contact;
