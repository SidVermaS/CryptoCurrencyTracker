import React from 'react';
import { CardPropsI } from './types';

const Card = (props: CardPropsI): React.JSX.Element => {
  // w-full min-w-full max-w-full sm:w-72 sm:h-44 md:w-36 md:h-44
  return (
    <div className="w-72 h-52 sm:w-72 sm:h-40 md:w-48 md:h-52  lg:w-42 lg:h-42 rounded-xl shadow dark:shadow-tertiary-dark flex justify-center items-center overflow-hidden">
      <div className="text-center">
        {props.icon}
        <div className="mt-6 text-sm dark:text-primary-dark" >{props.title}</div>
        <div className="font-normal text-sm text-gray-400">
          {props.subTitle}
        </div>
      </div>
    </div>
  );
};

export default Card;
