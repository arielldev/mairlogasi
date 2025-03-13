"use client";

import { useState } from "react";

// Define the interface for gallery items
interface GalleryItem {
  type: "image" | "youtube" | "instagram";
  src: string;
  alt: string;
}

const GalleryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const galleryItems: GalleryItem[] = [
    { type: "image", src: "/mair.jpg", alt: "תמונה 1" },
    { type: "image", src: "/mair2.jpeg", alt: "תמונה 2" },
    {
      type: "youtube",
      src: "https://www.youtube.com/embed/c0Q0VWiXUAc?playsinline=1",
      alt: "YouTube Video 1",
    },
    { type: "image", src: "/eye.jpeg", alt: "תמונה 5" },
    { type: "instagram", src: "/mair.jpg", alt: "Instagram Post 1" },
    { type: "image", src: "/ring.jpeg", alt: "תמונה 6" },
    { type: "instagram", src: "/mair.jpg", alt: "Instagram Post 2" },
    { type: "image", src: "/baby.jpeg", alt: "תמונה 3" },
    {
      type: "youtube",
      src: "https://www.youtube.com/embed/FmJhoWHYlx4?playsinline=1",
      alt: "YouTube Video 2",
    },
    {
      type: "youtube",
      src: "https://www.youtube.com/embed/uIwmZeqrpMk?playsinline=1",
      alt: "YouTube Video 3",
    },
    { type: "image", src: "/bookpaper.jpeg", alt: "תמונה 4" },
    {
      type: "youtube",
      src: "https://www.youtube.com/embed/hR53FUOw0AI?playsinline=1",
      alt: "YouTube Video 4",
    },
  ];

  // Include both "image" and "instagram" types for modal navigation
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
    const prevIndex = (currentIndex - 1 + imageItems.length) % imageItems.length;
    setCurrentIndex(prevIndex);
    setModalContent(imageItems[prevIndex]);
  };

  // Jump to a specific image from the dots
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setModalContent(imageItems[index]);
  };

  return (
    <div className="gallery-page bg-white py-10 px-4 mt-22 md:mt-10" dir="rtl">
      {/* Masonry Layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="break-inside-avoid mb-4 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 cursor-pointer relative"
            onClick={() => openModal(item, index)}
          >
            {item.type === "youtube" ? (
              // For YouTube, preserve the 16:9 aspect ratio
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
              <>
                {/* Instagram Banner */}
                <div
                  className="instagram-banner flex items-center justify-center py-1"
                  style={{
                    background:
                      "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                  }}
                >
                  <img
                    src="/Instagram_icon.png"
                    alt="Instagram logo"
                    className="w-5 h-5 ml-2"
                  />
                  <span className="text-white font-bold">Instagram</span>
                </div>
                {/* Instagram Image */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full object-cover"
                />
              </>
            ) : (
              // For standard images
              <img
                src={item.src}
                alt={item.alt}
                className="w-full object-cover"
              />
            )}
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {isModalOpen && modalContent && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center bg-black/70 backdrop-blur-sm transition duration-300"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full p-6 bg-white rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg text-gray-600 hover:text-gray-800 transition duration-200"
            >
              &times;
            </button>

            <div className="modal-body flex justify-center items-center relative">
              {(modalContent.type === "image" ||
                modalContent.type === "instagram") ? (
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
              ) : null}
              {/* Navigation arrows for images */}
              {(modalContent.type === "image" ||
                modalContent.type === "instagram") && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-gray-900 text-4xl transition duration-300"
                  >
                    &#8249;
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-gray-900 text-4xl transition duration-300"
                  >
                    &#8250;
                  </button>
                </>
              )}
            </div>

            {/* Navigation Dots for Images */}
            {(modalContent.type === "image" ||
              modalContent.type === "instagram") && (
              <div className="mt-4 flex justify-center items-center gap-2">
                {imageItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full transition ${
                      currentIndex === index ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  ></button>
                ))}
                <span className="ml-2 text-gray-600 text-sm">
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
