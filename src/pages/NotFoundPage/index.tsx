import React from 'react';
import Layout from '../../components/Layout';

const NotFoundPage = (): React.JSX.Element => {
  return (
    <Layout>
      <div className="text-5xl dark:text-primary-dark">404 Not found 😔</div>
    </Layout>
  );
};
export default NotFoundPage;
