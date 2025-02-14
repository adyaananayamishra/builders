import { useParams,useLocation } from "react-router-dom";
import { useEffect,useState } from "react";

const properties = {
  apartment: [
    { title: "Luxury Apartment", location: "khordha", price: "$1,500,000", area: "1200 sqft", image: "/assets/luxuaryapartment.jpg" },

    { title: "2 BHK", location: "patia", price: "$800,000", area: "900 sqft", image: "/assets/2bhk.jpg" },

    { title: "3 BHK", location: "patia", price: "$950,000", area: "1100 sqft", image: "/assets/3bhk.jpg" },

    { title: "Penthouse", location: "kharavela Nagar", price: "$2,000,000", area: "1400 sqft", image: "/assets/penthouse.jpg" },

    { title: "City View Apartment", location: "Damana ", price: "$1,200,000", area: "1000 sqft", image: "/assets/cityviewapartment.jpg" },

    { title: "4 BHK", location: "Hanspal", price: "$900,000", area: "1050 sqft", image: "/assets/4bhk.jpg" },
  ],
  bungalow: [
    { title: "Cozy Bungalow", location: "Miami, FL", price: "$600,000", area: "1500 sqft", image: "/assets/cozybungalow.jpg" },
    { title: "Beachside Bungalow", location: "San Diego, CA", price: "$700,000", area: "1600 sqft", image: "/assets/beachsidebungalow.jpg" },
    { title: "Garden Retreat", location: "Portland, OR", price: "$650,000", area: "1450 sqft", image: "/assets/gardenretreat.jpg" },
    { title: "Countryside Escape", location: "Austin, TX", price: "$680,000", area: "1550 sqft", image: "/assets/countrysideescape.jpg" },
  ],
  cottage: [
    { title: "Lakeside Cottage", location: "Seattle, WA", price: "$750,000", area: "1100 sqft", image: "/assets/lakesidecottage.jpg" },
    { title: "Mountain Cottage", location: "Denver, CO", price: "$850,000", area: "1300 sqft", image: "/assets/mountaincottage.jpg" },
    { title: "Woodland Escape", location: "Asheville, NC", price: "$720,000", area: "1250 sqft", image: "/assets/woodlandescape.jpg" },
    { title: "Riverside Cottage", location: "Nashville, TN", price: "$780,000", area: "1150 sqft", image: "/assets/riversidecottage.jpg" },
  ],
  simplex: [
    { title: "Modern Simplex", location: "Phoenix, AZ", price: "$500,000", area: "1000 sqft", image: "/assets/modernsimplex.jpg" },
    { title: "Cozy Simplex", location: "Las Vegas, NV", price: "$450,000", area: "950 sqft", image: "/assets/cozysimplex.jpg" },
  ],
  duplex: [
    { title: "Spacious Duplex", location: "Dallas, TX", price: "$1,100,000", area: "1800 sqft", image: "/assets/spaciousduplex.jpg" },
    { title: "Luxury Duplex", location: "Atlanta, GA", price: "$1,200,000", area: "1900 sqft", image: "/assets/luxuaryduplex.jpg" },
  ],
};

export default function PropertyDetails() {
  let { search } = useLocation();

   const query = new URLSearchParams(search);
   const [propertyname, setPropertyname] = useState(query.get('name'))
  const { propertyName } = useParams();
  const list = properties[propertyName] || [];
  useEffect(()=>{console.log(list)},[list])
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{propertyname} List</h2>
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
