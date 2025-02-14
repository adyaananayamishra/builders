import React from "react";

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    image: "public/assets/overteam-1.jpg",
  },
  {
    name: "Jane Smith",
    role: "Lead Architect",
    image: "public/assets/overteam-2.jpg",
  },
  {
    name: "Mike Johnson",
    role: "Project Manager",
    image: "public/assets/overteam-3.jpg",
  },
  {
    name: "Emily Davis",
    role: "Interior Designer",
    image: "public/assets/overteam-4.jpg",
  },
];

const OurTeam = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
      <p className="text-gray-600 text-center mb-12">
        Our experienced professionals dedicated to bringing your dream projects to life.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
