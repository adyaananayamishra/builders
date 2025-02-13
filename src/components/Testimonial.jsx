import React, { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    project: "Kohinoor Tinsel Town 2.0, Hinjewadi Phase-2, 3BHK.",
    review:
      "Pune Realty was my first option out of all the real estate consultants I'm familiar with at Pune. Discussion with the team was simple. They comprehended my need and made property recommendations that were spot-on. They always show up on time for scheduled appointments. They maintain a clean and inviting workplace. I have faith in Pune Realty and am happy to recommend their assistance.",
    name: "Somesh G.",
    avatar: "/Bavatar.png", 
  },
  {
    project: "Lodha Belmondo, Mumbai-Pune Expressway, 4BHK.",
    review:
      "I had an excellent experience with Pune Realty. Their team guided me through the entire process with professionalism. Highly recommended!",
    name: "Anjali S.",
    avatar: "/Gavatar.png", 
  },
  {
    project: "Godrej Infinity, Keshav Nagar, 2BHK.",
    review:
      "From start to finish, Pune Realty provided great service. The team was attentive, professional, and ensured that I found the right property within my budget.",
    name: "Rohit M.",
    avatar: "/Bavatar.png",
  },
  {
    project: "VTP Pegasus, Kharadi, 3BHK.",
    review:
      "The support and guidance I received from Pune Realty made the home-buying process stress-free. They took care of everything and found me the perfect home!",
    name: "Neha K.",
    avatar: "/Gavatar.png",
  },
  {
    project: "Shapoorji Pallonji Joyville, Hadapsar, 2BHK.",
    review:
      "I was impressed with the transparency and efficiency of Pune Realty. The entire process was smooth, and I got my dream home without any hassle.",
    name: "Amit S.",
    avatar: "/Bavatar.png",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 py-12 px-6">
      <h2 className="text-center text-3xl font-bold mb-8">Testimonials</h2>
      <div className="max-w-3xl mx-auto overflow-hidden relative">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-full p-6 bg-white shadow-lg rounded-lg">
              <FaQuoteLeft className="text-3xl text-gray-400 mb-4" />
              <p className="font-semibold">
                <strong>Project: {testimonial.project}</strong>
              </p>
              <p className="text-gray-700 mt-2">{testimonial.review}</p>
              <div className="flex items-center mt-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border border-gray-300 shadow"
                />
                <h4 className="text-lg font-bold ml-4">{testimonial.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? "bg-orange-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;




