import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
// import Image from "../components/Image"
import SEO from "../components/SEO"

import { handleLinkClick } from "../utils/helpers"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="about" className="section">
      <h1>I am Sharad Shekar, <br/>
      a creative technologist and professional crapper
      </h1>
      <p>
        AI, ML, CSS, JavaScript, Python, Golang, 3D, XR, Animation, Design, Art, Music 
      </p>
      <br />
      <h3> Find me here: </h3>
          {" "}
          <a
            href="https://docdro.id/1cpDEu2/"
            target="_blank"
            style={{ textDecoration: "underline" }}
          >
            Resume
          </a>
        {', '}
          <a
            href="https://www.linkedin.com/in/sharad-shekar/"
            target="_blank"
            style={{ textDecoration: "underline" }}
          >
            LinkedIn
          </a>
        {',  '}
          <a
            href="https://www.github.com/sharad-s/"
            target="_blank"
            style={{ textDecoration: "underline" }}
          >
            Github
          </a>
          {',  '}
          <a
            href="https://www.soundcloud.com/sharad_s/"
            target="_blank"
            style={{ textDecoration: "underline" }}
          >
            Soundcloud
          </a>
          <br />
          <a
            href="mailto:sharadshekar@gmail.com"
            style={{ textDecoration: "underline" }}
          >
            Email
          </a>
    {/* <img id="GIF" src="https://media0.giphy.com/media/Ckq1NXDHFlvfq/giphy.gif " /> */}
    </div>

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

    <footer className="footer">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </Layout>
)

export default IndexPage
