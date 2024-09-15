import React, { useState, useEffect } from 'react';

const TranslatorPage = () => {
  const [textToTranslate, setTextToTranslate] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('fr');

  // Mock translation function (replace this with your actual API call)
  const translateText = async (text, targetLang) => {
    try {
      // Simulate a translation by simply returning the same text but with a "translated" flag
      // Replace this mock logic with your real API call
      const mockTranslation = `Translated "${text}" to ${targetLang.toUpperCase()}`;
      setTranslatedText(mockTranslation);
    } catch (error) {
      console.error('Error translating:', error);
      setTranslatedText('Error occurred during translation');
    }
  };

  useEffect(() => {
    if (textToTranslate && targetLanguage) {
      translateText(textToTranslate, targetLanguage);
    }
  }, [textToTranslate, targetLanguage]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-green-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Translate Your Text</h2>
        
        <div className="flex flex-col space-y-6">
          <textarea 
            className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-200"
            value={textToTranslate}
            onChange={(e) => setTextToTranslate(e.target.value)}
            placeholder="Enter text to translate"
          />
          
          <div className="flex space-x-4">
            <select 
              className="w-1/2 p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-200"
              value={sourceLanguage}
              onChange={(e) => setSourceLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
              <option value="de">German</option>
              <option value="it">Italian</option>
              <option value="ru">Russian</option>
              <option value="zh">Chinese</option>
              <option value="ja">Japanese</option>
              <option value="ko">Korean</option>
              <option value="ar">Arabic</option>
            </select>
            
            <select 
              className="w-1/2 p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-200"
              value={targetLanguage}
              onChange={(e) => setTargetLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
              <option value="de">German</option>
              <option value="it">Italian</option>
              <option value="ru">Russian</option>
              <option value="zh">Chinese</option>
              <option value="ja">Japanese</option>
              <option value="ko">Korean</option>
              <option value="ar">Arabic</option>
            </select>
          </div>
          
          <button 
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 ease-in-out shadow-lg"
            onClick={() => translateText(textToTranslate, targetLanguage)}
          >
            Translate
          </button>
          
          <textarea 
            className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-200"
            value={translatedText}
            readOnly
            placeholder="Translated text will appear here"
          />
        </div>
      </div>
    </div>
  );
};

export default TranslatorPage;
