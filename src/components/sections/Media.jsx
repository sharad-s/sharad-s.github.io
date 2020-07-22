import React from 'react'
import { Link } from "gatsby"
import { handleLinkClick } from "../../utils/helpers"


const Media = () => {
    return (
        <div id="media" className="section">
            <h1> Media Library</h1>
            <p> Coming soon!</p>
            <Link
                to="/#top"
                onClick={e => handleLinkClick(e, "#top")}
                className="backToTop"
            >
                Back to top
        </Link>
            <br />
        </div>
    )
}

export default Media