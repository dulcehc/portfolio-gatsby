import React from 'react';
import Layout from '../components/layout'

const Page = ({ pageContext }) => {
  return (
    <Layout>
      <h1>
        {pageContext.title}
      </h1>
    </Layout>
  );
};

export default Page;