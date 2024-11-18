import React from 'react';
import { CryptoTablePropsI } from '../../types';
import CryptoHead from '../CryptoHead';
import CryptoBody from '../CryptoBody';

const CryptoTable = (props: CryptoTablePropsI): React.JSX.Element => {
  return (
    <div className="sm:rounded-2xl border border-tertiary-light overflow-hidden lg:w-1/2 dark:border-tertiary-dark">
      <table className="table-fixed lg:w-full">
        <CryptoHead columns={props.columns} />
        <CryptoBody />
      </table>
    </div>
  );
};

export default CryptoTable;
