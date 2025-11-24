// frontend/src/pages/SafetyPlanning.jsx
import React, { useState, useEffect } from 'react';
import api from '../services/api';
import SafetyBanner from '../components/SafetyBanner';

const SafetyPlanning = () => {
  const [safetyPlan, setSafetyPlan] = useState({
    safePlaces: [{ name: '', address: '', notes: '' }],
    trustedContacts: [{ name: '', phone: '', relationship: '' }],
    warningSignals: [''],
    copingStrategies: [''],
    importantDocuments: [''],
    financialPlanning: {
      hasAccount: false,
      accountLocation: '',
      emergencyFunds: ''
    },
    transportationPlan: '',
    childrenSafety: '',
    notes: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchSafetyPlan();
  }, []);

  const fetchSafetyPlan = async () => {
    try {
      const response = await api.get('/safety-plans');
      if (response.data) {
        setSafetyPlan(response.data);
      }
    } catch (error) {
      console.error('Error fetching safety plan:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage('');
    
    try {
      await api.put('/safety-plans', safetyPlan);
      setMessage('Safety plan saved successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Error saving safety plan. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const addItem = (field) => {
    if (field === 'safePlaces' || field === 'trustedContacts') {
      setSafetyPlan({
        ...safetyPlan,
        [field]: [...safetyPlan[field], field === 'safePlaces' 
          ? { name: '', address: '', notes: '' }
          : { name: '', phone: '', relationship: '' }]
      });
    } else {
      setSafetyPlan({
        ...safetyPlan,
        [field]: [...safetyPlan[field], '']
      });
    }
  };

  const updateItem = (field, index, value, subField = null) => {
    const newItems = [...safetyPlan[field]];
    if (subField) {
      newItems[index][subField] = value;
    } else {
      newItems[index] = value;
    }
    setSafetyPlan({ ...safetyPlan, [field]: newItems });
  };

  const removeItem = (field, index) => {
    const newItems = safetyPlan[field].filter((_, i) => i !== index);
    setSafetyPlan({ ...safetyPlan, [field]: newItems });
  };

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SafetyBanner />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Safety Planning</h1>
        <p className="text-lg text-gray-600 mb-8">
          Create a personalized safety plan to help protect yourself and your loved ones. 
          This information is stored securely and privately.
        </p>

        {message && (
          <div className={`mb-6 p-4 rounded ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {message}
          </div>
        )}

        <div className="space-y-8">
          {/* Safe Places */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Safe Places</h2>
            <p className="text-gray-600 mb-4">List places you can go if you need to leave quickly</p>
            
            {safetyPlan.safePlaces.map((place, index) => (
              <div key={index} className="mb-4 p-4 border border-gray-200 rounded">
                <input
                  type="text"
                  placeholder="Place name"
                  value={place.name}
                  onChange={(e) => updateItem('safePlaces', index, e.target.value, 'name')}
                  className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
                />
                <input
                  type="text"
                  placeholder="Address"
                  value={place.address}
                  onChange={(e) => updateItem('safePlaces', index, e.target.value, 'address')}
                  className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
                />
                <textarea
                  placeholder="Notes (e.g., contact person, access details)"
                  value={place.notes}
                  onChange={(e) => updateItem('safePlaces', index, e.target.value, 'notes')}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  rows="2"
                />
                {safetyPlan.safePlaces.length > 1 && (
                  <button
                    onClick={() => removeItem('safePlaces', index)}
                    className="mt-2 text-red-600 hover:text-red-700"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={() => addItem('safePlaces')}
              className="text-purple-600 hover:text-purple-700 font-semibold"
            >
              + Add Safe Place
            </button>
          </div>

          {/* Trusted Contacts */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Trusted Contacts</h2>
            <p className="text-gray-600 mb-4">People you can call in an emergency</p>
            
            {safetyPlan.trustedContacts.map((contact, index) => (
              <div key={index} className="mb-4 p-4 border border-gray-200 rounded">
                <input
                  type="text"
                  placeholder="Name"
                  value={contact.name}
                  onChange={(e) => updateItem('trustedContacts', index, e.target.value, 'name')}
                  className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  value={contact.phone}
                  onChange={(e) => updateItem('trustedContacts', index, e.target.value, 'phone')}
                  className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
                />
                <input
                  type="text"
                  placeholder="Relationship (e.g., friend, family)"
                  value={contact.relationship}
                  onChange={(e) => updateItem('trustedContacts', index, e.target.value, 'relationship')}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
                {safetyPlan.trustedContacts.length > 1 && (
                  <button
                    onClick={() => removeItem('trustedContacts', index)}
                    className="mt-2 text-red-600 hover:text-red-700"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={() => addItem('trustedContacts')}
              className="text-purple-600 hover:text-purple-700 font-semibold"
            >
              + Add Contact
            </button>
          </div>

          {/* Warning Signals */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Warning Signals</h2>
            <p className="text-gray-600 mb-4">Signs that violence may occur</p>
            
            {safetyPlan.warningSignals.map((signal, index) => (
              <div key={index} className="mb-2 flex gap-2">
                <input
                  type="text"
                  placeholder="Describe a warning signal"
                  value={signal}
                  onChange={(e) => updateItem('warningSignals', index, e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded"
                />
                {safetyPlan.warningSignals.length > 1 && (
                  <button
                    onClick={() => removeItem('warningSignals', index)}
                    className="text-red-600 hover:text-red-700"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={() => addItem('warningSignals')}
              className="mt-2 text-purple-600 hover:text-purple-700 font-semibold"
            >
              + Add Warning Signal
            </button>
          </div>

          {/* Additional Sections */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Transportation Plan</h2>
            <textarea
              placeholder="How will you leave safely? (e.g., keep car keys ready, money for taxi, bus routes)"
              value={safetyPlan.transportationPlan}
              onChange={(e) => setSafetyPlan({ ...safetyPlan, transportationPlan: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              rows="3"
            />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Additional Notes</h2>
            <textarea
              placeholder="Any other important information for your safety"
              value={safetyPlan.notes}
              onChange={(e) => setSafetyPlan({ ...safetyPlan, notes: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              rows="4"
            />
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold disabled:bg-gray-400"
          >
            {saving ? 'Saving...' : 'Save Safety Plan'}
          </button>
        </div>

        <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4">
          <p className="text-sm text-yellow-800">
            <strong>Safety Tip:</strong> Print or write down your safety plan and keep it somewhere safe. 
            Share it with a trusted person if possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SafetyPlanning;