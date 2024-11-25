import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CropRecommender from './components/CropRecommender';
import FertilizerRecommender from './components/FertilizerRecommender';
import DiseaseDetector from './components/DiseaseDetector';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crop-recommender" element={<CropRecommender />} />
        <Route path="/fertilizer-recommender" element={<FertilizerRecommender />} />
        <Route path="/disease-detector" element={<DiseaseDetector />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;