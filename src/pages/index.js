import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"

const IndexPage = () => {

  const handleRenderPage = props => (
    <div>
      {props.allWordpressPage.edges.map(page => (
        <div key={page.node.id}>
          <h1>{page.node.title}</h1>
          <div dangerouslySetInnerHTML={{__html: page.node.content}} />
        </div>
      ))}
    </div>
  )
  return (
  <Layout>
    <StaticQuery
      query={
        graphql`
        {
          allWordpressPage {
            edges {
              node {
                id
                title
                content
              }
            }
          }
        }
      `}
      render={handleRenderPage}
    />
  </Layout>
  )
}

export default IndexPage
