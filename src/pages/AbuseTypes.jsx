// frontend/src/pages/AbuseTypes.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AbuseTypes = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4"
      >
        Types of Abuse
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-gray-600 mb-6"
      >
        Understanding the different types of abuse is the first step in identifying
        and seeking help. Abuse can be physical, emotional, sexual, financial, or
        psychological.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
            Physical Abuse
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Physical harm or threat of harm. Can include hitting, slapping, or other forms of physical violence.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
            Emotional Abuse
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Psychological harm such as manipulation, intimidation, humiliation, or controlling behavior.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
            Sexual Abuse
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Any unwanted sexual contact, coercion, or harassment.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
            Financial Abuse
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Controlling a person’s financial resources, preventing access to money or employment.
          </p>
        </div>
      </div>

      {/* Removed the “Next: Resources” / Safety Planning link */}

    </div>
  );
};

export default AbuseTypes;
