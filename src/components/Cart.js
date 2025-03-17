// src/components/Cart.js
import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <p>${item.price}</p>
            </div>
          ))}
          <h2>Total Price: ${totalPrice}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;