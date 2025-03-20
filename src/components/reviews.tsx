import { X } from "lucide-react";
import React, { useState } from "react";

type Review = {
  id: number;
  description: string;
  messageImage: string;
};

const reviews: Review[] = [
  {
    id: 1,
    description:
      "אחרי 4 ביטולים בשרפה יצא מדיכאון קשה ואפילו מצא והתחיל לעבוד, לקח את עצמו בידים",
    messageImage: "/review.jpg",
  },
  { id: 2, description: "חרדות נעלמו", messageImage: "/review2.jpg" },
  {
    id: 3,
    description: "ביטול כישוף מרחוק, החזרת אהבה,  הרחקה מהמאהבת",
    messageImage: "/review3.jpg",
  },
  {
    id: 4,
    description:
      "יצא הכישוף שעשה האקס שתרצה רק אותו, השתחררה מהכישוף וחזר חשק לזווג חדש",
    messageImage: "/review4.jpg",
  },
  {
    id: 5,
    description: "חרדות נעלמו אחרי שרפת ביטול חסימות וכישוף",
    messageImage: "/review5.jpg",
  },
  {
    id: 6,
    description: "עברו חרדות ופגש בת זוג אחרי שרפת ביטול כישוף וחסימות",
    messageImage: "/review6.jpg",
  },
  {
    id: 7,
    description: "ישועות ברפואה אחרי עופרת ,",
    messageImage: "/review7.jpg",
  },
  {
    id: 8,
    description: "מרגישה יותר טוב בריאותיות אחרי שרפות ביטול כישוף וחסימות",
    messageImage: "/review8.jpg",
  },
  {
    id: 9,
    description: "ביטול כישוף הפרדה בן הורים לבת שלהם וחרס נגד המכשפת",
    messageImage: "/review9.jpg",
  },
  {
    id: 10,
    description: "צנתור נקי לאחר טהור בעופרת",
    messageImage: "/review10.jpg",
  },
  {
    id: 11,
    description: "הבן חזר לקשר אחרי שנה הוצאת כישוף מרחוק והחזרת אהבה",
    messageImage: "/review11.jpg",
  },
  {
    id: 12,
    description:
      "אחרי עופרת וכתיבת חותמות האמא חזרה לעצמה ומתנהגת יפה לבת אחרי יסורים של כישוף מחבר של האם",
    messageImage: "/review12.jpg",
  },
  {
    id: 13,
    description: "נס רפואי אחרי הסרה בשרפה",
    messageImage: "/review13.jpg",
  },
  {
    id: 14,
    description: "שרפה ביטולים והבעל נשאר",
    messageImage: "/review14.jpg",
  },
  {
    id: 15,
    description: "עשו הסרת כישוף וחסימות ונפתחו והסתדרו דברים",
    messageImage: "/review15.jpg",
  },
  {
    id: 16,
    description:
      "ניקוי חסימות וכישוף שרפו חותמות לפני קליטה להריון ובמהלך ההריון ישתבח שמו",
    messageImage: "/review16.jpg",
  },
  {
    id: 17,
    description:
      "פחדים חרדות, חוסר שינה, רוח שסביבה כל הזמן. ביטולים כחולים וחרס נגד כישוף  פתרו את הבעיה",
    messageImage: "/review17.jpg",
  },
  {
    id: 18,
    description: "הכנעה מול הגרוש עשתה רק טוב",
    messageImage: "/review18.jpg",
  },
  {
    id: 18,
    description: "המלצה מהרב אליהו אבירז'ל ראש אבות בתי הדין הרבניים ירושלים",
    messageImage: "/gradrecomend4.jpg",
  },
];

const ReviewsSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNextImage = () => {
    const nextIndex = (currentIndex + 1) % reviews.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrevImage = () => {
    const prevIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    setCurrentIndex(prevIndex);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 px-4 mt-10" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <figure
              key={review.id}
              className="relative overflow-hidden rounded-xl group cursor-pointer"
              style={{ height: "clamp(300px, 40vw, 500px)" }}
              onClick={() => openModal(index)}
            >
              <img
                src={review.messageImage}
                alt={`Review ${review.id}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-75 transition-opacity duration-300"></div>
              <figcaption className="absolute bottom-4 left-4 right-4">
                <p
                  className="text-white text-lg"
                  style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.7)" }}
                >
                  "{review.description}"
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center bg-black/70 backdrop-blur-sm transition duration-300 p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-[80vw] md:max-w-md p-4 bg-white rounded-lg shadow-2xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg text-gray-600 hover:text-gray-800 transition duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="modal-body flex flex-col items-center relative">
              <img
                src={reviews[currentIndex].messageImage}
                alt={`Review ${reviews[currentIndex].id}`}
                className="max-w-full max-h-[50vh] rounded-lg object-contain"
              />
              <div className="mt-4 text-center">
                <p className="text-gray-800 text-lg">
                  "{reviews[currentIndex].description}"
                </p>
              </div>
              <button
                onClick={handlePrevImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-gray-900 text-4xl transition duration-300 cursor-pointer"
              >
                &#8249;
              </button>
              <button
                onClick={handleNextImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-gray-900 text-4xl transition duration-300 cursor-pointer"
              >
                &#8250;
              </button>
            </div>

            <div className="mt-4 flex flex-col items-center gap-2">
              <div className="flex flex-row items-center gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full transition ${
                      currentIndex === index ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  ></button>
                ))}
              </div>
              <span className="text-gray-600 text-sm">
                {currentIndex + 1}/{reviews.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ReviewsSection;
