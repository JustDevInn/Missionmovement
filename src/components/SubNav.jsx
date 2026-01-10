import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const subNavItems = [
  { label: "Korps Mariniers", path: "/units/mariniers" },
  { label: "Korps Commando Troepen", path: "/units/commandotroepen" },
  { label: "11 Luchtmobiele Brigade", path: "/units/luchtmobiel" },
  { label: "Veiligheidsdiensten", path: "/units/veiligheidsdiensten" },
];

const SubNav = ({ variant = "dark", scrollable = false }) => {
  const location = useLocation();
  const isLight = variant === "light";
  const activeRef = useRef(null);
  const baseChip =
    "inline-flex items-center justify-center px-4 py-2 rounded-full border text-xs uppercase tracking-[0.25em] leading-none transition";
  const inactiveChip = isLight
    ? `${baseChip} border-transparent text-slate-600 hover:border-slate-300 hover:text-slate-900`
    : `${baseChip} border-transparent text-muted hover:border-border hover:text-accent`;
  const activeChip = isLight
    ? `${baseChip} border-blue-600 bg-blue-50 text-blue-700`
    : `${baseChip} border-accent bg-surface text-accent`;

  useEffect(() => {
    if (!scrollable || !activeRef.current) return;
    activeRef.current.scrollIntoView({ block: "nearest", inline: "center" });
  }, [scrollable, location.pathname]);

  return (
    <nav
      className={`w-full border-t border-b ${
        isLight
          ? "bg-white/90 backdrop-blur border-slate-200"
          : "border-border bg-bg"
      } ${scrollable ? "py-0" : "h-16 flex items-center"}`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 w-full">
        <ul
          className={`flex items-center gap-6 md:gap-10 ${
            scrollable
              ? "flex-nowrap overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-smooth touch-pan-x px-4 py-3 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              : "justify-center h-16"
          }`}
        >
          {subNavItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li
                key={item.path}
                className={scrollable ? "snap-start shrink-0 min-w-max" : undefined}
              >
                <Link to={item.path}>
                  <span
                    ref={isActive ? activeRef : null}
                    className={isActive ? activeChip : inactiveChip}
                  >
                    {item.label}
                  </span>
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
