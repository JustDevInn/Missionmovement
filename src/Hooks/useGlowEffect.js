import { useState, useEffect, useRef } from "react";

const useGlowEffect = () => {
  const [animate, setAnimate] = useState(false);
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0 && !hasAnimated) {
        setAnimate(true);
        setHasAnimated(true); // Prevents re-triggering
        setTimeout(() => setAnimate(false), 3000); // Keep effect at 3s
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount in case it's already visible

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated]);

  return { animate, elementRef };
};

const useInView = (threshold = 0.3) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) { 
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, isVisible]);

  return { ref, isVisible };
};

export { useGlowEffect, useInView };