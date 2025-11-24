// frontend/src/pages/Journal.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SafetyBanner from "../components/SafetyBanner";

const Journal = () => {
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState([]);
  const navigate = useNavigate();

  // Load saved entries from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("journalEntries")) || [];
    setEntries(saved);
  }, []);

  const handleSave = () => {
    if (entry.trim() === "") return;
    const newEntries = [entry, ...entries];
    setEntries(newEntries);
    localStorage.setItem("journalEntries", JSON.stringify(newEntries));
    setEntry("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SafetyBanner />

      <div className="max-w-4xl mx-auto">
        {/* Back Arrow */}
        <button
          onClick={() => navigate("/dashboard")}
          className="text-purple-600 hover:text-purple-800 font-bold mb-4 flex items-center"
        >
          ← Back to Dashboard
        </button>

        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Your Personal Journal
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Write and save your thoughts safely. Your entries are stored locally in your browser.
        </p>

        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="Start writing..."
          className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
          rows={6}
        />

        <button
          onClick={handleSave}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold mb-6"
        >
          Save Entry
        </button>

        <div className="space-y-4">
          {entries.length === 0 && <p className="text-gray-500">No entries yet.</p>}
          {entries.map((e, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-700 p-4 rounded shadow">
              <p className="text-gray-800 dark:text-gray-100 whitespace-pre-line">{e}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;
