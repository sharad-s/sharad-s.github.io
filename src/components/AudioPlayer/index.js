import React, { useState } from "react"

const cors = "https://cors-anywhere.herokuapp.com/"

export const AudioPlayer = React.forwardRef((props, ref) => {
    const [audioURLs] = useState([
        "https://a.clyp.it/cwvlsmnd.mp3", //rain
        // "https://a.clyp.it/jagqtd5f.mp3",
        // 'https://a.clyp.it/h1vtpoe4.mp3',
        // "https://a.clyp.it/mkfjydwq.mp3", //Italo disco
        "https://a.clyp.it/zas30wns.mp3", //sertraline
        // 'https://a.clyp.it/xj0g30io.mp3', // blackbirds
        // "https://a.clyp.it/fkvlpwft.mp3", // practice9short
        "https://a.clyp.it/bfujpc4c.mp3", // poetry
        // "https://a.clyp.it/0ar0p540.mp3", // 6.4
        "https://a.clyp.it/jtxyzmfx.mp3", // 6.17 old,
        // 'https://a.clyp.it/p2fpdn5n.mp3', // SHANDREW
        // "https://a.clyp.it/qohhjp5p.mp3" //BEAT2
    ])
    const [index, setIndex] = useState(0)
    const [src, setSrc] = useState(cors + audioURLs[index])

    const getURL = () => {
        setIndex(index + 1)
        if (index >= audioURLs.length) {
            setIndex(0)
        }
        return cors + audioURLs[index]
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
            autoPlay="true"
            style={{ display: "none" }}
        />
    )
})

// const ForwardedAudioPlayer = React.forwardRef(AudioPlayer)
// export default ForwardedAudioPlayer;

export default AudioPlayer
