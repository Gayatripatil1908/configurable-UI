import React from 'react';
import Config from '../utils/config.json';
import "../index.css";

function Home() {
  // Unique styles for each card (different border & background colors)
  const cardStyles = [
    'bg-blue-900/40 border-blue-400 hover:bg-blue-800/60 hover:shadow-blue-400/40',
    'bg-green-900/40 border-green-400 hover:bg-green-800/60 hover:shadow-green-400/40',
    'bg-pink-900/40 border-pink-400 hover:bg-pink-800/60 hover:shadow-pink-400/40',
    'bg-yellow-900/40 border-yellow-400 hover:bg-yellow-800/60 hover:shadow-yellow-400/40',
    'bg-purple-900/40 border-purple-400 hover:bg-purple-800/60 hover:shadow-purple-400/40',
  ];

  return (
    <div className="min-h-screen py-10 px-6 bg-gray-500">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1
          className="text-4xl font-bold mb-3"
          style={{ color: Config.theme.primaryColor }}
        >
          {Config.title}
        </h1>
        <p className="text-lg text-gray-300">{Config.description}</p>
      </div>

      <h2 className="text-2xl font-semibold text-center mb-8 text-white underline decoration-wavy decoration-indigo-500">
        Our Services
      </h2>

      {/* Grid layout for cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {Config.services.map((service, index) => {
          const { title, description, price } = service;
          const styleClass = cardStyles[index % cardStyles.length];

          return (
            <div
              key={index}
              className={`border-2 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${styleClass}`}
            >
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: Config.theme.secondaryColor }}
              >
                
                {title}
              </h3>
              <p className="text-gray-300 mb-3">{description}</p>
              <p className="text-gray-200 font-medium">💰 Price: ₹{price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
