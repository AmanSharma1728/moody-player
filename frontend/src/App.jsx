import "./App.css";
import FacialExpression from "./components/FacialExpression";
import MoodSongs from "./components/MoodSongs";
import { useState } from "react";

function App() {
  const [Songs, setSongs] = useState([
    {
      title: "Test Song 1",
      artist: "Test Artist 1",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Working dummy audio
    },
    {
      title: "Test Song 2",
      artist: "Test Artist 2",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
  ]);

  return (
    <div className="app-container">
      <h1>Moody Player</h1>
      <FacialExpression setSongs={setSongs} />
      <MoodSongs Songs={Songs} />
    </div>
  );
}

export default App;
