import React from 'react';
import CryptoTable from './components/CryptoTable';
import useHomePage from './useHomePage';
import Loader from '../../components/Loader';

const HomePage = (): React.JSX.Element => {
  const {
    cryptoTableColumns,
    errorCryptoCurrencies:_errorCryptoCurrencies,
    isLoadingCryptoCurrencies,
  } = useHomePage();
  return (
    <div className="bg-primary-light dark:bg-primary-dark flex items-center justify-center min-h-screen sm:py-4 md:py-10 ">
      {isLoadingCryptoCurrencies ? (
        <Loader />
      ) : (
        <CryptoTable columns={cryptoTableColumns} />
      )}
    </div>
  );
};
export default HomePage;
