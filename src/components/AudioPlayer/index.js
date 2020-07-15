import React, { useState } from "react"

const cors = "https://cors-anywhere.herokuapp.com/"
const randNum = n => Math.floor(Math.random() * (n + 1))

const initSrc =
  "https://raw.githubusercontent.com/anars/blank-audio/master/250-milliseconds-of-silence.mp3"

export const AudioPlayer = React.forwardRef((props, ref) => {
  const [audioURLs] = useState([
    // {
    //   name: 'initSrc',
    //   url: initSrc
    // },
    {
      name: "drift",
      url: "https://a.tumblr.com/tumblr_qa7jfcv7741r4pgk7o1.mp3",
    },
    {
      name: 'plata',
      url: "https://a.tumblr.com/tumblr_pyo5kf51M41r4pgk7o1.mp3"
    }
    // "https://a.tumblr.com/tumblr_ohylne7XrN1r4pgk7o1.mp3",
    // "https://a.tumblr.com/tumblr_qa7jfcv7741r4pgk7o1.mp3",
    // "https://a.tumblr.com/tumblr_pyo5kf51M41r4pgk7o1.mp3",
    // "https://a.tumblr.com/tumblr_qac3h4ePQn1r4pgk7o1.mp3",
  ])

  const [index, setIndex] = useState(0)
  const [src, setSrc] = useState(audioURLs[index])

  const handleEnded = () => {
    const audio = ref.current

    // Index mgmt
    let i = index;
    if (i + 1 >= audioURLs.length) {
      i = 1
    } else {
      i++
    }

    const source = audioURLs[i]

    // Set it
    setIndex(i)
    setSrc(source)

    console.log('setting source as', source.name)
    audio.src = source.url
    console.log('audio.load()')
    audio.load()
    console.log('audio.play()')
    audio.play()
  }

  return (
    <audio
      src={src.url}
      controls
      crossOrigin="anonymous"
      ref={ref}
      // style={{ zIndex: 100 }}
      onEnded={handleEnded}
      autoPlay={true}
      style={{ display: "none" }}
    />
  )
})

export default AudioPlayer
