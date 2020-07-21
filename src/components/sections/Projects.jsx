import React from 'react'
import { Link } from "gatsby"
import { handleLinkClick } from "../../utils/helpers"


const Projects = () => {
    return (
        <div id="projects" className="section">
            <h1>Projects</h1>
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

export default Projects