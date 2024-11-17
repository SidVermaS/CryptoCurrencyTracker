import React from 'react';
import { useSelector } from 'react-redux';
import { RootStateI } from '../../../../store/store';
import CryptoRow from '../CryptoRow';

const CryptoBody = (): React.JSX.Element => {
  const { cryptoCurrencies } = useSelector(
    (state: RootStateI) => state.cryptoCurrencies,
  );
  return (
    <tbody>
      {cryptoCurrencies.map((cryptoCurrency) => (
        <CryptoRow key={cryptoCurrency.id} {...cryptoCurrency} />
      ))}
    </tbody>
  );
};

export default CryptoBody;
