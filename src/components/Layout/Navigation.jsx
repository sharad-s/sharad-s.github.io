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
          alt="selfie"
          src="https://media.licdn.com/dms/image/C4E03AQFdpm7pFzN1Zg/profile-displayphoto-shrink_200_200/0?e=1583366400&v=beta&t=6FLt9ZF1wKRAM3T5DTHjbEaXP6iw02oIGvBTiTkXQoY"
        />
        <h3 style={{ textAlign: "center" }} className="name hidden">
          Sharad Shekar
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
