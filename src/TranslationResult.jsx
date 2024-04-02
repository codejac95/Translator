import React from 'react';

function TranslationResult({ translations }) {
  return (
    <div>
      <h2>Translation Result:</h2>
      <ul>
        {translations.map((translation, index) => (
          <li key={index}>{translation}</li>
        ))}
      </ul>
    </div>
  );
}

export default TranslationResult;