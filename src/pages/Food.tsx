import React, { useState } from 'react';
import { getProductsByBreed, getProductsByCategory } from '../data/products';
import BreedFilter from '../components/BreedFilter';
import ProductCard from '../components/ProductCard';

const Food = () => {
  const [selectedBreed, setSelectedBreed] = useState('all');
  
  const products = selectedBreed === 'all' 
    ? getProductsByCategory('food')
    : getProductsByBreed(selectedBreed, 'food');

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Premium Pet Food</h1>
          <p className="text-xl text-gray-600">Nutrition tailored to your pet's breed and size</p>
        </div>
        
        <BreedFilter selectedBreed={selectedBreed} onBreedChange={setSelectedBreed} />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found for the selected breed.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Food;