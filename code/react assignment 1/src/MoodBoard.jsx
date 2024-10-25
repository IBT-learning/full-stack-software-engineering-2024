import React, {useState } from "react";

const MoodBoard = ({ name }) =>{
    const [currentMood, setCurrentMood] = useState("neutral");

    const moods = [
        { emoji: "😊", description: "happy" },
        { emoji: "😴", description: "sleepy" },
        { emoji: "🤔", description: "thoughtful" },
        { emoji: "😄", description: "excited" },
        { emoji: "😌", description: "peaceful" },
    ];

    const handleMoodChange = (description) =>{
        setCurrentMood(description);
    };

    return(
        <div className="mood-board">
        <h2>{name} is feeling {currentMood} today</h2>
        <div className="emoji-container">
          {moods.map((mood, index) => (
            <span
              key={index}
              onClick={() => handleMoodChange(mood.description)}
              style={{ fontSize: '2rem', cursor: 'pointer', margin: '0 1rem' }}
            >
              {mood.emoji}
            </span>
          ))}
        </div>
      </div>
    );
};

export default MoodBoard