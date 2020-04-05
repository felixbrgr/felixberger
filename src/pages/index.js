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
          <FormattedMessage 
            id="aboutContent" 
            values={{
              p: (...chunks) => <p>{chunks}</p>,
            }}
          />
        </TextSection>
      </PageSection>
      <PageSection content={{ heading: intl.formatMessage({ id: "workHeading" }) }} >
        <TextSection>
          <FormattedMessage 
            id="workContent" 
            values={{
              p: (...chunks) => <p>{chunks}</p>,
            }}
          />
        </TextSection>
      </PageSection>
      <PageSection content={{ heading: intl.formatMessage({ id: "expertiseHeading" }) }} >
        <TextSection>
          <FormattedMessage 
            id="expertiseContent" 
            values={{
              p: (...chunks) => <p>{chunks}</p>,
            }}
          />
        </TextSection>
      </PageSection>
      <PageSection content={{ heading: intl.formatMessage({ id: "contactHeading" }) }} >
        <TextSection>
          <FormattedMessage 
            id="contactContent" 
            values={{
              p: (...chunks) => <p>{chunks}</p>,
            }}
          />
        </TextSection>
      </PageSection>
    </Layout>
  )
}

export default injectIntl(IndexPage)