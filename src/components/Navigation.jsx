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
            2koSafe Haven
          </Link>

          <div className="flex gap-4 items-center">
            {user ? (
              <>
                <Link to="/dashboard" className="hover:text-purple-200">
                  Dashboard
                </Link>
                <Link to="/history" className="hover:text-purple-200">
                  GBV History
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-purple-900 hover:bg-purple-800 px-4 py-2 rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-purple-200">Login</Link>
                <Link
                  to="/register"
                  className="bg-purple-900 hover:bg-purple-800 px-4 py-2 rounded"
                >
                  Get Started
                </Link>
                <Link to="/history" className="hover:text-purple-200">
                  GBV History
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
