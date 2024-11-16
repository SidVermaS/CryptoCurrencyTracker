import React from 'react'
import { useSelector } from 'react-redux';
import { RootStateI, useAppDispatch } from '../../store/store';
import { selectFiatCurrency } from '../../store/reducers/currenciesSlice';

const useDropdownFiatCurrency = () => {
  const { selectedFiatCurrency, fiatCurrencies } = useSelector(
    (state: RootStateI) => state.currencies
  );
  const dispatch = useAppDispatch()
  const handleFiatCurrencySelection = React.useCallback((id: string) => {
    dispatch(selectFiatCurrency(id))
  }, [])
  return {handleFiatCurrencySelection, selectedFiatCurrency, fiatCurrencies }
}

export default useDropdownFiatCurrency