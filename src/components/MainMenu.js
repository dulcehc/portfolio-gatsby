import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'

const MainMenuWrapper = styled.div`
  display: flex;
  background-color: #00BFFF;
`

const MenuItem = styled(Link)`
  color: #BA55D3;
  display: block;
  padding: 8px 16px;
`

const MainMenu = () => {
  const handleMenuRender = props =>
    <MainMenuWrapper>
      {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item =>
        <MenuItem to={item.object_slug} key={item.title}>
          {item.title}
        </MenuItem>
      )}
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