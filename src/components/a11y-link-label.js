import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

const A11yLinkLabel = ({ intl }) => {
  return (
    <em className="b-a11y-link-label">{intl.formatMessage({ id: "a11yLinkLabel" })}</em>
  )
}

export default injectIntl(A11yLinkLabel)