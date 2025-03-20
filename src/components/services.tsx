import React from "react";

interface Service {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  price: string;
}

const services: Service[] = [
  {
    title: "קמע הגנה נגד עין הרע פתיחת מזל בפרנסה וזווג",
    description:
      "קמע להגנה מעין הרע ופתיחת מזל בפרנסה וזווג כסף טהור!!, טליון 650 כולל שרשרת 700",
    image: { src: "/kameah.jpg", alt: "Image 1" },
    price: "650₪",
  },
  {
    title: "מזוזה מהודרת",
    description: "הרב סופר סת''ם כותב מזוזות קמעות וספר תורה",
    image: { src: "/eye.jpeg", alt: "Image 2" },
    price: "400₪",
  },
  {
    title: "קמע לחן וחסד לפתיחת מזל בפרנסה וזווג",
    description:
      "  קלף מזוזה עם כתיבה בנוצה שהרב מכין במיוחד עם כוונות לאותו אדם  סגולה להגנה, להצלחה ופתיחת מזל🙏 ",
    image: { src: "/kameah2.jpg", alt: "Image 3" },
    price: "300₪",
  },
  {
    title: "ביטול כישוף וחסימה",
    description: "",
    image: { src: "/spell.jpg", alt: "Image 4" },
    price: "150₪",
  },
  {
    title: "הוצאת עין הרע בטלפון",
    description: "",
    image: { src: "/eye2.jpg", alt: "Image 4" },
    price: "150₪",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-white text-gray-800" dir="rtl">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto  px-6">
        <h1 className="text-4xl font-bold text-center mb-8">השירותים שלנו</h1>
      </div>

      {/* Mobile Version */}
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
                <p className="text-lg text-green-500 font-bold mt-2">
                  {service.price}
                </p>
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
              className="w-full border-b border-blue-300 py-12"
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
                  <p className="text-lg text-green-500 font-bold mt-2">
                    {service.price}
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
