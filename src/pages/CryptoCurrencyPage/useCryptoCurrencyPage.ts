import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CryptoCurrencyI } from '../../types/store/cryptoCurrencies';
import { useSelector } from 'react-redux';
import { RootStateI } from '../../store/store';
import useNumber from '../../hooks/useNumber';

const useCryptoCurrencyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { formatNumber } = useNumber();
  const [cryptoCurrency, setCryptoCurrency] = React.useState<CryptoCurrencyI>();

  const { cryptoCurrencies } = useSelector(
    (state: RootStateI) => state.cryptoCurrencies,
  );
  const { selectedFiatCurrency } = useSelector(
    (state: RootStateI) => state.fiatCurrencies,
  );
  const updateCryptoCurrency = React.useCallback(() => {
    const cryptoCurrencyFound = cryptoCurrencies.find(
      (cryptoCurrency) => cryptoCurrency.id === id,
    );
    if (cryptoCurrencyFound) {
      setCryptoCurrency(cryptoCurrencyFound);
    } else {
      navigate('/not-found');
    }
  }, [id, navigate, setCryptoCurrency, cryptoCurrencies]);
  React.useEffect(() => {
    updateCryptoCurrency();
  }, [id, updateCryptoCurrency]);
  return { cryptoCurrency, formatNumber, selectedFiatCurrency };
};

export default useCryptoCurrencyPage;
