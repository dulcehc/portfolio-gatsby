import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby'

const MainMenu = () => {
  const handleMenuRender = props =>
    <div>
      {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item =>
        <Link to={item.object_slug} key={item.title}>
          {item.title}
        </Link>
      )}
    </div>


  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpApiMenusMenusItems {
            edges {
              node {
                items {
                  title
                  object_slug
                }
              }
            }
          }
        }
      `}
      render={handleMenuRender}
    />
  );
};

export default MainMenu;