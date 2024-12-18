import { useState } from "react"
import "./Mood.css"



function Mood({name}){

    const [selectMood, setSelectMood] = useState("something")

    const moods = [
        { emoji: "😊", description: "happy" },
        { emoji: "😴", description: "sleepy" },
        { emoji: "🤔", description: "thoughtful" },
        { emoji: "😄", description: "excited" },
        { emoji: "😌", description: "peaceful" },
        { emoji: "🥺", description: "disturbed" },
      ]
      return(
        <><div className="text">
        <h1>{name} is feeling {selectMood} today.</h1>
        </div>
        <div className="mood-container">
            {moods.map((mood, index)=> 
            <span 
            className="emoji"
            key={index}
            onClick={()=> setSelectMood(moods[index].description)}
            > {mood.emoji}</span>
            )}
        </div>
        </>
      )

}

export default Mood