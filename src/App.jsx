import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Slideshow from "./components/Slideshow";
import PropertyListing from "./components/PropertyListings";
import PropertyDetails from "./components/PropertyDetails";
import PopularPlaces from "./components/PopularPlaces";
import Footer from "./components/Footer";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import './index.css';



const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Slideshow /> 
                  <PropertyListing/>
                  <PopularPlaces />
                  <h1 className="text-center text-4xl mt-8">Welcome to Our Website</h1>
                </>
              }
            />
            <Route path="/" element={<PropertyListing />} />
            <Route path="/property/:propertyName" element={<PropertyDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
