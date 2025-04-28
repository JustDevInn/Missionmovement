import React, { useState, useEffect, useCallback } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { MdClose } from "react-icons/md";
import { MdLogin } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { GiRank3 } from "react-icons/gi";
import { IoMdLogOut } from "react-icons/io";
import { MdOutlineSpaceDashboard } from "react-icons/md";

const Nav = () => {
  const { user, logout } = useAuth();
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (section) => {
    setDropdown((prev) => ({ ...prev, [section]: !prev[section] }));
  };

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
      {isMobile ? (
        <>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setNav(!nav)}
          >
            {nav ? (
              <MdClose size={36} className="text-white" />
            ) : (
              <IoMdMenu size={36} className="text-white" />
            )}
          </div>

          <RouterLink
            to="/"
            className="flex flex-col items-center uppercase text-center text-sm font-bold tracking-widest relative px-4"
            onClick={() => setNav(false)}
          >
            <span>Mission</span>
            <span>Movement</span>
          </RouterLink>

          <div className="cursor-pointer">
            {!user ? (
              <RouterLink to="/login">
                <MdLogin className="text-2xl hover:scale-105 duration-300 text-white hover:text-yellow" />
              </RouterLink>
            ) : (
              <RouterLink to="/dashboard">
                <GiRank3 size={28} className="text-gold" />
              </RouterLink>
            )}
          </div>

          <div
            className={`absolute top-full left-0 w-full bg-primary border-t-2 border-yellow transition-all duration-500 ease-in-out overflow-y-auto ${
              nav
                ? "max-h-[90vh] opacity-100"
                : "max-h-0 opacity-0 pointer-events-none"
            }`}
            style={{ fontFamily: "Overpass, sans-serif" }}
          >
            <form className="px-6 py-8 space-y-4 text-[#CCCCCC]">
              {/* Direct links */}
              {[
                { title: "Over ons", path: "/about" },
                { title: "Programma", path: "/program" },
                { title: "Artikelen", path: "/blogs" },
                { title: "Bronnen", path: "/resources" },
                { title: "Prijzen", path: "/pricing" },
                { title: "Contact", path: "/contact" },
              ].map(({ title, path }) => (
                <RouterLink
                  key={title}
                  to={path}
                  onClick={() => setNav(false)}
                  className="block text-lg font-bold uppercase text-[#CCCCCC] hover:text-yellow py-3 border-b border-white/50"
                >
                  {title}
                </RouterLink>
              ))}

              {/* Only Eenheden expandable */}
              <div>
                <input
                  type="checkbox"
                  id="menu-Eenheden"
                  className="hidden"
                  checked={dropdown["Eenheden"] || false}
                  onChange={() => toggleDropdown("Eenheden")}
                />
                <label
                  htmlFor="menu-Eenheden"
                  className="flex justify-between items-center text-[#CCCCCC] hover:text-yellow uppercase text-lg font-bold py-3 border-b border-white/50 cursor-pointer"
                >
                  Eenheden
                  <span>
                    {dropdown["Eenheden"] ? (
                      <FaMinus size={16} />
                    ) : (
                      <FaPlus size={16} />
                    )}
                  </span>
                </label>
                <ul
                  className={`pl-4 py-2 space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${
                    dropdown["Eenheden"]
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {[
                    { title: "Korps Mariniers", path: "/units/mariniers" },
                    {
                      title: "Korps Commando Troepen",
                      path: "/units/commandotroepen",
                    },
                    {
                      title: "11 Luchtmobiele Brigade",
                      path: "/units/luchtmobiel",
                    },
                  ].map(({ title, path }) => (
                    <RouterLink
                      key={title}
                      to={path}
                      onClick={() => setNav(false)}
                      className="block text-sm text-gray-300 hover:text-yellow"
                    >
                      {title}
                    </RouterLink>
                  ))}
                </ul>
              </div>
            </form>
          </div>
        </>
      ) : (
        // ✅ Desktop Navbar
        <>
          {/* Left: Hamburger Menu */}
          <div
            className="flex items-center cursor-pointer text-white"
            onClick={() => setNav(!nav)}
          >
            {nav ? <MdClose size={35} /> : <IoMdMenu size={35} />}
            <span className="ml-2 text-lg uppercase tracking-wider font-extrabold">
              Menu
            </span>
          </div>

          {/* Center: Brand Name */}
          <RouterLink
            to="/"
            className="text-xl font-bold uppercase tracking-widest"
            onClick={() => setNav(false)}
          >
            Mission Movement
          </RouterLink>

          {/* Right: Authentication Links */}
          <div className="flex gap-4 text-white text-sm md:text-lg">
            {!user ? (
              <>
                <RouterLink to="/login" className="hover:text-yellow">
                  <MdLogin className="text-2xl hover:scale-105 duration-300" />
                </RouterLink>
              </>
            ) : (
              <>
                <RouterLink
                  to="/dashboard"
                  className="hover:text-yellow flex justify-center items-center"
                >
                  <MdOutlineSpaceDashboard />
                </RouterLink>
                <span>|</span>
                <button
                  onClick={() => {
                    setNav(false);
                    logout();
                  }}
                  className="hover:text-red-500"
                >
                  <IoMdLogOut />
                </button>
              </>
            )}
          </div>

          {/* Desktop Dropdown Menu */}
          <div
            className={`absolute top-full left-0 w-full bg-primary border-t-2 border-yellow transition-all duration-300 ${
              nav ? "h-[60vh] opacity-100" : "h-0 opacity-0 pointer-events-none"
            } overflow-hidden`}
          >
            <div className="grid grid-cols-3 gap-10 px-20 py-10">
              {/* First Column */}
              <div className="flex flex-col space-y-8">
                {/* About Section */}
                <div>
                  <RouterLink
                    to="/about"
                    className="text-gray-300 hover:text-yellow text-2xl uppercase tracking-wider font-bold"
                    onClick={() => setNav(false)}
                  >
                    Over ons
                  </RouterLink>
                  <div className="border-t border-gray-400 w-40 my-2"></div>
                </div>
                {/* Eenheden */}
                <div>
                  <h3 className="text-gray-300 text-2xl uppercase tracking-wider font-bold">
                    Eenheden
                  </h3>
                  <div className="border-t border-gray-400 w-40 my-2"></div>
                  <RouterLink
                    to="/units/mariniers"
                    className="block text-gray-300 hover:text-yellow py-1"
                    onClick={() => setNav(false)}
                  >
                    Korps Mariniers
                  </RouterLink>
                  <RouterLink
                    to="/units/commandotroepen"
                    className="block text-gray-300 hover:text-yellow py-1"
                    onClick={() => setNav(false)}
                  >
                    Korps Commando Troepen
                  </RouterLink>
                  <RouterLink
                    to="/units/luchtmobiel"
                    className="block text-gray-300 hover:text-yellow py-1"
                    onClick={() => setNav(false)}
                  >
                    11 Luchtmobiele brigade
                  </RouterLink>
                </div>

                {/* Program Section */}
                <div>
                  <RouterLink
                    to="/program"
                    className="text-gray-300 hover:text-yellow text-2xl uppercase tracking-wider font-bold"
                    onClick={() => setNav(false)}
                  >
                    Het programma
                  </RouterLink>
                  <div className="border-t border-gray-400 w-60 my-2"></div>
                </div>
              </div>

              {/* Second Column */}
              <div className="flex flex-col space-y-8">
                {/* News Section */}
                <div>
                  <RouterLink
                    to="/blogs"
                    className="text-gray-300 hover:text-yellow text-2xl uppercase tracking-wider font-bold"
                    onClick={() => setNav(false)}
                  >
                    Artikelen
                  </RouterLink>
                  <div className="border-t border-gray-400 w-40 my-2"></div>
                </div>
                {/* Multimedia Section */}
                <div>
                  <RouterLink
                    to="/resources"
                    className="text-gray-300 hover:text-yellow text-2xl uppercase tracking-wider font-bold"
                    onClick={() => setNav(false)}
                  >
                    Bronnen
                  </RouterLink>
                  <div className="border-t border-gray-400 w-40 my-2"></div>
                  {/* <a
                    href="https://www.instagram.com/mission.movement"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-300 hover:text-yellow py-1"
                    onClick={() => setNav(false)}
                  >
                    Instagram
                  </a> */}
                </div>

                {/* Pricing Section */}
                <div>
                  <RouterLink
                    to="/pricing"
                    className="text-gray-300 hover:text-yellow text-2xl uppercase tracking-wider font-bold"
                    onClick={() => setNav(false)}
                  >
                    Bekijk ons aanbod
                  </RouterLink>
                  <div className="border-t border-gray-400 w-40 my-2"></div>
                </div>
                {/* Get in Contact Section */}
                <div>
                  <RouterLink
                    to="/contact"
                    className="text-gray-300 hover:text-yellow text-2xl uppercase tracking-wider font-bold"
                    onClick={() => setNav(false)}
                  >
                    Contact
                  </RouterLink>
                  <div className="border-t border-gray-400 w-40 my-2"></div>
                </div>
              </div>

              {/* Third Column */}
              <div className="flex flex-col space-y-8 justify-center items-center">
                {/* Image Fill */}
                <div className="mt-auto">
                  <img
                    src="/img/tryme.png"
                    alt="Military Prep"
                    className="w-[250px] h-[300px] object-cover rounded-lg shadow-md"
                  />
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
