import React from "react"

import NavLanguage from "./nav-language"
import NavLinkImprint from "./nav-link-imprint"

const Footer = () => {
  return (
    <footer className="b-footer">
      <p className="b-footer__meta">
        © {new Date().getFullYear()}, No tracking, <NavLinkImprint />
      </p>

      <NavLanguage />
    </footer>
  )
}

export default Footer