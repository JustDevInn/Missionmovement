import React from "react";
// import images
import Marsen from '../img/marsenopleiding.jpg'
import Boatgroup from '../img/Bootgroup_carry.jpg'
import Spelio from '../img/spelioladder.jpg'
import Hlo from '../img/hlo.jpg'

const Bootstrapcarousel = () => {
  return (
    <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-interval="false">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
  </ol>
  <div className="carousel-inner h-[450px] lg:h-[650px] lg:px-10 flex justify-center items-center">
    <div className="carousel-item active ">
        <img src={Marsen} alt="marsen" class="d-block w-100"/>
        <div className="carousel-caption d-none d-md-block text-left w-1/2">
            <h2 className="h2-teko text-white mb-5">MILITARY PROGRAM 01 : BASIC REQUIREMENTS</h2>
            <p className='text-lg text-white font-normal tracking-wider pb-40'>
            Whether you are looking to join the military, are already in the service or looking for a physical and mental push,
            our program is designed to help you meet the physical challenges of the job.
            We cover all physical aspects of military service.
            </p>
        </div>
    </div>
    <div class="carousel-item">
    <img src={Boatgroup} alt="boatgroup" class="d-block w-100"/>
    <div className="carousel-caption d-none d-md-block text-left w-1/2">
            <h2 className="h2-teko text-white mb-5">MILITARY PROGRAM 02 : FOUNDATIONAL STRENGTH</h2>
            <p className='text-lg font-normal tracking-wider pb-40'>
            Our mission is to help you reach your full potential and achieve your dreams of serving in the military.
            We believe that by providing you with the tools and training you need to succeed,
            we can help you physically and mentally to become the best version of yourself.
            </p>
        </div>
    </div>
    <div class="carousel-item">
    <img src={Spelio} alt="spelioladder" class="d-block w-100"/>
    <div className="carousel-caption d-none d-md-block text-left w-1/2">
            <h2 className="h2-teko text-white mb-5">MILITARY PROGRAM 03 : SWIMMING PRACTICE</h2>
            <p className='text-lg font-normal tracking-wider pb-40'>
            Continuing your journey in the military, our advanced training program focuses on refining your
            skills and preparing you for the challenges ahead.
            Join us in taking your abilities to the next level.
            </p>
        </div>
    </div>
    <div class="carousel-item">
    <img src={Hlo} alt="hlo" class="d-block w-100"/>
    <div className="carousel-caption d-none d-md-block text-left w-1/2">
            <h2 className="h2-teko text-white mb-5">MILITARY PROGRAM 04/05 : SUPPORT</h2>
            <p className='text-lg font-normal tracking-wider pb-40'>
            Elevate your military career by mastering leadership skills.
            Our program is tailored to enhance your leadership qualities and prepare you for higher
            responsibilities within the military ranks.
            </p>
        </div>
    </div>
  </div>
</div>
  );
};

export default Bootstrapcarousel;
