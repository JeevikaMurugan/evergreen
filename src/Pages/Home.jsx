/* eslint-disable no-unused-vars */
// src/pages/Home.js
import React from 'react';
import '../Styles/Home.css'; // import home page styles

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Anuprarna</h1>
          <p>Discover our exquisite collection of tie and dye products</p>
          <a href="/products" className="btn btn-primary">Explore Now</a>
        </div>
      </section>
      <section className="featured-products">
        <h2>Featured Products</h2>
        {/* Add featured product cards or carousel */}
      </section>
      <section className="about-us">
        <div className="about-content">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget ex ac justo sollicitudin volutpat vel eget ligula.</p>
          <a href="/about" className="btn btn-secondary">Learn More</a>
        </div>
      </section>
      {/* Add more sections for testimonials, latest news, etc. */}
    </div>
  );
}

export default Home;
