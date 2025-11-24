// frontend/src/components/Navigation.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navigation = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div>
      {/* MAIN TOP NAVIGATION */}
      <nav className="bg-purple-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            Safe Haven
          </Link>

          <div className="flex gap-4 items-center">
            {user ? (
              <>
                <Link to="/dashboard" className="hover:text-purple-200">Dashboard</Link>
                <Link to="/abuse-types" className="hover:text-purple-200">Learn</Link>
                <Link to="/safety-planning" className="hover:text-purple-200">Safety Plan</Link>
                <Link to="/resources" className="hover:text-purple-200">Resources</Link>
                <Link to="/emergency" className="hover:text-purple-200">Emergency</Link>
                <Link to="/support-community" className="hover:text-purple-200 font-semibold">Support Community</Link>
                <button
                  onClick={handleLogout}
                  className="bg-purple-900 hover:bg-purple-800 px-4 py-2 rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/emergency" className="hover:text-purple-200 font-semibold">Emergency</Link>
                <Link to="/login" className="hover:text-purple-200">Login</Link>
                <Link to="/register" className="bg-purple-900 hover:bg-purple-800 px-4 py-2 rounded">
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
