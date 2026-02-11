import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StickyMobileCTA = ({
  enabled,
  delayMs = 20000,
  label,
  buttonText,
  buttonTo,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setVisible(false);
      return undefined;
    }

    const timer = setTimeout(() => {
      setVisible(true);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [enabled, delayMs]);

  if (!enabled || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-mmAccent text-white px-4 py-3 flex justify-between items-center shadow-sm">
      <span className="font-bold tracking-wide uppercase text-sm">{label}</span>
      <div className="flex items-center gap-2">
        <Link to={buttonTo}>
          <button className="bg-mmSurface text-mmText font-bold py-1.5 px-3 text-sm rounded border border-mmBorder transition-all">
            {buttonText}
          </button>
        </Link>
        <button
          onClick={() => setVisible(false)}
          className="text-white/80 hover:text-white font-bold text-xl"
          aria-label="Sluiten"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
