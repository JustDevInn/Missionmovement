import React, { useState, useEffect, useCallback } from "react";
import { FaTimes, FaUser, FaPlus, FaMinus } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi"; // Thicker, square-line menu icon
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Nav = () => {
  const { user } = useAuth();
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle dropdown sections (mobile)
  const toggleDropdown = (section) => {
    setDropdown((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Hide navbar on scroll down, show on scroll up
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY === 0) {
      setVisible(true);
      return;
    }

    if (currentScrollY > lastScrollY + 10) {
      setVisible(false);
    } else if (currentScrollY < lastScrollY - 10) {
      setVisible(true);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      className={`fixed top-0 w-screen px-6 h-16 md:h-20 bg-primary border-b-2 border-yellow z-50 flex justify-between items-center text-yellow text-lg transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* ✅ Mobile Navbar */}
      {isMobile ? (
        <>
          {/* Left: Hamburger Menu */}
          <div className="flex items-center cursor-pointer" onClick={() => setNav(!nav)}>
            {nav ? <FaTimes size={36} className="text-white" /> : <HiMenuAlt4 size={36} className="text-white" />}
          </div>

          {/* Center: Brand Name (Stacked with Borders) */}
          <RouterLink 
            to="/" 
            className="flex flex-col items-center uppercase text-center text-sm font-bold tracking-widest relative px-4"
            onClick={() => setNav(false)}
          >
            <span className="">
              Mission
            </span>
            <span className="">
              Movement
            </span>
          </RouterLink>

          {/* Right: Authentication Icon */}
          <div className="cursor-pointer">
            {!user ? (
              <RouterLink to="/login">
                <FaUser size={28} className="text-white" />
              </RouterLink>
            ) : (
              <RouterLink to="/dashboard">
                <FaUser size={28} className="text-green-500" />
              </RouterLink>
            )}
          </div>

          {/* Full-Screen Dropdown Menu */}
          <div
            className={`absolute top-full left-0 w-full h-screen bg-primary border-t-2 border-yellow transition-all duration-300 ${
              nav ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Dropdown Menu Content */}
            <div className="flex flex-col h-full justify-start px-8 py-8 text-white">
              {/* Sections with Expandable Links */}
              {[
                { name: "About", links: [{ title: "Who We Are", path: "/about" }, { title: "What is Mission Movement?", path: "/mission" }] },
                { name: "News", links: [{ title: "Blog", path: "/blogs" }] },
                { name: "Program", links: [{ title: "Program", path: "/program" }] },
                { name: "Multimedia", links: [{ title: "Resources", path: "/resources" }, { title: "Instagram", path: "https://www.instagram.com/mission.movement", external: true }] },
                { name: "Contact", links: [{ title: "Get in Touch", path: "/contact" }] },
                { name: "Pricing", links: [{ title: "View Pricing", path: "/pricing" }] },
              ].map(({ name, links }) => (
                <div key={name} className="border-b border-white/50 py-3">
                  {/* Section Header */}
                  <button
                    className="w-full py-3 flex justify-between items-center text-yellow text-lg uppercase font-bold"
                    onClick={() => toggleDropdown(name)}
                  >
                    {name} {dropdown[name] ? <FaMinus size={18} /> : <FaPlus size={18} />}
                  </button>

                  {/* Links (Expandable) */}
                  {dropdown[name] && (
                    <div className="mt-2 text-sm space-y-1">
                      {links.map(({ title, path, external }) =>
                        external ? (
                          <a
                            key={title}
                            href={path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-gray-300 hover:text-yellow py-1"
                            onClick={() => setNav(false)}
                          >
                            {title}
                          </a>
                        ) : (
                          <RouterLink
                            key={title}
                            to={path}
                            className="block text-gray-300 hover:text-yellow py-1"
                            onClick={() => setNav(false)}
                          >
                            {title}
                          </RouterLink>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        // ✅ Desktop Navbar
        <>
          {/* Left: Hamburger Menu */}
          <div className="flex items-center cursor-pointer" onClick={() => setNav(!nav)}>
            {nav ? <FaTimes size={35} /> : <HiMenuAlt4 size={35} />}
            <span className="ml-2 text-lg uppercase font-light tracking-wider">Menu</span>
          </div>

          {/* Center: Brand Name */}
          <RouterLink to="/" className="text-xl font-bold uppercase tracking-widest" onClick={() => setNav(false)}>
            Mission Movement
          </RouterLink>

          {/* Right: Authentication Links */}
          <div className="flex gap-4 text-white text-sm md:text-lg">
            {!user ? (
              <>
                <RouterLink to="/signup" className="hover:text-yellow">
                  Signup
                </RouterLink>
                <span>|</span>
                <RouterLink to="/login" className="hover:text-yellow">
                  Login
                </RouterLink>
              </>
            ) : (
              <>
                <RouterLink to="/dashboard" className="hover:text-yellow">
                  Dashboard
                </RouterLink>
                <span>|</span>
                <button onClick={() => setNav(false)} className="hover:text-yellow">
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Desktop Dropdown Menu */}
          <div
            className={`absolute top-full left-0 w-full bg-primary border-t-2 border-yellow transition-all duration-300 ${
              nav ? "h-[70vh] opacity-100" : "h-0 opacity-0 pointer-events-none"
            } overflow-hidden`}
          >
            <div className="grid grid-cols-2 gap-10 px-20 py-10">
             {/* First Column */}
<div className="flex flex-col space-y-8">
{/* About Section */}
<div>
  <h3 className="text-yellow text-2xl uppercase tracking-wider font-bold">About</h3>
  <div className="border-t border-white w-20 my-2"></div>
  <RouterLink to="/about" className="block text-gray-300 hover:text-yellow py-1" onClick={() => setNav(false)}>
    Who are we?
  </RouterLink>
  <RouterLink to="/mission" className="block text-gray-300 hover:text-yellow py-1" onClick={() => setNav(false)}>
    What is Mission Movement?
  </RouterLink>
</div>

{/* News Section */}
<div>
  <h3 className="text-yellow text-2xl uppercase tracking-wider font-bold">News</h3>
  <div className="border-t border-white w-20 my-2"></div>
  <RouterLink to="/blogs" className="block text-gray-300 hover:text-yellow py-1" onClick={() => setNav(false)}>
    Blog
  </RouterLink>
</div>

{/* Program Section */}
<div>
  <h3 className="text-yellow text-2xl uppercase tracking-wider font-bold">Program</h3>
  <div className="border-t border-white w-20 my-2"></div>
  <RouterLink to="/program" className="block text-gray-300 hover:text-yellow py-1" onClick={() => setNav(false)}>
    Program Details
  </RouterLink>
</div>
</div>

{/* Second Column */}
<div className="flex flex-col space-y-8">
{/* Multimedia Section */}
<div>
  <h3 className="text-yellow text-2xl uppercase tracking-wider font-bold">Multimedia</h3>
  <div className="border-t border-white w-20 my-2"></div>
  <RouterLink to="/resources" className="block text-gray-300 hover:text-yellow py-1" onClick={() => setNav(false)}>
    Resources
  </RouterLink>
  <a
    href="https://www.instagram.com/mission.movement"
    target="_blank"
    rel="noopener noreferrer"
    className="block text-gray-300 hover:text-yellow py-1"
    onClick={() => setNav(false)}
  >
    Instagram
  </a>
</div>

{/* Get in Contact Section */}
<div>
  <h3 className="text-yellow text-2xl uppercase tracking-wider font-bold">Get in Contact</h3>
  <div className="border-t border-white w-20 my-2"></div>
  <RouterLink to="/contact" className="block text-gray-300 hover:text-yellow py-1" onClick={() => setNav(false)}>
    Contact Us
  </RouterLink>
</div>

{/* Pricing Section */}
<div>
  <h3 className="text-yellow text-2xl uppercase tracking-wider font-bold">Pricing</h3>
  <div className="border-t border-white w-20 my-2"></div>
  <RouterLink to="/pricing" className="block text-gray-300 hover:text-yellow py-1" onClick={() => setNav(false)}>
    View Pricing
  </RouterLink>
</div>
</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Nav;



