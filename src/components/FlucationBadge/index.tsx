import React from 'react';
import { AiOutlineFall } from 'react-icons/ai';
import { AiOutlineRise } from 'react-icons/ai';
import { FlucationBadgePropsI } from './types';
import useNumber from '../../hooks/useNumber';

const FlucationBadge = (props: FlucationBadgePropsI): React.JSX.Element => {
  const { formatNumber } = useNumber();
  const unit = React.useMemo(
    () => formatNumber(Math.abs(props.unit)),
    [formatNumber, props.unit],
  );
  return props.unit > -1 ? (
    <div className="flex justify-center items-center space-x-1 bg-green-200 rounded-md font-medium text-sm text-green-700 px-0 py-0 md:px-1 md:py-0.5">
      <AiOutlineRise />
      <div>{unit}%</div>
    </div>
  ) : (
    <div className="flex justify-center items-center space-x-1 bg-red-200 rounded-md font-medium text-sm text-red-700 px-0 py-0 md:px-1 md:py-0.5">
      <AiOutlineFall />
      <div>{unit}%</div>
    </div>
  );
};

export default React.memo(FlucationBadge);
