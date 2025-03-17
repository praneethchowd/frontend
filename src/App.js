// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Change this line
import Home from './components/Home';
import Product from './components/Product';
import Cart from './components/Cart';
import Profile from './components/Profile';

function App() {
  return (
    <div>
      <Routes> {/* Change Switch to Routes */}
        <Route path="/" element={<Home />} /> {/* Change component prop to element */}
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;