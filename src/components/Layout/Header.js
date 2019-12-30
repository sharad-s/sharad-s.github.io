import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="header">
  <img
          id="ME_HEADER"
          src="https://media.licdn.com/dms/image/C4E03AQFdpm7pFzN1Zg/profile-displayphoto-shrink_200_200/0?e=1583366400&v=beta&t=6FLt9ZF1wKRAM3T5DTHjbEaXP6iw02oIGvBTiTkXQoY"
        />
    <div
      className="title"
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
