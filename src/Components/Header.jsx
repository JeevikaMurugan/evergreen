/* eslint-disable no-unused-vars */
// src/components/Header.js
import React from 'react';
import '../Styles/Header.css'; // import header styles
// import logo from '../assets/images/logo.png'; // Import your logo image

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        {/* <img src={logo} alt="Anuprarna" className="logo" /> */}
        <span className="company-name">Ever Green</span>
      </div>
      <nav className="nav-menu">
        <ul className="nav-list">
          <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="/products" className="nav-link">Products</a></li>
          <li className="nav-item"><a href="/about" className="nav-link">About Us</a></li>
          <li className="nav-item"><a href="/contact" className="nav-link">Contact Us</a></li>
          {/* Add more navigation links here */}
        </ul>
      </nav>
      <div className="header-icons">
        <button className="search-button"><i className="fas fa-search"></i></button>
        <button className="user-button"><i className="fas fa-user"></i></button>
      </div>
    </header>
  );
}

export default Header;
