import React, { useEffect, useRef, useState } from "react";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState(0);
  const [multiplier, setMultiplier] = useState(0.1);

  // Adjust parallax multiplier based on window width.
  useEffect(() => {
    const updateMultiplier = () => {
      if (window.innerWidth < 768) {
        setMultiplier(0); // Disable parallax on mobile.
      } else {
        setMultiplier(0.1);
      }
    };

    updateMultiplier();
    window.addEventListener("resize", updateMultiplier);
    return () => window.removeEventListener("resize", updateMultiplier);
  }, []);

  // Update parallax effect on scroll (desktop only).
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setParallax(-rect.top * multiplier);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [multiplier]);

  return (
    <div
      ref={heroRef}
      // On mobile, fixed height of 400px; on desktop, let height be auto.
      className="relative overflow-hidden md:h-auto mt-22 md:mt-0
      "
    >
      <picture className="block h-full">
        {/* Mobile: use a mobile-specific image */}
        <source media="(max-width: 767px)" srcSet="/mair.jpg" />
        {/* Desktop: use the desktop image */}
        <img
          src="/mairbanner2.jpeg"
          alt="הרב מאיר לוגסי"
          className="hidden md:block w-full h-auto object-cover"
          style={{
            transform: `translateY(${parallax}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
        {/* Mobile image visible only on mobile */}
        <img
          src="/mobile-banner.jpeg"
          alt="הרב מאיר לוגסי"
          className="block md:hidden w-auto h-full object-contain mx-auto"
          style={{
            transform: "translateY(0px)", // No parallax on mobile.
          }}
        />
      </picture>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="text-center text-white p-4 rounded w-full bg-black/20"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">הרב מאיר לוגסי</h1>
          <p className="mt-4 text-xl md:text-2xl">
            מומחה בהסרת עין הרע, חסימות וכישוף
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
