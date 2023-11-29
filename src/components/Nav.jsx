import React from "react";
// linking
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  return (
       <nav className='w-full h-24 md:h-32 bg-primary px-[30px] flex justify-center items-center'>
        <div className='flex justify-between items-center w-full'>
          <Link to="/">
          <h1 className='w-full text-start h1-header'>Mission movement</h1>
        </Link>
        <div className='text-yellow flex justify-end'><RxHamburgerMenu size={35}/></div>
      </div>
    </nav>
  );
};

export default Nav;
