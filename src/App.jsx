import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Register from './components/register/Register';
import Purchase from './components/purchase/Purchase';  // Import the purchasing page component

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/purchase" element={<Purchase />} />  
      </Routes>
    </>
  );
}

export default App;
