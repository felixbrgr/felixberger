import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PageSection from "../components/page-section"
import TextSection from "../components/text-section"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <PageSection content={{ heading: 'Page not found' }} >
      <TextSection>
        <p>
          You just hit a route that doesn&#39;t exist ... go <Link to="/">home</Link>!
        </p>
      </TextSection>
    </PageSection>
  </Layout>
)

export default NotFoundPage
