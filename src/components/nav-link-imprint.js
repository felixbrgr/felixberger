import React from "react"
import { Location } from '@reach/router'
import { injectIntl, Link  } from "gatsby-plugin-intl"

const NavLinkImprint = ({ intl }) => {

  return (
    <Location>
      {({ location }) => {
        const deslashedPathname = location.pathname.replace(/\/$/, '');
        const deslashedPathend = (deslashedPathname.length > 3) ? deslashedPathname.substr(deslashedPathname.lastIndexOf('/') + 1) : '/';
        const asOriginalPath = (deslashedPathend.length > 1) ? '/' + deslashedPathend + '/' : '/';

        return <>
          {asOriginalPath === '/imprint/' && <span>{intl.formatMessage({ id: "navLinkImprint" })}</span>}
          {asOriginalPath !== '/imprint/' && <Link to="/imprint"><span>{intl.formatMessage({ id: "navLinkImprint" })}</span></Link>}
        </>
      }}
    </Location>
  )
}

export default injectIntl(NavLinkImprint)