import React from 'react';
import { Github, Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0 flex items-center space-x-2">
            <Leaf className="h-5 w-5 text-green-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">KrishiAI</h3>
              <p className="text-gray-600">Empowering farmers with AI technology</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="https://github.com" 
               className="text-gray-600 hover:text-gray-900 transition-colors"
               target="_blank" 
               rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} KrishiAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;