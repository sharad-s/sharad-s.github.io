import React from "react"
import { Link } from "gatsby"

// Components
import Layout from "../components/Layout"
import SEO from "../components/SEO"

// Sections
import About from "../components/sections/About"

import { handleLinkClick } from "../utils/helpers"

const IndexPage = () => {
  const audioRef = React.useRef(null)
  return (
    <Layout>
      <SEO title="Home" />
      {/* <div id="construction">
        <span>🚧 Under Construction  🚧</span>
      </div> */}
      <About />

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

      <div id="projects" className="section">
        <h1>Projects</h1>
        <Link
          to="/#top"
          onClick={e => handleLinkClick(e, "#top")}
          className="backToTop"
        >
          Back to top
        </Link>
        <br />
      </div>

      <div id="media" className="section">
        <h1> Media Library</h1>
        <Link
          to="/#top"
          onClick={e => handleLinkClick(e, "#top")}
          className="backToTop"
        >
          Back to top
        </Link>
        <br />
      </div>

      {/* <footer className="footer">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer> */}
    </Layout>
  )
}

export default IndexPage
