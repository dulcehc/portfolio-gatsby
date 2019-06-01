import React from 'react';
import Layout from '../components/layout'
import PortfolioItems from '../components/PortfolioItems';

const Page = ({ pageContext }) => {
  const { title, content } = pageContext
  console.log(pageContext);
  return (
    <Layout>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{__html: content}} />
      <PortfolioItems />
    </Layout>
  );
};

export default Page;