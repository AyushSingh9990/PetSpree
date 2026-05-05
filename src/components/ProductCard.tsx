import React from 'react';
import { ShoppingCart, Heart, Star, IndianRupee } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  breed: string;
  size: string;
  description: string;
  inStock: boolean;
  brand: string;
  rating: number;
  reviews: number;
  features: string[];
  ageGroup: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-all duration-200 transform hover:scale-110">
          <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
        
        {discount > 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
            {discount}% OFF
          </div>
        )}
        
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold bg-red-600 px-4 py-2 rounded-lg">Out of Stock</span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full capitalize">
            {product.breed === 'all' ? 'All Breeds' : product.breed.replace('-', ' ')}
          </span>
          <span className="text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded-full capitalize">
            {product.ageGroup}
          </span>
        </div>
        
        <div className="mb-2">
          <span className="text-xs text-gray-500 font-medium">{product.brand}</span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating) 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600 ml-1">({product.reviews})</span>
        </div>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
        
        <div className="mb-3">
          <div className="flex flex-wrap gap-1">
            {product.features.slice(0, 2).map((feature, index) => (
              <span key={index} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                {feature}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <IndianRupee className="w-4 h-4 text-green-600" />
            <span className="text-xl font-bold text-green-600">{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through ml-2 flex items-center">
                <IndianRupee className="w-3 h-3" />
                {product.originalPrice}
              </span>
            )}
          </div>
          <button
            disabled={!product.inStock}
            className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 ${
              product.inStock
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:shadow-lg'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;