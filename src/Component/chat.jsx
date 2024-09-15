import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'; // Correct import

const Chat = () => {
  const navigate = useNavigate();

  const handleStartChat = () => {
    navigate('/chat/phone');
  };

  return (
    <div className="h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col justify-between">
      {/* Header */}
      <div className="flex-shrink-0 p-4 bg-white shadow-md border-b border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Chats</h2>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center p-4 text-center">
        {/* Hello Chat Section */}
        <div className="flex items-center mb-6">
          <ChatBubbleLeftRightIcon className="h-8 w-8 text-blue-500 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-800">Hello Chat</h2>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          The last chat app you&apos;ll ever need.
        </h1>
        <button
          onClick={handleStartChat}
          className="py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Start Chat
        </button>
      </div>

      {/* Footer (Optional, if you need it) */}
      <div className="p-4 bg-white shadow-md border-t border-gray-200">
        {/* Footer content if any */}
      </div>
    </div>
  );
};

export default Chat;
