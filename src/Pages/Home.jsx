import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
// import Slideshow from "../components/Slideshow";
import TopSection from "../components/Topsection";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <TopSection />
      
     
      <div className="py-16 text-center">
        {/* <h1 className="text-4xl font-bold text-blue-600 mb-4">Find Your Dream Home</h1> */}
        {/* <Slideshow /> */}
        <p className="text-gray-600 mb-6">Browse our listings to find the perfect home for you.</p>
        
        <div className="max-w-lg mx-auto mb-6">
          <SearchBar onSearch={(query) => console.log(query)} />
        </div>
        
        <Link
          to="/listings"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700"
        >
          View Listings
        </Link>
      </div>
    </div>
  );
};

export default Home;
