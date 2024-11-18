import React from 'react';
import Loader from '../Loader';

const Fallback = (): React.JSX.Element => {
  return (
    <div className="fixed inset-0 flex justify-center items-center  h-full min-h-full max-h-full">
      <Loader />
    </div>
  );
};

export default Fallback;
