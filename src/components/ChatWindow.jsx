// frontend/src/components/ChatWindow.jsx
import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import ContactSection from "./ContactSection";

const ChatWindow = ({ onClose }) => {
  const [showTyping, setShowTyping] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTyping(false);
      setShowWelcome(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="fixed bottom-20 right-6 z-50 w-80 md:w-96 bg-white dark:bg-gray-800 dark:text-gray-100 rounded-lg shadow-2xl flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b dark:border-gray-700">
        <div>
          <div className="text-sm font-bold">Haven AI Support</div>
          <div className="text-xs text-gray-500 dark:text-gray-300">Assistant</div>
        </div>

        <button
          onClick={onClose}
          className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label="Close chat"
        >
          <X size={18} />
        </button>
      </div>

      {/* Body */}
      <div className="p-3 flex-1 overflow-y-auto">

        {/* Typing indicator */}
        {showTyping && (
          <div className="text-gray-500 dark:text-gray-300 text-sm flex items-center gap-1 italic mb-2">
            Haven AI is typing
            <span className="animate-pulse">.</span>
            <span className="animate-pulse delay-150">.</span>
            <span className="animate-pulse delay-300">.</span>
          </div>
        )}

        {/* Welcome message */}
        {showWelcome && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="bg-purple-50 dark:bg-purple-900 dark:bg-opacity-30 p-3 rounded-lg shadow mb-3"
          >
            <p className="font-semibold text-purple-800 dark:text-purple-200">
              Hello, I’m Haven AI. 💜  
            </p>

            <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
              I'm here to guide you through safety tips, available resources,
              and support options. Let me know what you need help with —
              you’re not alone.
            </p>

            <p className="text-xs mt-2 text-purple-600 dark:text-purple-300">
              How can I assist you today?
            </p>
          </motion.div>
        )}

        {/* Contact section */}
        <ContactSection />
      </div>

      {/* Disabled Input – optional footer */}
      <div className="px-3 py-2 border-t dark:border-gray-700 bg-gray-100 dark:bg-gray-900">
        <input
          disabled
          placeholder="Type a message (disabled for safety)"
          className="w-full px-3 py-2 rounded border border-gray-300 bg-gray-200 text-gray-500 cursor-not-allowed dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400"
        />
      </div>
    </motion.div>
  );
};

export default ChatWindow;
