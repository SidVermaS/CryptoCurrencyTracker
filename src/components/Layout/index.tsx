import React from 'react';
import { LayoutPropsI } from './types';

const Layout = (props: LayoutPropsI): React.JSX.Element => {
  return (
    <div className="fixed inset-0 flex justify-center items-center min-h-full bg-primary-light dark:bg-primary-dark">
      {props.children}
    </div>
  );
};

export default Layout;
