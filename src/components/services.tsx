import React from "react";

interface Service {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
}

const services: Service[] = [
  {
    title: "כותרת 1",
    description: "תיאור קצר על השירותים שמאיר עושה - סתם לדוגמה עין הרע",
    image: { src: "/book.jpeg", alt: "Image 1" },
  },
  {
    title: "כותרת 2",
    description: "תיאור קצר על השירותים שמאיר עושה - סתם לדוגמה עין הרע",
    image: { src: "/eye.jpeg", alt: "Image 2" },
  },
  {
    title: "כותרת 3",
    description: "תיאור קצר על השירותים שמאיר עושה - סתם לדוגמה עין הרע",
    image: { src: "/ring.jpeg", alt: "Image 3" },
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-white text-gray-800" dir="rtl">
      {/* Removed Section Title for Desktop */}

      {/* Mobile Version (Unchanged) */}
      <div className="md:hidden">
        <div className="max-w-7xl mx-auto py-8 px-6 space-y-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={service.image.src}
                alt={service.image.alt}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="text-center p-4">
                <h2 className="text-2xl font-semibold">{service.title}</h2>
                <p className="text-xl text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Full-Width Article-like Version */}
      <div className="hidden md:block">
        {services.map((service, index) => {
          const isOdd = index % 2 !== 0;
          return (
            <article
              key={index}
              className="w-full border-b border-gray-200 py-12"
            >
              <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-stretch">
                <div className={`flex ${isOdd ? "order-2" : "order-1"} h-96`}>
                  <img
                    src={service.image.src}
                    alt={service.image.alt}
                    className="w-full h-full object-cover rounded-md shadow-md transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className={`${
                    isOdd ? "order-1" : "order-2"
                  } h-96 flex flex-col justify-center`}
                >
                  <h2 className="text-3xl font-semibold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
