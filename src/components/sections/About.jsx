import React from "react"
import loadable from "@loadable/component"
import AudioPlayer from "../AudioPlayer"
// import Visualizer from "../Visualizer"

// import  Spiral  from 'react-audible-visuals'
// const Spiral = loadable.lib(() => import('react-audible-visuals'))
const Spiral = loadable(() => import("../Visualizer"))

const About = () => {
  const audioRef = React.useRef(null)
  const [isPlaying, setIsPlaying] = React.useState(false)

  const handleClick = () => {
    if (!audioRef.current.paused) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <div id="about" className="section">
      <h1 style={{ color: "#FFF2F7" }} className="ontop">
        Sharad Shekar,
        <br />
        <span style={{ color: "#FFDAE7" }}>creative tech enthusiast</span>
      </h1>
      <p>ML, JavaScript, Python, Golang, 3D, XR, CSS, Design, Art, Music</p>
      <br />
      <h3 style={{ color: "#FFF2F7" }}> Find me here: </h3>
      <a
        href="https://drive.google.com/open?id=1VF2xl-mBi8d1MHQN0ySn8WELDYOK4sM-"
        target="_blank"
        style={{ textDecoration: "underline" }}
      >
        Resume
      </a>
      {", "}
      <a
        href="https://www.linkedin.com/in/sharad-shekar/"
        target="_blank"
        style={{ textDecoration: "underline" }}
      >
        LinkedIn
      </a>
      {",  "}
      <a
        href="https://www.github.com/sharad-s/"
        target="_blank"
        style={{ textDecoration: "underline" }}
      >
        Github
      </a>
      {",  "}
      <a
        href="https://www.soundcloud.com/sharad_s/"
        target="_blank"
        style={{ textDecoration: "underline" }}
      >
        Soundcloud
      </a>
      <br />
      <a
        href="mailto:sharadshekar@gmail.com"
        style={{ textDecoration: "underline" }}
      >
        Email
      </a>
      {/* <img id="GIF" src="https://media0.giphy.com/media/Ckq1NXDHFlvfq/giphy.gif " /> */}

      <div style={{ position: "absolute", bottom: "0", right: "0", color: "white", padding: "20px" }}>
        <div id="AUDIO">
          <AudioPlayer ref={audioRef} handleClick={handleClick} isPlaying={isPlaying} />
        </div>
      </div>
      <div
        id="VISUAL"
        className={`${isPlaying && 'playing'}`}
        onClick={handleClick}
      >
        <Spiral audioRef={audioRef} radius={100} maxRadius={100} minRadius={70} R={0.7} fov={65} />
      </div>


    </div>
  )
}

export default About
