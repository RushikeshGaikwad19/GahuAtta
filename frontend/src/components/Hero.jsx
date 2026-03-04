import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiTruck, FiShield, FiRefreshCw } from 'react-icons/fi';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-orange-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
              🌾 Fresh from Chakki 
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Pure & Fresh <span className="text-primary">Atta</span> <br />
              For Your Family
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Traditional chakki-ground flour with modern hygiene. 
              Direct from farm to your kitchen. 100% natural, no preservatives.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/products" 
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
              >
                Shop Now <FiArrowRight className="ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center text-gray-600">
                <FiTruck className="mr-2 text-primary" />
                <span className="text-sm">Free Delivery</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FiShield className="mr-2 text-secondary" />
                <span className="text-sm">100% Pure</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FiRefreshCw className="mr-2 text-accent" />
                <span className="text-sm">Fresh From Farm</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1627485937980-221c88ac04f9?w=800" 
                alt="Fresh Atta"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-2xl font-bold">₹45/kg</p>
                <p className="text-sm">Fresh Wheat Atta</p>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-accent text-white p-4 rounded-full shadow-lg animate-bounce-slow">
              <p className="text-xs font-bold">BEST</p>
              <p className="text-lg font-bold">SELLER</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;