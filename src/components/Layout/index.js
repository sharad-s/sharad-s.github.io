/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./Header"
import Sidebar from "./Navigation"
import "./layout.css"
import "./main.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  let sidebarClass = "sidebar"
  if (typeof window !== "undefined") {
    const smoothScroll = require("smooth-scroll")
    smoothScroll('a[href*="#"]', {
      speed: 800,
      topOnEmptyHash: true,
    })

    sidebarClass =
      window.location.pathname === "/" ? "sidebar" : "sidebar hidden"
  }

  return (
    <>
      <div className={`${sidebarClass}`}>
        <Sidebar />
      </div>
      <div id="top" className="body">
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
