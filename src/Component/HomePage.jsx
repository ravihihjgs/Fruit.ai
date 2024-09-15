import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 space-y-10 py-12 px-4">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-10 tracking-tight text-center">
        Welcome to <span className="text-yellow-600">Fruit.AI</span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <Link
          to="/chat"
          className="bg-yellow-400 hover:bg-yellow-500 text-white text-2xl font-semibold p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out text-center"
        >
          Chat
        </Link>
        
        <Link
          to="/translator"
          className="bg-green-400 hover:bg-green-500 text-white text-2xl font-semibold p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out text-center"
        >
          Translator
        </Link>
        
        <Link
          to="/faq"
          className="bg-blue-400 hover:bg-blue-500 text-white text-2xl font-semibold p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out text-center"
        >
          FAQs
        </Link>
        
        <Link
          to="/about"
          className="bg-pink-400 hover:bg-pink-500 text-white text-2xl font-semibold p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out text-center"
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
