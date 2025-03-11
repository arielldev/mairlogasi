"use client";

import { Facebook, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa"; // Correct TikTok icon import from react-icons/fa

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
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="text-black hover:text-gray-600 transition-colors" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="text-black hover:text-gray-600 transition-colors" />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="text-black hover:text-gray-600 transition-colors mt-1 ml-3" />
          </a>
        </div>
      </div>

      {/* Credits and Copyright */}
      <div className="mt-4 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} שם העסק שלך. כל הזכויות שמורות.</p>
        <p>
          נבנה באהבה על ידי{" "}
          <a className="text-blue-500" href="">
            אריאל
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
