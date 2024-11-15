import React from "react";
import { AvatarI } from "./types";

const Avatar = (props: AvatarI): React.JSX.Element => {
  return <img src={props.image} className="w-12 h-12 rounded-full" />;
};

export default React.memo(Avatar);
