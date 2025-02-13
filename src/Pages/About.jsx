import React from "react";
// import visionImage from "./path_to_your_image.png"; 

const About = () => {
  return (
    <div className="p-6 bg-gray-100 text-gray-800">
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      <p className="mb-4">
        We are India’s fastest-growing Real Estate Services + Investment Platform. We help clients buy, sell, develop, lease, and invest in various real estate sectors:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Prime Residential</li>
        <li>Warehousing, Logistics, Industrial & Land</li>
        <li>Commercial, Retail, F&B + Entertainment</li>
        <li>Leisure & Hospitality</li>
        <li>Healthcare</li>
        <li>Education</li>
        <li>GCCs, Data Centers & Contact Centers</li>
      </ul>

      {/* Vision & Mission Section */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Vision */}
        <div className="flex flex-col items-center text-center">
          {/* <img src={ } alt="Vision" className="w-64 h-auto mb-4" /> */}
          <h3 className="text-xl font-semibold">Vision</h3>
          <p>
            Creating value beyond transactions and shaping the future of how our clients Work, Live & Play through expertise and market knowledge.
          </p>
        </div>

        {/* Mission */}
        <div className="flex flex-col items-center text-center">
          {/* <img src={} alt="Mission" className="w-64 h-auto mb-4" /> */}
          <h3 className="text-xl font-semibold">Mission</h3>
          <p>
            Deliver outstanding customer service so our clients are proud to recommend us to their network without hesitation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
