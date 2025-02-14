

import { Link } from "react-router-dom";

const properties = [
  { name: "Apartment (2BHK, 3BHK, 4BHK)", image: "/apartment.jpg",id:"apartment" },
  { name: "Bungalow", image: "/bungalow.jpg",id:"bungalow" },
  { name: "Cottage", image: "/cottage.jpg",id:"cottage" },
  { name: "Duplex", image: "/duplex.jpg",id:"duplex" },
  { name: "Simplex", image: "/simplex.jpg",id:"simplex" },
];

export default function PropertyList() {
  return (
    <div className="p-6 min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {properties.map((property) => (
        <Link
          to={`/property/${property.id}?name=${property.name}`}
          key={property.id}
          className="cursor-pointer border rounded-xl shadow-lg bg-white overflow-hidden transform transition duration-300 hover:scale-105"
        >
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-48 object-cover rounded-t-xl"
          />
          <h2 className="mt-2 text-xl font-semibold p-4">{property.name}</h2>
        </Link>
      ))}
    </div>
  );
}

