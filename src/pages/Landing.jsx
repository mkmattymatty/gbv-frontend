// frontend/src/pages/Landing.jsx
import React from "react";
import { Link } from "react-router-dom";
import SafetyBanner from "../components/SafetyBanner";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";

import physicalImg from "../assets/images/physical.png";
import sexualImg from "../assets/images/sexual.png";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      {/* HEADER WITH TOGGLE */}
      <div className="container mx-auto px-4 py-4 flex items-center mb-6">
        <ThemeToggle />
        <h1 className="text-3xl font-bold ml-2 text-gray-800 dark:text-gray-100">
          2koSafe Haven
        </h1>
      </div>

      <SafetyBanner />

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* MAIN HERO */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4"
          >
            Survivor Support and Safety Design
          </motion.h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            2koSafe Haven provides support, resources, and safety planning for survivors of gender-based violence
          </p>

          <div className="flex gap-4 justify-center">
            <Link
              to="/register"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold"
            >
              Get Started
            </Link>
            <Link
              to="/emergency"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-semibold"
            >
              Emergency Help
            </Link>
          </div>
        </div>

        {/* SUPPORT SECTIONS */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-purple-700 mb-3">Survivor Support</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ Understanding different forms of abuse</li>
              <li>✓ Personalized safety planning</li>
              <li>✓ Access to support resources</li>
              <li>✓ Crisis hotline information</li>
              <li>✓ Confidential and secure</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-purple-700 mb-3">Safety by Design</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ Quick exit button (ESC key)</li>
              <li>✓ No browsing history stored</li>
              <li>✓ Secure authentication</li>
              <li>✓ Anonymous browsing option</li>
              <li>✓ Emergency contact quick access</li>
            </ul>
          </div>
        </div>

        {/* FORMS OF GENDER-BASED VIOLENCE */}
        <div className="bg-purple-50 dark:bg-gray-800 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Forms of Gender-Based Violence
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {/* Physical Abuse */}
            <div className="bg-white dark:bg-gray-700 p-4 rounded shadow flex flex-col items-center">
              <img src={physicalImg} alt="Physical abuse" className="w-35 h-24 mb-2 rounded" />
              <h4 className="font-bold text-purple-700 mb-1">Physical</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                Hitting, pushing, or any physical harm
              </p>
            </div>

            {/* Emotional Abuse */}
            <div className="bg-white dark:bg-gray-700 p-4 rounded shadow flex flex-col items-center">
              <h4 className="font-bold text-purple-700 mb-1">Emotional</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                Manipulation, threats, isolation
              </p>
            </div>

            {/* Sexual Abuse */}
            <div className="bg-white dark:bg-gray-700 p-4 rounded shadow flex flex-col items-center">
              <img src={sexualImg} alt="Sexual abuse" className="w-60 h-24 mb-2 rounded" />
              <h4 className="font-bold text-purple-700 mb-1">Sexual</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                Non-consensual sexual activity
              </p>
            </div>

            {/* Financial Abuse */}
            <div className="bg-white dark:bg-gray-700 p-4 rounded shadow flex flex-col items-center">
              <h4 className="font-bold text-purple-700 mb-1">Financial</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                Controlling money and resources
              </p>
            </div>

            {/* Digital Abuse */}
            <div className="bg-white dark:bg-gray-700 p-4 rounded shadow flex flex-col items-center">
              <h4 className="font-bold text-purple-700 mb-1">Digital</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                Monitoring, tracking, harassment online
              </p>
            </div>

            {/* Stalking */}
            <div className="bg-white dark:bg-gray-700 p-4 rounded shadow flex flex-col items-center">
              <h4 className="font-bold text-purple-700 mb-1">Stalking</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                Repeated unwanted attention
              </p>
            </div>
          </div>
        </div>

        {/* HELPFUL RESOURCES */}
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Helpful Resources</h2>
          <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-400">
            <li>
              <a
                href="https://final-frontend-psi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GBV Medical Support
              </a> – Consultation, referral, and treatment for survivors of gender-based violence. Affiliated with 2KO Safe Haven.
            </li>
            <li>
              <a href="http://www.youtube.com/@MathiasMwaro" target="_blank" rel="noopener noreferrer">
                MathiasMwaro (Next TechStack) YouTube Channel
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@actionaidinternationaltheg6520" target="_blank" rel="noopener noreferrer">
                ActionAid International YouTube Channel
              </a>
            </li>
          </ul>
        </div>

        {/* EMERGENCY SECTION */}
        <div className="bg-red-50 dark:bg-red-900 border-l-4 border-red-500 p-6 rounded-lg mb-12">
          <h3 className="text-xl font-bold text-red-700 dark:text-red-300 mb-2">In Immediate Danger?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            If you or someone you know is in immediate danger, please call emergency services or use our emergency resources.
          </p>
          <div className="space-y-2">
            <p className="font-semibold">📞 Emergency: 911</p>
            <p className="font-semibold">📞 National Hotline: 1-800-799-7233</p>
            <p className="font-semibold">💬 Text HOME to 741741</p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Landing;
