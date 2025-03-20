"use client";

import { X } from "lucide-react";
import { useState } from "react";

// Define the interface for gallery items. The description field is now optional.
interface GalleryItem {
  type: "image" | "youtube" | "instagram" | "video";
  src: string;
  alt: string;
  category: string;
  description?: string;
  instagramUrl?: string;
}

interface GallerySection {
  title: string;
  bannerStyle: React.CSSProperties;
  items: GalleryItem[];
}

const GalleryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Banner gradients.
  const neutralBanner = {
    background: "linear-gradient(45deg, #3B82F6, #2563EB, #1D4ED8)",
  };
  const instagramBanner = {
    background:
      "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
  };
  const goldenBanner = {
    background: "linear-gradient(45deg, #DAA520, #FFD700, #FFC107)",
  };

  // Sample gallery items.
  const galleryItems: GalleryItem[] = [
    // Items for the "עוד" category.
    {
      type: "image",
      src: "/mair.jpg",
      alt: "תמונה 1",
      category: "עוד",
      description: "",
    },
    {
      type: "image",
      src: "/mair2.jpeg",
      alt: "תמונה 2",
      category: "עוד",
      description: "",
    },
    {
      type: "image",
      src: "/eye.jpeg",
      alt: "תמונה 5",
      category: "עוד",
      description: "",
    },
    {
      type: "image",
      src: "/gradrecomend4.jpg",
      alt: "תמונה 12",
      category: "עוד",
      description: "",
    },
    {
      type: "image",
      src: "/ring.jpeg",
      alt: "תמונה 6",
      category: "עוד",
      description: "",
    },
    {
      type: "image",
      src: "/baby.jpeg",
      alt: "תמונה 3",
      category: "עוד",
      description: "",
    },
    {
      type: "image",
      src: "/bookpaper.jpeg",
      alt: "תמונה 4",
      category: "עוד",
      description: "",
    },
    // Moved YouTube items now to the "עוד" category.
    {
      type: "youtube",
      src: "https://www.youtube.com/embed/c0Q0VWiXUAc?playsinline=1",
      alt: "YouTube Video 1",
      category: "עוד",
      description: "",
    },
    {
      type: "youtube",
      src: "https://www.youtube.com/embed/FmJhoWHYlx4?playsinline=1",
      alt: "YouTube Video 2",
      category: "עוד",
      description: "",
    },
    {
      type: "youtube",
      src: "https://www.youtube.com/embed/uIwmZeqrpMk?playsinline=1",
      alt: "YouTube Video 3",
      category: "עוד",
      description: "",
    },
    {
      type: "youtube",
      src: "https://www.youtube.com/embed/hR53FUOw0AI?playsinline=1",
      alt: "YouTube Video 4",
      category: "עוד",
      description: "",
    },
    {
      type: "image",
      src: "/returnlove.jpg",
      alt: "החזרת אהבה",
      category: "החזרת אהבה והפרדה",
      description: "החזרת אהבה",
    },
    {
      type: "image",
      src: "/eye2.jpg",
      alt: "הסרת עין הרע",
      category: "הסרת עין הרע",
      description: "הסרת עין הרע",
    },
    {
      type: "image",
      src: "/eye3.jpg",
      alt: "הסרת עין הרע",
      category: "הסרת עין הרע",
      description: "הסרת עין הרע",
    },
    {
      type: "video",
      src: "/eyevd.mp4",
      alt: "הסרת עין הרע",
      category: "הסרת עין הרע",
      description: "הסרת עין הרע ורואים הריון עם בן זכר וברית",
    },
    {
      type: "image",
      src: "/returnlove2.jpg",
      alt: "החזרת אהבה",
      category: "החזרת אהבה והפרדה",
      description: "החזרת אהבה",
    },
    {
      type: "image",
      src: "/returnlove3.jpg",
      alt: "החזרת אהבה",
      category: "החזרת אהבה והפרדה",
      description: "החזרת אהבה",
    },
    {
      type: "video",
      src: "/returnlovevid.mp4",
      alt: "החזרת אהבה",
      category: "החזרת אהבה והפרדה",
      description: "טקס החזרת אהבה",
    },
    {
      type: "video",
      src: "/grayvid.mp4",
      alt: "אבחון בעופרת כישוף להפריד בין בני זוג",
      category: "אבחון בעופרת",
      description: "אבחון בעופרת כישוף להפריד בין בני זוג",
    },
    {
      type: "video",
      src: "/grayvid2.mp4",
      alt: "כישוף קטורת שהעופרת מאבחנת",
      category: "אבחון בעופרת",
      description: "כישוף קטורת שהעופרת מאבחנת",
    },
    {
      type: "image",
      src: "/gray.jpg",
      alt: "ביטול כישוף בשרפה",
      category: "אבחון בעופרת",
      description: "ביטול כישוף בשרפה",
    },
    {
      type: "image",
      src: "/spell.jpg",
      alt: "הסרת כישוף וחסימות",
      category: "ערכות שרפה לביטול כישוף וחסימות קשות",
      description: "הסרת כישוף וחסימות",
    },
    {
      type: "image",
      src: "/cancelspell.jpg",
      alt: "ביטול כישוף וחסימות יוצאים מזיקים",
      category: "ערכות שרפה לביטול כישוף וחסימות קשות",
      description: "ביטול כישוף וחסימות יוצאים מזיקים",
    },
    {
      type: "image",
      src: "/spell2.jpg",
      alt: "הברת כישופים פרצוף של המכשף",
      category: "ערכות שרפה לביטול כישוף וחסימות קשות",
      description: "הברת כישופים פרצוף של המכשף",
    },

    // Instagram items.
    {
      type: "instagram",
      src: "/mair.jpg",
      alt: "Instagram Post 1",
      category: "Instagram",
      description: "תיאור - פוסט אינסטגרם",
      instagramUrl: "https://www.instagram.com",
    },
    {
      type: "instagram",
      src: "/mair.jpg",
      alt: "Instagram Post 2",
      category: "Instagram",
      description: "תיאור - פוסט אינסטגרם",
      instagramUrl: "https://www.instagram.com",
    },
  ];

  // Define section order without YouTube.
  const sectionOrder = [
    "החזרת אהבה והפרדה",
    "אבחון בעופרת",
    "הסרת עין הרע",
    "ערכות שרפה לביטול כישוף וחסימות קשות",
    "עדויות של לקוחות",
    "Instagram",
    "עוד",
  ];

  // Define sections with manual configuration.
  const sectionsConfig: {
    [key: string]: { title: string; bannerStyle: React.CSSProperties };
  } = {
    "החזרת אהבה והפרדה": {
      title: "החזרת אהבה והפרדה",
      bannerStyle: neutralBanner,
    },
    "אבחון בעופרת": {
      title: "אבחון בעופרת",
      bannerStyle: neutralBanner,
    },
    "הסרת עין הרע": {
      title: "הסרת עין הרע",
      bannerStyle: neutralBanner,
    },
    "ערכות שרפה לביטול כישוף וחסימות קשות": {
      title: "ערכות שרפה לביטול כישוף וחסימות קשות",
      bannerStyle: neutralBanner,
    },
    "עדויות של לקוחות": {
      title: "עדויות של לקוחות",
      bannerStyle: neutralBanner,
    },
    Instagram: {
      title: "Instagram",
      bannerStyle: instagramBanner,
    },
    עוד: {
      title: "עוד",
      bannerStyle: goldenBanner,
    },
  };

  // Group items into sections based solely on the item's category.
  const gallerySections: GallerySection[] = sectionOrder.map((key) => {
    const items = galleryItems.filter((item) => item.category === key);
    return {
      title: sectionsConfig[key].title,
      bannerStyle: sectionsConfig[key].bannerStyle,
      items,
    };
  });

  // For modal navigation, include only image and instagram items.
  const imageItems = galleryItems.filter(
    (item) => item.type === "image" || item.type === "instagram"
  );

  const openModal = (content: GalleryItem, index: number) => {
    setModalContent(content);
    if (content.type === "image" || content.type === "instagram") {
      const imageIndex = imageItems.findIndex((img) => img.src === content.src);
      setCurrentIndex(imageIndex);
    } else {
      setCurrentIndex(index);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const handleNextImage = () => {
    const nextIndex = (currentIndex + 1) % imageItems.length;
    setCurrentIndex(nextIndex);
    setModalContent(imageItems[nextIndex]);
  };

  const handlePrevImage = () => {
    const prevIndex =
      (currentIndex - 1 + imageItems.length) % imageItems.length;
    setCurrentIndex(prevIndex);
    setModalContent(imageItems[prevIndex]);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setModalContent(imageItems[index]);
  };

  return (
    <div className="gallery-page bg-white py-10 px-4 mt-22 md:mt-10" dir="rtl">
      {gallerySections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-10">
          {/* Section Banner with Pattern */}
          <div
            className="mx-auto flex items-center justify-center py-4 px-6 rounded-t-lg text-white font-semibold text-xl"
            style={{
              maxWidth: "90%",
              height: "80px",
              backgroundImage: `${
                section.bannerStyle.background ||
                "linear-gradient(45deg, #3B82F6, #2563EB, #1D4ED8)"
              }, repeating-linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1) 10px, transparent 10px, transparent 20px)`,
              backgroundBlendMode: "overlay",
              backgroundSize: "cover",
            }}
          >
            {section.title}
          </div>

          {/* Mobile Layout (kept as is, with fixed aspect ratio for consistency) */}
          <div className="block lg:hidden columns-1 sm:columns-2 md:columns-3 gap-4 bg-white rounded-b-lg p-4 shadow">
            {section.items.map((item, index) => (
              <div
                key={index}
                className="break-inside-avoid mb-4 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 cursor-pointer relative"
                onClick={
                  item.type !== "youtube"
                    ? () => openModal(item, index)
                    : undefined
                }
              >
                {item.type === "youtube" ? (
                  <div className="w-full relative pb-[56.25%] bg-gray-100">
                    <iframe
                      src={item.src}
                      title={item.alt}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      {...{ playsinline: "true", "webkit-playsinline": "true" }}
                    />
                  </div>
                ) : item.type === "instagram" ? (
                  <div className="w-full relative pb-[56.25%] bg-gray-100 group">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                      <div className="inline-block p-0.5 rounded-md bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888]">
                        <a
                          href={item.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-5 py-2 rounded-md bg-transparent text-white transition-colors duration-300"
                        >
                          צפה בפוסט
                        </a>
                      </div>
                    </div>
                  </div>
                ) : item.type === "video" ? (
                  <div className="w-full relative pb-[56.25%] bg-gray-100">
                    <video
                      src={item.src}
                      controls
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full relative pb-[56.25%] bg-gray-100">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                )}
                {item.description && (
                  <div className="p-2 bg-gray-50">
                    <p className="text-sm text-gray-700">{item.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Layout (redesigned with fixed aspect ratio for all media) */}
          <div className="hidden lg:grid grid-cols-4 gap-6 bg-white rounded-b-lg p-4 shadow">
            {section.items.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow hover:shadow-xl transform transition-all duration-300 cursor-pointer"
                onClick={
                  item.type !== "youtube"
                    ? () => openModal(item, index)
                    : undefined
                }
              >
                {item.type === "youtube" ? (
                  <div className="w-full relative pb-[56.25%] bg-gray-100">
                    <iframe
                      src={item.src}
                      title={item.alt}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      {...{ playsinline: "true", "webkit-playsinline": "true" }}
                    />
                  </div>
                ) : item.type === "instagram" ? (
                  <div className="w-full relative pb-[56.25%] bg-gray-100 group">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                      <div className="inline-block p-1 rounded-md bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888]">
                        <a
                          href={item.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 rounded-md bg-transparent text-white transition-colors duration-300"
                        >
                          צפה בפוסט
                        </a>
                      </div>
                    </div>
                  </div>
                ) : item.type === "video" ? (
                  <div className="w-full relative pb-[56.25%] bg-gray-100">
                    <video
                      src={item.src}
                      controls
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full relative pb-[56.25%] bg-gray-100">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                )}
                {item.description && (
                  <div className="p-2 bg-gray-50">
                    <p className="text-sm text-gray-700">{item.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {isModalOpen && modalContent && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center bg-black/70 backdrop-blur-sm transition duration-300 p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-md p-4 bg-white rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg text-gray-600 hover:text-gray-800 transition duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="modal-body flex flex-col items-center relative">
              {modalContent.type === "image" ||
              modalContent.type === "instagram" ? (
                <img
                  src={modalContent.src}
                  alt={modalContent.alt}
                  className="max-w-full max-h-[80vh] rounded-lg object-contain"
                />
              ) : modalContent.type === "youtube" ? (
                <div className="w-full relative pb-[56.25%] bg-gray-100">
                  <iframe
                    src={modalContent.src}
                    title={modalContent.alt}
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    {...{ playsinline: "true", "webkit-playsinline": "true" }}
                  />
                </div>
              ) : modalContent.type === "video" ? (
                <div className="w-full relative pb-[56.25%] bg-gray-100">
                  <video
                    src={modalContent.src}
                    controls
                    className="absolute top-0 left-0 w-full h-full rounded-lg object-contain"
                  />
                </div>
              ) : null}

              {modalContent.type === "instagram" &&
                modalContent.instagramUrl && (
                  <div className="mt-4">
                    <a
                      href={modalContent.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-5 py-2 rounded-md bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] text-white font-semibold text-xl transition-colors duration-300"
                    >
                      צפה בפוסט באינסטגרם
                    </a>
                  </div>
                )}

              {(modalContent.type === "image" ||
                modalContent.type === "instagram") && (
                <>
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
                </>
              )}
            </div>

            {(modalContent.type === "image" ||
              modalContent.type === "instagram") && (
              <div className="mt-4 flex flex-col items-center gap-2">
                <div className="flex flex-row items-center gap-2">
                  {imageItems.map((_, index) => (
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
                  {currentIndex + 1}/{imageItems.length}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
