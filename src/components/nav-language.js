import React from "react"
import { injectIntl  } from "gatsby-plugin-intl"
import { Link } from "gatsby"

const NavLanguage = ({ intl }) => {
  return (
    <div className="b-nav-language">
      {intl.locale === 'de' && <Link to="/en/" className="b-footer__meta-link">{intl.formatMessage({ id: "navLinkLangEn" })}</Link>}
      {intl.locale === 'en' && <Link to="/de/" className="b-footer__meta-link">{intl.formatMessage({ id: "navLinkLangDe" })}</Link>}
    </div>
  )
}

export default injectIntl(NavLanguage)