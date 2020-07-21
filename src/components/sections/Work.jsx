import React from 'react'
import { Link } from "gatsby"
import { handleLinkClick } from "../../utils/helpers"


const Work = () => {
    return (
        <div id="work" className="section">
            <h1>Work</h1>
            <Link
                to="/#top"
                onClick={e => handleLinkClick(e, "#top")}
                className="backToTop"
            >
                Back to top
        </Link>
            <br />
            <ul>
                <li>
                    <Link className="" to="/work/pizzahut">
                        Pizza Hut
            </Link>
                </li>
                <li>
                    <Link className="" to="/work/olypsis">
                        Olypsis
            </Link>
                </li>
                <li>
                    <Link className="" to="/work/plug">
                        Plug.af
            </Link>
                </li>
                <li>
                    <Link className="" to="/work/trakz">
                        Trakz.co
            </Link>
                </li>
            </ul>
        </div>
    )
}

export default Work