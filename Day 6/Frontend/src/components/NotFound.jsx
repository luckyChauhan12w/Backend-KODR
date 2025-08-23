import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 p-6">
        {/* 404 Big Text */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-indigo-600 drop-shadow-lg">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-6 text-2xl md:text-3xl font-bold">
          Oops! Page not found
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-gray-500 text-center max-w-md">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <Link
            to="/"
            className="px-6 py-3 rounded-2xl bg-indigo-600 text-white font-medium shadow-md hover:bg-indigo-700 transition-all duration-300"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
