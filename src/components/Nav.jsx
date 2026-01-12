import React, { useState, useEffect, useCallback, useRef } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { MdClose, MdLogin, MdOutlineSpaceDashboard } from "react-icons/md";
import { IoMdMenu, IoMdLogOut } from "react-icons/io";
import { GiRank3 } from "react-icons/gi";

const Nav = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const firstMobileLinkRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (section) => {
    setDropdown((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Hide/show navbar on scroll (keep your premium feel)
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

  // Scroll lock behind menu
  useEffect(() => {
    document.body.style.overflow = nav ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [nav]);

  // Escape closes menu
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setNav(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setNav(false);
  }, [location.pathname]);

  // Focus first link when menu opens (mobile)
  useEffect(() => {
    if (nav && isMobile && firstMobileLinkRef.current) {
      firstMobileLinkRef.current.focus();
    }
  }, [nav, isMobile]);

  // Focus trap when menu open
  useEffect(() => {
    const menuEl = menuRef.current;
    if (!menuEl) return;

    const getFocusable = () =>
      Array.from(
        menuEl.querySelectorAll(
          'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter(
        (el) => !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden")
      );

    if (nav) {
      const focusables = getFocusable();
      if (focusables.length > 0) focusables[0].focus();

      const handleTab = (event) => {
        if (event.key !== "Tab") return;
        const items = getFocusable();
        if (items.length === 0) return;

        const firstEl = items[0];
        const lastEl = items[items.length - 1];

        if (event.shiftKey && document.activeElement === firstEl) {
          event.preventDefault();
          lastEl.focus();
        } else if (!event.shiftKey && document.activeElement === lastEl) {
          event.preventDefault();
          firstEl.focus();
        }
      };

      window.addEventListener("keydown", handleTab);
      return () => window.removeEventListener("keydown", handleTab);
    }

    // Return focus to hamburger when closing
    if (!nav && menuButtonRef.current) {
      menuButtonRef.current.focus();
    }
  }, [nav]);

  return (
    <div
      className={`fixed top-0 w-screen px-6 h-16 md:h-20 bg-[#F7F9FC]/95 backdrop-blur border-b border-slate-200 z-50 flex justify-between items-center text-[#0B1220] text-lg transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {isMobile ? (
        <>
          {/* Mobile Top Bar */}
          <div className="w-full grid grid-cols-[56px,1fr,56px] items-center">
            {/* Left: Hamburger */}
            <div className="w-[56px] flex items-center justify-start">
              <button
                type="button"
                className="flex items-center justify-center text-[#0B1220] focus-visible:ring-2 focus-visible:ring-[#1f6feb]/30 rounded"
                onClick={() => setNav(!nav)}
                aria-label={nav ? "Close menu" : "Open menu"}
                aria-expanded={nav}
                aria-controls="main-menu"
                ref={menuButtonRef}
              >
                {nav ? (
                  <MdClose size={32} className="text-[#0B1220]" />
                ) : (
                  <IoMdMenu size={32} className="text-[#0B1220]" />
                )}
              </button>
            </div>

            {/* Center: Brand */}
            <RouterLink
              to="/"
              alt="to-homepage"
              className="flex flex-col items-center justify-self-center text-center text-sm font-display uppercase tracking-[0.14em]"
              onClick={() => setNav(false)}
            >
              <span>Mission</span>
              <span>Movement</span>
            </RouterLink>

            {/* Right: Login/Dashboard icon (mirrored position) */}
            <div className="w-[56px] flex items-center justify-end">
              {!user ? (
                <RouterLink
                  to="/login"
                  alt="to-login-page"
                  className="flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#1f6feb]/30 rounded"
                >
                  <MdLogin
                    size={28}
                    className="text-[#0B1220] hover:text-[#1f6feb]"
                  />
                </RouterLink>
              ) : (
                <RouterLink
                  to="/dashboard"
                  alt="to-dashboard"
                  className="flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#1f6feb]/30 rounded"
                >
                  <GiRank3 size={28} className="text-[#1f6feb]" />
                </RouterLink>
              )}
            </div>
          </div>

          {/* Mobile Menu Panel */}
          <div
            className={`absolute top-full left-0 w-full bg-white border-t border-slate-200 overflow-y-auto h-[calc(100dvh-4rem)] transition-transform transition-opacity duration-500 ease-out transform-gpu will-change-transform ${
              nav
                ? "translate-y-0 opacity-100 pointer-events-auto"
                : "-translate-y-3 opacity-0 pointer-events-none"
            }`}
            style={{ fontFamily: "Overpass, sans-serif" }}
            id="main-menu"
            role="dialog"
            aria-modal="true"
            ref={menuRef}
          >
            <form className="px-6 py-8 space-y-4 text-[#0B1220]">
              {/* Direct links */}
              {[
                { title: "Over ons", path: "/about" },
                { title: "Programma", path: "/program" },
                { title: "Artikelen", path: "/blogs" },
                { title: "Bronnen", path: "/resources" },
                { title: "Prijzen", path: "/pricing" },
                { title: "Contact", path: "/contact" },
              ].map(({ title, path }, index) => (
                <RouterLink
                  key={title}
                  to={path}
                  ref={index === 0 ? firstMobileLinkRef : null}
                  onClick={() => setNav(false)}
                  className="block text-lg font-display uppercase tracking-[0.14em] text-[#0B1220] hover:text-[#1f6feb] py-3 border-b border-slate-200 focus-visible:ring-2 focus-visible:ring-[#1f6feb]/30"
                >
                  {title}
                </RouterLink>
              ))}

              {/* Eenheden expandable */}
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
                  className="flex justify-between items-center text-[#0B1220] hover:text-[#1f6feb] uppercase text-lg font-display tracking-[0.14em] py-3 border-b border-slate-200 cursor-pointer"
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
                    {
                      title: "Veiligheidsdiensten",
                      path: "/units/veiligheidsdiensten",
                    },
                  ].map(({ title, path }) => (
                    <RouterLink
                      key={title}
                      to={path}
                      onClick={() => setNav(false)}
                      className="block text-sm text-slate-700 hover:text-[#1f6feb] focus-visible:ring-2 focus-visible:ring-[#1f6feb]/30"
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
        <>
          {/* Desktop Left: Menu button */}
          <div
            className="flex items-center cursor-pointer text-[#0B1220]"
            onClick={() => setNav(!nav)}
            role="button"
            tabIndex={0}
            aria-expanded={nav}
            aria-controls="main-menu"
            ref={menuButtonRef}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setNav(!nav);
              }
            }}
          >
            {nav ? <MdClose size={35} /> : <IoMdMenu size={35} />}
            <span className="ml-2 text-lg font-display uppercase tracking-[0.14em] hidden lg:inline">
              Menu
            </span>
          </div>

          {/* Desktop Center: Brand */}
          <RouterLink
            to="/"
            className="text-xl font-display uppercase tracking-[0.14em]"
            onClick={() => setNav(false)}
          >
            <span>Mission</span>
            <span className="block text-center">Movement</span>
          </RouterLink>

          {/* Desktop Right: Auth */}
          <div className="flex gap-4 text-[#0B1220] text-sm md:text-lg">
            {!user ? (
              <RouterLink
                to="/login"
                className="hover:text-[#1f6feb] focus-visible:ring-2 focus-visible:ring-[#1f6feb]/30 rounded"
                alt="to-login-page"
              >
                <MdLogin className="text-2xl hover:scale-105 duration-300" />
              </RouterLink>
            ) : (
              <>
                <RouterLink
                  to="/dashboard"
                  alt="to-dashboard"
                  className="hover:text-[#1f6feb] flex justify-center items-center focus-visible:ring-2 focus-visible:ring-[#1f6feb]/30 rounded"
                >
                  <MdOutlineSpaceDashboard />
                </RouterLink>
                <span className="text-slate-300">|</span>
                <button
                  onClick={() => {
                    setNav(false);
                    logout();
                  }}
                  className="hover:text-red-500 focus-visible:ring-2 focus-visible:ring-[#1f6feb]/30 rounded"
                >
                  <IoMdLogOut />
                </button>
              </>
            )}
          </div>

          {/* Desktop Dropdown */}
          <div
            className={`absolute top-full left-0 w-full bg-white border-t border-slate-200 shadow-lg transition-all duration-300 ${
              nav ? "h-[60vh] opacity-100" : "h-0 opacity-0 pointer-events-none"
            } overflow-hidden`}
            id="main-menu"
            role="dialog"
            aria-modal="true"
            ref={menuRef}
          >
            <div className="grid grid-cols-3 gap-10 px-20 py-10">
              {/* Column 1 */}
              <div className="flex flex-col space-y-8">
                <div>
                  <RouterLink
                    to="/about"
                    className="text-[#0B1220] hover:text-[#1f6feb] text-2xl font-display uppercase tracking-[0.14em]"
                    onClick={() => setNav(false)}
                  >
                    Over ons
                  </RouterLink>
                  <div className="border-t border-slate-200 w-48 my-2" />
                </div>

                <div>
                  <h3 className="text-[#0B1220] text-2xl font-display uppercase tracking-[0.14em]">
                    Eenheden
                  </h3>
                  <div className="border-t border-slate-200 w-48 my-2" />
                  <RouterLink
                    to="/units/mariniers"
                    className="block text-slate-700 hover:text-[#1f6feb] py-1"
                    onClick={() => setNav(false)}
                  >
                    Korps Mariniers
                  </RouterLink>
                  <RouterLink
                    to="/units/commandotroepen"
                    className="block text-slate-700 hover:text-[#1f6feb] py-1"
                    onClick={() => setNav(false)}
                  >
                    Korps Commando Troepen
                  </RouterLink>
                  <RouterLink
                    to="/units/luchtmobiel"
                    className="block text-slate-700 hover:text-[#1f6feb] py-1"
                    onClick={() => setNav(false)}
                  >
                    11 Luchtmobiele brigade
                  </RouterLink>
                  <RouterLink
                    to="/units/veiligheidsdiensten"
                    className="block text-slate-700 hover:text-[#1f6feb] py-1"
                    onClick={() => setNav(false)}
                  >
                    Veiligheidsdiensten
                  </RouterLink>
                </div>

                <div>
                  <RouterLink
                    to="/program"
                    className="text-[#0B1220] hover:text-[#1f6feb] text-2xl font-display uppercase tracking-[0.14em]"
                    onClick={() => setNav(false)}
                  >
                    Het programma
                  </RouterLink>
                  <div className="border-t border-slate-200 w-48 my-2" />
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col space-y-8">
                <div>
                  <RouterLink
                    to="/blogs"
                    className="text-[#0B1220] hover:text-[#1f6feb] text-2xl font-display uppercase tracking-[0.14em]"
                    onClick={() => setNav(false)}
                  >
                    Artikelen
                  </RouterLink>
                  <div className="border-t border-slate-200 w-48 my-2" />
                </div>

                <div>
                  <RouterLink
                    to="/resources"
                    className="text-[#0B1220] hover:text-[#1f6feb] text-2xl font-display uppercase tracking-[0.14em]"
                    onClick={() => setNav(false)}
                  >
                    Bronnen
                  </RouterLink>
                  <div className="border-t border-slate-200 w-48 my-2" />
                </div>

                <div>
                  <RouterLink
                    to="/pricing"
                    className="text-[#0B1220] hover:text-[#1f6feb] text-2xl font-display uppercase tracking-[0.14em]"
                    onClick={() => setNav(false)}
                  >
                    Bekijk ons aanbod
                  </RouterLink>
                  <div className="border-t border-slate-200 w-48 my-2" />
                </div>

                <div>
                  <RouterLink
                    to="/contact"
                    className="text-[#0B1220] hover:text-[#1f6feb] text-2xl font-display uppercase tracking-[0.14em]"
                    onClick={() => setNav(false)}
                  >
                    Contact
                  </RouterLink>
                  <div className="border-t border-slate-200 w-40 my-2" />
                </div>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col space-y-8 justify-center items-center">
                <div className="mt-auto">
                  <img
                    src="/img/tryme.png"
                    alt="Military Prep"
                    className="w-[250px] h-[300px] object-cover"
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
