// import React from "react";
// import { Link } from "react-router-dom";
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-neutral-800 text-white py-8">
//       <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
//         <Link to="/" className="flex items-center space-x-2">
//           <img src="/logo.png" alt="Logo" className="h-26 w-auto object-contain text-4xl font-bold mr-4" />
//         </Link>

//         <div>
//           <h2 className="text-3xl font-small">
//             <span className="text-blue-400">PRO</span>
//             <span className="text-white">Landmark</span>
//           </h2>
//           <h3 className="text-blue-400 text-sm font-arial uppercase">Homes Private Limited</h3>
//           <p className="text-sm mt-4">
//             With the aim to build aspirational developments for customers with distinctive designs, functionality, and finishes, we offer premium developments in the residential, office space, and retail.
//           </p>
//         </div>

//         <div>
//           <h2 className="text-lg font-bold mb-4">Useful Links</h2>
//           <ul className="space-y-2">
//             <li><Link to="/career" className="text-white hover:text-blue-400">Career</Link></li>
//             <li><Link to="/about" className="text-white hover:text-blue-400">About</Link></li>
//             <li><Link to="/blog" className="text-white hover:text-blue-400">Blog</Link></li>
//             <li><Link to="/terms" className="text-white hover:text-blue-400">Terms & Conditions</Link></li>
//             <li><Link to="/privacy" className="text-white hover:text-blue-400">Privacy & Policy</Link></li>
//             <li><Link to="/contact" className="text-white hover:text-blue-400">Contact</Link></li>
//           </ul>
//         </div>

//         <div>
//           <h2 className="text-lg font-bold mb-4">Pro Landmark Homes Private Limited</h2>
//           <ul className="space-y-2 text-sm">
//             <li className="flex items-center"><span className="mr-2">📞</span> 1800 212 6666</li>
//             <li className="flex items-center"><span className="mr-2">📧</span> info@ProLandmarkHomes.in</li>
//             <li className="flex items-center"><span className="mr-2">📍</span> BMC Bhawani Mall,
//             Saheed nagar, Bhubaneswar,Odisha 751007</li>
//           </ul>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 mt-6 flex flex-col items-center md:flex-row md:justify-between">
//         <div className="flex space-x-4">
//           <a href="#" className="text-white hover:text-blue-400 text-lg"><FaFacebookF /></a>
//           <a href="#" className="text-white hover:text-blue-400 text-lg"><FaTwitter /></a>
//           <a href="#" className="text-white hover:text-blue-400 text-lg"><FaInstagram /></a>
//           <a href="#" className="text-white hover:text-blue-400 text-lg"><FaLinkedinIn /></a>
//           <a href="#" className="text-white hover:text-red-500 text-lg"><FaYoutube /></a>
//         </div>
//       </div>

//       <div className="text-center text-sm mt-6 border-t border-gray-600 pt-4">
//         <p>Copyright © 2025 Pro Landmark Homes Private Limited. All Rights Reserved.</p>
//         <p>Developed by First Track Solution Technologies</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-26 w-auto object-contain text-4xl font-bold mr-4" />
        </Link>

        <div>
          <h2 className="text-3xl font-semibold">
            <span className="text-blue-400">PRO</span>
            <span className="text-white">Landmark</span>
          </h2>
          <h3 className="text-blue-400 text-sm uppercase tracking-wide">
            HOMES PRIVATE LIMITED
          </h3>
          <p className="text-sm mt-4">
            With the aim to build aspirational developments for customers with distinctive designs, functionality, and finishes, we offer premium developments in the residential, office space, and retail.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">Useful Links</h2>
          <ul className="space-y-2">
            <li><Link to="/career" className="text-white hover:text-blue-400">Career</Link></li>
            <li><Link to="/about" className="text-white hover:text-blue-400">About</Link></li>
            <li><Link to="/blog" className="text-white hover:text-blue-400">Blog</Link></li>
            <li><Link to="/terms" className="text-white hover:text-blue-400">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="text-white hover:text-blue-400">Privacy & Policy</Link></li>
            <li><Link to="/contact" className="text-white hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">PRO Landmark Homes Private Limited</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center"><span className="mr-2">📞</span> 1800 212 6666</li>
            <li className="flex items-center"><span className="mr-2">📧</span> info@ProLandmarkHomes.in</li>
            <li className="flex items-center"><span className="mr-2">📍</span> BMC Bhawani Mall, Saheed Nagar, Bhubaneswar, Odisha 751007</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-6 flex flex-col items-center md:flex-row md:justify-between">
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-blue-400 text-lg"><FaFacebookF /></a>
          <a href="#" className="text-white hover:text-blue-400 text-lg"><FaTwitter /></a>
          <a href="#" className="text-white hover:text-blue-400 text-lg"><FaInstagram /></a>
          <a href="#" className="text-white hover:text-blue-400 text-lg"><FaLinkedinIn /></a>
          <a href="#" className="text-white hover:text-red-500 text-lg"><FaYoutube /></a>
        </div>
      </div>

      <div className="text-center text-sm mt-6 border-t border-gray-600 pt-4">
        <p>Copyright © 2025 Pro Landmark Homes Private Limited. All Rights Reserved.</p>
        <p>Developed by First Track Solution Technologies</p>
      </div>
    </footer>
  );
};

export default Footer;
