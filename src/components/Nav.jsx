import React, { useState, useEffect, useCallback } from "react";
import { FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import auth context

const Nav = () => {
  const { user, logout } = useAuth(); // Access auth state
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
      <ul className="hidden lg:flex items-center gap-6">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer text-xl uppercase font-extralight tracking-widest font-secondary hover:scale-105 duration-200"
          >
            <RouterLink to={`/${link}`}>{link}</RouterLink>
          </li>
        ))}

        {/* 🔥 Authentication Links */}
        {!user ? (
          <>
            <RouterLink
              to="/login"
              className="px-4 py-2 bg-yellow text-black hover:bg-transparent hover:text-yellow border border-yellow"
            >
              Login
            </RouterLink>
            <RouterLink
              to="/signup"
              className="px-4 py-2 border border-yellow hover:bg-yellow hover:text-black"
            >
              Sign Up
            </RouterLink>
          </>
        ) : (
          <>
            <RouterLink
              to="/dashboard"
              className="px-4 py-2 bg-green-600 hover:bg-green-700"
            >
              Dashboard
            </RouterLink>
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-500 hover:bg-red-600"
            >
              Logout
            </button>
          </>
        )}
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
              <RouterLink onClick={() => setNav(false)} to={`/${link}`}>
                {link}
              </RouterLink>
            </li>
          ))}

          {/* 🔥 Authentication Links for Mobile */}
          {!user ? (
            <>
              <li className="py-4">
                <RouterLink
                  onClick={() => setNav(false)}
                  to="/login"
                  className="px-6 py-3 bg-yellow text-black hover:bg-transparent hover:text-yellow border border-yellow"
                >
                  Login
                </RouterLink>
              </li>
              <li className="py-4">
                <RouterLink
                  onClick={() => setNav(false)}
                  to="/signup"
                  className="px-6 py-3 border border-yellow hover:bg-yellow hover:text-black"
                >
                  Sign Up
                </RouterLink>
              </li>
            </>
          ) : (
            <>
              <li className="py-4">
                <RouterLink
                  onClick={() => setNav(false)}
                  to="/dashboard"
                  className="px-6 py-3 bg-green-600 hover:bg-green-700"
                >
                  Dashboard
                </RouterLink>
              </li>
              <li className="py-4">
                <button
                  onClick={() => {
                    logout();
                    setNav(false);
                  }}
                  className="px-6 py-3 bg-red-500 hover:bg-red-600"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      )}
    </div>
  );
};

export default Nav;
