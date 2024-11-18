import React from 'react';
import { MINUTES_5 } from '../../consts/time';
import { RootStateI, useAppDispatch } from '../../store/store';
import { fetchCryptoCurrencies } from '../../store/thunks/currencies';
import { CryptoHeadColumnI } from './types';
import { useSelector } from 'react-redux';
export const cryptoTableColumns: CryptoHeadColumnI[] = [
  { className: 'text-left pl-3', title: 'Coin' },
  { className: 'text-right pr-3', title: 'Price' },
  { className: 'text-right pr-3', title: 'Market Cap' },
  { className: 'text-right pr-3', title: '24h %' },
];
const useHomePage = () => {
  const dispatch = useAppDispatch();
  const { isLoadingCryptoCurrencies, errorCryptoCurrencies } = useSelector(
    (state: RootStateI) => state.cryptoCurrencies,
  );
  // Updates the latest data after every 5 minutes
  React.useEffect(() => {
    dispatch(fetchCryptoCurrencies());
    let intervalRef: number | null = setInterval(() => {
      dispatch(fetchCryptoCurrencies());
    }, MINUTES_5);
    return () => {
      // The interval will be cleared during the destruction of the component
      clearInterval(intervalRef!);
      intervalRef = null;
    };
  }, [dispatch]);
  return {
    cryptoTableColumns,
    errorCryptoCurrencies,
    isLoadingCryptoCurrencies,
  };
};
export default useHomePage;
