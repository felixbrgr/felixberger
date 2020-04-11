import React from "react"
import PropTypes from "prop-types"
import { Location } from "@reach/router"
import { injectIntl, Link  } from "gatsby-plugin-intl"
import { formatPath } from "../helpers"

import A11yLinkLabel from "./a11y-link-label"

const Header = ({ siteTitle }) => {
  return (
    <header className="b-header">
      <h1 className="b-header__heading">

        <Location>
          {({ location }) => {
            const asOriginalPath = formatPath(location.pathname);

            return <>
              {asOriginalPath === '/' && <><A11yLinkLabel /><span className="b-header__heading-title">{siteTitle}</span></>}
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