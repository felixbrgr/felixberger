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
      <PageSection content={{ heading: intl.formatMessage({ id: "index.aboutHeading" }) }} options={{ hiddenHeading: true }} >
        <ContentSection>
          <TextSection>
            <p>
              <FormattedMessage id="index.aboutContent1" />
            </p>
            <p>
              <FormattedMessage id="index.aboutContent2" />
            </p>
            <a href="mailto:mail@felixberger.dev">
              <FormattedMessage id="index.aboutContent3" />
            </a>
          </TextSection>
        </ContentSection>
      </PageSection>
      <PageSection content={{ heading: intl.formatMessage({ id: "index.skillsHeading" }) }} options={{ hiddenHeading: false }} >
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
      <PageSection content={{ heading: intl.formatMessage({ id: "index.referenceHeading" }) }} options={{ hiddenHeading: false }} >
        <ContentSection>
          <TextSection>
            <p>
              <FormattedMessage id="index.referenceContent1" />
            </p>
            <p>
              <FormattedMessage id="index.referenceContent2" />
            </p>
          </TextSection>
          <ClientsList />
        </ContentSection>
      </PageSection>
      <PageSection content={{ heading: intl.formatMessage({ id: "index.contactHeading" }) }} options={{ hiddenHeading: false }} >
        <ContentSection>
          <TextSection>
            <p>
              Felix Berger <br />
              Leinestr. 1  <br />
              12049 Berlin
            </p>
            <p>www.felixberger.dev</p>
            <p>mail@felixberger.dev</p>
            <ul>
              <li><a href="https://www.linkedin.com/in/felix-berger-19551534">LinkedIn</a></li>
              <li><a href="https://www.xing.com/profile/Felix_Berger3">Xing</a></li>
              <li><a href="https://github.com/felixbrgr">Github</a></li>
              <li><a href="https://twitter.com/mimhakkuh">twitter</a></li>
            </ul>
          </TextSection>
        </ContentSection>
      </PageSection>
    </Layout>
  )
}

export default injectIntl(IndexPage)