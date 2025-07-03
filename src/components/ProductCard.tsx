
import React from 'react';

export const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      
      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-3">{product.description}</p>
      
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-blue-600">
          ${product.price.toFixed(2)}
        </span>
        
        {product.inStock ? (
          <button
            onClick={() => onAddToCart(product)}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Add to Cart
          </button>
        ) : (
          <span className="text-red-500 font-medium">Out of Stock</span>
        )}
      </div>
    </div>
  );
};
