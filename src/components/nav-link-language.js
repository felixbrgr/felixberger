import React from "react"
import { Location } from "@reach/router"
import { injectIntl, Link  } from "gatsby-plugin-intl"

import { formatPath } from "../helpers"

const NavLinkLanguage = ({ intl }) => {

  return (
    <Location>
      {({ location }) => {      
        const asOriginalPath = formatPath(location.pathname);

        return <>
          {intl.locale === 'de' && <Link to={asOriginalPath} language="en">English</Link>}
          {intl.locale === 'en' && <Link to={asOriginalPath} language="de">Deutsch</Link>}
        </>
      }}
    </Location>
  )
}

export default injectIntl(NavLinkLanguage)