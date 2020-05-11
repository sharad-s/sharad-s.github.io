import React from 'react';
import Spiral from "react-audible-visuals"
export default React.forwardRef((props, ref) => <Spiral audioRef={props.audioRef} />);
