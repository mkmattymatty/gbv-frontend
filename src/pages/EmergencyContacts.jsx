// frontend/src/pages/EmergencyContacts.jsx
import React, { useState, useEffect } from 'react';
import api from '../services/api';

const EmergencyContacts = () => {
  const [emergency, setEmergency] = useState(null);

  useEffect(() => {
    const fetchEmergency = async () => {
      try {
        const response = await api.get('/resources');
        setEmergency(response.data.emergency);
      } catch (error) {
        console.error('Error fetching emergency contacts:', error);
      }
    };

    fetchEmergency();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-red-600 text-white p-6 rounded-lg shadow-lg mb-8">
          <h1 className="text-4xl font-bold mb-4">🚨 Emergency Help</h1>
          <p className="text-xl">
            If you are in immediate danger, call 911 or your local emergency services
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            {emergency?.title || '24/7 Crisis Hotlines'}
          </h2>
          
          <div className="space-y-6">
            {emergency?.contacts.map((contact, index) => (
              <div key={index} className="border-l-4 border-red-500 pl-6 py-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {contact.name}
                </h3>
                <p className="text-3xl font-bold text-red-600 mb-2">
                  <a href={`tel:${contact.phone.replace(/[^0-9]/g, '')}`}>
                    {contact.phone}
                  </a>
                </p>
                <p className="text-gray-600">Available: {contact.available}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
          <h3 className="text-xl font-bold text-yellow-800 mb-3">
            Safety Planning Tips
          </h3>
          <ul className="space-y-2 text-yellow-900">
            <li>• Keep your phone charged and accessible</li>
            <li>• Have important documents ready to grab</li>
            <li>• Pack an emergency bag with essentials</li>
            <li>• Tell a trusted friend or family member your plans</li>
            <li>• Know the fastest way to leave your home</li>
            <li>• Keep emergency cash hidden if possible</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            What to Expect When You Call
          </h3>
          <p className="text-gray-700 mb-4">
            When you call a crisis hotline, trained advocates will:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• Listen without judgment</li>
            <li>• Help you assess your safety</li>
            <li>• Provide emotional support</li>
            <li>• Explain your options</li>
            <li>• Help you create a safety plan</li>
            <li>• Connect you with local resources</li>
            <li>• Respect your decisions and confidentiality</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmergencyContacts;
