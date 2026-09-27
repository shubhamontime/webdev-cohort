import { useState } from "react";

import dice1 from "./assets/dice1.png";
import dice2 from "./assets/dice2.png";
import dice3 from "./assets/dice3.png";
import dice4 from "./assets/dice4.png";
import dice5 from "./assets/dice5.png";
import dice6 from "./assets/dice6.png";

import hero from "./assets/video.mp4";
import "./App.css";

function App() {
  const [dice, setDice] = useState(1);
  const [showVideo, setShowVideo] = useState(false);

  const images = [dice1, dice2, dice3, dice4, dice5, dice6];

  function playVideo() {
    setShowVideo(true);

    setTimeout(() => {
      setShowVideo(false);
    }, 1500);
  }

  function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDice(randomNumber);
  }

  function handlePlay() {
    playVideo();

    setTimeout(() => {
      rollDice();
    }, 1500);
  }

  return (
    <>
      <div id="photo">
        <img src={images[dice - 1]}  />
      </div>

      <h1 id="number">{dice}</h1>

      <button onClick={handlePlay} id="button">
        PLAY
      </button>

      {showVideo && (
        <div className="video-container">
          <video src={hero} autoPlay />
        </div>
      )}
    </>
  );
}

export default App;
