import { useState, useEffect } from "react";

const Slideshow = () => {
  const slides = [
    {
      image: "/image-1.jpg", 
      title: "VERIFIED HOMES FOR YOU",
      subtitle: "We evaluate, verify and list property",
    },
    {
      image: "/image-2.jpg", 
      title: "UPGRADE TO BIGGER HOME",
      subtitle: "Looking to fulfill your dream? Upgrade to a bigger home",
    },
    {
      image: "/image-3.jpg", 
      title: "Sweet Home For Small Family",
      subtitle: "Book your first sweet home with top amenities and enjoy your dream.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <div className="relative w-full h-full">
        <img
          src={slides[currentIndex].image}
          alt="Real Estate Slide"
          className="w-full h-full object-cover"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)] flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold">{slides[currentIndex].title}</h2>
          <p className="text-lg md:text-xl mt-2">{slides[currentIndex].subtitle}</p>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-lg mt-4">
            VIEW DETAIL
          </button>
        </div>

       
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
