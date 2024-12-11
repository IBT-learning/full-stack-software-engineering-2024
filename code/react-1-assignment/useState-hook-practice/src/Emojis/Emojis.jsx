import { useState } from 'react'


function Emojis ({ name }) {
    const [mood, setMood] = useState("something")

    const moods = [
        { emoji: "😊", description: "happy" },
        { emoji: "😴", description: "sleepy" },
        { emoji: "🤔", description: "thoughtful" },
        { emoji: "😄", description: "excited" },
        { emoji: "😌", description: "peaceful" },
    ]

    const moodFunc = (m) => {
        return setMood(m.description)
    }

    return (
    <>
    <div className='mood-wrapper'>
        <p>Click on an emoji to express your mood</p>
        <div className='btn-wrapper'>
        {moods.map((m) => {
            return <button 
            id='btn' 
            key={m.description} 
            onClick={() => { return moodFunc(m)}}>
                {m.emoji}
                </button>
        })}
        </div>
        <p id='text'>{name} is feeling {mood} today...</p>

    </div>
    </>
    )
}

export default Emojis