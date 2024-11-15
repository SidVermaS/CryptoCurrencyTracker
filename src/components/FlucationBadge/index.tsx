import React from "react";
import {FallOutlined,RiseOutlined  } from '@ant-design/icons'
import { FlucationBadgePropsI } from "./types";
import useNumber from "../../hooks/useNumber";

const FlucationBadge = (props: FlucationBadgePropsI): React.JSX.Element => {
  const { formatNumber } = useNumber();
  const unit = React.useMemo(
    () => formatNumber(Math.abs(props.unit)),
    [props.unit]
  );
  return props.unit > -1 ? (
    <div className="flex justify-center items-center space-x-1 bg-green-200 rounded-md font-medium text-sm text-green-700 px-0.5 py-0.5">
     <RiseOutlined /><div>{unit}%</div>
    </div>
  ) : (
    <div className="flex justify-center items-center space-x-1 bg-red-200 rounded-md font-medium text-sm text-red-700 px-0.5 py-0.5">
      <FallOutlined /><div>{unit}%</div>
    </div>
  );
};

export default React.memo(FlucationBadge);
