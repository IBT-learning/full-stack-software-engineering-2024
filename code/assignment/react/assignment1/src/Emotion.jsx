import "./Emotion.css"
import { useState } from "react"
function Feelings ({emoji, description, names}) {
    const [emojiClick, setEmoji] = useState()
    return (
     <div className="emoji-content">
       <div className="emoji-button">
       <button onClick={() => setEmoji(description)}> {emoji} </button>
       </div>
        <div className="description">
          {emojiClick && <p>{names} is feeling {emojiClick} today</p>}
        </div>
            
     </div>
    )
}
export default Feelings