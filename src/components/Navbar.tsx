import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-green-600" />
              <span className="text-xl font-bold text-gray-800">KrishiAI</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/crop-recommender" className="text-gray-600 hover:text-green-600 transition-colors">
              Crop Advisor
            </Link>
            <Link to="/fertilizer-recommender" className="text-gray-600 hover:text-green-600 transition-colors">
              Fertilizer Guide
            </Link>
            <Link to="/disease-detector" className="text-gray-600 hover:text-green-600 transition-colors">
              Disease Detection
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;