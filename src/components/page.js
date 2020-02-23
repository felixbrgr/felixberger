import React from "react"

export default ({ children, options }) => (
  <div className={`b-page${options.lightOnDark ? ' b-page--light-on-dark' : ''}${options.headless ? ' b-page--headerless' : ''}`}>
    {children}
  </div>
)