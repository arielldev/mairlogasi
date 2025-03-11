import React from "react";

export default function WhatsAppBanner() {
  return (
    <div
      className="bg-gradient-to-r from-green-500 to-green-600 to-green-700 text-white"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between py-3 px-4 sm:px-6 lg:px-8">
        {/* Left side in RTL (appears on the right) – includes the contact text and WhatsApp logo */}
        <div className="flex items-center gap-3">
          <span className="font-bold text-lg">צור קשר דרך</span>
          <img
            src="/whatsapp-logo.png"
            alt="WhatsApp Logo"
            className="h-10 w-auto"
          />
        </div>
        {/* Right side in RTL (appears on the left) – clickable phone number */}
        <div className="mt-2 sm:mt-0">
          <a
            href="https://wa.me/050-76080617"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-700 font-bold px-3 py-1 rounded shadow hover:bg-green-100 transition-colors"
          >
            050-7608061
          </a>
        </div>
      </div>
    </div>
  );
}
