import React from 'react';
import { AvatarInfoI } from './types';
import Avatar from '../Avatar';

const AvatarInfo = (props: AvatarInfoI): React.JSX.Element => {
  return (
    <div className="flex items-center space-x-2">
      <Avatar image={props.image} />
      <div className="md:flex md:items-center md:space-x-2 text-sm ">
        <p className="font-bold">{props.name}</p>
        <p className="hidden md:block font-normal">•</p>
        <p className="text-gray-500 font-normal">{props.symbol}</p>
      </div>
    </div>
  );
};

export default React.memo(AvatarInfo);
