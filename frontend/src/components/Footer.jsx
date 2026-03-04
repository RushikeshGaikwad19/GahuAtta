import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">GahuAtta</h3>
                <p className="text-xs text-gray-400">Fresh Chakki Products</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Traditional taste, modern hygiene. Freshly ground flour delivered to your doorstep.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><FiFacebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FiInstagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FiTwitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/products" className="hover:text-white">Products</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/reviews" className="hover:text-white">Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/product/1" className="hover:text-white">Gahu Atta</Link></li>
              <li><Link to="/product/2" className="hover:text-white">Maharashtrian Bhel</Link></li>
              <li><Link to="/product/3" className="hover:text-white">Multigrain Atta</Link></li>
              <li><Link to="/product/4" className="hover:text-white">Bajra Atta</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <FiMapPin className="mr-2 text-primary" />
                <span className="text-sm">Pune, Maharashtra, India</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-2 text-primary" />
                <span className="text-sm">+91 0000000000</span>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-2 text-primary" />
                <span className="text-sm">info@gahuatta.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 GahuAtta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;