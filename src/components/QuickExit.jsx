// frontend/src/components/QuickExit.jsx
import React, { useEffect } from 'react';

const QuickExit = () => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        window.location.replace('https://www.google.com');
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const handleQuickExit = () => {
    window.location.replace('https://www.google.com');
  };

  return (
    <button
      onClick={handleQuickExit}
      className="fixed bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-lg z-50 font-semibold"
      title="Press ESC or click to quickly exit (redirects to Google)"
    >
      Quick Exit (ESC)
    </button>
  );
};

export default QuickExit;
