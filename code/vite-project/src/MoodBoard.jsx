import React, { useState } from 'react';

const MoodBoard = ({ name }) => {
  const moods = [
    { emoji: "😊", description: "happy" },
    { emoji: "😴", description: "sleepy" },
    { emoji: "🤔", description: "thoughtful" },
    { emoji: "😄", description: "excited" },
    { emoji: "😌", description: "peaceful" },
  ];

  // State to hold the current mood description
  const [currentMood, setCurrentMood] = useState('');

  // Function to handle mood change
  const handleMoodClick = (description) => {
    setCurrentMood(description);
  };

  return (
    <div className="mood-board">
      <h2>{name} is feeling {currentMood || "neutral"} today</h2>
      <div className="mood-emojis">
        {moods.map((mood, index) => (
          <span
            key={index}
            onClick={() => handleMoodClick(mood.description)}
            style={{ cursor: 'pointer', fontSize: '2rem', margin: '0.5rem' }}
          >
            {mood.emoji}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MoodBoard;
