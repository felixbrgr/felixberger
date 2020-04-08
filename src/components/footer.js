import React from "react"
import { injectIntl, Link  } from "gatsby-plugin-intl"

const Footer = ({ intl }) => {
  return (
    <footer className="b-footer">
      <p className="b-footer__meta">
        © {new Date().getFullYear()} Berlin, <Link to="/imprint/" className="b-footer__meta-link">{intl.formatMessage({ id: "navLinkImprint" })}</Link>
      </p>
    </footer>
  )
}

export default injectIntl(Footer)