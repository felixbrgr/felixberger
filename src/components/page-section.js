import React from "react"

const PageSection = ({ children, content }) => (
  <div className="b-page-section">
    <h2 className="b-page-section__heading">{content.heading}</h2>
    {children}
  </div>
)

export default PageSection