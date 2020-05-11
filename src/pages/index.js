import React from "react"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageSection from "../components/page-section"
import ContentSection from "../components/content-section"
import TextSection from "../components/text-section"
import ClientsList from "../components/clients-list"

const IndexPage = ({ intl }) => {
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "index.title" })}
        description={intl.formatMessage({ id: "index.description" })}
      />
      <PageSection content={{ heading: intl.formatMessage({ id: "index.aboutHeading" }) }} >
        <ContentSection>
          <TextSection>
            <p>
              <FormattedMessage id="index.aboutContent1" />
            </p>
            <p>
              <FormattedMessage id="index.aboutContent2" />
            </p>
            <p>
              <FormattedMessage id="index.aboutContent3" />
            </p>
          </TextSection>
        </ContentSection>
      </PageSection>
      <PageSection content={{ heading: intl.formatMessage({ id: "index.skillsHeading" }) }} >
        <ContentSection>
          <TextSection>
            <p>
              <FormattedMessage id="index.skillsContent1" />
            </p>
            <p>
              <FormattedMessage id="index.skillsContent2" />
            </p>
            <p>
              <FormattedMessage id="index.skillsContent3" />
            </p>
          </TextSection>
        </ContentSection>
      </PageSection>
      <PageSection content={{ heading: intl.formatMessage({ id: "index.referenceHeading" }) }} >
        <ContentSection>
          <TextSection>
            <p>
              <FormattedMessage id="index.referenceContent1" />
            </p>
            <p>
              <FormattedMessage id="index.referenceContent2" />
            </p>
            <p>
              <FormattedMessage id="index.referenceContent3" />
            </p>
          </TextSection>
          <ClientsList />
        </ContentSection>
      </PageSection>
      <PageSection content={{ heading: intl.formatMessage({ id: "index.contactHeading" }) }} >
        <ContentSection>
          <TextSection>
            <p>
              <FormattedMessage id="index.contactContent1" />
            </p>
            <p>
              <FormattedMessage id="index.contactContent2" />
            </p>
          </TextSection>
        </ContentSection>
      </PageSection>
    </Layout>
  )
}

export default injectIntl(IndexPage)