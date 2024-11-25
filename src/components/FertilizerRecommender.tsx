import React, { useState } from 'react';

const FertilizerRecommender = () => {
  const [formData, setFormData] = useState({
    cropType: '',
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    moisture: ''
  });

  const [recommendation, setRecommendation] = useState('');

  const cropTypes = [
    'Rice', 'Wheat', 'Maize', 'Chickpeas', 'Soybeans',
    'Cotton', 'Sugarcane', 'Tomato', 'Potato', 'Tea'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate AI recommendation
    const recommendations = [
      'Add Nitrogen-rich fertilizer like Urea',
      'Add Phosphorus-rich fertilizer like DAP',
      'Add Potassium-rich fertilizer like MOP',
      'Soil moisture is optimal, no changes needed',
      'Reduce watering and add organic matter'
    ];
    setRecommendation(recommendations[Math.floor(Math.random() * recommendations.length)]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Fertilizer Recommendation System</h1>
      
      <div className="bg-white rounded-xl shadow-md p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Crop Type</label>
              <select
                name="cropType"
                value={formData.cropType}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              >
                <option value="">Select a crop</option>
                {cropTypes.map(crop => (
                  <option key={crop} value={crop}>{crop}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Soil Nitrogen Level</label>
              <input
                type="number"
                name="nitrogen"
                value={formData.nitrogen}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Soil Phosphorus Level</label>
              <input
                type="number"
                name="phosphorus"
                value={formData.phosphorus}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Soil Potassium Level</label>
              <input
                type="number"
                name="potassium"
                value={formData.potassium}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Get Recommendation
            </button>
          </div>
        </form>

        {recommendation && (
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Fertilizer Recommendation</h2>
            <p className="text-lg text-blue-800">{recommendation}</p>
            <p className="mt-4 text-gray-600">
              This recommendation is based on your crop type and current soil nutrient levels.
              Apply the suggested changes to optimize your soil's fertility for better yield.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FertilizerRecommender;