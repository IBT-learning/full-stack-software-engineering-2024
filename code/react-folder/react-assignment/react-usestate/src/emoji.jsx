import { useState } from "react"
import "./App.css"
function emoji({person}) {
    const moods = [
        { emoji: "😊", description: "happy" },
        { emoji: "😴", description: "sleepy" },
        { emoji: "🤔", description: "thoughtful" },
        { emoji: "😄", description: "excited" },
        { emoji: "😌", description: "peaceful" },
      ]
    // const [mood, setMood] = useState(moods[0].description)
    const [mood, setMood] = useState('something')
    const [mood2, setMood2] = useState('something')
    const [mood1, setMood1] = useState(null)

    return (
        <>
            <div className="container">
                <h1 className="header">Welcome to <span>Mood</span> Activator</h1>

                <h2>Emoji speaks louder than voice</h2>
                <h3>You can choose your mode here</h3>
                <ul>
                    {moods.map((m, index) => (
                        <li key={index}>
                            <button onClick={() => {setMood(m.description); setMood2(m[index + 1]?.description || moods[0].description)}} onMouseEnter={() => setMood1(m.description)} onMouseLeave={() => setMood1(null)}>{`${m.emoji}`}</button>
                        </li>
                    ))}
                </ul>
                <p><strong>{mood1}</strong></p>        
                <h3>Click on the emoji to know your mood</h3>
                <p>{person[0] ? person[0] : "no name"} is <span>{mood}</span> today and {person[1]? person[1] : "no name"} is <span>{mood2}</span> today</p>
            </div>
        
        </>
    )
}

export default emoji