import { useParams } from "react-router-dom";

const properties = {
  Apartments: [
    { title: "Luxury Apartment", location: "New York, NY", price: "$1,500,000", area: "1200 sqft", image: "https://via.placeholder.com/400" },
    { title: "Modern Studio", location: "Los Angeles, CA", price: "$800,000", area: "900 sqft", image: "https://via.placeholder.com/400" },
    { title: "Spacious Loft", location: "Chicago, IL", price: "$950,000", area: "1100 sqft", image: "https://via.placeholder.com/400" },
    { title: "Penthouse Suite", location: "San Francisco, CA", price: "$2,000,000", area: "1400 sqft", image: "https://via.placeholder.com/400" },
    { title: "City View Apartment", location: "Boston, MA", price: "$1,200,000", area: "1000 sqft", image: "https://via.placeholder.com/400" },
    { title: "High-Rise Condo", location: "Houston, TX", price: "$900,000", area: "1050 sqft", image: "https://via.placeholder.com/400" },
  ],
  Bungalow: [
    { title: "Cozy Bungalow", location: "Miami, FL", price: "$600,000", area: "1500 sqft", image: "https://via.placeholder.com/400" },
    { title: "Beachside Bungalow", location: "San Diego, CA", price: "$700,000", area: "1600 sqft", image: "https://via.placeholder.com/400" },
    { title: "Garden Retreat", location: "Portland, OR", price: "$650,000", area: "1450 sqft", image: "https://via.placeholder.com/400" },
    { title: "Countryside Escape", location: "Austin, TX", price: "$680,000", area: "1550 sqft", image: "https://via.placeholder.com/400" },
  ],
  Cottage: [
    { title: "Lakeside Cottage", location: "Seattle, WA", price: "$750,000", area: "1100 sqft", image: "https://via.placeholder.com/400" },
    { title: "Mountain Cottage", location: "Denver, CO", price: "$850,000", area: "1300 sqft", image: "https://via.placeholder.com/400" },
    { title: "Woodland Escape", location: "Asheville, NC", price: "$720,000", area: "1250 sqft", image: "https://via.placeholder.com/400" },
    { title: "Riverside Cottage", location: "Nashville, TN", price: "$780,000", area: "1150 sqft", image: "https://via.placeholder.com/400" },
  ],
};

export default function PropertyDetails() {
  const { propertyName } = useParams();
  const listings = properties[propertyName] || [];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{propertyName} Listings</h2>
      <div className="grid grid-cols-2 gap-4">
        {listings.map((listing, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md">
            <img src={listing.image} alt={listing.title} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="mt-2 text-lg font-semibold">{listing.title}</h3>
            <p className="text-sm text-gray-600">{listing.location}</p>
            <p className="text-sm text-gray-800 font-bold">{listing.price}</p>
            <p className="text-sm text-gray-600">Area: {listing.area}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
