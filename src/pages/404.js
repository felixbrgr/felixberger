import React from "react"
import { injectIntl, Link, FormattedMessage  } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PageSection from "../components/page-section"
import TextSection from "../components/text-section"

const NotFoundPage = ({ intl }) => {
  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "notfound.title" })}
        description={intl.formatMessage({ id: "notfound.description" })}
      />

      <PageSection content={{ heading: intl.formatMessage({ id: "notfound.title" }) }} >
        <TextSection>
          <p>
            <FormattedMessage id="notfound.description" />
            ... <Link to="/">home</Link>!
          </p>
        </TextSection>
      </PageSection>
    </Layout>
  )
}

export default injectIntl(NotFoundPage)