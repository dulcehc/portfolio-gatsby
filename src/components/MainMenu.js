import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'

import SiteInfo from 'components/SiteInfo'

const MainMenuWrapper = styled.div`
  display: flex;
  background-color: #C71585;
`

const MainMenuInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: 960px;
  height: 100%;
`

const MenuItem = styled(Link)`
  color: #FFFFFF;
  display: block;
  padding: 8px 16px;
  text-decoration: none;
`

const MainMenu = () => {
  const handleMenuRender = props =>
    <MainMenuWrapper>
      <MainMenuInner>
        <SiteInfo />
        {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item =>
          <MenuItem to={`/${item.object_slug}`} key={item.title}>
            {item.title}
          </MenuItem>
        )}
      </MainMenuInner>
    </MainMenuWrapper>

  return (
    <StaticQuery
      query={graphql`
      {
        allWordpressWpApiMenusMenusItems(filter: {
          name: {
            eq: "Main Menu"
          }
        }) {
          edges {
            node {
              name
              items {
                title
                object_slug
              }
            }
          }
        }
      }`}
      render={handleMenuRender}
    />
  );
};

export default MainMenu;