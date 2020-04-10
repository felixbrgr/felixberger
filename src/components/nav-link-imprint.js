import React from "react"
import { Location } from "@reach/router"
import { injectIntl, Link  } from "gatsby-plugin-intl"

import { formatPath } from "../helpers"

const NavLinkImprint = ({ intl }) => {

  return (
    <Location>
      {({ location }) => {
        const asOriginalPath = formatPath(location.pathname);

        return <>
          {asOriginalPath === '/imprint/' && <span>{intl.formatMessage({ id: "navLinkImprint" })}</span>}
          {asOriginalPath !== '/imprint/' && <Link to="/imprint"><span>{intl.formatMessage({ id: "navLinkImprint" })}</span></Link>}
        </>
      }}
    </Location>
  )
}

export default injectIntl(NavLinkImprint)