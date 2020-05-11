import React from 'react';
import loadable from "@loadable/component"
import AudioPlayer from "../AudioPlayer"
// import Visualizer from "../Visualizer"

// import  Spiral  from 'react-audible-visuals'
// const Spiral = loadable.lib(() => import('react-audible-visuals'))
const Spiral = loadable(() => import('../Visualizer'))



const About = () => {
    const audioRef = React.useRef(null)
    return (
        <div id="about" className="section">
            <h1>
                Sharad Shekar, <br />creative technologist and AI enthusiast
        </h1>
            <p>
                AI, ML, JavaScript, Python, Golang, 3D, XR, CSS, Design,
                Art, Music
        </p>
            <br />
            <h3> Find me here: </h3>{" "}
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
            <div id="AUDIO">
                <AudioPlayer ref={audioRef} />
            </div>
            <div id="VISUAL" onClick={() => {
                if (!audioRef.current.paused) {
                    audioRef.current.pause()
                }
                else {
                    audioRef.current.play()
                }
            }}>
                <Spiral audioRef={audioRef} />
            </div>
        </div>
    )
}

export default About;