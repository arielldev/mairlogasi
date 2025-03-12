import React from "react";
import { AlertCircle } from "lucide-react";

const NotFound: React.FC = () => {
  return (
    <div
      dir="rtl"
      className="flex flex-col items-center justify-center min-h-screen bg-white"
    >
      <div className="text-center px-4">
        <AlertCircle className="mx-auto mb-4 w-16 h-16 text-blue-600" />
        <h1 className="text-6xl font-bold text-gray-800 mb-2">404</h1>
        <p className="text-xl text-gray-600 mb-6">מצטערים, הדף לא נמצא</p>
        <a
          href="/"
          className="inline-block px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition"
        >
          חזרה לעמוד הבית
        </a>
      </div>
    </div>
  );
};

export default NotFound;
