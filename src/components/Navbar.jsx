import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (menuName) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg- shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-16 w-auto object-contain text-4xl font-extrabold mr-4" />
          </Link>
          <button
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
            onClick={toggleMenu}
            style={{
              fontSize: "2rem",
              padding: "0.5rem 1rem",
            }}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 text-white z-50">
          <div className="absolute top-4 right-4">
            <button
              onClick={toggleMenu}
              className="text-2xl font-bold focus:outline-none"
            >
              ✕
            </button>
          </div>

          <ul className="mt-20 text-center space-y-6 text-lg">
            <li>
              <Link to="/" onClick={toggleMenu}>HOME</Link>
            </li>
            <li>
              <div
                onClick={() => toggleDropdown("properties")}
                className="cursor-pointer font-semibold"
              >
                Properties {activeDropdown === "properties" ? "-" : "+"}
              </div>
              {activeDropdown === "properties" && (
                <ul className="ml-4 mt-2 space-y-2 text-sm">
                  <li><Link to="/properties/apartments">Apartments</Link></li>
                  <li><Link to="/properties/cottage">Cottage</Link></li>
                  <li><Link to="/properties/bunaglow">Bunaglow</Link></li>
                </ul>
              )}
            </li>
            {/* Location Dropdown */}
            <li>
              <div
                onClick={() => toggleDropdown("location")}
                className="cursor-pointer font-semibold"
              >
                Location {activeDropdown === "location" ? "-" : "+"}
              </div>
              {activeDropdown === "location" && (
                <ul className="ml-4 mt-2 space-y-2 text-sm">
                  <li><Link to="/location/sahid-nagar">Sahid Nagar</Link></li>
                  <li><Link to="/location/patrapada">Patrapada</Link></li>
                  <li><Link to="/location/khandagiri">Khandagiri</Link></li>
                  <li><Link to="/location/chandaka">Chandaka</Link></li>
                  <li><Link to="/location/jaydev-vihar">Jaydev Vihar</Link></li>
                  <li><Link to="/location/bapuji-nagar">Bapuji Nagar</Link></li>
                  <li><Link to="/location/rasulgarh">Rasulgarh</Link></li>
                  <li><Link to="/location/tamando">Tamando</Link></li>
                  <li><Link to="/location/nayapalli">Nayapalli</Link></li>
                  <li><Link to="/location/sundarpada">Sundarpada</Link></li>
                  <li><Link to="/location/dumduma">Dumduma</Link></li>
                  <li><Link to="/location/ghatikia">Ghatikia</Link></li>
                  <li><Link to="/location/samantrapur">Samantrapur</Link></li>
                  <li><Link to="/location/jharpada">Jharpada</Link></li>
                  <li><Link to="/location/hanspal">Hanspal</Link></li>
                  <li><Link to="/location/chandrasekharpur">Chandrasekharpur</Link></li>
                  <li><Link to="/location/baramunda">Baramunda</Link></li>
                  <li><Link to="/location/palasuni">Palasuni</Link></li>
                  <li><Link to="/location/mancheswar">Mancheswar</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/category" onClick={() => setIsMenuOpen(false)}>Category</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
