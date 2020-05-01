import React from "react"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageSection from "../components/page-section"
import ContentSection from "../components/content-section"
import TextSection from "../components/text-section"

const IndexPage = ({ intl }) => {
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "title" })}
        description={intl.formatMessage({ id: "description" })}
      />
      <PageSection content={{ heading: intl.formatMessage({ id: "aboutHeading" }) }} >
        <ContentSection>
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
        </ContentSection>
      </PageSection>
      <PageSection content={{ heading: intl.formatMessage({ id: "workHeading" }) }} >
        <ContentSection>
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
        </ContentSection>
      </PageSection>
      <PageSection content={{ heading: intl.formatMessage({ id: "expertiseHeading" }) }} >
        <ContentSection>
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
        </ContentSection>
      </PageSection>
      <PageSection content={{ heading: intl.formatMessage({ id: "contactHeading" }) }} >
        <ContentSection>
          <TextSection>
            <p>
              <FormattedMessage id="contactContent1" />
            </p>
            <p>
              <FormattedMessage id="contactContent2" />
            </p>
          </TextSection>
        </ContentSection>
      </PageSection>
    </Layout>
  )
}

export default injectIntl(IndexPage)