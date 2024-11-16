import { createAsyncThunk } from '@reduxjs/toolkit';
import { CryptoCurrencyI } from '../../types/store/currencies';
import { getCryptoCurrencies } from '../../services/cryptoCurrencyTracker';
import { RootStateI } from '../store';

export const fetchCryptoCurrencies = createAsyncThunk<CryptoCurrencyI[], void>(
  'cryptoCurrencies/fetchAll',
  async (_, thunkAPI) => {
    console.log('111 br fetchCryptoCurrencies');

    const state = thunkAPI.getState() as RootStateI;
    const response = await getCryptoCurrencies({
      vs_currency: state.currencies.selectedFiatCurrency.id,
    });
    if (response?.error) {
      throw response?.error;
    }
    return response.data! as CryptoCurrencyI[];
  },
);
