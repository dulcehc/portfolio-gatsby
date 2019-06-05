import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import Logo from 'components/logo'

const SiteInfoWrapper = styled.div`
  flex-grow: 1;
  color: white;
  margin: auto 0;
  display: flex;
  padding: 10px;
`

const SiteTitle = styled.div`
  font-weight: bold;
`

const ContainerInfo = styled.div`
  padding-left: 10px;
`

const SiteInfo = () => (
  <StaticQuery query={graphql`
    {
      allWordpressSiteMetadata{
        edges {
          node {
            name
            description
          }
        }
      }
    }
  `} render={props => (
    <SiteInfoWrapper>
      <Logo />

      <ContainerInfo>
        <SiteTitle>
          {props.allWordpressSiteMetadata.edges[0].node.name}
        </SiteTitle>
        <div>
          {props.allWordpressSiteMetadata.edges[0].node.description}
        </div>
      </ContainerInfo>

    </SiteInfoWrapper>
  )} />
)

export default SiteInfo
