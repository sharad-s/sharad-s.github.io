import React, { Fragment } from "react"
import { Link } from "gatsby"
import { handleLinkClick } from "../../utils/helpers"
// const activeLinks = {
//   ABOUT: "about",
//   WORK: "work",
//   MEDIA: "media",
// }

const Navigation = props => {
  return (
    <Fragment>
      <div className="me">
        <img
          id="ME"
          className="hidden"
          alt="selfie"
          src="https://avatars1.githubusercontent.com/u/58007021?s=460&u=e58e75092476bf1ee7716de22cf8c4ae7be199f3&v=4"
        />
        <h3 style={{ textAlign: "center" }} className="name hidden">
          Sharad <br /> Shekar
        </h3>
      </div>
      <nav>
        <ul>
          <li className="hidden">
            <Link
              activeClassName="active"
              onClick={e => handleLinkClick(e, "#top")}
              to="/#top"
            >
              💩Me
            </Link>
          </li>
          <li>
            <Link
              activeClassName="active"
              onClick={e => handleLinkClick(e, "#work")}
              to="/#work"
            >
              👨🏽‍💻Work
            </Link>
          </li>
          <li>
            <Link
              activeClassName="active"
              onClick={e => handleLinkClick(e, "#projects")}
              to="/#projects"
            >
              🛠Projects
            </Link>
          </li>
          <li>
            <Link
              activeClassName="active"
              onClick={e => handleLinkClick(e, "#media")}
              to="/#media"
            >
              📚Media
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  )
}

export default Navigation
