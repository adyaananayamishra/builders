import React from "react";

const Overview = () => {
  return (
    <div className="text-center p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Why Choose Luxe Realty?</h1>
      <p className="text-lg text-gray-700 mb-6">
        Luxe Realty is dedicated to providing luxury real estate services tailored to your needs. 
        Our team ensures that every client finds their dream home with ease and confidence.
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <img src="https://www.pexels.com/photo/modern-white-architecture-2821497/" alt="Luxury Home" className="rounded-lg shadow-md" />
        <img src="https://www.pexels.com/photo/house-for-sale-4056942/" alt="Real Estate" className="rounded-lg shadow-md" />
        <img src="https://www.pexels.com/photo/house-interior-modern-luxury-3730760/" alt="Modern House" className="rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default Overview;
