import { useParams } from "react-router-dom";

const PropertyDetails = () => {
  const { id } = useParams();

  const property = {
    title: "Luxury Villa",
    location: "Los Angeles, CA",
    price: "1,200,000",
    description: "A beautiful luxury villa with modern amenities and a spacious garden.",
    image: "https://via.placeholder.com/600",
  };

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={property.image} alt={property.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h2 className="text-3xl font-bold text-blue-600">{property.title}</h2>
          <p className="text-gray-600">{property.location}</p>
          <p className="text-blue-600 font-bold text-xl mt-2">${property.price}</p>
          <p className="text-gray-700 mt-4">{property.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
