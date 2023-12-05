import React from "react";

const MobileBanners = () => {
  return (
    <div>
<section className="h-screen w-screen mt-5 mb-2">
  <div className="h-1/2 flex justify-start items-center bg-marsen bg-center bg-no-repeat bg-cover"></div>
    <div className='h-1/2 flex flex-col justify-center items-start w-full px-10'>
      <h2 className='h2-teko text-secondary pb-10'>MILITARY PROGRAM 01: <br />BASIC REQUIREMENTS</h2>
      <p className="text-lg text-white font-light tracking-wider">
      Whether you are looking to join the military, are already in the service or
      looking for a physical and mental push,
            our program is designed to help you meet the physical challenges of the job.
            <br /><br />
            We cover all physical aspects of military service.
      </p>
    </div>
</section>
  <section className="h-screen w-screen my-2">
  <div className="h-1/2 flex justify-start items-center bg-marsof bg-center bg-no-repeat bg-cover"></div>
  <div className='h-1/2 flex flex-col justify-center items-start w-full px-10'>
      <h2 className='h2-teko text-secondary pb-10'>MILITARY PROGRAM 02: <br />FOUNDATIONAL STRENGTH</h2>
      <p className="text-lg text-white font-light tracking-wider">
        Our mission is to help you reach your full potential and achieve your dreams of serving in the military.
        We believe that by providing you with the tools and training you need to succeed,
        we can help you physically and mentally to become the best version of yourself.
      </p>
    </div>
  </section>
  <section className="h-screen w-screen my-2">
  <div className="h-1/2 flex justify-start items-center bg-spelioladder bg-center bg-no-repeat bg-cover"></div>
  <div className='h-1/2 flex flex-col justify-center items-start w-full px-10'>
      <h2 className='h2-teko text-secondary pb-10'>MILITARY PROGRAM 03: <br />SWIM OR SINK</h2>
      <p className="text-lg text-white font-light tracking-wider">
        Continuing your journey in the military, our advanced training program focuses on refining your
        skills and preparing you for the challenges ahead.
        Join us in taking your abilities to the next level.
      </p>
    </div>
  </section>
  <section className="h-screen w-screen my-2">
  <div className="h-1/2 flex justify-start items-center bg-hlo bg-center bg-no-repeat bg-cover"></div>
  <div className='h-1/2 flex flex-col justify-center items-start w-full px-10'>
      <h2 className='h2-teko text-secondary pb-10'>MILITARY PROGRAM 04/05: <br />LEADERSHIP DEVELOPMENT</h2>
      <p className="text-lg text-white font-light tracking-wider">
        Continuing your journey in the military, our advanced training program focuses on refining your
        skills and preparing you for the challenges ahead.
        Join us in taking your abilities to the next level.
      </p>
    </div>
  </section>
  </div>
  );
};

export default MobileBanners;
