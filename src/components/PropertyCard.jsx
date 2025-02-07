const PropertyCard = ({ property }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold">{property.title}</h2>
          <p className="text-gray-600">{property.location}</p>
          <p className="text-blue-600 font-semibold mt-2">${property.price}</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            View Details
          </button>
        </div>
      </div>
    );
  };
  
  export default PropertyCard;
  