import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageSection from "../components/page-section"
import TextSection from "../components/text-section"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <PageSection content={{ heading: 'Page section heading' }} >
      <TextSection>
        <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>
      </TextSection>
    </PageSection>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: {regex: "/test.md/"}) {
      html
    }
  }
`