// import React from "react";
// // linking
// import { Link } from 'react-router-dom';
// import { RxHamburgerMenu } from "react-icons/rx";

// const Nav = () => {
//   return (
//        <nav className='w-full h-24 md:h-32 bg-primary px-[30px] flex justify-center items-center'>
//         <div className='flex justify-between items-center w-full'>
//           <Link to="/">
//           <h1 className='w-full text-start h1-header'>Mission movement</h1>
//         </Link>
//         <div className='text-yellow flex justify-end'><RxHamburgerMenu size={35}/></div>
//       </div>
//     </nav>
//   );
// };
// export default Nav;

import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link as RouterLink } from "react-router-dom"; // Import Router Link
// import { Link as ScrollLink } from "react-scroll";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "program",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "resources",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <div className="sticky top-0 flex h-24 md:h-32 bg-primary z-50 justify-between items-center w-screen px-[30px] text-yellow text-lg">
      <div>
        <RouterLink to="/">
          <h1 className='w-full text-start h1-header'>Mission movement</h1>
        </RouterLink>
      </div>
      <ul className="hidden lg:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer text-xl uppercase font-extralight tracking-widest font-secondary hover:scale-105 duration-200"
          >
            <RouterLink to={`/${link}`} smooth duration={500}>
              {link}
            </RouterLink>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-yellow lg:hidden"
      >
        {nav ? <FaTimes size={30} /> : <RxHamburgerMenu size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center  absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-900 text-yellow">
        {/* <RouterLink
              onClick={() => setNav(!nav)}
                to="/"
                duration={500}
        >
              <h1 className="px-4 cursor-pointer py-6 text-5xl uppercase font-secondary font-light tracking-widest duration-200">
              mission movement</h1>
            </RouterLink> */}
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer py-6 text-4xl uppercase font-secondary font-light tracking-widest duration-200"
            >
              <RouterLink
                onClick={() => setNav(!nav)}
                to={link}
                duration={500}
              >
                {link}
              </RouterLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Nav;