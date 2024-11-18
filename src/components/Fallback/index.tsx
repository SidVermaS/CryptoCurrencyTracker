import React from 'react';
import Loader from '../Loader';
import Layout from '../Layout';

const Fallback = (): React.JSX.Element => {
  return (
    <Layout>
      <Loader />
    </Layout>
  );
};

export default Fallback;
