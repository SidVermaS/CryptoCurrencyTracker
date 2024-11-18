export type FiatCurrencyI = {
  id: string;
  code: string;
  title: string;
  image: string;
  symbol: string;
};
export type SelectFiatCurrencyActionI =  {
  payload: string;
  type: string;
}
export type FiatCurrenciesStateI = {
  fiatCurrencies: FiatCurrencyI[];
  selectedFiatCurrency: FiatCurrencyI;
};
