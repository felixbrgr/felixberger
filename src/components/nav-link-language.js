import React from "react"
import { Location } from '@reach/router'
import { injectIntl, Link  } from "gatsby-plugin-intl"

const NavLinkLanguage = ({ intl }) => {

  return (
    <Location>
      {({ location }) => {      
        const deslashedPathname = location.pathname.replace(/\/$/, '');
        const deslashedPathend = (deslashedPathname.length > 3) ? deslashedPathname.substr(deslashedPathname.lastIndexOf('/') + 1) : '/';
        const asOriginalPath = (deslashedPathend.length > 1) ? '/' + deslashedPathend + '/' : '/';

        return <>
          {intl.locale === 'de' && <Link to={asOriginalPath} language="en">English</Link>}
          {intl.locale === 'en' && <Link to={asOriginalPath} language="de">Deutsch</Link>}
        </>
      }}
    </Location>
  )
}

export default injectIntl(NavLinkLanguage)