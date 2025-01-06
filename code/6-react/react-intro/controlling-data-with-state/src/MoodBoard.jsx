import React, { useState } from 'react';
import './MoodBoard.css';

const moods = [
  { emoji: "😊", description: "happy" },
  { emoji: "😴", description: "sleepy" },
  { emoji: "🤔", description: "thoughtful" },
  { emoji: "😄", description: "excited" },
  { emoji: "😌", description: "peaceful" },
  { emoji: "😢", description: "sad" },
  { emoji: "😡", description: "angry" },
  { emoji: "😱", description: "shocked" },
  { emoji: "😂", description: "amused" },
  { emoji: "🤩", description: "starstruck" },
  { emoji: "😎", description: "cool" },
  { emoji: "🥱", description: "bored" },
  { emoji: "🥳", description: "celebratory" },
  { emoji: "😇", description: "innocent" },
];

function MoodBoard({ name }) {
  const [mood, setMood] = useState("...");

  return (
    <div className="mood-board-container">
      <h1>{name ? `${name} is feeling ${mood} today` : `You are feeling ${mood} today`}</h1>
      <div className="emoji-container">
        {moods.map(({ emoji, description }) => (
          <span
            key={description}
            className="emoji"
            onClick={() => setMood(description)}
          >
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
}

export default MoodBoard;
