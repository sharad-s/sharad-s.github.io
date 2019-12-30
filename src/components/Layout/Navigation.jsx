import React, { Fragment } from "react"
import { Link } from "gatsby"
import scrollToElement from "scroll-to-element"

const Navigation = () => {
  const handleLinkClick = (e, target) => {
    // NODE-SAFE CODE
    // Gatsby uses Node to generate our pages.
    // Node doesn't know what a window is.
    // Be sure to wrap any of your browser interactions
    // in some sort of node-safe if statement like this:

    if (typeof window !== "undefined") {
      // First, are we on the home page?
      // If so, let's scroll to the desired block,
      // which was passed in as an onClick method on our <Link />.
      // If an event was also passed, we'll preventDefault()

      if (window.location.pathname === "/") {
        if (e) e.preventDefault()
        scrollToElement(target, {
          offset: -50, // Offset a fixed header if you please
          duration: 1000,
        })
      }
    }
  }

  return (
    <Fragment>
      <div className="me">
        <img
          id="ME"
          src="https://media.licdn.com/dms/image/C4E03AQFdpm7pFzN1Zg/profile-displayphoto-shrink_200_200/0?e=1583366400&v=beta&t=6FLt9ZF1wKRAM3T5DTHjbEaXP6iw02oIGvBTiTkXQoY"
        />
        <h2 style={{ textAlign: "center" }}>Sharad Shekar</h2>
      </div>
      <nav>
        <ul>
          <li>
            <Link
              className=""
              onClick={e => handleLinkClick(e, "#top")}
              to="/#top"
            >
              💩About Me
            </Link>
          </li>
          <li>
            <Link
              className=""
              onClick={e => handleLinkClick(e, "#work")}
              to="/#work"
            >
              👨🏽‍💻Work
            </Link>
          </li>
          <li>
            <Link
              className=""
              onClick={e => handleLinkClick(e, "#media")}
              to="/#media"
            >
              📚Media
            </Link>
          </li>
          <li>
            <Link
              className=""
              to="/page-2"
            >
              Page 2
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
