/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import smoothScroll from "smooth-scroll"

import Header from "./Header"
import Sidebar from "./Navigation"
import "./layout.css"
import "./main.css"



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  if (typeof window !== "undefined") {
    smoothScroll('a[href*="#"]')
  }

  return (
    <>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div id="top" className="body">
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <div className="content">
          <main>{children}</main>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
