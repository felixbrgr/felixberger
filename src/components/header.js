import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ options, siteTitle }) => (
  <header className="b-header">
    <h1 className="b-header__heading">
      {options.homeLink === true && <Link to="/" className="b-header__heading-link">
          <span className="b-header__heading-title">{siteTitle}</span>
        </Link>
      }
      {options.homeLink === false && <>
          <span className="b-header__heading-title">{siteTitle}</span>
        </>
      }
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