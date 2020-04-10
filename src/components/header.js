import React from "react"
import PropTypes from "prop-types"
import { Location } from "@reach/router"
import { injectIntl, Link  } from "gatsby-plugin-intl"

import { formatPath } from "../helpers"

const Header = ({ siteTitle }) => {
  return (
    <header className="b-header">
      <h1 className="b-header__heading">

        <Location>
          {({ location }) => {
            const asOriginalPath = formatPath(location.pathname);

            return <>
              {asOriginalPath === '/' && <span className="b-header__heading-title">{siteTitle}</span>}
              {asOriginalPath !== '/' && <Link to="/" className="b-header__heading-link"><span className="b-header__heading-title">{siteTitle}</span></Link>}
            </>
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