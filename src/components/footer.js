import React from "react"

import NavLinkLanguage from "./nav-link-language"
import NavLinkImprint from "./nav-link-imprint"

const Footer = () => {

  return (
    <footer className="b-footer">
      <p className="b-footer__meta">
        © {new Date().getFullYear()} Berlin, <NavLinkImprint />
      </p>

      <NavLinkLanguage />
    </footer>
  )
}

export default Footer