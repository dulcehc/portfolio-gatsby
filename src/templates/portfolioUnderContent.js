import React from 'react'
import Layout from '../components/layout'
import PortfolioItems from '../components/PortfolioItems'

export default ({ pageContext }) => {
  const { title, content } = pageContext
  return (
    <Layout>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{__html: content}} />
      <PortfolioItems />
    </Layout>
  )
}