import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"

const SecondPage = () => (
  <Layout>
    <div className="section">
      <SEO title="Work Experience" />
      <h1>Olypsis</h1>
      <p> Come back later!</p>
      <Link to="/#work">Go back</Link>
    </div>
  </Layout>
)

export default SecondPage
