import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const SecondPage = () => (
  <Layout>
    <SEO title="Work Experience" />
    <h1>Work</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
