import React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <footer className="b-footer b-footer--sr-only">
    <p className="b-footer__meta">
      © {new Date().getFullYear()} Berlin, <Link to="/imprint" className="b-footer__meta-link">Imprint</Link>
    </p>
  </footer>
)

export default Footer