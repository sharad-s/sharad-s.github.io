import React, { useState } from "react"

const cors = "https://cors-anywhere.herokuapp.com/"
const randNum = n => Math.floor(Math.random() * (n + 1))

const initSrc =
  "https://raw.githubusercontent.com/anars/blank-audio/master/250-milliseconds-of-silence.mp3"

export const AudioPlayer = React.forwardRef((props, ref) => {
  const [audioURLs] = useState([
    initSrc,
    "https://a.tumblr.com/tumblr_qa7jfcv7741r4pgk7o1.mp3",
    "https://a.tumblr.com/tumblr_pyo5kf51M41r4pgk7o1.mp3",
  ])

  const [index, setIndex] = useState(0)
  const [src, setSrc] = useState(audioURLs[index])

  const getURL = () => {
    console.log("pre", index)
    if (index + 1 >= audioURLs.length) {
      setIndex(1)
    } else {
      setIndex(index + 1)
    }
    console.log("post", index)
    // setIndex()
    return audioURLs[index]
  }

  const handleEnded = () => {
    const audio = ref.current
    setSrc(getURL())
    audio.src = src
    audio.load()
    audio.play()
  }

  return (
    <audio
      src={src}
      controls
      crossOrigin="anonymous"
      ref={ref}
      autoPlay={true}
      style={{ zIndex: 100 }}
      onEnded={handleEnded}
      autoPlay={true}
      style={{ display: "none" }}
    />
  )
})

export default AudioPlayer
