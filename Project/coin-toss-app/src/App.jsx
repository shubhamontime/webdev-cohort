import { useState } from 'react'
import coin from './assets/coin.png'
import tail from './assets/tail.png'
import head from './assets/head.png'
import video from './assets/video.mp4'
import './App.css'

function App() {
  const [showVideo, setShowVideo] = useState(false);
  const [coinChoice, setCoinChoice] = useState(2); 

  const coins = [head, tail, coin];

  function tossCoin() {
    setShowVideo(true);

    
    setTimeout(() => {
      const random = Math.floor(Math.random() * 2); 
      setCoinChoice(random);
      setShowVideo(false);
    }, 1500);
  }

  return (
    <>
      <div id="photo">
        <img 
          src={coins[coinChoice]} 
          alt={coinChoice === 0 ? "Head" : "Tail"} 
        />
      </div>

      <h1 id="number">{coinChoice === 0 ? "Head" : "Tail"}</h1>

      <button onClick={tossCoin} disabled={showVideo}>
        {showVideo ? "Tossing..." : "Toss"}
      </button>

      {showVideo && (
        <div className="video-container">
          <video src={video} autoPlay muted />
        </div>
      )}
    </>
  );
}

export default App;