import React from 'react';

const Page = ({ pageContext }) => {
  return (
    <div>
      <h1>
        {pageContext.title}
      </h1>
    </div>
  );
};

export default Page;