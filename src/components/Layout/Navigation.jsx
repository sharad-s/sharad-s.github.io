import React, { Fragment } from "react"
import { Link } from "gatsby"

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
        <h2 style={{ textAlign: "center" }} className="hidden">Sharad Shekar</h2>
      </div>
      <nav>
        <ul>
          <li>
            <Link
              activeClassName="active"
              to="/#top"
            >
              💩Me
            </Link>
          </li>
          <li>
            <Link
              activeClassName="active"
              to="/#work"
            >
              👨🏽‍💻Work
            </Link>
          </li>
          <li>
            <Link
              activeClassName="active"
              to="/#projects"
            >
              🛠Projects
            </Link>
          </li>
          <li>
            <Link
              activeClassName="active"
              to="/#media"
            >
              📚Media
            </Link>
          </li>
        </ul>
      </nav>
      {/* <footer className="footer">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer> */}
    </Fragment>
  )
}

export default Navigation
