import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0D1321] text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-16 w-auto object-contain text-4xl font-extrabold mr-4" />
        </Link>

        <div>
          <h2 className="text-2xl font-extrabold italic">
            Pro Landmark <br /> <span className="text-blue-400">Homes Private Limited</span>
          </h2>
          <p className="text-sm mt-4">
            With the aim to build aspirational developments for customers with distinctive designs, functionality, and finishes, we offer premium developments in the residential, office space, and retail.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            {/* <li><Link to="/" className="text-white hover:text-blue-400">Home</Link></li> */}
            <li><Link to="/career" className="text-white hover:text-blue-400">Career</Link></li>
            <li><Link to="/about" className="text-white hover:text-blue-400">About</Link></li>
            <li><Link to="/contact" className="text-white hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">Pro Landmark Homes Private Limited</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center"><span className="mr-2">📞</span> 1800 212 6666</li>
            <li className="flex items-center"><span className="mr-2">📧</span> mail@ProLandmarkHomesPrivateLimited.com</li>
            <li className="flex items-center"><span className="mr-2">📍</span> Bhubaneswar</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-6 flex flex-col items-center md:flex-row md:justify-between">
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-blue-400 text-lg"><FaFacebookF /></a>
          <a href="#" className="text-white hover:text-blue-400 text-lg"><FaTwitter /></a>
          <a href="#" className="text-white hover:text-blue-400 text-lg"><FaInstagram /></a>
          <a href="#" className="text-white hover:text-blue-400 text-lg"><FaLinkedinIn /></a>
        </div>
      </div>

      <div className="text-center text-sm mt-6 border-t border-gray-600 pt-4">
        <p>Copyright © 2024, Developed by First Track Solution Technologies</p>
      </div>
    </footer>
  );
};

export default Footer;
