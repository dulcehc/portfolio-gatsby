import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
`

const Logo = () => {
  return (
    <StaticQuery query={
      graphql `
        {
          allWordpressWpLogo {
            edges {
              node {
                url {
                  source_url
                }
              }
            }
          }
        }
      `}
      render={props =>
        <LogoImage src={props.allWordpressWpLogo.edges[0].node.url.source_url} alt="Logo" />
      }
    />
  )
}

export default Logo