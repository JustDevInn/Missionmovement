import React, { useState, useEffect, useCallback } from "react";
import { FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link as RouterLink } from "react-router-dom";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
  
    // Ensure navbar is always visible at the top of the page
    if (currentScrollY === 0) {
      setVisible(true);
      return;
    }
  
    // Scroll behavior: Hide on scroll down, show on scroll up
    if (currentScrollY > lastScrollY + 10) {
      setVisible(false); // Scrolling down, hide navbar
    } else if (currentScrollY < lastScrollY - 10) {
      setVisible(true); // Scrolling up, show navbar
    }
  
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);
  

  // Effect to track scrolling
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const links = [
    { id: 1, link: "program" },
    { id: 2, link: "about" },
    { id: 3, link: "resources" },
    { id: 4, link: "contact" },
  ];

  return (
    <div
      className={`fixed top-0 w-screen px-[30px] h-24 md:h-32 bg-primary z-50 flex justify-between items-center text-yellow text-lg transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <div>
        <RouterLink to="/">
          <h1 className="w-full text-start h1-header">Mission Movement</h1>
        </RouterLink>
      </div>

      {/* Desktop Links */}
      <ul className="hidden lg:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer text-xl uppercase font-extralight tracking-widest font-secondary hover:scale-105 duration-200"
          >
            <RouterLink to={`/${link}`}>{link}</RouterLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-yellow lg:hidden"
      >
        {nav ? <FaTimes size={30} /> : <RxHamburgerMenu size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-900 text-yellow">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer py-6 text-4xl uppercase font-secondary font-light tracking-widest duration-200"
            >
              <RouterLink onClick={() => setNav(!nav)} to={`/${link}`}>
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
