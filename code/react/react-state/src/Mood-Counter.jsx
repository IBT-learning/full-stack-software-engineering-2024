import { useState } from 'react';
import './App.css';

function MoodCounter({ name }) {  
  const [mood, setMood] = useState({ description: '', emoji: '' });

  const moods = [
    { emoji: '😊', description: 'happy' },
    { emoji: '😴', description: 'sleepy' },
    { emoji: '🤔', description: 'thoughtful' },
    { emoji: '😄', description: 'excited' },
    { emoji: '😌', description: 'peaceful' },
    { emoji: '😔', description: 'sad' },
    
  ];


  const moodEmoji = (description, emoji) => {
    setMood({ description, emoji });
  };

  return (
    <>
      <h3>{name}, click on the emoji to show how you feel today</h3>
      <div className="moji">
        {moods.map((option, index) => (
          <button key={index} onClick={() => moodEmoji(option.description, option.emoji)}>
            {option.emoji}
          </button>
        ))}
      </div>
      <p className='feeling'> You are feeling {mood.description ? `${mood.description} ${mood.emoji}` : '___'} today, {name}.</p> 
    </>
  );
}

export default MoodCounter;
