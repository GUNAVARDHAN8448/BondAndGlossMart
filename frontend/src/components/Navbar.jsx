// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-[#0D4051] shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-2xl font-bold text-white">BondAndGlossMart</Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:bg-[#B2EAF2] hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-full py-2 px-4 text-lg">
            Home
          </Link>
          <Link to="/fevicol" className="text-white hover:bg-[#B2EAF2] hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-full py-2 px-4 text-lg">
            Fevicol
          </Link>
          <Link to="/sheenlac" className="text-white hover:bg-[#B2EAF2] hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-full py-2 px-4 text-lg">
            Sheenlac
          </Link>
          <Link to="/about-us" className="text-white hover:bg-[#B2EAF2] hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-full py-2 px-4 text-lg">
            About Us
          </Link>
          <Link to="/store-locator" className="text-white hover:bg-[#B2EAF2] hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-full py-2 px-4 text-lg">
            Store Locator
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="text-white hover:bg-[#B2EAF2] hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-full py-2 px-4 text-lg">
            <i className="fas fa-shopping-cart"></i> Cart
          </Link>
          <button onClick={toggleDropdown} className=" text-white bg-[#0D4051] hover:bg-[#B2EAF2] hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-full py-2 px-4 text-lg">
            <i className="fas fa-user-circle"></i> Profile
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#B2EAF2] border rounded-md shadow-lg z-10">
                <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</Link>
                <Link to="/my-orders" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">My Orders</Link>
                <Link to="/address" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Address</Link>
                <Link to="/change-password" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Change Password</Link>
                <Link to="/wishlist" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Wishlist</Link>
                <Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</Link>
                <button className="block w-full text-centre bg-[#B2EAF2] px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => {/* Add logout function here */}}>
                  Logout
                </button>
              </div>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
