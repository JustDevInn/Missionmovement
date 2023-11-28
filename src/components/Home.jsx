import React from "react";

const Home = () => {
  return (
    <div>
    {/* Hero */}
    <section className="section flex justify-center items-center bg-royalmarine bg-bottom bg-no-repeat bg-cover">
    <div className='w-full flex flex-col justify-center items-start pl-10 lg:pl-20'>
      <h1 className='h1 mb-2'>Join the elite foces</h1>
      <p className="text-white tracking-widest md:text-[30px]">Empowering excellence. <br />
        Your Mission Begins.</p>
        <a href="/" className="text-yellow tracking-widest md:text-[20px] uppercase mt-10 md:mt-20 hover:underline">
        Explore oportunities →</a>
    </div>
    </section>
{/* Program button */}
    <section className='semisection flex justify-center items-center'>
      <button className='btn md:btn-lg'>program</button>
    </section>
{/* Home sections */}
{/* commandos */}
    <section>

      <div className="md:h-[400px] lg:h-[500px] w-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-barret bg-bottom bg-cover md:h-full h-[450px]"></div>
        <div className="w-full md:w-1/2 px-10 md:px-20 py-20 flex flex-col justify-center items-start text-left">
          <h2 className="h2-teko">About mission movement</h2>
          <p className="text-white font-light tracking-widee">
            At Mission Movement, we're dedicated to sculpting the elite. Our coaching and training programs are meticulously
            designed to prepare you for the challenges of special military forces. We value efficiency and excellence, ensuring your
            time is maximised and your readiness unparalleled.
          </p>
          <div className="w-full flex justify-center md:justify-start">
          <button className="btn md:btn-lg my-5">about</button>
          </div>
        </div>

        

      </div>

    </section>

    </div>
  );
};

export default Home;
