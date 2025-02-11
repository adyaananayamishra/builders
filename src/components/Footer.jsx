import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto text-left mb-6">
          <Link to="/" className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-16 w-auto object-contain text-4xl font-extrabold mr-4" />
           </Link>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
       
        <div>
          <h2 className="text-xl font-bold mb-4">With the aim to build aspirational developments...</h2>
          <p className="text-sm mb-4">
            With the aim to build aspirational developments for customers with
            distinctive designs, functionality, and finishes, we offer premium
            developments in the residential, office space, and retail.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-yellow-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-yellow-500">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-white hover:text-yellow-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-yellow-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-yellow-500">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Useful Links Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Useful Links</h2>
          <ul className="space-y-2">
            {[
              "Home",
              "About Us",
              "Projects",
              "Our Blog",
              "Contact Us",
            ].map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-white hover:text-yellow-500 flex items-center"
                >
                  <span className="mr-2">📎</span>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact and Newsletter Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Pro Landmark Homes Private Limited</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <span className="mr-2">📞</span> 1800 212 6666
            </li>
            <li className="flex items-center">
              <span className="mr-2">📧</span> mail@Pro Landmark Homes Private Limited.com
            </li>
            <li className="flex items-center">
              <span className="mr-2">📍</span> Bhubaneswar
            </li>
          </ul>
          <div className="mt-6">
            <h2 className="text-lg font-bold mb-2">Subscribe to Our Newsletter!</h2>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="p-2 flex-grow rounded-l-md border-none"
              />
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-r-md hover:bg-yellow-600">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-8">
        <p>Copyright © 2022, Pro Landmark Homes Private Limited</p>
      </div>
    </footer>
  );
};

export default Footer;
