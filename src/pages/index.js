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
      <h1>I am Sharad Shekar,</h1>
      <h1>the poopoo pee pee man</h1>
      <p>Poop, Pee, More Pee, Pooping, Peeing, Peeing and Pooping, Etc.</p>

      {/* <br />
      <h2> Where can you find me? </h2>

      <a href="https://www.linkedin.com/in/sharad-shekar/" target="_blank"  style={{textDecoration:"underline"}}>LinkedIn</a>, {' '}
      <a href="https://www.github.com/sharad-s/" target="_blank" style={{textDecoration:"underline"}}>Github</a>, {' '}
      <a href="https://www.soundcloud.com/sharad_s/" target="_blank" style={{textDecoration:"underline"}}>Soundcloud</a>
 */}
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
          <Link
            className=""
            to="/work/pizzahut"
          >
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
  </Layout>
)

export default IndexPage
