import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiShoppingCart, FiStar, FiTruck, FiShield, FiRefreshCw, FiCheck } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === parseInt(id));
  
  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    alert(`${quantity} × ${product.name} added to cart!`);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-6 md:p-10">
            {/* Image Section */}
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-md font-medium">
                    {product.badge}
                  </span>
                )}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                
                {/* Rating */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-green-50 px-3 py-1 rounded-lg">
                    <span className="font-medium text-green-700">{product.rating}</span>
                    <FiStar className="ml-1 text-green-700 fill-current" />
                  </div>
                  <span className="text-gray-500">{product.reviews} Reviews</span>
                  <span className="text-green-600 font-medium">In Stock</span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-gray-900">₹{product.price}</span>
                <span className="text-xl text-gray-400 line-through">₹{product.originalPrice}</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-sm font-medium">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed">{product.description}</p>

              {/* Features */}
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Key Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <FiCheck className="mr-2 text-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4">
                <span className="font-medium text-gray-700">Quantity:</span>
                <div className="flex items-center border rounded-lg">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-100"
                  >-</button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-100"
                  >+</button>
                </div>
                <span className="text-gray-500">({product.weight} per unit)</span>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
                >
                  <FiShoppingCart />
                  Add to Cart
                </button>
                <button 
                  onClick={handleBuyNow}
                  className="flex-1 bg-secondary text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Buy Now
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                <div className="text-center">
                  <FiTruck className="mx-auto text-primary mb-2" size={24} />
                  <p className="text-xs text-gray-600">Free Delivery</p>
                </div>
                <div className="text-center">
                  <FiShield className="mx-auto text-secondary mb-2" size={24} />
                  <p className="text-xs text-gray-600">Secure Payment</p>
                </div>
                <div className="text-center">
                  <FiRefreshCw className="mx-auto text-accent mb-2" size={24} />
                  <p className="text-xs text-gray-600">Easy Returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;