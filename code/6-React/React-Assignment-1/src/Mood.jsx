import { useState } from "react"
import "./index.css";

function Mood({ name }) {

    const [description, setDescription] = useState("something")

    const moods = [
        { emoji: "😊", description: "happy" },
        { emoji: "😴", description: "sleepy" },
        { emoji: "🤔", description: "thoughtful" },
        { emoji: "😄", description: "excited" },
        { emoji: "😌", description: "peaceful" },
        { emoji: "😍", description: "lovely" },
        { emoji: "😂", description: "funny" },
        { emoji: "😢", description: "sad" },
        { emoji: "😎", description: "cool" },
        { emoji: "🤣", description: "hilarious" },
    ]
    return (
        <>
            <h1 className="header">Mood Decsription App</h1>
            <div className="emoji-div">
                <div className="mood">Mood</div>
                {moods.map((mood) =>
                    <span className="emojis"
                        key={mood.emoji}
                        onClick={() => { setDescription(`${mood.description}`) }
                        }>{mood.emoji}
                    </span>
                )}
            </div>
            <h2 className="description">{name} is feeling <span>{description}</span> today</h2>
        </>
    )
}

export default Mood 