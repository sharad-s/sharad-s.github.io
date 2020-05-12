import React from "react"
import Spiral from "react-audio-visuals"

export default React.forwardRef((props, ref) => (
  <Spiral audioRef={props.audioRef} {...props} />
))
