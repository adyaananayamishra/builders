// import { useState } from "react";

// const Slideshow = () => {
//   const images = [
//     "https://via.placeholder.com/800x400/FF5733/FFFFFF?text=Slide+1",
//     "https://via.placeholder.com/800x400/33FF57/FFFFFF?text=Slide+2",
//     "https://via.placeholder.com/800x400/3357FF/FFFFFF?text=Slide+3",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   return (
//     <div className="relative w-full max-w-4xl mx-auto">
//       <img
//         src={images[currentIndex]}
//         alt={`Slide ${currentIndex + 1}`}
//         className="w-full h-64 object-cover rounded-lg"
//       />
//       <button
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
//         onClick={prevSlide}
//       >
//         &lt;
//       </button>
//       <button
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
//         onClick={nextSlide}
//       >
//         &gt;
//       </button>
//     </div>
//   );
// };

// export default Slideshow;
