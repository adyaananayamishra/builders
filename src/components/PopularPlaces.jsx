import React from "react";
import { Link } from "react-router-dom";

const PopularPlaces = () => {
  const places = [
    { name: "Nayapali", properties: 3, image: "/Nayapali.jpg" },
    { name: "Cuttack Road", properties: 2, image: "/Cuttack Road.jpg" },
    { name: "Kharavela Nagar", properties: 1, image: "/KharvelaNagar.jpg" },
    { name: "Khordha", properties: 2, image: "/khordha.jpg" },
    { name: "Jaydev Vihar", properties: 1, image: "/JaydevVihar.jpg" },
    { name: "Rasulgarh", properties: 1, image: "/Rasulgarh.jpg" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">POPULAR PLACES</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map((place, index) => (
          <Link to={`/places/${place.name}`} key={index} className="group">
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
              />
              <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-start px-6 text-white">
                <p className="text-sm font-semibold">{place.properties} PROPERTIES</p>
                <h3 className="text-xl font-bold">{place.name.toUpperCase()}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularPlaces;

  