import React from 'react';
import './App.css'
import { useState } from 'react'

const MoodComponent = () => {
  const [feeling, setFeeling] = useState('something');

  const handleEmojiClick = (newFeeling) => {
    setFeeling(newFeeling);
  };

  const emojis  = [
    { emoji: "😴", description: "sleepy" },
    { emoji: "🤔", description: "thoughtful" },
    { emoji: "😄", description: "excited" },
    { emoji: "😌", description: "peaceful" },
  ]

  return (
    <div>
      <p>You are feeling {feeling} today.</p>
      <div>
        {emojis.map((item, index) => (
          <span key={index} onClick={() => handleEmojiClick(item.description)}
          className="emoji">
            {item.emoji}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MoodComponent;
