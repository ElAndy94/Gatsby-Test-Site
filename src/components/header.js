import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import TMGHeader from '../images/shared/header/TMG.svg'

const Header = () => (
  <header
    style={{
      background: `#f5f5f5`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        <img src={TMGHeader} />
      </Link>
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
