// frontend/src/pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SafetyBanner from '../components/SafetyBanner';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <SafetyBanner />
      
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Welcome, {user?.username}
        </h1>
        <p className="text-gray-600 mb-8">Your safe space for support and resources</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Link
            to="/emergency"
            className="bg-red-600 hover:bg-red-700 text-white p-6 rounded-lg shadow-lg transition"
          >
            <div className="text-4xl mb-3">🚨</div>
            <h3 className="text-2xl font-bold mb-2">Emergency Help</h3>
            <p>Access crisis hotlines and immediate support</p>
          </Link>

          <Link
            to="/safety-planning"
            className="bg-purple-600 hover:bg-purple-700 text-white p-6 rounded-lg shadow-lg transition"
          >
            <div className="text-4xl mb-3">🛡️</div>
            <h3 className="text-2xl font-bold mb-2">Safety Planning</h3>
            <p>Create your personalized safety plan</p>
          </Link>

          <Link
            to="/abuse-types"
            className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-lg shadow-lg transition"
          >
            <div className="text-4xl mb-3">📚</div>
            <h3 className="text-2xl font-bold mb-2">Learn About Abuse</h3>
            <p>Understanding different forms of violence</p>
          </Link>

          <Link
            to="/resources"
            className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-lg shadow-lg transition"
          >
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="text-2xl font-bold mb-2">Resources</h3>
            <p>Find local and national support services</p>
          </Link>

          <Link
            to="/support-community"
            className="bg-indigo-600 hover:bg-indigo-700 text-white p-6 rounded-lg shadow-lg transition"
          >
            <div className="text-4xl mb-3">💬</div>
            <h3 className="text-2xl font-bold mb-2">Support Community</h3>
            <p className="mb-3">Live Chat Room - Share how you feel or your experiences safely</p>
          </Link>

          <Link
            to="/journal"
            className="bg-orange-600 hover:bg-orange-700 text-white p-6 rounded-lg shadow-lg transition"
          >
            <div className="text-4xl mb-3">📝</div>
            <h3 className="text-2xl font-bold mb-2">Journal</h3>
            <p className="mb-3">Document your journey safely</p>
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Quick Safety Reminders
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✓</span>
              <span>Use the Quick Exit button (ESC key) if you need to leave quickly</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✓</span>
              <span>This platform doesn't store browsing history in your browser</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✓</span>
              <span>Clear your search history and cookies after using shared devices</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✓</span>
              <span>Consider using incognito/private browsing mode</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✓</span>
              <span>Have a safety plan ready - it can save your life</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
