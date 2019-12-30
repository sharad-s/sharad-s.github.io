import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="about" className="section">
      <h1>I am Sharad Shekar,</h1>
      <h1>a creative technologist and AI enthusiast</h1>
      <p>
        Animation, Design, Writing, AI, ML, Bots, CSS, JavaScript, Ruby, Git,
        Vim, 3D, XR
      </p>
    </div>

    <div id="work" className="section">
      <h1>Work</h1>
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

    <div id="media" className="section">
      <h1> Media Library</h1>
    </div>
  </Layout>
)

export default IndexPage
