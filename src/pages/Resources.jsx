// frontend/src/pages/Resources.jsx
import React, { useState, useEffect } from 'react';
import api from '../services/api';
import SafetyBanner from '../components/SafetyBanner';

const Resources = () => {
  const [resources, setResources] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await api.get('/resources');
        setResources(response.data);
      } catch (error) {
        console.error('Error fetching resources:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SafetyBanner />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Support Resources</h1>
        <p className="text-lg text-gray-600 mb-8">
          Find services and support in your area or nationally
        </p>

        {/* Support Services */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Support Services</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {resources?.supportServices.map((service, index) => (
              <div key={index} className="border border-gray-200 p-4 rounded">
                <h3 className="font-bold text-gray-800 mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Information */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Legal Support</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-bold text-gray-800 mb-2">Protection Orders</h3>
              <p className="text-gray-600">
                A protection order (restraining order) is a legal order issued by a court to protect you from abuse. 
                Contact your local courthouse or legal aid organization for assistance.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-bold text-gray-800 mb-2">Free Legal Aid</h3>
              <p className="text-gray-600">
                Many communities offer free or low-cost legal services for survivors of domestic violence. 
                Contact your local bar association or domestic violence program for referrals.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-bold text-gray-800 mb-2">Documentation</h3>
              <p className="text-gray-600">
                Keep records of incidents including dates, photos of injuries, threatening messages, 
                police reports, and medical records. Store them in a safe location.
              </p>
            </div>
          </div>
        </div>

        {/* Housing Resources */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Housing & Shelter</h2>
          <p className="text-gray-600 mb-4">
            Emergency shelters provide safe, confidential housing for survivors and their children.
          </p>
          <div className="bg-blue-50 p-4 rounded">
            <p className="font-semibold text-gray-800 mb-2">To find a shelter near you:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Call the National Hotline: 1-800-799-7233</li>
              <li>Search online for "[Your City] domestic violence shelter"</li>
              <li>Contact local social services</li>
              <li>Ask at a hospital or police station</li>
            </ul>
          </div>
        </div>

        {/* Online Safety */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Digital Safety Tips</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✓</span>
              <span>Use devices your abuser doesn't have access to when seeking help</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✓</span>
              <span>Clear your browser history and use incognito/private mode</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✓</span>
              <span>Change passwords on accounts your abuser may access</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✓</span>
              <span>Check privacy settings on social media</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✓</span>
              <span>Be aware of location tracking on your phone and apps</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✓</span>
              <span>Get a new phone number if needed</span>
            </li>
          </ul>
        </div>

        {/* Financial Resources */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Financial Assistance</h2>
          <p className="text-gray-600 mb-4">
            Financial abuse is common. Here are resources to help you gain financial independence:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• Emergency financial assistance programs</li>
            <li>• Job training and employment services</li>
            <li>• Assistance with housing deposits</li>
            <li>• Food assistance programs</li>
            <li>• Childcare subsidies</li>
            <li>• Credit counseling services</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resources;
