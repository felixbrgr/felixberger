/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Location } from '@reach/router'

import Page from "./page"
import Header from "./header"
import Main from "./main"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Location>
        {({ location }) => {
          if (location.pathname === '/en/' || location.pathname === '/de/' ) {
            return <Page>
              <Header options={{ homeLink: false }} siteTitle={data.site.siteMetadata.title} />    
              <Main>
                {children}
              </Main>
              <Footer />
            </Page>
          } else {
            return <Page>
              <Header options={{ homeLink: true }} siteTitle={data.site.siteMetadata.title} />
              <Main>
                {children}
              </Main>
              <Footer />
            </Page>
          }
        }}
      </Location>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
