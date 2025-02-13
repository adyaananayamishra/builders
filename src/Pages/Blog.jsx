import React from "react";

const blogPosts = [
  {
    id: 1,
    date: "14th Dec 2024",
    title: "The Allure of Modern Living in Flats",
    description:
      "Welcome to a world where convenience meets comfort, and style intertwines with practicality.",
    image: "/blog1.jpg", 
  },
  {
    id: 2,
    date: "27th Nov 2023",
    title: "Creating Your Ideal Home: The Art of Choosing the Perfect Surroundings",
    description:
      "Is Infrastructure development coping up with real estate growth, especially in upcoming locations?",
    image: "/blog2.jpg", 
  },
  {
    id: 3,
    date: "6th Nov 2024",
    title: "Vastu and Architecture needs for Interior Design",
    description:
      "Essential considerations in interior design include Vastu, an ancient practice for energy flow and well-being.",
    image: "/blog3.jpg", 
  },
  {
    id: 4,
    date: "20th Oct 2023",
    title: "Maximizing Small Spaces: Interior Design Hacks",
    description:
      "Discover how to optimize small living areas with smart interior design tips.",
    image: "/blog4.jpg", 
  },
  {
    id: 5,
    date: "5th Sep 2024",
    title: "Smart Homes: The Future of Urban Living",
    description:
      "Explore the latest trends in smart home technology and how it's changing modern living.",
    image: "/blog5.jpg", 
  },
  {
    id: 6,
    date: "12th Aug 2023",
    title: "Eco-Friendly Homes: Sustainability in Modern Architecture",
    description:
      "Learn how sustainable architecture is shaping eco-friendly homes for a better future.",
    image: "/blog6.jpg", 
  },
];

const BlogFooter = () => {
  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Latest Blogs</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
              <div className="p-4 text-center">
                <p className="text-gray-500 text-sm">{post.date}</p>
                <h3 className="text-lg font-semibold text-gray-800 mt-2">{post.title}</h3>
                <p className="text-gray-600 mt-2">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogFooter;
