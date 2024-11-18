import React from 'react';
import useCryptoCurrencyPage from './useCryptoCurrencyPage';
import Card from '../../components/Card';
import AvatarInfo from '../../components/AvatarInfo';
import { CardPropsI } from '../../components/Card/types';
const CryptoCurrencyPage = (): React.JSX.Element => {
  const { cryptoCurrency, formatNumber, selectedFiatCurrency } =
    useCryptoCurrencyPage();
  return (
    <div className=" min-h-screen py-4">
      {cryptoCurrency ? (
        <div className="flex justify-center">
          <div className="flex flex-col">
            <div className="mb-3">
              <AvatarInfo {...cryptoCurrency} />
            </div>
            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-5 ">
              {(
                [
                  {
                    icon: <div className="text-6xl">🏆</div>,
                    title: String(cryptoCurrency?.market_cap_rank),
                    subTitle: 'Rank',
                  },
                  {
                    icon: <div className="text-6xl">🪙</div>,
                    title: `${selectedFiatCurrency.symbol}${formatNumber(cryptoCurrency?.current_price)}`,
                    subTitle: 'Current price',
                  },
                  {
                    icon: <div className="text-6xl">🏢</div>,
                    title: `${selectedFiatCurrency.symbol}${formatNumber(cryptoCurrency?.market_cap)}`,
                    subTitle: 'Market capital',
                  },

                  {
                    icon: <div className="text-6xl">💰</div>,
                    title: `${selectedFiatCurrency.symbol}${formatNumber(cryptoCurrency?.total_volume)}`,
                    subTitle: 'Total volume',
                  },
                  {
                    icon: <div className="text-6xl">📊</div>,
                    title: `${formatNumber(cryptoCurrency?.price_change_percentage_24h)}%`,
                    subTitle: 'Change in 24h',
                  },
                  {
                    icon: <div className="text-6xl">💸</div>,
                    title: `${selectedFiatCurrency.symbol}${formatNumber(cryptoCurrency?.total_supply)}`,
                    subTitle: 'Total supply',
                  },
                  {
                    icon: <div className="text-6xl">📈</div>,
                    title: `${selectedFiatCurrency.symbol}${formatNumber(cryptoCurrency?.ath)}`,
                    subTitle: 'All time high',
                  },
                  {
                    icon: <div className="text-6xl">📉 </div>,
                    title: `${selectedFiatCurrency.symbol}${formatNumber(cryptoCurrency?.atl)}`,
                    subTitle: 'All time low',
                  },
                  {
                    icon: <div className="text-6xl">🕒</div>,
                    title: new Date(
                      cryptoCurrency?.last_updated,
                    ).toLocaleString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                      hour12: true, // 12-hour clock (AM/PM)
                    }),
                    subTitle: 'Last updated',
                  },
                ] as CardPropsI[]
              ).map((currencyData) => (
                <Card {...currencyData} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default CryptoCurrencyPage;
