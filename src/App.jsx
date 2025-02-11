import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Slideshow from "./components/SlideShow";
import SearchBar from "./components/SearchBar";
import PropertyListing from "./components/PropertyListings";
import PropertyDetails from "./components/PropertyDetails";
import PopularPlaces from "./components/PopularPlaces";
import Testimonials from "./components/Testimonial";
import Career from "./Pages/Career";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Footer from "./components/Footer";
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
                 <SearchBar/>
                  <PropertyListing/>
                  <PopularPlaces />
                  <Testimonials/>
                  <Footer />
                </>
              }
            />
            <Route path="/" element={<PropertyListing />} />
            <Route path="/property/:propertyName" element={<PropertyDetails />} />
            <Route path="/career" element={<Career />} />
          
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
       
      </div>
    </Router>
  );
};

export default App;
