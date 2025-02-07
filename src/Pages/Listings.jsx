import { useState } from "react";
import PropertyCard from "../components/PropertyCard";

const mockProperties = [
  { id: 1, title: "Modern Apartment", location: "New York, NY", price: "500,000", image: "https://via.placeholder.com/300" },
  { id: 2, title: "Luxury Villa", location: "Los Angeles, CA", price: "1,200,000", image: "https://via.placeholder.com/300" },
  { id: 3, title: "Cozy Cottage", location: "Austin, TX", price: "350,000", image: "https://via.placeholder.com/300" },
];

const Listings = () => {
  const [properties] = useState(mockProperties);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Available Listings</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Listings;
