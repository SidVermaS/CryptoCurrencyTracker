import { FiatCurrencyI } from "../../types/store/currencies";

export const fiatCurrencies: FiatCurrencyI[] = [
  {
    id: 'eur',
    code: 'EUR',
    title: 'Euro',
    image: 'url',
    symbol:'€'
  },
  {
    id: 'chf',
    code: 'CHF',
    title: 'Swiss Franc',
    image: 'url',
    symbol:'CHF'
  },
  {
    id: 'gbp',
    code: 'GBP',
    title: 'Pounds Sterling',
    image: 'url',
    symbol:'£'
  },
  {
    id: 'inr',
    code: 'INR',
    title: 'Indian Rupees',
    image: 'url',
    symbol:'₹'
  },
  {
    id: 'usd',
    code: 'USD',
    title: 'US Dollar',
    image: 'url',
    symbol:'$'
  },
]