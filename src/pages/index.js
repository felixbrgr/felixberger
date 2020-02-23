import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageSection from "../components/page-section"
import TextSection from "../components/text-section"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageSection content={{ heading: 'Heading' }} >
      <TextSection>
        <p>Welcome to your new Gatsby site.</p>
      </TextSection>
    </PageSection>
  </Layout>
)

export default IndexPage
