import React from "react";

const About = () => {
  return (
    <div className="p-6 bg-gray-100 text-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-center">About Us</h2>
      <p className="mb-4">
        We are India’s fastest-growing Real Estate Services + Investment Platform. We help clients buy, sell, develop, lease, and invest in various real estate sectors:
      </p>
      <ul className="list-disc pl-6 space-y-1 font-serif text-lg">
        <li>Prime Residential</li>
        <li>Warehousing, Logistics, Industrial & Land</li>
        <li>Commercial, Retail, F&B + Entertainment</li>
        <li>Leisure & Hospitality</li>
        <li>Healthcare</li>
        <li>Education</li>
        <li>GCCs, Data Centers & Contact Centers</li>
      </ul>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold">VISION</h3>
          <p>
            Creating value beyond transactions and shaping the future of how our clients Work, Live & Play through expertise and market knowledge.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold">MISSION</h3>
          <p>
            Deliver outstanding customer service so our clients are proud to recommend us to their network without hesitation.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold">VALUES</h3>
          <p>
            Integrity, Excellence, Customer-Centric Approach, Innovation, and Collaboration drive our success and relationships.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
