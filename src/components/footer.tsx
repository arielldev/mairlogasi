"use client";

import { Facebook, Instagram } from "lucide-react";
import { FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa"; // Correct TikTok icon import from react-icons/fa

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6" dir="rtl">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src="/mair.jpg"
            alt="Logo"
            className="h-11 w-11 rounded-full object-cover"
          />
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a
            href="https://www.facebook.com/profile.php?id=100076499254049&sk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="text-black hover:text-gray-600 transition-colors" />
          </a>
          <a
            href="https://www.instagram.com/meirlogasi7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="text-black hover:text-gray-600 transition-colors" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCUIx0WuxjqAnAWQzrEbg6fQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-black hover:text-gray-600 transition-colors mt-1 ml-3 " />
          </a>
        </div>
      </div>

      {/* Credits and Copyright */}
      <div className="mt-4 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} מאיר לוגסי. כל הזכויות שמורות.</p>
        <p className="text-xsm">
          Made By{" "}
          <span className="underline">
            <a href="https://arielelkaslasi.dev">Ariel</a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
