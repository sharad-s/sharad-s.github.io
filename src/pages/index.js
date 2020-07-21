import React from "react"
import { Link } from "gatsby"

// Components
import Layout from "../components/Layout"
import SEO from "../components/SEO"

// Sections
import About from "../components/sections/About"
import Work from "../components/sections/Work"
import Projects from "../components/sections/Projects"
import Media from "../components/sections/Media"


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
      <Work />
      <Projects />
      <Media />
      {/* <footer className="footer">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer> */}
    </Layout>
  )
}

export default IndexPage
