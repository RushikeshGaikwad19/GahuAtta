import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const ProductList = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Products</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Freshly ground in traditional chakki, packed with care, delivered to your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductList;