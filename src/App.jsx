import React, { useState } from 'react';
import TranslationInput from './TranslationInput';
import TranslationResult from './TranslationResult';
import './App.css';

function App() {
  const [translations, setTranslations] = useState([]);

  const translateText = async (text) => {
    try {
      const response = await fetch(
        `https://mymemory.translated.net/api/get?q=${encodeURIComponent(
          text
        )}&langpair=sv|en`
      );
      const data = await response.json();
      const translatedText = data.responseData.translatedText;
      setTranslations([...translations, translatedText]);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };
  
  

  return (
    <div>
      <h1>Translation App</h1>
      <TranslationInput language="en" onTranslate={translateText} />
      <TranslationResult translations={translations} />
    </div>
  );
}

export default App;
