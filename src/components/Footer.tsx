import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Heart className="w-8 h-8 text-orange-500 mr-2" />
              <span className="text-2xl font-bold">PetSpree</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner in pet care. We provide premium products tailored to each breed's unique needs.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <span className="text-white font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors cursor-pointer">
                <span className="text-white font-bold">i</span>
              </div>
              <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                <span className="text-white font-bold">t</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/food" className="text-gray-300 hover:text-white transition-colors">Pet Food</a></li>
              <li><a href="/collars" className="text-gray-300 hover:text-white transition-colors">Collars & Leashes</a></li>
              <li><a href="/medications" className="text-gray-300 hover:text-white transition-colors">Medications</a></li>
              <li><a href="/accessories" className="text-gray-300 hover:text-white transition-colors">Accessories</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-orange-500" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-orange-500" />
                <span className="text-gray-300">info@petspree.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                <span className="text-gray-300">123 Pet Street, City</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2025 PetSpree. All rights reserved. Made with ❤️ for pets everywhere.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;