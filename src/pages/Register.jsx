// frontend/src/pages/Register.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SafetyBanner from '../components/SafetyBanner';
import api from '../services/api'; // <-- IMPORTANT: call backend directly

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    emergencyContact: { name: '', phone: '' }
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('emergency')) {
      const field = name.split('.')[1];
      setFormData({
        ...formData,
        emergencyContact: { ...formData.emergencyContact, [field]: value }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    setLoading(true);

    try {
      // ✅ Direct POST to backend (no auto-login)
      await api.post('/auth/register', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        emergencyContact: formData.emergencyContact
      });

      setSuccess('Account created successfully! Redirecting to login...');

      // ⏳ Wait 1.5 sec then redirect
      setTimeout(() => navigate('/login'), 1500);

    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SafetyBanner />

      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Create Account</h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Password (min 8 characters)
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="8"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500"
            />
          </div>

          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Emergency Contact (Optional)
            </h3>

            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="emergency.name"
              value={formData.emergencyContact.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500"
            />

            <label className="block text-gray-700 mb-2 mt-3">Phone</label>
            <input
              type="tel"
              name="emergency.phone"
              value={formData.emergencyContact.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold disabled:bg-gray-400"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-purple-600 hover:text-purple-700 font-semibold">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
