import React from 'react';
import useCryptoCurrencyPage from './useCryptoCurrencyPage';

const CryptoCurrencyPage = (): React.JSX.Element => {
  const { cryptoCurrency } = useCryptoCurrencyPage();
  return <>{cryptoCurrency?.name}</>;
};
export default CryptoCurrencyPage;
