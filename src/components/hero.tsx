import React, { useState, useEffect, useRef } from "react";

const Hero: React.FC = () => {
  const images = [
    { src: "/jerusalem2.jpg", alt: "Image 1" },
    { src: "/jerusalem.jpg", alt: "Image 2" },
  ];

  // For a bidirectional infinite loop, we prepend the last and append the first.
  const extendedSlides =
    images.length > 1
      ? [images[images.length - 1], ...images, images[0]]
      : images;
  const initialIndex = images.length > 1 ? 1 : 0;

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideInterval = useRef<number | null>(null);

  // Parallax effect: track container offset
  const heroRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setOffset(rect.top);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Auto-slide every 5 seconds if not animating.
  useEffect(() => {
    slideInterval.current = window.setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      if (slideInterval.current !== null) {
        clearInterval(slideInterval.current);
      }
    };
  }, [currentIndex, extendedSlides.length, isAnimating]);

  // When a transition ends, check if we need to jump to a real slide.
  const handleTransitionEnd = () => {
    // Jump from duplicate at the end to the first real slide.
    if (currentIndex === extendedSlides.length - 1) {
      setTransitionEnabled(false);
      setCurrentIndex(1);
      setTimeout(() => {
        setTransitionEnabled(true);
        setIsAnimating(false);
      }, 50);
    }
    // Jump from duplicate at the beginning to the last real slide.
    else if (currentIndex === 0) {
      setTransitionEnabled(false);
      setCurrentIndex(extendedSlides.length - 2);
      setTimeout(() => {
        setTransitionEnabled(true);
        setIsAnimating(false);
      }, 50);
    } else {
      setIsAnimating(false);
    }
  };

  return (
    <div ref={heroRef} className="relative w-screen h-[80vh] overflow-hidden">
      {/* Slider Container */}
      <div
        className="flex"
        onTransitionEnd={handleTransitionEnd}
        style={{
          transform: `translateX(-${currentIndex * 100}vw)`,
          transition: transitionEnabled
            ? "transform 700ms ease-in-out"
            : "none",
          width: `${extendedSlides.length * 100}vw`,
        }}
      >
        {extendedSlides.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-screen h-screen bg-cover bg-center"
            style={{
              backgroundImage: `url(${image.src})`,
              // Adjust parallax direction and intensity:
              backgroundPosition: `center ${-offset * 0.3}px`,
            }}
            aria-label={image.alt}
          ></div>
        ))}
      </div>

      {/* Static Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div
          className="text-center text-white p-4 rounded w-full"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
          }}
        >
          <h1 className="text-4xl font-bold">הרב מאיר לוגסי
          </h1>
          <p className="mt-4 text-xl ">
          מומחה בהסרת עין הרע, חסימות וכישוף
          </p>
        </div>
      </div>

      {/* Navigation Buttons (only visible on desktop) */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 rounded-full p-3 shadow-xl transition-all duration-300 z-20"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:block absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 rounded-full p-3 shadow-xl transition-all duration-300 z-20"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dot Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => {
          // Real slides are at indices 1 to images.length.
          const isActive = currentIndex === index + 1;
          return (
            <div
              key={index}
              onClick={() => {
                if (isAnimating) return;
                setTransitionEnabled(true);
                setCurrentIndex(index + 1);
              }}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                isActive ? "bg-white" : "bg-gray-400"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
