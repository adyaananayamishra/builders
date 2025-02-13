import { useParams } from "react-router-dom";

const properties = {
  Apartment: [
    { title: "Luxury Apartment", location: "khordha", price: "$1,500,000", area: "1200 sqft", image: "/assets/Luxuary Apartment-1.jpg" },

    { title: "2 BHK", location: "patia", price: "$800,000", area: "900 sqft", image: "/assets/2 bhk-1.jpg" },

    { title: "3 BHK", location: "patia", price: "$950,000", area: "1100 sqft", image: "/assets/3 bhk-1.jpg" },

    { title: "Penthouse", location: "kharavela Nagar", price: "$2,000,000", area: "1400 sqft", image: "/assets/pent house-1.jpg" },

    { title: "City View Apartment", location: "Damana ", price: "$1,200,000", area: "1000 sqft", image: "/assets/cityview apartment-1.jpg" },

    { title: "4 BHK", location: "Hanspal", price: "$900,000", area: "1050 sqft", image: "/assets/4 bhk-1.jpg" },
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
  Simplex: [
    { title: "Modern Simplex", location: "Phoenix, AZ", price: "$500,000", area: "1000 sqft", image: "https://via.placeholder.com/400" },
    { title: "Cozy Simplex", location: "Las Vegas, NV", price: "$450,000", area: "950 sqft", image: "https://via.placeholder.com/400" },
  ],
  Duplex: [
    { title: "Spacious Duplex", location: "Dallas, TX", price: "$1,100,000", area: "1800 sqft", image: "https://via.placeholder.com/400" },
    { title: "Luxury Duplex", location: "Atlanta, GA", price: "$1,200,000", area: "1900 sqft", image: "https://via.placeholder.com/400" },
  ],
};

export default function PropertyDetails() {
  const { propertyName } = useParams();
  const list = properties[propertyName] || [];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{propertyName} List</h2>
      <div className="grid grid-cols-2 gap-4">
        {list.map((list, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md">
            <img src={list.image} alt={list.title} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="mt-2 text-lg font-semibold">{list.title}</h3>
            <p className="text-sm text-gray-600">{list.location}</p>
            <p className="text-sm text-gray-800 font-bold">{list.price}</p>
            <p className="text-sm text-gray-600">Area: {list.area}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
