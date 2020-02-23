import React from "react"

export default ({ children, content }) => (
  <div className="b-page-section">
    <h2 className="b-page-section__heading">{content.heading}</h2>
    {children}
  </div>
)