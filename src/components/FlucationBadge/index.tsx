import React from "react";

import { FlucationBadgePropsI } from "./types";
import useNumber from "../../hooks/useNumber";

const FlucationBadge = (props: FlucationBadgePropsI): React.JSX.Element => {
  const { formatNumber } = useNumber();
  const unit = React.useMemo(
    () => formatNumber(Math.abs(props.unit)),
    [props.unit]
  );
  return props.unit > -1 ? (
    <div className="flex justify-center items-center  bg-green-200 rounded-md font-medium text-sm text-green-700 px-1 py-0.5">
     <RiseOutlined />  {unit}%
    </div>
  ) : (
    <div className="flex justify-center items-center  bg-red-200 rounded-md font-medium text-sm text-red-700 px-1 py-0.5">
      <FallOutlined /> {unit}%
    </div>
  );
};

export default React.memo(FlucationBadge);
