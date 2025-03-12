import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [subDropdown, setSubDropdown] = useState(null);
  const [thirdDropdown, setThirdDropdown] = useState(null); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (menuName) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
    if (menuName !== "location") {
      setSubDropdown(null);
      setThirdDropdown(null); 
    }
  };

  const toggleSubDropdown = (subMenuName) => {
    setSubDropdown(subDropdown === subMenuName ? null : subMenuName);
    if (subMenuName !== "odisha") {
      setThirdDropdown(null); 
    }
  };

  const toggleThirdDropdown = (thirdMenuName) => {
    setThirdDropdown(thirdDropdown === thirdMenuName ? null : thirdMenuName);
  };

  return (
    <div>
      <nav className="bg-neutral-800 shadow-sm px-5">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-23 w-30 object-contain" />
          </Link>
          <button
            className="text-gray-300 hover:text-blue-600 focus:outline-none"
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
        <div className="fixed top-0 right-0 h-full w-[80%] bg-neutral-800 bg-opacity-90 text-white z-50 shadow-lg">
          <div className="absolute top-4 right-4">
            <button onClick={toggleMenu} className="text-2xl font-bold focus:outline-none">
              ✕
            </button>
          </div>

          <ul className="mt-20 text-center space-y-6 text-lg">
            <li><Link to="/" onClick={toggleMenu}>HOME</Link></li>

            {/* Properties Dropdown */}
            <li>
              <div
                onClick={() => toggleDropdown("properties")}
                className="cursor-pointer font-semibold flex justify-center items-center gap-2"
              >
                Properties {activeDropdown === "properties" ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {activeDropdown === "properties" && (
                <ul className="ml-4 mt-2 space-y-2 text-sm">
                  <li><Link to="/properties/apartments">Apartment</Link></li>
                  <li><Link to="/properties/cottage">Cottage</Link></li>
                  <li><Link to="/properties/bungalow">Bungalow</Link></li>
                  <li><Link to="/properties/simplex">Simplex</Link></li>
                  <li><Link to="/properties/duplex">Duplex</Link></li>
                </ul>
              )}
            </li>

            {/* Location Dropdown */}
            <li>
              <div
                onClick={() => toggleDropdown("location")}
                className="cursor-pointer font-semibold flex justify-center items-center gap-2"
              >
                Location {activeDropdown === "location" ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {activeDropdown === "location" && (
                <ul className="ml-4 mt-2 space-y-2 text-sm">
                  <li>
                    <div
                      onClick={() => toggleSubDropdown("odisha")}
                      className="cursor-pointer font-semibold flex justify-center items-center gap-2"
                    >
                      Odisha {subDropdown === "odisha" ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                    {subDropdown === "odisha" && (
                      <ul className="ml-4 mt-2 space-y-2 text-sm">
                        <li>
                          <div
                            onClick={() => toggleThirdDropdown("bhubaneswar")}
                            className="cursor-pointer font-semibold flex justify-center items-center gap-2"
                          >
                            Bhubaneswar {thirdDropdown === "bhubaneswar" ? <FaChevronUp /> : <FaChevronDown />}
                          </div>
                          {thirdDropdown === "bhubaneswar" && (
                            <ul className="ml-4 mt-2 space-y-2 text-sm">
                              <li><Link to="/location/patrapada">Patrapada</Link></li>
                              <li><Link to="/location/khandagiri">Khandagiri</Link></li>
                              <li><Link to="/location/tamando">Tamando</Link></li>
                              <li><Link to="/location/nayapalli">Pahala</Link></li>
                              <li><Link to="/location/sundarpada">Trisulia</Link></li>
                              <li><Link to="/location/dumduma">KalingaNagar</Link></li>
                            </ul>
                          )}
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>

            <li><Link to="/career" onClick={toggleMenu}>Career</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

