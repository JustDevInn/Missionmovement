import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  return (
       <nav className='w-full h-24 md:h-32 bg-primary px-[30px] flex justify-center items-center'>
        <div className='flex justify-center items-center w-full'>
        <h1 className='w-5/6 text-start h1-header'>Mission movement</h1>
        <div className='w-1/6 text-yellow flex justify-end'><RxHamburgerMenu size={35}/></div>
      </div>
    </nav>
  );
};

export default Nav;
