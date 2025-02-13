import React from "react";
import { useParams } from "react-router-dom";

const placesData = {
  "Nayapali": [
    { title: "Spacious Office Space", area: "2000 Sq.Ft.", price: "₹ 87.50 Th", location: "Bhubaneswar", image: "/nayapali1.jpg" },
    { title: "Modern Commercial Space", area: "1500 Sq.Ft.", price: "₹ 75 Th", location: "Bhubaneswar", image: "/nayapali2.jpg" },
    { title: "Premium Workspace", area: "1800 Sq.Ft.", price: "₹ 85 Th", location: "Bhubaneswar", image: "/nayapali3.jpg" }
  ],
  "Cuttack Road": [
    { title: "Affordable Office Space", area: "1200 Sq.Ft.", price: "₹ 65 Th", location: "Bhubaneswar", image: "/assets/cuttackroad-1.jpg" },
    { title: "Well-Lit Commercial Space", area: "1400 Sq.Ft.", price: "₹ 70 Th", location: "Bhubaneswar", image: "/assets/cuttackroad-2.jpg" }
  ],
  "Kharavela Nagar": [
    { title: "Luxury Office Space", area: "2500 Sq.Ft.", price: "₹ 95 Th", location: "Bhubaneswar", image: "/assets/kharavela-1.jpg" }
  ],
  "Khordha": [
    { title: "Spacious Corporate Hub", area: "1800 Sq.Ft.", price: "₹ 65 Th", location: "Khordha", image: "/assets/khordha-1.jpg" },
    { title: "Professional Office Setup", area: "1600 Sq.Ft.", price: "₹ 60 Th", location: "Khordha", image: "/assets/khordha-2.jpg" }
  ],
  "Jaydev Vihar": [
    { title: "Prime Location Office", area: "2200 Sq.Ft.", price: "₹ 90 Th", location: "Bhubaneswar", image: "/assets/jaydev-1.jpg" }
  ],
  "Rasulgarh": [
    { title: "Affordable Work Space", area: "1700 Sq.Ft.", price: "₹ 80 Th", location: "Bhubaneswar", image: "/assets/rasulgarh-1.jpg" }
  ]
};

const PlaceDetails = () => {
  const { name } = useParams();
  const properties = placesData[name];

  if (!properties) return <div className="text-center text-red-500 text-xl">❌ Place not found!</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{name}</h1>
      {properties.map((place, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-4 w-full max-w-2xl">
          {/* Title */}
          <h2 className="text-xl font-bold text-gray-900 mb-2">{place.title}</h2>
          
        <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
            <img src={place.image} alt={place.title} className="w-full h-full object-cover" />
          </div>

          <p className="text-green-600 text-lg font-bold">{place.price}</p>

          <p className="text-blue-600 text-lg font-semibold">{place.area} Commercial Office/Space</p>

           <p className="text-gray-700 text-md">📍 {place.location}</p>

          <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-all">
            CONTACT US
          </button>
        </div>
      ))}
    </div>
  );
};

export default PlaceDetails;
