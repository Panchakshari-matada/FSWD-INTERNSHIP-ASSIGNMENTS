import { useState } from "react";
import "./MoodTracker.css";

function MoodTracker() {
  const [mood, setMood] = useState("");

  const moods = [
    { name: "Happy 😊", color: "#ffe082" },
    { name: "Sad 😢", color: "#90caf9" },
    { name: "Angry 😡", color: "#ef5350" },
    { name: "Excited 🤩", color: "#a5d6a7" },
  ];

  return (
    <div className="container" style={{ background: mood.color }}>
      <h2>Mood Tracker</h2>

      <div className="buttons">
        {moods.map((m, index) => (
          <button key={index} onClick={() => setMood(m)}>
            {m.name}
          </button>
        ))}
      </div>

      {mood && <h3>Your Mood: {mood.name}</h3>}
    </div>
  );
}

export default MoodTracker;
