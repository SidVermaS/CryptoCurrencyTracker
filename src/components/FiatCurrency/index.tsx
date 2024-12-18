import React from 'react';
import { FiatCurrencyPropsI } from './types';

const FiatCurrency = (props: FiatCurrencyPropsI): React.JSX.Element => {
  return (
    <div className="flex items-center cursor-pointer space-x-1 px-2 py-1 md:px-3 md:py-2 dark:bg-primary-dark hover:bg-loiter-light dark:hover:bg-loiter-dark">
      <img className="rounded-full w-5 h-5" src={props.image} />
      <div className="text-xs md:text-sm font-normal text-gray-800 dark:text-primary-dark">
        {props.code}
      </div>
    </div>
  );
};

export default FiatCurrency;
