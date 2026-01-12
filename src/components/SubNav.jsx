import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const subNavItems = [
  {
    label: "Korps Mariniers",
    labelMobile: "Mariniers",
    path: "/units/mariniers",
  },
  {
    label: "Korps Commando Troepen",
    labelMobile: "KCT",
    path: "/units/commandotroepen",
  },
  {
    label: "11 Luchtmobiele Brigade",
    labelMobile: "11 LMB",
    path: "/units/luchtmobiel",
  },
  {
    label: "Veiligheidsdiensten",
    labelMobile: "Veiligheid",
    path: "/units/veiligheidsdiensten",
  },
];

const SubNav = ({ variant = "dark", scrollable = false, onOverflowChange }) => {
  const location = useLocation();
  const isLight = variant === "light";
  const activeRef = useRef(null);
  const listRef = useRef(null);
  const [showHint, setShowHint] = useState(false);
  const baseChip =
    "h-10 inline-flex items-center justify-center px-4 rounded-full border text-xs uppercase tracking-[0.25em] leading-none whitespace-nowrap transition";
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

  useEffect(() => {
    if (!scrollable || !listRef.current) return;
    const checkOverflow = () => {
      const { scrollWidth, clientWidth } = listRef.current;
      const hasOverflow = scrollWidth > clientWidth;
      setShowHint(hasOverflow);
      if (onOverflowChange) onOverflowChange(hasOverflow);
    };
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [scrollable, onOverflowChange]);

  return (
    <div className="w-full">
      <nav
        className={`w-full border-t border-b ${
          isLight
            ? "bg-white/90 backdrop-blur border-slate-200"
            : "border-border bg-bg"
        } ${scrollable ? "py-0" : "h-16 flex items-center"}`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 w-full">
          <div className={`relative ${scrollable ? "w-full" : ""}`}>
            <ul
              ref={listRef}
              className={`flex items-center gap-6 md:gap-10 ${
                scrollable
                  ? "flex flex-nowrap overflow-x-auto overflow-y-hidden scroll-smooth touch-pan-x px-4 py-3 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                  : "justify-center h-16"
              }`}
            >
              {subNavItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li
                    key={item.path}
                    className={
                      scrollable
                        ? "snap-center shrink-0 min-w-max"
                        : undefined
                    }
                  >
                    <Link to={item.path}>
                      <span
                        ref={isActive ? activeRef : null}
                        className={isActive ? activeChip : inactiveChip}
                        data-active={isActive ? "true" : "false"}
                      >
                        <span className="hidden sm:inline">{item.label}</span>
                        <span className="sm:hidden">
                          {item.labelMobile ?? item.label}
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            {scrollable ? (
              <>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-7 bg-gradient-to-r from-white/90 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-7 bg-gradient-to-l from-white/90 to-transparent" />
              </>
            ) : null}
          </div>
        </div>
      </nav>
      {scrollable && showHint ? (
        <div className="md:hidden text-center text-[11px] uppercase tracking-[0.25em] text-slate-500 mt-2 leading-none">
          Swipe →
        </div>
      ) : null}
    </div>
  );
};

export default SubNav;
