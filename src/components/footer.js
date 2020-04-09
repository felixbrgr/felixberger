import React from "react"
import { injectIntl, Link  } from "gatsby-plugin-intl"

import NavLanguage from "../components/nav-language"

const Footer = ({ intl }) => {
  return (
    <footer className="b-footer">
      <p className="b-footer__meta">
        © {new Date().getFullYear()} Berlin, <Link to="/imprint/" className="b-footer__meta-link">{intl.formatMessage({ id: "navLinkImprint" })}</Link>
        
      </p>
      <NavLanguage />
      {/* <div>
        {intl.locale === 'de' && <Link to="/en/" className="b-footer__meta-link">{intl.formatMessage({ id: "navLinkLangEn" })}</Link>}
        {intl.locale === 'en' && <Link to="/de/" className="b-footer__meta-link">{intl.formatMessage({ id: "navLinkLangDe" })}</Link>}
      </div> */}
    </footer>
  )
}

export default injectIntl(Footer)