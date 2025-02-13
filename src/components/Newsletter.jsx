const Newsletter = () => {
    return (
      <div className=" p-6 text-black mx-auto rounded-lg">
        <h2 className="text-lg font-bold mb-3 text-center">SUBSCRIBE TO OUR NEWSLETTER</h2>
        <div className=" border border-gray-500 p-2 rounded mb-3">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
          />
        </div>
        <button className="border w-full  text-blue-900 font-bold py-2 rounded flex justify-center items-center">
          SUBSCRIBE NOW <span className="ml-2">→</span>
        </button>
      </div>
    );
  }
  export default Newsletter;
  