import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-[90vh] bg-gray-100 px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          📸 Image Upload & Display
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          Upload your images seamlessly with{" "}
          <span className="font-semibold text-teal-500">ImageKit</span>
          and view them instantly in your gallery.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            to="/AddPost"
            className="px-6 py-3 rounded-xl bg-teal-500 text-white font-medium shadow-md hover:bg-teal-600 transition"
          >
            Upload Image
          </Link>
          <Link
            to="/Post"
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-800 font-medium hover:bg-gray-200 transition"
          >
            View Gallery
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
