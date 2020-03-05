import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageSection from "../components/page-section"
import TextSection from "../components/text-section"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageSection content={{ heading: 'About' }} >
      <TextSection>
        <p>Hi!</p>
        <p>Who am I?</p>
        <p>What do I offer?</p>
        <p>Get in touch!</p>
      </TextSection>
    </PageSection>
    <PageSection content={{ heading: 'How do I work' }} >
      <TextSection>
        <p>Focus topics!</p>
        <p>What tools do I use?</p>
        <p>Logos!</p>
      </TextSection>
    </PageSection>
    <PageSection content={{ heading: 'Proof of expertise' }} >
      <TextSection>
        <p>History</p>
        <p>Clients of the past ...</p>
        <p>Logos!</p>
      </TextSection>
    </PageSection>
    <PageSection content={{ heading: 'Contact again' }} >
      <TextSection>
        <p>Ways to contact me</p>
        <p>Clients of the past ...</p>
        <p>Identities (twitter, github, linkedin)</p>
      </TextSection>
    </PageSection>
  </Layout>
)

export default IndexPage
