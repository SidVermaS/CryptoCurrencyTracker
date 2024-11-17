
export type FiatCurrencyI = {
  id: string;
  code: string;
  title: string;
  image: string;
  symbol: string;
};

export type  FiatCurrenciesStateI = {
  fiatCurrencies: FiatCurrencyI[];
  selectedFiatCurrency: FiatCurrencyI;
};
