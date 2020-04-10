import React from "react"
import { Location } from '@reach/router'
import { injectIntl, Link  } from "gatsby-plugin-intl"

const NavLinkImprint = ({ intl }) => {

  return (
    <Location>
      {({ location }) => {
        if (location.pathname === '/en/imprint/' || location.pathname === '/de/imprint/' ) {
          return <span>{intl.formatMessage({ id: "navLinkImprint" })}</span>
          
        } else {
          return <Link to="/imprint">
          <span>{intl.formatMessage({ id: "navLinkImprint" })}</span>
        </Link>
        }
      }}
    </Location>
  )
}

export default injectIntl(NavLinkImprint)