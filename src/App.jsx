/* eslint-disable no-unused-vars */
// src/App.jsx
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Product from './Pages/Product';
import './Styles/Global.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <div className="product-container">
          <Product 
            name="Sample Product 1"
            price="20.00"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Product 
            name="Sample Product 2"
            price="30.00"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          {/* Add more products as needed */}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
