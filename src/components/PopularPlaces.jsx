const PopularPlaces = () => {
    const places = [
      {
        name: "Nayapalli",
        properties: 3,
        image: "path-to-image-1.jpg", 
      },
      {
        name: "Cuttack Road",
        properties: 2,
        image: "path-to-image-2.jpg",
      },
      {
        name: "Kharavela Nagar",
        properties: 1,
        image: "path-to-image-3.jpg", 
      },
      {
        name: "Patia",
        properties: 4,
        image: "path-to-image-5.jpg",
      },
      {
        name: "Jaydev Vihar",
        properties: 3,
        image: "path-to-image-6.jpg",
      },
      {
        name: "Rasulgarh",
        properties: 2,
        image: "path-to-image-8.jpg",
      },
    ];
  
    return (
      <div className="max-w-6xl mx-auto p-4">
        <h2 className="text-2xl font-bold text-center mb-6">POPULAR PLACES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {places.map((place, index) => (
            <div
              key={index}
              className="relative w-full h-64 rounded-lg overflow-hidden"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start px-6 text-white">
                <p className="text-sm font-semibold">{place.properties} PROPERTIES</p>
                <h3 className="text-xl font-bold">{place.name.toUpperCase()}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PopularPlaces;
  