import React, { useState, useRef } from 'react';
import { Upload, Loader } from 'lucide-react';

const DiseaseDetector = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [diagnosis, setDiagnosis] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setError(null);
    
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError('Please upload an image file');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        setLoading(true);
        // Simulate AI analysis
        setTimeout(() => {
          const diseases = [
            {
              name: 'Late Blight',
              description: 'A serious disease of potatoes and tomatoes caused by the fungus Phytophthora infestans.',
              treatment: 'Apply copper-based fungicides. Ensure proper plant spacing for air circulation.'
            },
            {
              name: 'Powdery Mildew',
              description: 'A fungal disease that appears as white powdery spots on leaves.',
              treatment: 'Use sulfur-based fungicides and ensure good air circulation between plants.'
            },
            {
              name: 'Bacterial Leaf Spot',
              description: 'Caused by various bacteria, resulting in dark spots on leaves.',
              treatment: 'Remove infected leaves and apply copper-based bactericides.'
            }
          ];
          setDiagnosis(diseases[Math.floor(Math.random() * diseases.length)]);
          setLoading(false);
        }, 1500);
      };
      reader.onerror = () => {
        setError('Error reading file');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Plant Disease Detection</h1>
      
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="mb-8">
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-green-500 transition-colors"
          >
            {preview ? (
              <img src={preview} alt="Preview" className="max-h-96 mx-auto rounded-lg" />
            ) : (
              <div className="space-y-4">
                <Upload className="h-6 w-6 mx-auto text-gray-400" />
                <div>
                  <p className="text-lg font-medium text-gray-700">Upload a plant leaf image</p>
                  <p className="text-sm text-gray-500">Click or drag and drop</p>
                </div>
              </div>
            )}
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/*"
            className="hidden"
          />
          {error && (
            <p className="mt-2 text-red-600 text-sm">{error}</p>
          )}
        </div>

        {loading && (
          <div className="text-center py-8">
            <Loader className="h-6 w-6 animate-spin mx-auto text-green-600" />
            <p className="mt-2 text-gray-600">Analyzing image...</p>
          </div>
        )}

        {diagnosis && !loading && (
          <div className="mt-8 p-6 bg-white border border-gray-200 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Disease Diagnosis</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800">Detected Disease:</h3>
                <p className="text-lg text-gray-600">{diagnosis.name}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Description:</h3>
                <p className="text-gray-600">{diagnosis.description}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Recommended Treatment:</h3>
                <p className="text-gray-600">{diagnosis.treatment}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiseaseDetector;