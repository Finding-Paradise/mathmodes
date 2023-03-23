import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ShopContextProvider from './context/ShopContext';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <ShopContextProvider>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart-page' element={<CartPage />} />
      </Routes>
    </ShopContextProvider>
  );
}

export default App;
