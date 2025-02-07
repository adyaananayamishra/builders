const TopSection = () => {
  return (
    <section
      className="relative w-full h-[500px] bg-cover bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: 'url(https://via.placeholder.com/1500x900/2c3e50/ffffff?text=Hero+Image)' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-extrabold mb-4">Find Your Dream Home</h1>
        <p className="text-xl mb-6">Browse our listings to find your perfect place to live. We make it easy!</p>
        <a
          href="/listings"
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          View Listings
        </a>
      </div>
    </section>
  );
};

export default TopSection;
