import React, { useState, useEffect } from 'react';
import './TypingText.css'; // Make sure to create this CSS file too

const TypingText = () => {
  const fullText = "Hi! I'm Riddhima Singh\nPassionate Developer";
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText.charAt(index));
        setIndex(prev => prev + 1);
      }, 100); // typing speed
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <h1 className="typing-text">
      {text}
    </h1>
  );
};

export default TypingText;
