
import React, { useState } from 'react';
import { Header } from '../components/Header';
import { ProductList } from '../components/ProductList';
import { ShoppingCart } from '../components/ShoppingCart';
import { CheckoutForm } from '../components/CheckoutForm';
import { products } from '../data/products';

const Index = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderComplete = () => {
    setCartItems([]);
    setIsCheckoutOpen(false);
    alert('Order placed successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        cartItemCount={getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Simple E-Commerce Store
        </h1>

        <ProductList
          products={products}
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onAddToCart={addToCart}
        />
      </main>

      {isCartOpen && (
        <ShoppingCart
          cartItems={cartItems}
          onClose={() => setIsCartOpen(false)}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeFromCart}
          totalPrice={getTotalPrice()}
          onCheckout={handleCheckout}
        />
      )}

      {isCheckoutOpen && (
        <CheckoutForm
          cartItems={cartItems}
          totalPrice={getTotalPrice()}
          onClose={() => setIsCheckoutOpen(false)}
          onOrderComplete={handleOrderComplete}
        />
      )}
    </div>
  );
};

export default Index;
