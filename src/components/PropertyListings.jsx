
import { Link } from "react-router-dom";

const properties = [
  { name: "Apartments", image: "/apartment.jpg" },
  { name: "Bungalow", image: "/bungalow.jpg" },
  { name: "Cottage", image: "/cottage.jpg" },
];

export default function PropertyList() {
  return (
    <div className="p-6 grid grid-cols-3 gap-4">
      {properties.map((property) => (
        <Link
          to={`/property/${property.name}`}
          key={property.name}
          className="cursor-pointer border p-4 rounded-lg shadow-md text-center"
        >
          <img src={property.image} alt={property.name} className="w-full h-40 object-cover rounded-lg" />
          <h2 className="mt-2 text-xl font-semibold">{property.name}</h2>
        </Link>
      ))}
    </div>
  );
}

