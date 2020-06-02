import React from "react"
import { Location } from "@reach/router"
import { injectIntl, Link  } from "gatsby-plugin-intl"
import { formatPath } from "../helpers"

import A11yLinkLabel from "./a11y-link-label"

const NavLinkLanguage = ({ intl }) => {
  return (
    <ul className="nav-language">

      <Location>
        {({ location }) => {      
          const asOriginalPath = formatPath(location.pathname);
          
          return <>
            {intl.locale === 'en' && <><li className="nav-language__item"><Link to={asOriginalPath} language="de">{intl.formatMessage({ id: "navLinkLangDe" })}</Link></li><li className="nav-language__item"><A11yLinkLabel />{intl.formatMessage({ id: "navLinkLangEn" })}</li></>}
            {intl.locale === 'de' && <><li className="nav-language__item"><A11yLinkLabel />{intl.formatMessage({ id: "navLinkLangDe" })}</li><li className="nav-language__item"><Link to={asOriginalPath} language="en">{intl.formatMessage({ id: "navLinkLangEn" })}</Link></li></>}
          </>
        }}
      </Location>

    </ul>
  )
}

export default injectIntl(NavLinkLanguage)