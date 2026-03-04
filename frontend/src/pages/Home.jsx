import React from 'react';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import { Link } from 'react-router-dom';
import { FiTruck, FiShield, FiRefreshCw, FiHeadphones } from 'react-icons/fi';

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* Features */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FiTruck className="text-primary" size={28} />
              </div>
              <h3 className="font-semibold">Free Delivery</h3>
              <p className="text-sm text-gray-500">On orders above ₹299</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FiShield className="text-secondary" size={28} />
              </div>
              <h3 className="font-semibold">100% Pure</h3>
              <p className="text-sm text-gray-500">No preservatives</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FiRefreshCw className="text-blue-600" size={28} />
              </div>
              <h3 className="font-semibold">Fresh Daily</h3>
              <p className="text-sm text-gray-500">Chakki ground daily</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FiHeadphones className="text-purple-600" size={28} />
              </div>
              <h3 className="font-semibold">24/7 Support</h3>
              <p className="text-sm text-gray-500">Always here to help</p>
            </div>
          </div>
        </div>
      </section>

      <ProductList />

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Your Healthy Journey Today!
          </h2>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of families who trust GahuAtta for their daily nutrition needs.
          </p>
          <Link 
            to="/products"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;