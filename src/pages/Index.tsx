
import React, { useState } from 'react';
import { CartProvider } from '../contexts/CartContext';
import { Header } from '../components/Header';
import { ProductGrid } from '../components/ProductGrid';
import { Cart } from '../components/Cart';
import { Checkout } from '../components/Checkout';
import { products } from '../data/products';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header
          onCartToggle={handleCartToggle}
          onSearch={setSearchQuery}
          searchQuery={searchQuery}
        />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Products</h2>
            <p className="text-gray-600">Discover amazing products at great prices</p>
          </div>
          
          <ProductGrid products={products} searchQuery={searchQuery} />
        </main>

        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          onCheckout={handleCheckout}
        />

        <Checkout
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
        />
      </div>
    </CartProvider>
  );
};

export default Index;
