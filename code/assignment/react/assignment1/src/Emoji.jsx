import Feelings from "./Emotion"

function Emojis(){
    const moods = [
        { emoji: "😊", description: "happy", name: "Danny" },
        { emoji: "😴", description: "sleepy",  name: "Vicky"  },
        { emoji: "🤔", description: "thoughtful", name: "Ayo"  },
        { emoji: "😄", description: "excited", name: "Yadel" },
        { emoji: "😌", description: "peaceful", name: "Jade" },
      ] 
      return (
        <div className="emoji-content">
          {
            moods.map((e) => (
            <Feelings 
                key={e.description}
                emoji = {e.emoji}
                description = {e.description}
                names = {e.name}
            />
            ))
          }
          
        </div>
      )
}

export default Emojis