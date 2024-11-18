import React from 'react';
import { LayoutPropsI } from './types';

const Layout = (props: LayoutPropsI): React.JSX.Element => {
  return (
    <div className="fixed inset-0 flex justify-center items-center min-h-full ">
      {props.children}
    </div>
  );
};

export default Layout;
