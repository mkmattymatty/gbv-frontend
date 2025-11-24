import React from "react";
import { FaYoutube, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";
import myLogo from "../assets/mylogo.png"; // your picture

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-gray-300 dark:text-gray-200 py-8 mt-12">
      <div className="container mx-auto px-6 flex flex-col items-center">

        {/* Profile Image / Logo */}
        <img
          src={myLogo}
          alt="Mathias Mwaro Logo"
          className="w-20 h-20 rounded-full border-4 border-purple-600 mb-4 shadow-lg"
        />

        {/* Icons */}
        <div className="flex space-x-6 text-2xl mb-4">
          <a
            href="https://www.youtube.com/@MathiasMwaro"
            className="hover:text-red-500 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>

          <a
            href="https://github.com"
            className="hover:text-gray-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://twitter.com"
            className="hover:text-blue-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>

          <a
            href="https://facebook.com"
            className="hover:text-blue-600 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </div>

        {/* Rights */}
        <p className="text-sm text-gray-400 dark:text-gray-400">
          © {new Date().getFullYear()} Mathias Mwaro — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
