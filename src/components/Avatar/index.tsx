import React from 'react';
import { AvatarI } from './types';

const Avatar = (props: AvatarI): React.JSX.Element => {
  return (
    <img src={props.image} className="w-8 h-8 md:w-8 md:h-8 rounded-full" />
  );
};

export default React.memo(Avatar);
