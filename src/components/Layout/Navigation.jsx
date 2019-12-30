import React, { Fragment } from "react"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <Fragment>
      <div className="me">
        <img
          id="ME"
          src="https://media.licdn.com/dms/image/C4E03AQFdpm7pFzN1Zg/profile-displayphoto-shrink_200_200/0?e=1583366400&v=beta&t=6FLt9ZF1wKRAM3T5DTHjbEaXP6iw02oIGvBTiTkXQoY"
        />
      </div>
      <nav>
        <ul>
          <li>
            <Link className="" to="/">
              💩About Me
            </Link>
          </li>
          <li>
            <Link className="" to="/work/">
              👨🏽‍💻Work
            </Link>
          </li>
          <li>
            <Link className="" to="/library/">
              📚Media
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  )
}

export default Navigation
