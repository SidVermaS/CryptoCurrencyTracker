import { FiatCurrencyI } from '../../types/store/fiatCurrencies';

export type FiatCurrencyPropsI = Pick<FiatCurrencyI, 'id' | 'code' | 'image'>;
