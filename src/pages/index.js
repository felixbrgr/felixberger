import React from "react"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageSection from "../components/page-section"
import TextSection from "../components/text-section"

const IndexPage = ({ intl }) => {
  return (
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "title" })}
        description={intl.formatMessage({ id: "description" })}
      />
      <PageSection content={{ heading: intl.formatMessage({ id: "aboutHeading" }) }} >
        <TextSection>
          <p>
            <FormattedMessage id="aboutContent1" />
          </p>
          <p>
            <FormattedMessage id="aboutContent2" />
          </p>
          <p>
            <FormattedMessage id="aboutContent3" />
          </p>
          <p>
            <FormattedMessage id="aboutContent4" />
          </p>
        </TextSection>
      </PageSection>
      <PageSection content={{ heading: intl.formatMessage({ id: "workHeading" }) }} >
        <TextSection>
          <p>
            <FormattedMessage id="workContent1" />
          </p>
          <p>
            <FormattedMessage id="workContent2" />
          </p>
          <p>
            <FormattedMessage id="workContent3" />
          </p>
        </TextSection>
      </PageSection>
      <PageSection content={{ heading: intl.formatMessage({ id: "expertiseHeading" }) }} >
        <TextSection>
          <p>
            <FormattedMessage id="expertiseContent1" />
          </p>
          <p>
            <FormattedMessage id="expertiseContent2" />
          </p>
          <p>
            <FormattedMessage id="expertiseContent3" />
          </p>
        </TextSection>
      </PageSection>
      <PageSection content={{ heading: intl.formatMessage({ id: "contactHeading" }) }} >
        <TextSection>
          <p>
            <FormattedMessage id="contactContent1" />
          </p>
          <p>
            <FormattedMessage id="contactContent2" />
          </p>
        </TextSection>
      </PageSection>
    </Layout>
  )
}

export default injectIntl(IndexPage)