import React, { useState } from "react"
import { audioURLs } from './constants'

const randNum = n => Math.floor(Math.random() * (n + 1))

export const AudioPlayer = React.forwardRef((props, ref) => {

  const [index, setIndex] = useState(randNum(audioURLs.length - 1))
  const [src, setSrc] = useState(audioURLs[index])

  const handleNext = () => {
    const audio = ref.current

    // If index is larger than length, reset it to 0, else increment it
    let i = index;
    if (i + 1 >= audioURLs.length) {
      i = 0
    } else {
      i++
    }

    const source = audioURLs[i]

    // Set it
    setIndex(i)
    setSrc(source)

    audio.src = source.url
    audio.load()
    audio.play()
  }

  const handleSeek = () => {
    const audio = ref.current

    const secondsPassed = audio.currentTime
    const duration = audio.duration

    // const elem = document.querySelector('.information-overlay .fill');

    let numnum = ((secondsPassed % duration) / duration - 1) * 100;
    if (secondsPassed > duration) {
      numnum = -100;
    }

    console.log({})
    // elem.style.transform = `translate3d(${numnum}%, 0, 0)`;
  }

  const { handleClick, isPlaying } = props;
  const renderedPlayBtn = isPlaying ? "⏸" : "▶️"

 
  // https://m.dotdev.co/how-to-build-an-audio-player-with-html5-and-the-progress-element-487cbbbaebfc
  return (
    <div>
      <div className='audio-player' >
        <div className="song-details">
          <span>{src.artist}</span>
          <span>{src.name}</span>
        </div>
        <div className="controls">
          <button onClick={handleClick} className="control-button" style={{'font-size': '20px'}}> {renderedPlayBtn} </button>
          <button onClick={handleNext} className="control-button" style={{'font-size': '20px'}}> ⏭ </button>
        </div>
      </div>
      {/* <progress id="seekbar" value=".1" max="1"></progress> */}
      <audio
        src={src.url}
        controls
        crossOrigin="anonymous"
        ref={ref}
        // style={{ zIndex: 100 }}
        onEnded={handleNext}
        autoPlay={true}
        style={{ display: "none" }}
      />
    </div>

  )
})

export default AudioPlayer
