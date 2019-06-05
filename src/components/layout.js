import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled, {createGlobalStyle} from 'styled-components'
import Helmet from 'react-helmet'

import MainMenu from 'components/MainMenu'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

  html, body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
  }
`

const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const SEO = () => (
  <StaticQuery query={graphql`
    {
      allWordpressWpFavicon {
        edges {
          node {
            url {
              source_url
            }
          }
        }
      }
    }
  `} render={props => (
      <Helmet
        meta={[
          {
            name: "description",
            content: "Dulce - Front-End Web Developer",
          },
          {
            name: "keywords",
            content: "frontend, developer",
          },
        ]}
        link={[
          { rel: "icon", type: "image/x-icon", href: `${props.allWordpressWpFavicon.edges[0].node.url.source_url}` },
        ]}
      />
      )}
  />
)
const Layout = ({ children }) => (
  <div>
    <SEO />
    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
  </div>
)

export default Layout
