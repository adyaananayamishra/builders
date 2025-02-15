import React from "react";

const Career = () => {
  return (
    <div className="text-center p-6 max-w-4xl mx-auto">
      <img
        src="/career.jpg"
        alt="Career Opportunities"
        className="w-90 h-60 object-cover rounded-lg mb-6"
      />
     

      {/* Application Form */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Apply Now</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" className="p-2 border rounded" />
            <input type="email" placeholder="Email" className="p-2 border rounded" />
            <input type="text" placeholder="Mobile Number" className="p-2 border rounded" />
            <input type="text" placeholder="Subject" className="p-2 border rounded" />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 font-bold mb-2">UPLOAD RESUME</label>
            <div className="relative flex items-center">
              <input type="file" className="hidden" id="resume-upload" />
              <label htmlFor="resume-upload" className="bg-black text-white py-2 px-4 rounded cursor-pointer">Choose File</label>
              <span className="ml-2 text-gray-600">No file chosen</span>
            </div>
          </div>
          <div className="mt-4">
            <textarea placeholder="Message" className="p-2 border rounded w-full h-24"></textarea>
          </div>
          <button type="submit" className="mt-4 bg-black text-white py-2 px-4 rounded w-full">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Career;
