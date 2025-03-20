import React, { useEffect, useRef, useState } from "react";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState(0);
  const [multiplier, setMultiplier] = useState(0.1);

  useEffect(() => {
    const updateMultiplier = () => {
      if (window.innerWidth < 768) {
        setMultiplier(0);
      } else {
        setMultiplier(0.1);
      }
    };

    updateMultiplier();
    window.addEventListener("resize", updateMultiplier);
    return () => window.removeEventListener("resize", updateMultiplier);
  }, []);

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
      className="relative overflow-hidden h-[35dvh] md:h-auto mt-22 md:mt-0
      "
    >
      <picture className="block">
        <source media="(max-width: 767px)" srcSet="/mair.jpg" />
        <img
          src="/mairbanner2.jpeg"
          alt="הרב מאיר לוגסי"
          className="hidden md:block w-full h-auto object-cover"
          style={{
            transform: `translateY(${parallax}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
        <img
          src="/mobile-banner.jpeg"
          alt="הרב מאיר לוגסי"
          className="block md:hidden w-full h-full object-cover mx-auto"
          style={{
            transform: "translateY(0px)",
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
