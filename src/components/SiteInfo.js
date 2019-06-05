import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import Logo from 'components/logo'

const SiteInfoWrapper = styled.div`
  flex-grow: 1;
  color: white;
  margin: auto 0;
  display: flex;
  padding: 10px 0;
`

const SiteTitle = styled.div`
  font-weight: bold;
`

const ContainerInfo = styled.div`
  padding-left: 10px;
`

const SiteInfo = () => {
  const data = useStaticQuery(graphql`
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
  `)
  return (
    <SiteInfoWrapper>
      <Logo />

      <ContainerInfo>
        <SiteTitle>
          {data.allWordpressSiteMetadata.edges[0].node.name}
        </SiteTitle>
        <div>
          {data.allWordpressSiteMetadata.edges[0].node.description}
        </div>
      </ContainerInfo>

    </SiteInfoWrapper>
  )
}

export default SiteInfo
