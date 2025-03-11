"use client";

import React, { useState } from "react";

// Define the interface for gallery items
interface GalleryItem {
  type: "image" | "youtube" | "tiktok"; // Can be image, youtube, or tiktok
  src: string; // The source URL for the image, video, or embed code
  alt: string; // Alt text for images (optional for videos and embeds)
  tiktokUrl?: string; // URL to redirect for TikTok (for redirecting to TikTok platform)
}

const GalleryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0); // To track current image index in modal

  const galleryItems: GalleryItem[] = [
    {
      type: "image",
      src: "/mair.jpg",
      alt: "תמונה 1",
    },
    {
      type: "image",
      src: "/mair.jpg",
      alt: "תמונה 2",
    },
    {
      type: "youtube",
      src: "https://www.youtube.com/embed/c0Q0VWiXUAc", // Example YouTube embed URL
      alt: "YouTube Video 1",
    },
    {
      type: "tiktok",
      src: "/tiktok1.png", // Placeholder image for TikTok (or could be an image from TikTok)
      alt: "TikTok Video 1",
      tiktokUrl: "https://www.tiktok.com/@example/video/7134206015456824577", // Redirect URL to TikTok
    },
    {
      type: "tiktok",
      src: "/tiktok2.png", // Placeholder image for TikTok (or could be an image from TikTok)
      alt: "TikTok Video 2",
      tiktokUrl: "https://www.tiktok.com/@example/video/7480573211602028037 ", // Redirect URL to TikTok
    },
    {
      type: "image",
      src: "/mair.jpg",
      alt: "תמונה 3",
    },
    {
      type: "youtube",
      src: "https://www.youtube.com/embed/FmJhoWHYlx4", // Example YouTube embed URL
      alt: "YouTube Video 2",
    },
    {
      type: "youtube",
      src: "https://www.youtube.com/embed/uIwmZeqrpMk", // Example YouTube embed URL
      alt: "YouTube Video 3",
    },
    {
      type: "youtube",
      src: "https://www.youtube.com/embed/hR53FUOw0AI", // Example YouTube embed URL
      alt: "YouTube Video 3",
    },
    // Add more items here
  ];

  const openModal = (content: GalleryItem, index: number) => {
    setModalContent(content);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const handleNextImage = () => {
    // Only change the image index if the type is "image"
    const nextIndex =
      (currentIndex + 1) %
      galleryItems.filter((item) => item.type === "image").length;
    setCurrentIndex(nextIndex);
    setModalContent(
      galleryItems.filter((item) => item.type === "image")[nextIndex]
    );
  };

  const handlePrevImage = () => {
    // Only change the image index if the type is "image"
    const prevIndex =
      (currentIndex -
        1 +
        galleryItems.filter((item) => item.type === "image").length) %
      galleryItems.filter((item) => item.type === "image").length;
    setCurrentIndex(prevIndex);
    setModalContent(
      galleryItems.filter((item) => item.type === "image")[prevIndex]
    );
  };

  return (
    <div className="gallery-page py-8 mt-12 md:mt-0 " dir="rtl">
      {/* YouTube Videos Section */}
      <div className="bg-blue-600 py-12 relative">
        <h3 className="text-4xl text-center mb-6 text-white font-semibold">
          סרטוני יוטיוב
        </h3>

        <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 mb-8">
          {galleryItems
            .filter((item) => item.type === "youtube")
            .map((item, index) => (
              <div
                key={index}
                className="gallery-item relative cursor-pointer rounded-lg overflow-hidden shadow-2xl hover:scale-105 transform transition-all duration-300"
                onClick={() => openModal(item, index)}
              >
                <iframe
                  src={item.src}
                  title={item.alt}
                  className="w-full h-64 object-cover rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <img
            src="/waves.svg" // Path to your downloaded SVG
            alt="wave"
            className="relative block w-[calc(200%+1.3px)] h-[50px] transform rotate-[180deg]"
          />
        </div>
      </div>

      {/* TikTok Section */}
      <h3 className="text-2xl text-center font-semibold mb-6 text-blue-500 mt-6">
        סרטוני טיקטוק מובילים
      </h3>
      <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 mb-8">
        {galleryItems
          .filter((item) => item.type === "tiktok")
          .map((item, index) => (
            <div
              key={index}
              className="gallery-item relative cursor-pointer rounded-lg overflow-hidden shadow-2xl hover:scale-105 transform transition-all duration-300"
              onClick={() => openModal(item, index)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/70 flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-300">
                <a
                  href={item.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xl font-semibold"
                >
                  צפה בטיקטוק
                </a>
              </div>
            </div>
          ))}
      </div>

      {/* Images Section */}
      <h3 className="text-2xl text-center mb-6 mt-6 font-semibold text-blue-500">
        גלריית תמונות
      </h3>
      <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {galleryItems
          .filter((item) => item.type === "image")
          .map((item, index) => (
            <div
              key={index}
              className="gallery-item relative cursor-pointer rounded-lg overflow-hidden shadow-2xl hover:scale-105 transform transition-all duration-300"
              onClick={() => openModal(item, index)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
      </div>

      {/* Modal for Viewing Image or Video */}
      {isModalOpen && modalContent && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center bg-black/75"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl w-full p-4 bg-white rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing the modal when clicking inside
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl"
            >
              &times;
            </button>

            {/* Modal Content */}
            <div className="modal-body flex justify-center items-center relative">
              {modalContent?.type === "image" ? (
                <img
                  src={modalContent.src}
                  alt={modalContent.alt}
                  className="max-w-full max-h-screen rounded-lg"
                />
              ) : modalContent?.type === "youtube" ? (
                <iframe
                  src={modalContent.src}
                  title={modalContent.alt}
                  className="max-w-full max-h-screen rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : null}

              {/* Left and Right Navigation Buttons (For Images Only) */}
              <button
                onClick={handlePrevImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
              >
                &#8249; {/* Previous Image (Right Arrow for RTL) */}
              </button>
              <button
                onClick={handleNextImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
              >
                &#8250; {/* Next Image (Left Arrow for RTL) */}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
