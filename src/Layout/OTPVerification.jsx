import React from 'react';
import { useNavigate } from 'react-router-dom';

const OTPVerification = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/chat/backup');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-green-50 to-white p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v8l4 2"></path>
            </svg>
          </div>
          <p className="text-2xl font-bold text-gray-800">Verify Number</p>
        </div>
        <input
          type="text"
          placeholder="Enter OTP"
          className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 mb-6"
        />
        <button
          onClick={handleNext}
          className="w-full bg-green-500 text-white font-semibold px-4 py-3 rounded-md hover:bg-green-600 transition duration-300"
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default OTPVerification;
