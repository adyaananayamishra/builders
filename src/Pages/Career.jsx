import React from "react";

const Career = () => {
  return (
    <div className="text-center p-6 max-w-4xl mx-auto">
      <img
        src="src/assets/career.jpg"
        alt="Career Opportunities"
        className="w-90 h-60 object-cover rounded-lg mb-6"
      />
      <p className="text-lg text-gray-700 mb-4">
        At Luxe Realty, we are always looking for passionate and driven individuals to join our growing team. We believe in fostering a collaborative work environment where innovation, dedication, and excellence are valued.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Whether you are an experienced real estate professional or just starting your career, we offer opportunities for growth and success. Our team members gain access to exclusive listings, industry-leading training, and a supportive network that helps them excel in the real estate industry.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        If you have the ambition to make a difference in the luxury real estate market, we would love to hear from you. Explore our current openings and take the next step in your career with Luxe Realty.
      </p>

      {/* Application Form */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Apply Now</h2>
        <p className="text-gray-600 mb-4">
          Fill the form below and we will connect if your profile gets shortlisted.
        </p>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" className="p-2 border rounded" />
            <input type="email" placeholder="Email" className="p-2 border rounded" />
            <input type="text" placeholder="Mobile Number" className="p-2 border rounded" />
            <input type="text" placeholder="Subject" className="p-2 border rounded" />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Upload Resume</label>
            <input type="file" className="p-2 border rounded w-full" />
          </div>
          <div className="mt-4">
            <textarea placeholder="About You" className="p-2 border rounded w-full h-24"></textarea>
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
