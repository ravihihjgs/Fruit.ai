import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackupFound = () => {
  const navigate = useNavigate();

  const handleStartFresh = () => {
    navigate('/chat/setup-profile');
  };

  const handleRestoreBackup = () => {
    // Implement backup restoration logic here
    console.log('Restoring backup...');
    // Then navigate to the next screen
    navigate('/preparing-backup');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-white p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <div className="mb-8 flex items-center">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">We found a backup!</h2>
        </div>
        <button
          onClick={handleRestoreBackup}
          className="w-full py-3 bg-purple-500 text-white rounded-md shadow-md font-medium hover:bg-purple-600 transition duration-300"
        >
          Restore Backup
        </button>
        <button
          onClick={handleStartFresh}
          className="w-full py-3 mt-4 bg-white text-purple-500 border border-purple-500 rounded-md shadow-md font-medium hover:bg-purple-50 transition duration-300"
        >
          Start Fresh
        </button>
      </div>
    </div>
  );
};

export default BackupFound;
