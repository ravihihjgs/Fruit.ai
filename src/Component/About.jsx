import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-6 py-10 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg shadow-xl">
      <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-8 tracking-tight drop-shadow-md">About Fruit AI</h2>
      <p className="text-xl text-gray-700 leading-relaxed text-center mb-12 max-w-3xl mx-auto">
        Fruit AI is a cutting-edge platform designed to revolutionize the way you interact with fruits. 
        With our advanced AI technology, we offer a personalized experience tailored to your preferences. 
        Discover new fruit varieties, learn about their nutritional benefits, and get creative with delicious recipes.
      </p>

      <div className="flex justify-center mb-12">
        <div className="w-full md:w-2/3">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Our Mission</h3>
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            To make healthy eating enjoyable and accessible for everyone.
          </p>
        </div>
      </div>

      <div className="flex justify-center mb-12">
        <div className="w-full md:w-2/3">
          <div className="flex flex-wrap -mx-4 justify-center">
            <button className="text-2xl font-bold text-white bg-black border-2 border-gray-300 py-3 px-6 rounded-lg hover:bg-gray-800 transition-all duration-300">
              About
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
