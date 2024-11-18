import React from 'react';
import AvatarInfo from '../../../../components/AvatarInfo';
import { CryptoRowPropsI } from '../../types';
import useNumber from '../../../../hooks/useNumber';
import { useSelector } from 'react-redux';
import { RootStateI } from '../../../../store/store';
import FlucationBadge from '../../../../components/FlucationBadge';

const CryptoRow = (props: CryptoRowPropsI): React.JSX.Element => {
  const { selectedFiatCurrency } = useSelector(
    (state: RootStateI) => state.fiatCurrencies,
  );
  const { formatNumber } = useNumber();
  return (
    <tr className="hover:bg-loiter-light dark:hover:bg-loiter-dark dark:text-primary-dark ">
      <td className="py-1 md:py-3 pl-1 md:pl-3">
        <AvatarInfo {...props} />
      </td>
      <td className="text-right py-1 md:py-3 pr-1 md:pr-3 text-sm font-normal">
        {selectedFiatCurrency.symbol}
        {formatNumber(props.current_price)}
      </td>
      <td className="text-right py-1 md:py-3 pr-1 md:pr-3 text-sm font-normal">
        {selectedFiatCurrency.symbol}
        {formatNumber(props.market_cap)}
      </td>
      <td className="text-right py-1 md:py-3 pr-1 md:pr-2 text-sm font-normal mr-0">
        <div className="lg:w-20 text-right ml-auto">
          <FlucationBadge unit={props.price_change_percentage_24h} />
        </div>
      </td>
    </tr>
  );
};

export default React.memo(CryptoRow);
