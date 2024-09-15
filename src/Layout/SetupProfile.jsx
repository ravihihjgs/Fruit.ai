import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SetupProfile = () => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);

  const handleCompleteSetup = () => {
    navigate('/chat/chat-page');
  };

  const handleImageChange = (event) => {
    setProfileImage(event.target.files[0]);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-white p-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Let's get you setup.
        </h2>
        <div className="w-32 h-32 mx-auto mb-6 bg-gray-200 rounded-full overflow-hidden border-4 border-blue-300">
          <input
            type="file"
            id="profileImage"
            onChange={handleImageChange}
            className="hidden"
          />
          <label htmlFor="profileImage" className="block w-full h-full cursor-pointer flex items-center justify-center">
            {profileImage ? (
              <img
                src={URL.createObjectURL(profileImage)}
                alt="Profile Image"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-gray-500">
                <svg
                  className="w-8 h-8 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 17.804a5.978 5.978 0 01-1.121-3.804c0-3.313 2.687-6 6-6a5.978 5.978 0 013.804 1.121L16 10m-6-6v8m-4 4h8"
                  ></path>
                </svg>
                <span className="text-sm">Upload Profile Image</span>
              </div>
            )}
          </label>
        </div>
        <input
          type="text"
          placeholder="First Name"
          className="w-full my-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-full my-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleCompleteSetup}
          className="w-full mt-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
        >
          Complete Setup
        </button>
      </div>
    </div>
  );
};

export default SetupProfile;
