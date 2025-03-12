import React from "react";

const Banner: React.FC = () => {
  return (
    <section className="w-full h-[30vh] overflow-hidden">
      <img
        src="/mairbanner2.jpeg" // Replace with your image path or URL
        alt="Banner"
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default Banner;
