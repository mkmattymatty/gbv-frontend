// frontend/src/pages/AbuseTypes.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import SafetyBanner from '../components/SafetyBanner';

const AbuseTypes = () => {
  const [abuseTypes, setAbuseTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedType, setExpandedType] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAbuseTypes = async () => {
      try {
        const response = await api.get('/resources');
        setAbuseTypes(response.data.abuseTypes);
      } catch (error) {
        console.error('Error fetching abuse types:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAbuseTypes();
  }, []);

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SafetyBanner />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Understanding Gender-Based Violence
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Knowledge is power. Learn about different forms of abuse and recognize warning signs.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <p className="text-gray-700">
            <strong>Important:</strong> Abuse can take many forms and often involves multiple types occurring together. 
            If you recognize these patterns in your relationship, please know that support is available and you deserve to be safe.
          </p>
        </div>

        <div className="space-y-4">
          {abuseTypes.map((abuse, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => setExpandedType(expandedType === index ? null : index)}
                className="w-full px-6 py-4 text-left hover:bg-gray-50 transition"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-purple-700">{abuse.type}</h3>
                  <span className="text-2xl">{expandedType === index ? '−' : '+'}</span>
                </div>
              </button>

              {expandedType === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 mb-4">{abuse.description}</p>

                  <div className="bg-red-50 p-4 rounded">
                    <h4 className="font-bold text-red-700 mb-2">Warning Signs:</h4>
                    <ul className="space-y-1">
                      {abuse.signs.map((sign, i) => (
                        <li key={i} className="text-gray-700 flex items-start">
                          <span className="text-red-600 mr-2">•</span>
                          <span>{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 bg-purple-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Remember: It's Not Your Fault
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start"><span className="text-purple-600 mr-2">✓</span><span>Abuse is never the victim's fault, regardless of circumstances</span></li>
            <li className="flex items-start"><span className="text-purple-600 mr-2">✓</span><span>You deserve respect, safety, and dignity in all relationships</span></li>
            <li className="flex items-start"><span className="text-purple-600 mr-2">✓</span><span>Help is available - you don't have to face this alone</span></li>
            <li className="flex items-start"><span className="text-purple-600 mr-2">✓</span><span>Creating a safety plan can help protect you and your loved ones</span></li>
          </ul>
        </div>

        {/* NAVIGATION ARROWS */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg font-semibold"
          >
            ← Back to Safety Planning
          </button>
          <button
            onClick={() => navigate('/safety-planning')}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold"
          >
            Next: Resources →
          </button>
        </div>
      </div>
    </div>
  );
};

export default AbuseTypes;
