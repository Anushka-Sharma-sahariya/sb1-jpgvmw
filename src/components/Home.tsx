import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Droplet, AlertCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Smart Farming Solutions with AI
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Empowering Indian farmers with artificial intelligence to optimize crop yields,
          improve soil health, and detect plant diseases early.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Link to="/crop-recommender" 
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <Leaf className="h-6 w-6 text-green-600 mb-4" />
          <h2 className="text-xl font-semibold mb-3">Crop Recommendation</h2>
          <p className="text-gray-600">
            Get AI-powered suggestions for the best crops to grow based on your soil conditions
            and local climate data.
          </p>
        </Link>

        <Link to="/fertilizer-recommender"
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <Droplet className="h-6 w-6 text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-3">Fertilizer Guide</h2>
          <p className="text-gray-600">
            Receive personalized fertilizer recommendations to optimize soil nutrition
            and maximize crop yields.
          </p>
        </Link>

        <Link to="/disease-detector"
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <AlertCircle className="h-6 w-6 text-red-600 mb-4" />
          <h2 className="text-xl font-semibold mb-3">Disease Detection</h2>
          <p className="text-gray-600">
            Upload plant leaf images to identify diseases and get treatment
            recommendations instantly.
          </p>
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Choose KrishiAI?</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div>
              <h3 className="font-semibold text-xl mb-2 text-gray-800">Precision Farming</h3>
              <p className="text-gray-600">Make data-driven decisions for better crop management</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2 text-gray-800">Easy to Use</h3>
              <p className="text-gray-600">Simple interface designed for farmers of all tech levels</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2 text-gray-800">Quick Results</h3>
              <p className="text-gray-600">Get instant recommendations and analysis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;