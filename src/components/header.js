import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Location } from '@reach/router'

const Header = ({ siteTitle }) => (
  <header className="b-header">
    <h1 className="b-header__heading">

      <Location>
        {({ location }) => {
          if (location.pathname === '/en/' || location.pathname === '/de/' ) {
            return <span className="b-header__heading-title">{siteTitle}</span>
          } else {
            return <Link to="/" className="b-header__heading-link">
              <span className="b-header__heading-title">{siteTitle}</span>
            </Link>
          }
        }}
      </Location>

    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header