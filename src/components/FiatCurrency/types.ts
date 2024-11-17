import { FiatCurrencyI } from '../../types/store/cryptoCurrencies';

export type FiatCurrencyPropsI = Pick<FiatCurrencyI, 'id' | 'code' | 'image'>;
