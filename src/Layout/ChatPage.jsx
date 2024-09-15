import React, { useState } from 'react';
import { PaperClipIcon } from '@heroicons/react/24/outline';

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Welcome to the chat!', fromUser: false },
    { id: 2, text: 'How can I assist you today?', fromUser: false },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [activeChat, setActiveChat] = useState(null);
  const [chats, setChats] = useState([
    { id: 1, name: 'John Doe', profileImage: '/path/to/profile-image.jpg' },
    { id: 2, name: 'Jane Doe', profileImage: '/path/to/profile-image.jpg' },
  ]);
  const [showProfile, setShowProfile] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: Date.now(), text: newMessage, fromUser: true }]);
      setNewMessage('');
    }
  };

  const handleChatClick = (chat) => {
    setActiveChat(chat);
  };

  const handleProfileClick = (user) => {
    setSelectedUser(user);
    setShowProfile(true);
  };

  const handleProfileClose = () => {
    setShowProfile(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Chat List */}
      <div className="w-80 bg-white shadow-lg border-r border-gray-200 overflow-y-auto">
        <h2 className="text-lg font-semibold p-4 border-b border-gray-200">Chats</h2>
        <ul>
          {chats.map((chat) => (
            <li
              key={chat.id}
              onClick={() => handleChatClick(chat)}
              className="flex items-center p-4 cursor-pointer hover:bg-gray-50 transition"
            >
              <img
                src={chat.profileImage}
                alt="Profile"
                className="w-12 h-12 rounded-full border border-gray-200"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{chat.name}</h3>
                <p className="text-sm text-gray-500">Online</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Active Chat */}
      <div className="flex-1 flex flex-col">
        {activeChat && (
          <div className="flex-1 flex flex-col bg-white shadow-lg">
            <div className="flex items-center p-4 border-b border-gray-200">
              <img src={activeChat.profileImage} alt="Profile" className="w-12 h-12 rounded-full" />
              <div className="ml-4">
                <h2 className="text-lg font-semibold">{activeChat.name}</h2>
              </div>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`p-3 mb-2 rounded-lg max-w-xs ${
                    message.fromUser
                      ? 'bg-blue-500 text-white self-end'
                      : 'bg-gray-300 text-gray-800 self-start'
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <div className="bg-white border-t flex items-center px-4 py-2 shadow-md">
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <PaperClipIcon className="w-6 h-6" />
              </button>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-lg p-2 mx-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Send
              </button>
            </div>
            {showProfile && selectedUser && (
              <div className="absolute top-0 right-0 w-80 bg-white shadow-lg border-l border-gray-200 h-full overflow-y-auto">
                <div className="p-4 border-b border-gray-200 flex items-center">
                  <img
                    src={selectedUser.profileImage}
                    alt="Profile"
                    className="w-24 h-24 rounded-full border border-gray-200"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">{selectedUser.name}</h3>
                    <p className="text-sm text-gray-500">Online</p>
                  </div>
                </div>
                <ul className="p-4 space-y-2">
                  <li>
                    <a href="#" className="text-lg font-semibold text-gray-800 hover:text-gray-900">
                      Account
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-lg font-semibold text-gray-800 hover:text-gray-900">
                      Chat Settings
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-lg font-semibold text-gray-800 hover:text-gray-900">
                      Notifications
                    </a>
                  </li>
                </ul>
                <button
                  onClick={handleProfileClose}
                  className="w-full py-3 bg-gray-500 text-white rounded-lg mt-4 hover:bg-gray-600 transition"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
