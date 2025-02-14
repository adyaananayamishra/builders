import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Slideshow from "./components/SlideShow";
import SearchBar from "./components/SearchBar";
import PropertyList from "./components/PropertyList";
import PropertyDetails from "./components/PropertyDetails";
import PopularPlaces from "./components/PopularPlaces";
import PlaceDetails from "./components/PlaceDetails";
import OverTeam from "./components/OverTeam";
import Testimonials from "./components/Testimonial";
import Newsletter from "./components/Newsletter";
import Career from "./Pages/Career";
import Terms from "./Pages/Terms";
import Privacy from "./Pages/Privacy";
import Blog from "./Pages/Blog"; 
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
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <Slideshow /> 
                  <SearchBar/>
                  <PropertyList/>
                  <PopularPlaces />
                  <Testimonials/>
                  <OverTeam/>
                  <Newsletter/>
                
                </>
              }
            />

            
            <Route path="/property/:propertyName" element={<PropertyDetails />} />

           
            <Route path="/places/:name" element={<PlaceDetails />} />

           
            <Route path="/career" element={<Career />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
    
  );
};

export default App;


