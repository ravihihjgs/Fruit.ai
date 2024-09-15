import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import LoginPage from './Component/LoginPage';
import HomePage from './Component/HomePage';
import Chat from './Component/chat';  
import PhoneNumber from './Layout/PhoneNumber';
import OTPVerification from './Layout/OTPVerification';
import BackupFound from './Layout/BackupFound';
import SetupProfile from './Layout/SetupProfile';
import ChatPage from './Layout/ChatPage';
import Translator from './Component/Translator';
import FAQ from './Component/FAQ';
import About from './Component/About';

const App = () => {
  return (
    <Router>
      <div>
        {/* <nav className="p-4 bg-gray-200 shadow-md">
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-blue-600 hover:underline">Login</Link></li>
            <li><Link to="/home" className="text-blue-600 hover:underline">Home</Link></li>
            <li><Link to="/chat" className="text-blue-600 hover:underline">Chat</Link></li>
            <li><Link to="/translator" className="text-blue-600 hover:underline">Translator</Link></li>
            <li><Link to="/faq" className="text-blue-600 hover:underline">FAQ</Link></li>
            <li><Link to="/about" className="text-blue-600 hover:underline">About</Link></li>
          </ul>
        </nav> */}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/chat/phone" element={<PhoneNumber />} />
          <Route path="/chat/otp" element={<OTPVerification />} />
          <Route path="/chat/backup" element={<BackupFound />} />
          <Route path="/chat/setup-profile" element={<SetupProfile />} />
          <Route path="/chat/chat-page" element={<ChatPage />} />
          <Route path="/translator" element={<Translator />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
