import React from "react";
import { Link, useLocation } from "react-router-dom";

const subNavItems = [
  { label: "Korps Mariniers", path: "/units/mariniers" },
  { label: "Korps Commando Troepen", path: "/units/commandotroepen" },
  { label: "11 Luchtmobiele Brigade", path: "/units/luchtmobiel" },
];

const SubNav = () => {
  const location = useLocation();

  return (
    <nav className="w-full border-t border-b border-yellow bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
        <ul className="flex justify-center gap-6 md:gap-10 text-xs md:text-sm lg:text-base font-secondary tracking-wide uppercase py-4">
          {subNavItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`${
                    isActive
                      ? "text-yellow border-b-2 border-yellow pb-1"
                      : "text-brown hover:text-yellow transition"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default SubNav;
