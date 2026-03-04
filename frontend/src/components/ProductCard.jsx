import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiStar, FiHeart } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    
    // Show toast notification (you can add react-hot-toast)
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </Link>
        
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-2 left-2 bg-accent text-white text-xs px-2 py-1 rounded-md font-medium">
            {product.badge}
          </span>
        )}
        
        {/* Wishlist */}
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
          <FiHeart className="text-gray-600" />
        </button>

        {/* Discount */}
        <div className="absolute bottom-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-md">
          {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-gray-500 mb-1">{product.category}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex items-center bg-green-50 px-2 py-0.5 rounded">
            <span className="text-sm font-medium text-green-700">{product.rating}</span>
            <FiStar className="ml-1 text-green-700 fill-current" size={12} />
          </div>
          <span className="text-xs text-gray-500 ml-2">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
          <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
          <span className="text-xs text-green-600 font-medium">{product.weight}</span>
        </div>

        {/* Add to Cart */}
        <button 
          onClick={handleAddToCart}
          className="w-full flex items-center justify-center gap-2 bg-primary text-white py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium"
        >
          <FiShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;