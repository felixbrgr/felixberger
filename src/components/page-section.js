import React from "react"

const PageSection = ({ children, content, options }) => {
  return (
    <div className="b-page-section">
      <h2 className={`b-page-section__heading${options.hiddenHeading ? ' b-page-section_heading--sr-only' : ''}`}>{content.heading}</h2>
      {children}
    </div>
  )
}

export default PageSection