import React from 'react';
import FiatCurrency from '../FiatCurrency';
import useDropdownFiatCurrency from './useDropdownFiatCurrency';

const DropdownFiatCurrency = (): React.JSX.Element => {
  const {
    dropdownRef,
    handleFiatCurrencySelection,
    isDropdownOpen,
    selectedFiatCurrency,
    fiatCurrencies,
    toggleDropdown,
  } = useDropdownFiatCurrency();
  return (
    <>
      <button
        type="button"
        className="flex items-center space-x-1.5 hover:bg-gray-300 px-2 py-1 md:px-3 md:py-2 rounded-md"
        data-dropdown-toggle="fiat-currency-dropdown-menu"
        onClick={toggleDropdown}
      >
        <img
          className="rounded-full w-5 h-5"
          src={selectedFiatCurrency.image}
        />
        <div className=" md:block text-xs md:text-sm font-normal text-gray-800">
          {selectedFiatCurrency.code}
        </div>
      </button>
      <div
        ref={dropdownRef}
        className={`${isDropdownOpen ? '' : 'hidden'} absolute z-50 bg-white rounded-md py-2`}
      >
        <ul id="fiat-currency-dropdown-menu">
          {fiatCurrencies.map((fiatCurrency) => (
            <li
              onClick={handleFiatCurrencySelection.bind(this, fiatCurrency.id)}
            >
              <FiatCurrency {...fiatCurrency} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DropdownFiatCurrency;
