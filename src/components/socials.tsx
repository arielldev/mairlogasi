import React, { useState } from "react";
import {
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaEnvelope,
} from "react-icons/fa";

const SocialDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="cursor-pointer bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-r-lg focus:outline-none shadow-md transform transition duration-300 hover:scale-105 active:scale-95"
        >
          <FaEnvelope className="inline-block mr-2" />
          צור קשר
        </button>
        {isOpen && (
          <div className="absolute left-full top-0 ml-2 w-40 bg-white rounded shadow-lg transition-all duration-300 ease-in-out transform animate-fadeIn">
            <a
              href="https://www.youtube.com/channel/UCUIx0WuxjqAnAWQzrEbg6fQ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-gray-100"
            >
              <FaYoutube className="text-red-600 mr-2" />
              יוטיוב
            </a>
            <a
              href="https://www.instagram.com/meirlogasi7/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-gray-100"
            >
              <FaInstagram className="text-pink-500 mr-2" />
              אינסטגרם
            </a>
            <a
              href="https://wa.me/972507608061"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-gray-100"
            >
              <FaWhatsapp className="text-green-500 mr-2" />
              וואטסאפ
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100076499254049&sk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-gray-100"
            >
              <FaFacebookF className="text-blue-800 mr-2" />
              פייסבוק
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialDropdown;
