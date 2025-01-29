import { useState } from 'react'
import './MoodSelector.css'

function MoodSelector() {
    const [mood, setMood] = useState('')

    return  <>
    <div className="mood-selector">
        <h2>I am feeling {mood} today</h2>
      <div className="mood-buttons">  
        <button onClick={() => setMood('happy')}>😄= happy</button>
        <button onClick={() => setMood('sad')}>😢= sad</button>
        <button onClick={() => setMood('angry')}>😠= angry</button>
        <button onClick={() => setMood('confused')}>😕= confused</button>
        <button onClick={() => setMood('excited')}>😆= excited</button>
        <button onClick={() => setMood('sleepy')}>😴= sleepy</button>
        <button onClick={() => setMood('surprised')}>😲= surprised</button>
        <button onClick={() => setMood('bored')}>😑= bored</button>
        <button onClick={() => setMood('sick')}>🤢= sick</button>
        <button onClick={() => setMood('in love')}>😍= in love</button>
        <button onClick={() => setMood('stressed')}>😫= stressed</button>
        <button onClick={() => setMood('anxious')}>😰= anxious</button>
      </div>
    </div>
    </>
}

export default MoodSelector