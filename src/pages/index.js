import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageSection from "../components/page-section"
import TextSection from "../components/text-section"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageSection content={{ heading: 'Page section heading' }} >
      <TextSection>
        <p>Text section copy</p>
      </TextSection>
    </PageSection>
  </Layout>
)

export default IndexPage
