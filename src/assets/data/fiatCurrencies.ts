import { FiatCurrencyI } from "../../types/store/currencies";

export const fiatCurrencies: FiatCurrencyI[] = [
  {
    id: 'gbp',
    code: 'GBP',
    title: 'Pounds Sterling',
    image: 'https://www.worldometers.info//img/flags/small/tn_uk-flag.gif',
    symbol:'£'
  },
  {
    id: 'eur',
    code: 'EUR',
    title: 'Euro',
    image: 'https://img.freepik.com/free-vector/illustration-european-union-flag_53876-27018.jpg?t=st=1731734993~exp=1731738593~hmac=db154226520e511844fce25af90054811e64bef03948052ab05560cb12461cda&w=1000&',
    symbol:'€'
  },
  {
    id: 'inr',
    code: 'INR',
    title: 'Indian Rupees',
    image: 'https://www.worldometers.info//img/flags/small/tn_in-flag.gif',
    symbol:'₹'
  },
  {
    id: 'usd',
    code: 'USD',
    title: 'US Dollar',
    image: 'https://www.worldometers.info//img/flags/small/tn_us-flag.gif',
    symbol:'$'
  },
]