import React, { useState } from "react"
import { audioURLs } from './constants'
import { muteSVG, soundSVG, rightSVG } from "./icons"

// const randNum = n => Math.floor(Math.random() * (n + 1))

export const AudioPlayer = React.forwardRef((props, ref) => {

  const [playing, setPlaying] = useState(false)
  const [index, setIndex] = useState(0)
  const [src, setSrc] = useState(audioURLs[index])
  const [percent, setPercent] = useState(0)

  const { handleClick, isPlaying } = props;

  React.useEffect(() => {
    setPlaying(isPlaying);
  }, [isPlaying])

  // Calculate percent
  React.useEffect(() => {
    if (ref.current) {
      const audio = ref.current
      audio.addEventListener(
        "timeupdate",
        ({ target: { currentTime, duration } }) => {
          const percentElapsed = (currentTime / duration) * 100;
          if (percentElapsed) { setPercent(percentElapsed) }
        }
      );
    }
  }, [ref])

  React.useEffect(() => {
    if (percent) {
      console.log({ percent })
      const elem = document.querySelector('.fill');
      elem.style.transform = `translate3d(${percent}%, 0, 0)`;
    }
  }, [percent])


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
    setPlaying(true)
  }


  const renderedArtist = playing ? src.artist : "Click to play "
  const renderedTrackname = playing ? src.name : ""


  const renderedPlayBtn = playing ? soundSVG : muteSVG

  // https://m.dotdev.co/how-to-build-an-audio-player-with-html5-and-the-progress-element-487cbbbaeb  fc
  return (
    <>
      <div className='audio-player hidden' >
        <div className='audio-player-inner' >
          <div className="song-details" onClick={handleClick}>
            <span> {renderedArtist}</span>
            <span>{renderedTrackname}</span>
          </div>
          <div className="controls">
            <button onClick={handleClick} className="control-button" style={{ 'fontSize': '20px' }}>
              {renderedPlayBtn}
            </button>
            <button onClick={handleNext} className="control-button" style={{ 'fontSize': '20px' }}> {rightSVG} </button>
          </div>
        </div>
        <div className="progress-bar">
          <div className="fill" />
        </div>
      </div>

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
    </>

  )
})

export default AudioPlayer
