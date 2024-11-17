import React from 'react';
import { AvatarInfoPropsI } from './types';
import Avatar from '../Avatar';

const AvatarInfo = (props: AvatarInfoPropsI): React.JSX.Element => {
  return (
    <div className="flex items-center space-x-2 ">
      <Avatar image={props.image} />
      <div
        className={`${props?.isInline ? 'md:block' : 'md:flex md:space-x-2 md:items-center '}  text-sm `}>
        <p className="font-bold">{props.name}</p>
        <p
          className={`hidden ${props?.isInline ? 'md:hidden' : 'md:block'} font-normal`}>
          •
        </p>
        <p className="text-gray-500 font-normal">{props.symbol}</p>
      </div>
    </div>
  );
};

export default React.memo(AvatarInfo);
