
import React from 'react';
import { X, Plus, Minus } from 'lucide-react';

export const ShoppingCart = ({ cartItems, onClose, onUpdateQuantity, onRemoveItem, totalPrice, onCheckout }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full overflow-y-auto">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 py-8">Your cart is empty</p>
          ) : (
            <>
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center space-x-4 py-4 border-b">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-blue-600 font-semibold">${item.price.toFixed(2)}</p>
                    
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="bg-gray-200 p-1 rounded"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-2">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="bg-gray-200 p-1 rounded"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-500 ml-4"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="mt-6">
                <div className="flex justify-between items-center text-xl font-bold mb-4">
                  <span>Total: ${totalPrice.toFixed(2)}</span>
                </div>
                <button
                  onClick={onCheckout}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
