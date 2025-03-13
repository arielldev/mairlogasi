import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[80dvh] overflow-hidden">
      {/* Full-screen background image with parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/mair2.jpeg')" }}
      ></div>
      {/* White gradient overlay from bottom to middle */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
