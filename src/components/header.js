import React from "react"
import PropTypes from "prop-types"
import { Location } from '@reach/router'
import { injectIntl, Link  } from "gatsby-plugin-intl"

const Header = ({ siteTitle }) => {
  return (
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
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default injectIntl(Header)