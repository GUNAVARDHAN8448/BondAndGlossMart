// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#075985] text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <Link to="/" className="text-2xl font-bold text-white">BondAndGlossMart</Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row md:space-x-8">
          <Link to="/" className="hover:bg-[#0e94a1] hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-full py-2 px-4 text-white text-lg">
            Home
          </Link>
          <Link to="/fevicol" className="hover:bg-[#0e94a1] hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-full py-2 px-4 text-white text-lg">
            Fevicol
          </Link>
          <Link to="/sheenlac" className="hover:bg-[#0e94a1] hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-full py-2 px-4 text-white text-lg">
            Sheenlac
          </Link>
          <Link to="/about-us" className="hover:bg-[#0e94a1] hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-full py-2 px-4 text-white text-lg">
            About Us
          </Link>
          <Link to="/store-locator" className="hover:bg-[#0e94a1] hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-full py-2 px-4 text-white text-lg">
            Store Locator
          </Link>
          <Link to="/contact" className="hover:bg-[#0e94a1] hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-full py-2 px-4 text-white text-lg">
            Contact Us
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex mt-4 md:mt-0">
          <a href="#" className="mx-2 hover:bg-[#0e94a1] hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-full p-2 text-white text-lg">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="mx-2 hover:bg-[#0e94a1] hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-full p-2 text-white text-lg">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="mx-2 hover:bg-[#0e94a1] hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-full p-2 text-white text-lg">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="mx-2 hover:bg-[#0e94a1] hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-full p-2 text-white text-lg">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-4">
        <p className="text-sm">© {new Date().getFullYear()} BondAndGlossMart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
