import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CryptoCurrencyI } from '../../types/store/cryptoCurrencies'
import { useSelector } from 'react-redux'
import { RootStateI } from '../../store/store'

const useCryptoCurrencyPage = () => {
  const { id } = useParams()
  const navigate = useNavigate();
  const [cryptoCurrency, setCryptoCurrency] = React.useState<CryptoCurrencyI>()

  const { cryptoCurrencies } = useSelector(
    (state: RootStateI) => state.cryptoCurrencies,
  );
  const updateCryptoCurrency = React.useCallback(() => {
    const cryptoCurrencyFound = cryptoCurrencies.find((cryptoCurrency) => cryptoCurrency.id === id)
    if (cryptoCurrencyFound) {
      setCryptoCurrency(cryptoCurrencyFound)
    } else {
      navigate('404')
    }
  }, [id, navigate,setCryptoCurrency,cryptoCurrencies])
  React.useEffect(() => {
    updateCryptoCurrency()
  }, [id, updateCryptoCurrency])
  return { cryptoCurrency }
}

export default useCryptoCurrencyPage